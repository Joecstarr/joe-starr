import pdgl_wasm from "~/components/react/pdgl/pdgl_wasm.js";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import React from "react";
import { DNA } from "react-loader-spinner";
import axios from "axios";
import Ajv from "ajv";
import { parse, stringify } from "smol-toml";
import "ace-builds/src-noconflict/mode-toml";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

class Pdgl_js {
    constructor(lang, stack, count) {
        this.__lang = lang;
        this.__stack = stack;
        this.__count = count;
        this.__line = "";
        this.__error = "";
    }

    lines = [];
    elines = [];

    __stdin = () => {};

    __stdout = (asciiCode) => {
        if ((asciiCode == 13) | (asciiCode == 10)) {
            this.lines.push(this.__line);
            this.__line = "";
        } else {
            this.__line += String.fromCharCode(asciiCode);
        }
    };

    __stderr = (asciiCode) => {
        if ((asciiCode == 13) | (asciiCode == 10)) {
            this.elines.push(this.__line);
            this.__error = "";
        } else {
            this.__error += String.fromCharCode(asciiCode);
        }
    };

    run = async () => {
        for (var i = 0; i < this.__count; i++) {
            let pdglwasm = await pdgl_wasm({ stdin: this.__stdin, stdout: this.__stdout });
            let pdgl = new pdglwasm.PDGL(this.__lang, this.__stack);
            try {
                pdgl.run();
            } finally {
                pdgl.delete();
            }
        }
    };
}

