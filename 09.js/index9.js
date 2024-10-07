let car={
    make:"Zayed",
    model:"Honda",
    year:2022,

}
console.log(car)

car.startEngine = function(){
    console.log("Engine started")
}

(car.startEngine)