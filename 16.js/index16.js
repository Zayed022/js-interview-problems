function largest(arr){
    return arr.reduce((max,current)=>
        current > max ? current : max)
}


let arr=[10,20,30,40,50]
let large=largest(arr)
console.log(large)