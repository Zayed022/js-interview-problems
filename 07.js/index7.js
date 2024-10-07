let isLeapYear = (year)=>{
    if((year%4===0)&& (year%100!==0))return "Leap Year"
    else return "Not a leap year"
}

console.log(isLeapYear(2000))