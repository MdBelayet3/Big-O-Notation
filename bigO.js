const firstArray = [];
const secondArray = [];

for(let i = 0; i < 600000; i++){
    if(i < 300000){
        firstArray.push(i);
    }
    secondArray.push(i);
}

console.log("first array", firstArray.length)
console.log("second array", secondArray.length)

// console.time("map1");
// const firstUserList = firstArray.map((number) => ({userId: number }))
// console.timeEnd("map1")

// console.time("map2");
// const secondUserList = secondArray.map((number) => ({userId: number }))
// console.timeEnd("map2")

const firstUserList = firstArray.map((number) => ({userId: number }))

const secondUserList = secondArray.map((number) => ({userId: number }))

console.time("find");
// const find = firstUserList.find(user => user.userId === 200000);
const user = secondUserList[5]
console.timeEnd("find");