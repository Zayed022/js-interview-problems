function removeElement(arr,target){
    return arr.filter(item=>item!==target)
}
let arr=[10,20,10,20,10,30];
let target=10
let result=removeElement(arr,target);
console.log(result)