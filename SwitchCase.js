let day = 'Holiday'

switch(day){
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
        console.log("Alarm is on 6 AM")
        break
    case 'Thursday':
    case 'Friday':
        console.log("Alarm is on 7 AM")
        break
    case 'Saturday':
        console.log("Alarm is on 8 AM")
        break
    default:
        console.log("Today is sunday ... Sleep well")
}

console.log("Done....")