const f = (n) => {
    if(n <=1){
        return 1
    }
    f(n-1)
    console.log(n)
    f(n-1)
}

f(5)