export default function ComputePDGL({ graphData }) {
    const [output, setOutput] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [url, setUrl] = React.useState(
        "https://raw.githubusercontent.com/Joecstarr/pdgl/refs/heads/main/languages/words/def.toml",
    );
    const [isVisibleOutput, setIsVisibleOutput] = React.useState(false);
    const [isVisibleLoading, setIsVisibleLoading] = React.useState(false);
    const [rows, setRows] = React.useState(0);
    const [stackSize, setStackSize] = React.useState(10);
    const [wordCount, setWordCount] = React.useState(10);
    const [copySuccess, setCopySuccess] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [validate, setValidate] = React.useState(() => {});
    const [ajv, setAjv] = React.useState(
        new Ajv({
            loadSchema: async (uri) => {
                console.log(uri);
                const res = await axios.get(uri);
                return res.data;
            },
        }),
    );
    const [code, setCode] = React.useState(`[[production]]
name = "entry"
type = "pure"
replacements = ["(%{paren set})"]
terminals = [""]

[[production]]
name = "paren set"
type = "pure"
replacements = ["(%{paren set})", "%{paren set}%{paren set}", ""]
terminals = [""]`);

    useEffect(() => {
        (async () => {
            let obj = { $ref: "https://pdgl.joe-starr.com/manual/media/pdgl-schema.json" };
            const validate = await ajv.compileAsync(obj);
            checkTOMLSchema(code, validate);
            setValidate((data) => validate);
        })();
        return () => {};
    }, []);

    var onChange_stackSize = (newValue) => {
        setStackSize(newValue.target.value);
    };
    var onChange_count = (newValue) => {
        setWordCount(newValue.target.value);
    };
    var onChange_url = (newValue) => {
        setUrl(newValue.target.value);
    };

    var onChange_output = (newValue) => {};

    var checkTOMLSchema = (newValue, validator) => {
        try {
            const parsed = parse(newValue);
            const valid = validator(parsed);
            setIsValid(valid ? "satisfies the PDGL schema!" : "does not satisfy the PDGL schema!");
        } catch (error) {
            setIsValid("has a syntax error!");
        }
    };

    var onChange = (newValue) => {
        setCode(newValue);
        checkTOMLSchema(newValue, validate);
    };

    var handleClick = () => {
        var pdgl = new Pdgl_js(code, stackSize, wordCount);
        setIsVisibleLoading(true);
        setIsVisibleOutput(false);
        pdgl.run().then(() => {
            let outputArea = document.querySelector("#ouput");
            setIsVisibleLoading(false);
            setIsVisibleOutput(true);
            setOutput(pdgl.lines.join("\r\n"));
            setRows(pdgl.lines.length);
        });
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(output);
            setCopySuccess("Copied!");
            setTimeout(() => setCopySuccess(""), 2000);
        } catch (err) {
            setCopySuccess("Failed to copy!");
        }
    };

    let uuidv4 = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
            (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
        );
    };

    const downloadFile = () => {
        const blob = new Blob([output]);
        const element = document.createElement("a");
        element.download = uuidv4() + ".txt";
        element.href = window.URL.createObjectURL(blob);
        element.click();
        element.remove();
    };

    const style = {
        height: "60vh",
        width: "100%",
        backgroundColor: "#282a36",
        borderColor: "color-mix(in oklab, var(--color-foreground) 10%, transparent)",
        borderRadius: "var(--radius-xl)",
        borderStyle: "var(--tw-border-style)",
        borderWidth: "8px",
        padding: "1rem",
    };
    const fetchTextFile = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Extract the response body as plain text
            const textData = await response.text();
            setCode(textData);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <h3>Language Specification</h3>
            <p>The TOML {isValid}</p>
            <DNA
                visible={isLoading}
                height="30vh"
                width="100%"
                ariaLabel="dna-loading"
                dnaColorOne="var(--theme-accent)"
                dnaColorTwo="var(--theme-magenta)"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            <div className={isLoading ? "hidden" : ""}>
                <AceEditor
                    mode="toml"
                    onChange={onChange}
                    value={code}
                    theme="dracula"
                    fontSize={14}
                    editorProps={{ $blockScrolling: true }}
                    style={style}
                />
            </div>
            <div className="mt-6 grid items-end w-full gap-6 md:grid-cols-2 ">
                <div className="relative">
                    <input
                        type="text"
                        id="url"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        onChange={onChange_url}
                        value={url}
                    />
                    <label
                        htmlFor="url"
                        className="absolute text-sm text-body duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        URL to Load:
                    </label>
                </div>
                <button onClick={fetchTextFile} style={{}}>
                    Load
                </button>
            </div>

            <hr />
            <h3>PDGL Configuration</h3>
            <div className="grid items-end w-full gap-6 md:grid-cols-2 ">
                <div className="relative">
                    <input
                        type="number"
                        id="stack_size"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        onChange={onChange_stackSize}
                        min="1"
                        step="1"
                        value={stackSize}
                    />
                    <label
                        htmlFor="stack_size"
                        className="absolute text-sm text-body duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Stack Size:
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="number"
                        id="count"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        onChange={onChange_count}
                        min="1"
                        step="1"
                        value={wordCount}
                    />
                    <label
                        htmlFor="count"
                        className="absolute text-sm text-body duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Number of Words:
                    </label>
                </div>
            </div>
            <hr />
            <h3>PDGL Results</h3>
            <button onClick={handleClick} style={{ width: "100%", marginBottom: "2rem" }}>
                Run
            </button>
            <div>
                <DNA
                    visible={isVisibleLoading}
                    height="30vh"
                    width="100%"
                    ariaLabel="dna-loading"
                    dnaColorOne="var(--theme-accent)"
                    dnaColorTwo="var(--theme-magenta)"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
                <textarea
                    id="output"
                    style={{
                        width: "100%",
                        whiteSpace: "pre",
                        overflowWrap: "normal",
                        overflowX: "scroll",
                    }}
                    onChange={onChange_output}
                    value={output}
                    rows={rows}
                    className={isVisibleOutput ? "" : "hidden"}
                />
                <div className="grid items-end w-full gap-6 md:grid-cols-2 ">
                    <button onClick={copyToClipboard} className={isVisibleOutput ? "" : "hidden"}>
                        {copySuccess ? copySuccess : "Copy Text"}
                    </button>
                    <button onClick={downloadFile} className={isVisibleOutput ? "" : "hidden"}>
                        Download Words
                    </button>
                </div>
            </div>
        </div>
    );
}
