/**
 * Принимая массив объектов и случайную строку. У объектов может
 * быть ключ: «title» с разными значениями. Создайте алгоритм, который
 * фильтрует массив, заданный как первый параметр, и возвращает массив
 * объектов, которые содержат в своих заголовках заданную строку в
 * качестве второго параметра (без учета регистра)
 */
// function findTitle(arr, str) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let keys in arr[i]) {
//             if (keys == 'title') {
//                 if (arr[i][keys]
//                     .toLowerCase()
//                     .indexOf(str.toLowerCase()) !== -1) {
//                     result[result.length] = arr[i];
//                     break;
//                 }
//             }
//         }
//     }
//     return result
// }
// let arr =
//     [{title: 'Some title1'},
//         {title: 'I like JS'},
//         {user: 'This obj does not have key title js'},
//         {title: 'Js - is the best!'}];
// //console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
//
// module.exports = { findTitle };


















