// Write a function named addNumbers which takes two numbers as input and return their sum

// Use the function to calculate the sum of given three numbers


// function addNumbers(a,b){
//   return a+b
// }


// let x = 10;
// let y = 20;
// let z = addNumbers(x,y)
// console.log(z)


// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value



// function Diff(a,b){
//   return a-b
// }

// function AbsDiff(a){
//   if(a<0){
//     a = a*-1;
//     return a;
//   }else{
//     return a;
//   }
// }

// let x = 10
// let y = 20
// let diff = Diff(x,y)
// let abs = AbsDiff(diff);
// console.log(abs)



// let n, rev="", rem;
// let num = 1221;
// n = num;
// while(n>0){
//     rem = n%10;
//     n = (n-rem)/10
//     rev+=rem
// }
// if(num == rev){
//     console.log("Yes",num);
// }else{
//     console.log("No",num);
// }


// let nn = num;
//     let n = "";
//     while(nn > 0){
        
//         let r = nn % 10;
        
//         nn = (nn - r)/10;
        
//         n += r;
//     }
    
//     // console.log(n,num);
    
//     if(n == num){
//         console.log("Yes");
//     }
//     else{
//         console.log("No");
//     }


function prime(a){
  let count= 0
  for(let i = 0; i <= a; i++){
    if(a%i==0){
      count++
    }
  }
  if(count == 2){
    return true
  }else{
    return false;
  }
}

for(let i = 2; i <= 20; i++){
  if(prime(i)){
    console.log(i,"is a prime number")
  }else{
    console.log(i,"not a prime number")
  }
}