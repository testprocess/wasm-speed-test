import React, { useEffect } from "react";

function RunWasm() {

    function execute() {
        const importObject = {
            env: {
                __memory_base:0
            }
        };
        
        WebAssembly.instantiateStreaming(fetch("module.wasm"), importObject).then((result: any) => {
            const value = result.instance.exports.main();
            console.log(value.toString());
        })
    }

    useEffect(() => {
        execute()
    }, [])

    return (
        <div></div>
    )
}

export { RunWasm }