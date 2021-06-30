const PART_TIME = 1
const FULL_TIME =2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS =8
const WAGE_PER_HOUR =20
const MAX_TOTAL_WORKING_DAYS = 20
const MAX_TOTAL_HOURS = 160

let maxTotalWorkingDays = 0
let maxTotalHours = 0

let arrayofWage = new Array()
let mapOfWage = new Map()

function getWorkingHours(WORK_HOURS){
    switch(WORK_HOURS){
            case PART_TIME:
                return PART_TIME_HOURS
            case FULL_TIME:
                return FULL_TIME_HOURS
                default:
                    return 0
     }
}
function calcDailyWage(empHrs){
    return WAGE_PER_HOUR * empHrs
}

while(maxTotalWorkingDays < MAX_TOTAL_WORKING_DAYS && maxTotalHours < MAX_TOTAL_HOURS){
    maxTotalWorkingDays++
    let WORK_HOURS = Math.floor(Math.random() *10) % 3
    let empHrs = getWorkingHours(WORK_HOURS)
    maxTotalHours += empHrs
    arrayofWage.push(calcDailyWage(empHrs))
    mapOfWage.set(maxTotalWorkingDays,calcDailyWage(empHrs))
}

let TOTAL_WAGE = calcDailyWage(maxTotalHours) // let TOTAL_WAGE = maxTotalHours * WAGE_PER_HOUR
console.log("Total Days "+ maxTotalWorkingDays +" Total Hours " + maxTotalHours+ " Employee Wage "+ TOTAL_WAGE +".... " +arrayofWage)

console.log(mapOfWage)
console.log(" MAP DS for Total " + Array.from(mapOfWage.values()).reduce((accumulator,currentValue) => {
    return accumulator + currentValue
},0))


//// 7(a1) using Array For-Each
totalWageOnDailyBasis = 0
function sum(dailyWages){
    totalWageOnDailyBasis += dailyWages 
}
arrayofWage.forEach(sum)
console.log("Array using FOR_EACH daily_basis_Total_Wage = " + totalWageOnDailyBasis)

//// 7(a2). using reduce
let sum1 = arrayofWage.reduce((accumulator,currentValue) =>{
    return accumulator + currentValue
},0)
console.log("Array using REDUCE = "+ sum1)

//// 7(b) using array map show day and wage
dailyCount = 0;
let arrayMapOfWage = arrayofWage.map((dailyWages) =>{
    dailyCount++;
    return "day: "+dailyCount+"..." +"daily wage: "+ dailyWages
})
console.log("DAILY WAGE WITH DAY")
console.log(arrayMapOfWage)

////7(c) show days when full time wage is 160
console.log("DAY FOR DAILY WAGE IS 160")
let filterOfWage = arrayMapOfWage.filter((dailyWages) => {
    return dailyWages.includes('160')
})
console.log(filterOfWage)

////7(d) find when full time wage was earned
function find(dailywage){
    return dailywage.includes("160")

}
console.log("when full time wage is earned")
console.log(arrayMapOfWage.find(find))

//// 7(e) every element holding truly full time wage
console.log("truly check full time wage")
console.log(filterOfWage.every((dailyWage) => {
    return dailyWage.includes("160")
}))

////7(f) check if there is any part time wage 
function partTime(parttimeWage){
    return parttimeWage.includes("80")
}
console.log("check for part time wage")
console.log(arrayMapOfWage.some(partTime))

///7(g) number of days employed worked
console.log(arrayofWage.reduce((accumulator, currentValue) => {
    if(currentValue > 0)
    return accumulator +1
    return accumulator
},0))

