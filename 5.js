
//5 Написати функцію, яка поверне кількість днів, яка пройшла від початку року.
function dateDiff() {
    let currentDay= new Date()
    let currentYear=currentDay.getFullYear()
    let newYear = new Date(currentYear,0,1)
    let diff = Date.parse( currentDay ) - Date.parse( newYear )
    console.log(Math.floor( diff /  86400000 ))
    return isNaN( diff ) ? NaN :  
    Math.floor( diff /  86400000 )
}

dateDiff()