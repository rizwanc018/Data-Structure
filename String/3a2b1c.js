function convert(str){
    res = ''
    count = 1
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]){
            count++
        }else{
            res = res+count+str[i]
            count = 1
        }
    }
    console.log(res)
}

convert('AAABBC')