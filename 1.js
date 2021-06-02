//1  Функція для генерування випадкового шістнадцяткового числа
function getRandom16() {
    let a= Math.round(Math.random() * 50);
    //console.log(a)
    return a.toString(16)

 }

 console.log(getRandom16())
 console.log(getRandom16())
 console.log(getRandom16())
