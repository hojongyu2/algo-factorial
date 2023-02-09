function recursion (num) {
    if (num === 1){
        return 1
    }else {
        console.log(num)
        return num * recursion(num-1)
    }
}

console.log(recursion(5))