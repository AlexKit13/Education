let arr = [3, 4, 12, 1, -10, 5];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Min is: " + min);