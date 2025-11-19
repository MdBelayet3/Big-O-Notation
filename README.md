### 🔹 What is **Big O Notation**?

**Big O Notation** is a mathematical concept used in computer science to describe **how efficient an algorithm is** — specifically, how its **running time** or **space (memory) usage** grows as the size of the input increases.

In simple words, **it tells us how fast or slow an algorithm is when data gets bigger.**

---

### 🔹 Why is it Important?

Because in real-world applications, input data can be **huge**, and we want our programs to remain **fast and efficient**.

Big O helps us compare different algorithms **without actually running them** — we can predict performance.

---

### 🔹 Example:

Let’s say we have two algorithms for searching in a list:

1. **Linear Search** → checks each element one by one
    
    ⟶ **Time Complexity:** `O(n)`
    
    (If you have 1,000 items, it might take up to 1,000 steps.)
    
2. **Binary Search** → splits the list in half each time (only works on sorted lists)
    
    ⟶ **Time Complexity:** `O(log n)`
    
    (If you have 1,000 items, it takes about **10 steps**!)
    

So, even though both work, **binary search is much faster for large data** — and Big O notation helps us express and compare that clearly.

---

### 🔹 Common Big O Complexities (from best to worst):

| Big O Notation | Name | Example |
| --- | --- | --- |
| **O(1)** | Constant time | Accessing array element |
| **O(log n)** | Logarithmic time | Binary search |
| **O(n)** | Linear time | Linear search, simple loop |
| **O(n log n)** | Log-linear time | Merge sort, Quick sort |
| **O(n²)** | Quadratic time | Nested loops, Bubble sort |
| **O(2ⁿ)** | Exponential time | Recursive Fibonacci |
| **O(n!)** | Factorial time | Permutation generation |

---

### 🔹 Summary:

Big O helps developers:

- Understand how an algorithm **scales**.
- **Compare** performance between different approaches.
- **Optimize** code before it becomes a problem with large data.

![big o notation.jpg](attachment:d7c1c0f3-75c5-4e02-aa6c-9d2f3bec5050:big_o_notation.jpg)

# 🧠 JavaScript Array Operations with Big O Notation

Big O Notation describes how the **execution time** or **space usage** of an operation grows as the array size increases.

---

## ⚡ Overview Table

| Operation | Description | Time Complexity | Space Complexity | Example |
| --- | --- | --- | --- | --- |
| **Access** | Get element by index | **O(1)** | O(1) | `arr[3]` |
| **Search** | Find element by value | **O(n)** | O(1) | `arr.includes(7)` |
| **push()** | Add element at **end** | **O(1)** | O(1) | `arr.push(5)` |
| **pop()** | Remove element from **end** | **O(1)** | O(1) | `arr.pop()` |
| **unshift()** | Add element at **beginning** | **O(n)** | O(1) | `arr.unshift(5)` |
| **shift()** | Remove element from **beginning** | **O(n)** | O(1) | `arr.shift()` |
| **splice()** | Add/remove from **middle** | **O(n)** | O(1) | `arr.splice(2, 1)` |
| **concat()** | Merge two arrays | **O(n + m)** | O(n + m) | `arr.concat(arr2)` |
| **slice()** | Copy a portion | **O(k)** | O(k) | `arr.slice(2, 5)` |
| **map() / filter()** | Creates new array | **O(n)** | O(n) | `arr.map(fn)` |
| **reduce()** | Reduces to one value | **O(n)** | O(1) | `arr.reduce(fn, 0)` |
| **sort()** | Sort elements (TimSort) | **O(n log n)** | O(log n) | `arr.sort()` |
| **reverse()** | Reverse order | **O(n)** | O(1) | `arr.reverse()` |
| **includes() / find()** | Search for match | **O(n)** | O(1) | `arr.find(x => x > 3)` |
| **every() / some()** | Test condition | **O(n)** | O(1) | `arr.some(fn)` |
| **flat()** | Flatten nested array | **O(n)** | O(n)** | `arr.flat()` |
| **join()** | Convert to string | **O(n)** | O(n)** | `arr.join(',')` |
| **spread (...)** | Copy elements | **O(n)** | O(n)** | `[...arr]/` |

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
