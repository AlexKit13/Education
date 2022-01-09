function yourFuncName(number){
for (let i = 1; i <= number; i++){
    if (i === 3){
        console.log('three')
    }else if(i === 5){
        console.log('five')
    }else {
        console.log(i)
    }
}
}
yourFuncName(6);
///////////////////////////////////////////////////////////////////
for (let i = 0; i <= 15; i++){
    for (let j = 0; j < 20; j++) {
        if (i === 15 && j === 15) {
            break
        }
        console.log(i, j);
    }
}

/////////////////////////////////////////////////////////////////////
function CharObject(str){
    const obj = {};
    str = str.toLowerCase();
    for(let char of str ){
        obj[char] = obj[char] + 1 || 1
    }
    return obj;
}
function anagram(Str1, Str2){
    const objA = CharObject(Str1);
    const objB = CharObject(Str2);
    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }
    for (let char in objA) {
        if (objA[char] !== objB[char]) {
            return false;
        }
    }
    return true;
}
console.log(anagram('нора', 'Рано'))