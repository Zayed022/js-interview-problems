let arr=[10,20,15,30,40,50,60]

function filterNumber(arr){
    return arr.filter(num=>(
        num%2===0 
    ))
}

console.log(filterNumber(arr))
console.log(arr)