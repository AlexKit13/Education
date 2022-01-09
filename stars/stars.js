function getTriangle(arraySize){
    for(let i = 0; i < arraySize; ++i) {
        let Str = ' '
        for (let j = 0; j < arraySize; ++j)
        {
            Str = Str + '* '
        }
        console.log(Str)
    }
}
getTriangle(7);
console.log()

//////////////////////////////////////////////////////

let m = 7; // колличество строчек (высота, длинна)
let string2 = ""; //пустая строка
for (let i = 0; i < m; i++) {
    //  цикл
    for (let j = 0; j < m; j++) {
        // верхний, нижний контур
        if (i === 0 || i === m - 1) {
            string2 = string2 + " * ";
        } else {
            if (j === 0 || j === m - 1) {
                string2 = string2 + " * "; // левый, правый контур
            } else {
                string2 = string2 + "   ";
            }
        }
    }
    string2 = string2 + "\n";
}
console.log(string2);
////////////////////////////////////////////////////////
function gettriangle1(arrL){
    for(let i = 0; i < arrL; i++) {
        let Str = ''
        for (let j = 0; j < arrL; j++)
        {
            if(i ===0 || j === 0 ||i === (arrL -1) - j){
                Str = Str + ' * '
            }else {
                Str = Str + '   '
            }
        }
        console.log(Str)
    }
}
gettriangle1(7);

console.log()
////////////////////////////////////////////////////////
let n = 7; // колличество строчек (высота, длинна)
let string3 = ""; //пустая строка
for (let i = 1; i <= n; i++) {
    // рисуем *
    for (let j = 0; j < n; j++) {
        if (i === n) {
            string3 = string3 +  ' * '; //низ треугольника
        } else {
            if (j === 0 || j == i - 1) {
                string3 = string3 + ' * '; // правая и левая грань треугольника
            } else {
                string3 = string3 + '   ';
            }
        }
    }
    string3 = string3 + "\n";
}
console.log(string3);

////////////////////////////////////////////////////////
function gettriangle2(arrL){
    for(let i = 0; i < arrL; i++) {
        let Str = ''
        for (let j = 0; j < arrL; j++)
        {
            if(i === (arrL -1) || j === (arrL -1) || i === (arrL -1) - j){
                Str = Str + ' * '
            }else {
                Str = Str + '   '
            }
        }
        console.log(Str)
    }
}
gettriangle2(7);

console.log()
////////////////////////////////////////////////////

function gettriangle3(arraylength){
    for(let i = 0; i < arraylength; i++) {
        let Str = ''
        for (let j = 0; j < arraylength; j++)
        {
            if(i === j || i === (arraylength -1) - j){
                Str = Str + ' * '
            }else {
                Str = Str + '  '
            }
        }
        console.log(Str)
    }
}
gettriangle3(7);
console.log()

////////////////////////////////////////////////////////

function gettriangle4(arrL){
    for(let i = 0; i <= arrL; i++) {
        let Str = ''
        for (let j = 0; j < arrL; j++)
        {
            if(i ===0 || j === (arrL -1) ||  j == i - 1){
                Str = Str + ' * '
            }else {
                Str = Str + '   '
            }
        }
        console.log(Str)
    }
}
gettriangle4(7);
console.log()
//////////////////////////////////////////////////////////

let t = 4;
let string5 = "";
for (let i = 1; i <= t; i++) {
    // пространство
    for (let j = 1; j <= t - i; j++) {
        string5 = string5 + " "; // пространство с лево и правой стороны от треугольника
    }
    // рисуем *
    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === t) {
            string5 = string5 + "*";
        } else {
            if (k === 0 || k === 2 * i - 2) {
                string5 = string5 + "*"; // левая и плавая грани *
            } else {
                string5 = string5 + " "; // пустое пространство
            }
        }
    }
    string5 = string5 + "\n";
}
console.log(string5);

/////////////////////////////////////////////////////////
