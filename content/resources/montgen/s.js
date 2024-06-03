import Module from "./mont_gen_wasm.mjs";
export function sayHi() {
    Module().then(function (mm) {
        var tv1 = [[
            "[0 1 1]",
            "[0 2 2]",
            "[0 3 3]",
        ],
            [
            "[1 1 1]",
            "[1 2 2]"
        ],
            [
            "[2 1 1]",
            "[2 2 2]",
            "[2 3 3]",
            "[2 4 5]",
        ]
        ];
        const itemVector = new mm.tv_lists();

        tv1.forEach(li => {
            const listvector = new mm.tv_list();
            li.forEach(item => {
                listvector.push_back(item);
            })
            itemVector.push_back(listvector);
        });

        console.log("encode_tv result: " + mm.encode_tv(itemVector));
        console.log("print_stuff result: " + mm.print_stuff());
        console.log("generate result: " + mm.generate());
    });
}
