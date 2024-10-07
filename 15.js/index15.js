function doubleArray(arr){
    return arr.map((num)=>{
        return num*2
    })
}

let arr=[10,20,3,0,40,80,15,23]
console.log(doubleArray(arr))