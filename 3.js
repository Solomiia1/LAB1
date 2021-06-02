//3 функція, яка посортує масив вставкою
function insertionSort(arr) 
{   let length =arr.length //змінна для зберігання довжини масиву
    let temp // тимчасова змінна  для зберігання  елемента масиву
    let  item //індекс попереднього елемента
    for (let i = 1; i < length; i++)
    {
        temp = arr[i] // поточний елемент масиву
        item = i-1; // індекс попереднього елемента
        while(item >= 0 && arr[item] > temp) // поки індекс не рівний нулю і поточний елемент більший попереднього
        {
            arr[item + 1] = arr[item] // переставлю елементи
            arr[item] = temp
            item--
        }
    }
}

let array =[1,2,3,4,7,6,1,2,0,9,3]
insertionSort(array)
console.log(array)




