/*
    Array
*/
//Deklarasi Array using the []

// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let buah = ["Manggo","Apple","Orange"];
// console.log(buah);

// let arr = ["text", 1, true] //can have text, integer and boolean
// console.log(arr);

// let myFunc = function(){
//     return "Hello Array";
// };

// let arr2 = ["text", 1, true, myFunc(), [1, 2, 3, 4, 5]];
// //Mengakses element dalam array
// console.log(arr2[2]);
// console.log(arr2[3]);
// console.log(arr2[4][2]);
// console.log(typeof arr2); //To see the data type - it's an object
// console.log(arr2.length); //function

// //Deklarasi array using keyword new
// let buah2 = new Array("Salak","Jambu","Melon"); // Another way to declare an array
// console.log(buah2);

// //Manipulasi Array
// //1. Menambah Isi Array

// let mhs = [];
// mhs[0] = "John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";
// mhs[5] = "Peter";
// //When you skip the index two times it will appear as emptyx2 in the console

// //But normally written as:
// mhs[0] = "John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";
// mhs[3] = "Peter";
// console.log(mhs);

// //2. Mengubah Isi Array
// mhs[1] = "Donny"; //We change the index-1 to Donny
// console.log(mhs);

// //3. Menghapus Isi Array
// mhs[2] = undefined; //untuk menghapus isi array(index)
// console.log(mhs);

// //4. Menampilkan Isi Array
// let mhs = ["John","Bob","Jane","Peter"];

// //looping
// for(let i = 0; i < mhs.length ; i++){
//     console.log("Mahasiswa ke-" + (i+1) + " adalah " + mhs);
// }

// /*
//     Methods in Array
// */

// //1. length //take a look at the example as given above using .length

// //2. toString
// let mhs = ["John","Bob","Jane","Peter"];
// // console.log(mhs.toString());

// // //3. join
// // console.log(mhs.join(" - "));

// // 4. push, pop, shift, unshift
// mhs.push("Mayrra"); //adds to the back of the array
// mhs.push("Stenly");
// console.log(mhs.join(" - "));

// mhs.pop(); //removes or erases from the back of the array
// mhs.pop();
// console.log(mhs.join(" - "));

// mhs.unshift("Stenly"); //adds to the front of the array
// mhs.unshift("Mayrra");
// console.log(mhs.join(" - "));

// mhs.shift(); //removes or erases from the front of the array
// mhs.shift();
// console.log(mhs.join(" - "));

// // 5. concat - combining
// let buah = ["Mangga","Apple","Anggur"];
// let sayur = ["Kangkung","Boncis","Bayam"];

// let makanan = buah.concat(sayur); //or you can exchange  - sayur.concat(buah)

// console.log(makanan); //We just call the variable that we put the arrays in.

// // 6. Splice and Slice
//     // a. Splice
//     //array.splice(index, jumlah, item1,....., itemX);
//     /*
//         index - the position where we add or delete the element
//         jumlah - this is optional; we put the number of elements to erase in the array 
//         item - the new elements that we add to the array
//     */

//     // The splice is used to add the elements in between the elements
//         let buah = ["Banana","Grapes","Manggo","Watermelon"];
//         buah.splice(2, 0, "Apple","Guava");
//         console.log(buah); //you can just put the variable or
//         console.log(buah.join(" - ")); // or use this
        
//     // b. Slice
//     let buah2 = buah.slice(0,2);
//     console.log(buah2.join(" - "));

// //7. forEach and map
//     //a. forEach
//     //forEach tidak mengembalikan nilai
//     let angka = [1, 2, 3, 4, 5, 6, 7, 8];
//     angka.forEach(function(el){
//         console.log(el);
//     });

//     let tampilAngka = function(el){
//         console.log(el); //it becomes undefined if you use return
//     };

//     //b. map
//     let angka2 = angka.map(function(el){
//         return el;
//     });

//     console.log(angka2);

// // 8. Sort
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let mhs = ["John","Bob","Erick"];
// mhs.sort();
// console.log(mhs);

// angka.sort(function(a, b){
//     return a - b; //or vise versa b - a
// });

// console.log(angka);

// // 9. Filter
// // this is used for doing filters, pencarian, or searching
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let angka2 = angka.filter(function(el){
//     return el > 5; //this finds the number greater than 5 or we can use other numbers we want
// });
// console.log(angka2);


