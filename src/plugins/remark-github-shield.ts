import type { Root, RootContent } from "mdast";
import type { Plugin } from "unified";
import type { Directives } from "mdast-util-directive";
import type { Node, Paragraph as P } from "mdast";
import { h as _h, type Properties } from "hastscript";

/** Checks if a node is a directive. */
function isNodeDirective(node: Node): node is Directives {
    return (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
    );
}

/** From Astro Starlight: Function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el: string, attrs: Properties = {}, children: any[] = []): P {
    const { properties, tagName } = _h(el, attrs);
    return {
        children: children.filter((child) => !!child),
        data: { hName: tagName, hProperties: properties },
        type: "paragraph",
    };
}

const DIRECTIVE_NAME = "ghshield";
const USER_AGENT = "nodejs";
// 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0',

export const remarkGithubShield: Plugin<[], Root> = () => async (tree) => {
    tree.children = await Promise.all(
        tree.children.map(async (node): Promise<RootContent> => {
            if (!isNodeDirective(node)) return node;

            // We only want a leaf directive named DIRECTIVE_NAME
            if (node.type !== "leafDirective" || node.name !== DIRECTIVE_NAME) return node;

            let ref = node.attributes?.ref ?? null;
            if (!ref) {
                return node;
            }
            if (ref[0] == "<") {
                ref = ref.substring(1, ref.length - 1);
            }

            let img = node.attributes?.img ?? null;
            if (!img) {
                return node;
            }

            if (img[0] == "<") {
                img = img.substring(1, img.length - 1);
            }

            let alt = node.attributes?.alt ?? "";

            return h("div", { class: "github-shield" }, [
                h("a", { class: "shield", href: ref }, [
                    h("img", {
                        src: img,
                        alt: alt,
                    }),
                ]),
            ]);
        }),
    );
};
