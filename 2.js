//2. Написати функцію, яка вставить стрічку у відповідну позицію іншої стрічки
function ChangeString(str1,str2,num=0){
    let beginStr1 = str1.substr(0,num)
    let endStr1 =str1.substr(num)
    let resStr = beginStr1+str2+endStr1
    return resStr
  }

  let str1 = "What is your name , how are you?"
  let str2 ="hello world"

  let res = ChangeString(str1,str2,5)
  console.log(res)
  res = ChangeString(str2,str1,3)
  console.log(res)