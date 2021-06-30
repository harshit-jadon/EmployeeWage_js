const PART_TIME = 1
const FULL_TIME =2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS =8
const WAGE_PER_HOUR =20
const MAX_TOTAL_WORKING_DAYS = 20
const MAX_TOTAL_HOURS = 160

let maxTotalWorkingDays = 0
let maxTotalHours = 0

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
   
}

let TOTAL_WAGE = calcDailyWage(maxTotalHours) // let TOTAL_WAGE = maxTotalHours * WAGE_PER_HOUR
console.log("Total Days "+ maxTotalWorkingDays +" Total Hours " + maxTotalHours+ " Employee Wage "+ TOTAL_WAGE +".... " +arrayofWage)

