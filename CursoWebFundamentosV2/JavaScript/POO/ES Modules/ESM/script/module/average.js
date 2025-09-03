import some from "./some.js"

function average(...args){
    const total = some(...args)
    return total / args.length
}

const IP = "000.000.000.000"

export {average, IP}