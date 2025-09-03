export default function some(...args){
    if (args.length == 0){
        throw new Error("the function needs minimum one paramether")
    }

    if (args.some(n => typeof n != "number" || Number.isNaN(n))){
        throw new Error("Invalid paramether: all paramether must be numbers")
    }

    return args.reduce((total, actual) => total + actual, 0)
}

function internalFn() {
    console.log("internal function")
}