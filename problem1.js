// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

 // MasaI

// function LowerCase(char){

//   let str1 = "abcdefghijklmnopqrstuvwxyz"
//   let str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//   let bag = ""
//     for(let i = 0; i < str1.length; i++){
//       if(char == str2[i]){
//         bag = str1[i]
//       }else if(char == str1[i]){
//         bag = str1[i]
//       }
//     }
//     return bag
  
// }

// let strg = "SaKshi"
// let bag = ""
// for(let i = 0; i < strg.length; i++){
//   bag = bag+ LowerCase(strg[i])
// }

// console.log(bag)


// let arr = ["Madne","Sakshi"];
// let arr1 = []
// for(let i = 0; i < arr.length; i++){
//   let bag = ""
//   for(let j = 0; j < arr[i].length; j++){
//     bag = bag + LowerCase(arr[i][j])
//   }
//   arr1.push(bag);
// }

// console.log(arr1)
// // Write code to find the absolute difference of two numbers

// // Sample Input-1 12,4
// // Sample Output-1 8
// // Sample Input-2 4,18
// // Sample Output-2 14
// // NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value


// function Diff(a,b){
//   return a-b;
// }

// function AbsDiff(x){
//   if(x<0){
//     x = x*-1;
//     return x;
//   }else{
//     return x;
//   }
// }

// function main(a,b){


//   let x = Diff(a,b);
//   x = AbsDiff(x);
//   console.log(x)
  
// }
// main(12,24)

// function LC(char){
//   let str1 = "abcdefghijklmnopqrstuvwxyz"
//   let str2 = "ABCDEFGHIKLMNOPQRSTUVWXYZ"

//   let bag = ""
//   for(lety i = 0; i < str1.length; i++){
//     if(char == str2[i]){
//       bag += str1[i];
//     }else if(charr==str1[i]){
//        bag = bag + str1[i]
//     }
//   }

//   return bag
// }

// let ex = "RanJan";
// let bag1 = ""
// for(let i = 0; i < ex.length; i++){
//   bag1 = bag1+ LC(ex[i])
// }

// console.log(bag1)
function slice(animals,a,b){
  bag = []
  if(a>0 && b>0){
    for(let i=a; i<b; i++){
     bag.push(animals[i])
    }
  }
  if(a>0&& !b){
    for(let i=a; i<animals.length ; i++){
        bag.push(animals[i])
    }
  }
  if(a<0&& !b){
      a= animals.length+a
    for(let i=a; i<animals.length ; i++){
        bag.push(animals[i])
    }
  }

  if(a>0 && b<0){
     b = animals.length +b
    for(let i=a; i<b; i++){
     bag.push(animals[i])
    }
  }
  if(!a  && !b){
    a=0;
    b=animals.length
    for(let i =a; i<b ; i++){
    bag.push(animals[i])

    }
  }
  console.log(bag)

}
slice( ['ant', 'bison', 'camel', 'duck', 'elephant'],2,-1)

