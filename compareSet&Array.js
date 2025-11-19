//brute force
const removeDup = (array) =>{
    const newArray = [];
    array.forEach(element => {
        if(!newArray.includes(element)){
            newArray.push(element)
        }
    })

    return(newArray)
}

const numbers = [23, 45, 34, 23, 67]

console.log(removeDup(numbers))  //output: [ 23, 45, 34, 67 ]

// set data structure
const removeDup1 = (array) =>{
    const set = new Set(array);
    const newArray = Array.from(set)

    return newArray;
}

console.log(removeDup1([...numbers, 10, 23, 50]))  //Output:  [ 23, 45, 34, 67, 10, 50 ]
