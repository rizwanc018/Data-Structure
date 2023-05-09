const upperCase = (str)=> {
    let tmp = str[0]
    return tmp.toUpperCase() + str.slice(1)
 }

 console.log(upperCase('egg'))