function create(){
    let count=0;
    function increment(){
        count++;
        console.log("Count:",count)
    }
    return {
        increment:function(){
            increment();
        },
        getCount:function(){
            return count;
        }
    }
}
const counter = create()
console.log(counter)