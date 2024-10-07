function create(){
    let count=0;
    return function(){
        return ++count
    }
}
let counter = create();

console.log(counter())
console.log(counter())
console.log(counter())
