// let data = [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 20, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]


// for(let i = 0; i < data.length; i++){
//   let highScore = 0
//   let stud;
//   for(let j = 0; j < data[i]["students"].length; j++){
//     let sum = 0;
//     for(let k = 0; k < data[i]["students"][j]["marks"].length; k++){
//       sum = sum + data[i]["students"][j]["marks"][k];
//     }
//     if(highScore < sum){
//       highScore = sum;
//       stud = data[i]["students"][j]["name"];
//     }
//   }
//   console.log(highScore,stud,data[i]["grade"])
// }
// You are given a number stored in a variable with the nameN

// You have to printNlines such that on each line you find the sum of all even numbers in the range of[1,i], whereirepresents all the numbers in the range of[1,N]

// For example, consider the value stored inN = 3

// Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be zero, as there are no even numbers in the range

// Then, we find the sum of all even numbers, in the range of [1,2], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Finally, we find the sum of all even numbers in the range of [1,3], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Therefore, the final output becomes

// 0
// 2
// 2
// let N=3;
// for(let i = 1; i<=N; i++){
// let sum = 0;
//   for(let j = 1; j <= i; j++){
//     if(j%2==0){
//       sum = sum + j;
//     }
//   }
// console.log(sum)
// }
// You are given a number stored in a variable with the nameN

// You have to print all the numbers in the range from1 to N*N, such that there are exactlyNnumbers on each line

// For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3
// 4 5 6
// 7 8 9
// let N = 4; //4*4=16
// let count = 0;
// for(let i = 1; i <= N; i++){
//   let bag = "";
//   for(let j = 1; j < N-1; j++){
//     count++
//     bag= bag+count+" ";
//   }
//   console.log(bag)
// }

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the minimum number in the array

// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

// Then, the required output will be1, as it is the smallest number in the array

// let arr= [2,3,1,4,5]; //1 2 3 4 5 

// let num = arr[0]  //2

// for(let i = 0; i < arr.length; i++){
//   if(num < arr[i]){
//     num = arr[i];
//   }
// }
// console.log(num)

// let num = 88;
// if(num % 2 == 0 && num / 10 < 8){
//   console.log(1);
// }
// else if(num % 3 == 0 || num / 20 > 10){
//   console.log(2);
// }
// else if(num % 4 == 0 || num % 40 == 0){
//   console.log(3);
// }
// else {
//   console.log(4);
// }
//1
//2
//3
//4
// let size = 5;
// let loopCount = 0;
// for(let i = 0; i < size; i++){
//   for(let j = 0; j <= i; j++){
//     loopCount++;
//   }
// }
// console.log(loopCount);
// let arr = [12, 14, 15, 23, 36, 46];

// for (let i = 0; i <= arr.length-1; i++) {

//   if ((arr[i] % 2 == 0 || arr[i] % 3 == 0) && arr[i] <= 40) {

//     console.log(arr[i]);
//   }
// }

//12 14 15
//12 14 15 36 46
//12 15
//12 14 15 36


// console.log(bag)


// if(arr[i]%2==0){condole.log(arr[i])}


// let n = 7; // 1-7
// let count = 0;
// for(let i = 1; i <= n; i++){
//   if(n%i == 0){
//     count++;
//   }
// }
// if(count == 2){
//   console.log("Prime")
// }else{
//   console.log("No")
// }

// let arr =[1,2,3,4,5]

// 

// console.log([...arr].reverse())


// let N = 4
// let count = 0
// for(let i = 1; i <= N; i++){
//   let bag = ""
//   for(let j =1; j<= N; j++){
//     count++
//     bag=bag+count+" ";
//   }
//   console.log(bag)
// }

// let user = {
//   name: "Aman",
//   age: 36,
//   city: "Mumbai"
// }

// if (user["city"][4] == "a" && user["name"][0] == "a") {
//   console.log(1)
// }
// else if (user["age"] ** (1 / 2) < 6) {
//   console.log(2)
// }
// else {
//   console.log(3)
// }

//1
//2
//3
//error

// What is the output of following code?

// What is the output of following code?

// let arr = [1,2,3,4,5,6,1,1]

// let obj = {}

// for(let i = 0; i < arr.length; i++){
//   if(obj[arr[i]]==undefined){
//     obj[arr[i]] = 1
//   }else{
//     obj[arr[i]]++
//   }
// }
// console.log(obj)

//0
//3
//9
//Error
// let num = 356        //  35
// num = num%10         // 10|356
                      
// console.log(num)


// let arr= [1,2,3,1,2,4,5]
// let obj = {}
// for(let i = 0; i <= arr.length-1; i++){
//   if(obj[arr[i]]==undefined){
//     obj[arr[i]]=1
//   }else{
//     obj[arr[i]]++
//   }
// }
// for(let key in obj){
//   console.log(key+"-"+obj[key])
// }
// console.log(obj)

// let str = "nrupul"
// // let str2="aeiou"
// let count = 0;
// for(let i = 0; i < str.length; i++){
//   if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//     count++;
//     break;
//   }
// }



// let arr= [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 20, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]

// // console.log(arr[2]["students"][1]["marks"])

// for(let i = 0; i<arr.length; i++){
//   let highscore = 0;
//   let student_name="";
//   for(let j = 0; j < arr[i]["students"].length;j++){
//     let record = arr[i]["students"];
//     let sum = 0;
//     for(let k = 0; k < record[j]["marks"].length; k++){
//       sum = sum + record[j]["marks"][k];
//     }
//     console.log(record[j]["name"])
//   }
//   console.log(arr[i]["grades"]+"-"+)
// }

// * 1
// ** 12
// *** 123
// **** 1234

// 
// *****
// *
// *
// *
// *****

// for(let i = 1; i <= 5; i++){
//   let bag = ""
//   for(let j = 1; j <= 5; j++){
//     if(i==1){
//       bag = bag +"*"+" "
//     }
//   }
//   console.log(bag)
// }

// let str = "raj"
// let flag = false;

// for(let i = 0; i <str.length; i++){
//   if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//     flag = true;
//     break;
//   }
// }

// if(flag){
//   console.log("True")
// }else{
//   console.log("False")
// }



// function ArrofStr(arr){
//   let bag = ""
//   for(let i = 0; i< arr.length; i++){
//     if(i%2==0){
//       bag= bag +arr[i]+" ";
//     }
//   }
//   return bag;
// }
// let arr1 = []
// let x = ArrofStr(arr1)

// console.log(x)


// function Add(x,y){
//   return x+y
// }
// let a = 10;
// let b = -11;


// console.log(Add(a,b))



// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value


// function Diff(a,b){
//   return a-b
// }

// function AbsDiff(x){
//   if(x<0){
//     x = x*-1;
//     return x
//   }else{
//     return x
//   }
// }



// function main(x,y){

// let diff = Diff(x,y)

//   return AbsDiff(diff)

  
// }


// // console.log(main(5,10))
// var sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];
//  {
//     item: "PS4 Pro",
//     original: 399.99,
//     sale: 399.99,
//     stock: 3,
//     total: 1199.97
//   },
//   {
//     discount: 0.1,
//     item: "Xbox One X",
//     original: 499.99,
//     sale: 449.991,
//     stock: 1,
//     total: 449.991
//   }
// let market = {
//   data:sales,
//   total:function(){
//     let arr = []
//     for(let i = 0; i < this.data.length; i++){
//       let obj = {}
//       if(this.data[i]["discount"]==undefined){
//         obj["item"] = this.data[i]["item"]
//         obj["original"]=this.data[i]["original"]
//         obj["sale"]=this.data[i]["original"]
//         obj["stock"]=this.data[i]["stock"]
//         obj["total"]=obj["sale"]*this.data[i]["stock"]
        
//         arr.push(obj)
//       }else{
//         obj["discount"]=this.data[i]["discount"]
//         obj["item"] = this.data[i]["item"]
//         obj["original"]=this.data[i]["original"]
//         obj["sale"]=this.data[i]["original"]-(this.data[i]["original"]*this.data[i]["discount"]/100)
//         obj["stock"]=this.data[i]["stock"]
//         obj["total"]=obj["sale"]*this.data[i]["stock"]
        
//         arr.push(obj)
//       }
      
//     }
//     return arr
//   }
// }

// console.log(market.total())


// let arr = [10, 24, 56, 72, -10, -88, 100, 564];
//  let sum =0;
// let count=0
// let odd =arr.forEach(function (item,index){
//   if(index%2==1){
//     sum = sum + item
//     count++
//   }
// })
// console.log(sum/count)
// let input = [2, 3, 4, 6, 7];
// let ar =[]
// let power  =input.forEach(function(item,index){
//   ar.push(item**5)
// }
//  )
// console.log(ar)
// let srr = [3,4,5,6,7]
// let bag =""
// let minus  = srr.forEach(function(item,index){
//   if(item%2==0){
//     bag = bag+ "-"
//   }
//   else{
//     bag = bag  + item
//   }
// })
// console.log(bag)


// let items = ["Rice","Dal","Salt"]
// let quantity = [2,3,1]
// let price = [60,50,20]

// let obj = {
//   items,
//   quantity,
//   price,
//   arr:[],
//   arrObjects:function(){
//     // let arr = []
//     for(let i = 0; i < this.items.length; i++){
//       let obj1={}
//       obj1.item = this.items[i]
//       obj1.price = this.price[i]
//       obj1.quantity = this.quantity[i]
//       this.arr.push(obj1)
//     }
//     // return arr
//   }
// }
// obj.arrObjects()
// let data = obj.arr
// console.log(obj.arr)


// let obj2 = {
//   data,
//   totalSales: function(){
//     let sum = 0
//     for(let i = 0; i < this.data.length; i++){
//       sum = sum + this.data[i].price*this.data[i].quantity
//     }
//     return sum
//   }
// }

// let x = obj2.totalSales()
// console.log(x)



let arr1 = ["3e2acc6d-312c-11e9-877e-0624d341e5a7", "2b0b9468-d6d4-11e8-9bfb-02420a000032", "0060abda-8083-11e6-83b1-02593e0d5ca1", "03b42e4b-3f0f-11e9-8e2e-0624d341e5a7", "051dcff2-ff1a-11eb-bf22-4e528ffabcfe", "0552f90c-20d1-11eb-bd72-06eaa8ca921d", "056f79e3-7155-11e8-a85e-0624d341e5a7", "070c12f6-8d78-11eb-9fb9-02420a00fa70", "09e898e8-3a10-11e6-86f3-02593e0d5ca1", "0bdb88db-ab58-11e7-ad7f-0624d341e5a7", "0bed112e-5d41-11eb-958c-06eaa8ca921d", "0e5370e6-478d-11e8-9a0a-0624d341e5a7", "0f05137e-aea9-11e7-af21-06eaa8ca921d", "0fcb7bd8-7c0d-11eb-9b53-02420a00f3e2", "0fd5125e-e852-11e6-9ef2-02593e0d5ca1", "10839b84-9380-11eb-b904-02420a00f157", "112508c7-cb34-11ea-a3c0-06eaa8ca921d", "11e17466-c2aa-11eb-baad-a2c77d5bcef7", "11fabe1b-d3fe-11e7-ada8-0624d341e5a7", "1428b378-fad8-11e5-b5ea-28cfe94b7f71", "14c5e945-1651-11e9-95e8-06eaa8ca921d", "1560cbc4-17ae-11ec-a725-bef0d7df7ad1", "15af67a8-1dbb-11e7-9dfd-02593e0d5ca1", "18b990e6-80c1-11eb-8e6a-02420a00f5ac", "18e9f6e2-fad8-11e5-9f55-28cfe94b7f71", "19b35f84-80a5-11e6-aec0-02593e0d5ca1", "1a7cfad0-5402-11eb-90cb-06eaa8ca921d", "1ab972a2-fd81-11e6-b6f8-02593e0d5ca1", "1ad9ae76-e3de-11eb-9097-8acf28149d26", "1d8c9c8a-2fab-11e9-86b3-0624d341e5a7", "1ea9d30e-e2cc-11e6-bc93-02593e0d5ca1", "20399b5c-d25d-11eb-9b61-ee200946f9e2", "2066461c-8fcc-11eb-89d8-02420a00fc14", "21f9d5ec-9568-11eb-9a09-02420a00f3d2", "2289205a-9570-11eb-94cf-02420a00f3d1", "22e7c2da-e08e-11e7-af95-06eaa8ca921d", "2371a36c-fad8-11e5-9597-28cfe94b7f71", "25c5c20a-2e86-11ec-81c1-ee6532631c55", "2677693e-dfb6-11eb-a27e-36aa48944cb7", "27c0f45a-13c2-11e7-b486-02593e0d5ca1", "286635c6-439f-11eb-b8ab-0624d341e5a7", "2a4421d8-fcd0-11eb-8d4a-4a2940957ca3", "2a9be9ae-fad8-11e5-8e8c-28cfe94b7f71", "2cb3d73a-5e27-11e6-87d9-02593e0d5ca1", "2ff595c2-4731-11ea-b09a-06eaa8ca921d", "309680fc-6c80-11eb-8153-0624d341e5a7", "30d80476-5602-11e6-b2d8-02593e0d5ca1", "30f734ac-e6f5-11eb-b7b1-b6341617323b", "315a09cb-9341-11e9-a3cf-06eaa8ca921d", "324c99b0-8d84-11e7-ad5d-0624d341e5a7", "3260604a-fda1-11ea-a7cb-0624d341e5a7", "330ce2ba-67a7-11ea-8b0d-06eaa8ca921d", "3398af38-5b3b-11eb-94b0-06eaa8ca921d", "3431974e-6927-11eb-80a1-0624d341e5a7", "35439f46-68fb-11eb-9aa0-06eaa8ca921d", "357cfa44-37f2-11e8-985d-0624d341e5a7", "36aa65a6-922a-11eb-98fa-02420a00ffef", "36d4ab28-97ca-11e9-bd30-0624d341e5a7", "37f81b09-9236-11e7-af05-06eaa8ca921d", "3c3e9610-07a4-11e6-8d0e-0698d46ebbc3", "3c4d887d-f6d2-11e8-860d-06eaa8ca921d", "3d20619c-e6a3-11e6-a00d-02593e0d5ca1", "3d907c94-72bc-11eb-8257-0624d341e5a7", "403381d8-2a74-11ec-b2a4-56ff1ec94725", "41433cfc-a3b3-11e9-858e-0624d341e5a7", "42c166b0-390b-11ea-9798-0624d341e5a7", "455ffa02-aeeb-11ea-9bae-0624d341e5a7", "46d686f4-39dd-11ea-a5aa-06eaa8ca921d", "4719de12-5375-11e8-bbdd-06eaa8ca921d", "4749158e-ce6a-11e6-9d8b-02593e0d5ca1", "479addfc-2f3f-11e9-a363-06eaa8ca921d", "4919887a-5887-11e6-aa33-02593e0d5ca1", "49ee117d-c6f9-11e8-94cc-0624d341e5a7", "4a3c6d3e-4c34-11e7-8c6e-02593e0d5ca1", "4d627a38-7f4f-11eb-9ed6-02420a00f4d4", "4ef0628a-79a9-11eb-abe1-02420a00f12b", "4f49ba76-dac9-11ea-a0de-0624d341e5a7", "4f63a4d4-f609-11eb-8af9-4621f4fc402e", "5040910a-9164-11eb-831d-02420a00fd70", "5116b8d2-c038-11ea-a179-06eaa8ca921d", "54ab229c-fc06-11e9-b7b6-0624d341e5a7", "56379fb6-d19d-11ea-a552-02420a00f7d4", "56df2560-36a9-11ea-a312-06eaa8ca921d", "57cac874-6b04-11e8-81d0-06eaa8ca921d", "5831211c-a81c-11eb-a626-02420a00fcdb", "5afbe8be-ede5-11ea-b522-02420a00f7d6", "5b5323c8-228d-11e6-823d-02593e0d5ca1", "5b94df5b-25f6-11ea-8dc6-0624d341e5a7", "5c1d7ce8-de1b-11e9-a1f0-06eaa8ca921d", "5c9c3ad8-2693-11e8-983e-0624d341e5a7", "5f95d7c4-2e57-11ec-ba14-764176dd68a6", "5fefaff0-05f5-11e6-835c-0698d46ebbc3", "60cc58dc-3fbc-11eb-887b-06eaa8ca921d", "634e5b72-56dd-11eb-920c-06eaa8ca921d", "6372916f-d96f-11e9-9e62-06eaa8ca921d", "649984a4-54e2-11eb-9132-06eaa8ca921d", "65b697aa-5cdf-11eb-956c-06eaa8ca921d", "66d0b290-5746-11eb-9258-06eaa8ca921d", "66e98974-619a-11eb-bef5-0624d341e5a7", "67032bc9-6e3c-11e8-8312-06eaa8ca921d", "671f5dca-777e-11eb-9f5a-06eaa8ca921d", "680cbaf1-9d36-11e9-8111-0624d341e5a7", "69347dc8-dfef-11eb-a811-fabb8c48ead3", "693ff077-98e0-11e8-bd09-0624d341e5a7", "69e4c2f6-5f1f-11eb-be5b-0624d341e5a7", "6a71005c-07e0-11e8-97e7-0624d341e5a7", "6a96664c-6897-11e6-9bf9-02593e0d5ca1", "6ccbac14-240e-11ec-a7fc-ea60d76ba4a0", "6d1224e6-f39d-11e7-97b2-0624d341e5a7", "6d4b05dc-95ce-11eb-ab50-02420a00f3d1", "6f2e3286-3848-11e6-bcd3-02593e0d5ca1", "7068fb76-95a5-11eb-814a-02420a00f3d3", "70d4577e-88ee-11e8-8faa-06eaa8ca921d", "70e6404d-93d0-11e8-9556-06eaa8ca921d", "739691ee-4e7b-11eb-babe-0624d341e5a7", "74e03792-c510-11e6-94b7-02593e0d5ca1", "76cb1c8c-2d87-11eb-80ce-06eaa8ca921d", "776ea205-5ee8-11e9-8181-06eaa8ca921d", "77f81d2e-1c0e-11eb-ae94-0624d341e5a7", "7a7998ec-2922-11e9-9fad-06eaa8ca921d", "7b44407c-917f-11e9-a22c-06eaa8ca921d", "7c1d595c-811e-11e7-aef5-06eaa8ca921d", "7c4423ba-b27b-11eb-a5c3-02420a00fa57", "7c7b711e-733b-11eb-9e10-06eaa8ca921d", "7d03d352-7056-11e6-99e5-02593e0d5ca1", "7d8ebb2a-ac10-11eb-b3cf-02420a00ff49", "7da9eb42-6134-11eb-bed1-0624d341e5a7", "7edc45ec-a0bd-11ea-b99a-0624d341e5a7", "7fef795e-9a26-11e8-bdb8-0624d341e5a7", "805725b4-70eb-11eb-81fd-0624d341e5a7", "80cadb58-9440-11e6-915d-02593e0d5ca1", "838051fc-081c-11e7-a018-02593e0d5ca1", "83a8b4c6-8c31-11e9-9e4a-06eaa8ca921d", "8469e24a-e94a-11e6-8bc9-02593e0d5ca1", "8485643e-a9fc-11e7-ad7c-0624d341e5a7", "84d471fe-1453-11e6-86c8-02593e0d5ca1", "862e59a9-b112-11e9-bbfd-06eaa8ca921d", "8712fcba-84bf-11eb-92ef-02420a00f725", "8c662888-784c-11eb-af42-02420a00f12b", "8e9cce1b-14b9-11ea-855b-0624d341e5a7", "8f7f6dd8-5a44-11e7-b294-02593e0d5ca1", "8fa83e2e-3bb1-11ea-a726-06eaa8ca921d", "903acf2c-1c51-11e8-9821-0624d341e5a7", "925746de-b11e-11ea-9e84-06eaa8ca921d", "92866d04-9fdb-11e9-8343-0624d341e5a7", "92b13cc8-8df5-11eb-8400-02420a00fb64", "92f1132c-5198-11e7-a971-02593e0d5ca1", "94881818-a10c-11ea-9b2c-06eaa8ca921d", "94ac18e2-fe78-11e6-9e5b-02593e0d5ca1", "97ec5280-eeea-11eb-9635-36dc94a025c3", "98b85a66-9e5e-11ea-9a88-06eaa8ca921d", "98f9e1b4-cb1e-11eb-a12a-0a5ae849fae0", "99727930-e45f-11eb-9edc-de8943f6f9c2", "9adb2081-a5c2-11e8-9dea-06eaa8ca921d", "9b9ac450-ff3f-11e7-afe0-06eaa8ca921d", "9c4472a6-5898-11eb-bcf8-0624d341e5a7", "9e408538-f1cf-11e6-9c4c-02593e0d5ca1", "9e596c28-87f9-11eb-87c9-02420a00f7f6", "9f9fafd6-b790-11eb-b77b-6637bc21b513", "a00faec8-4fa8-11e8-bae6-06eaa8ca921d", "a02a40f9-86b2-11e9-b20c-0624d341e5a7", "a0d97882-83ec-11eb-bc9f-02420a00f727", "a11c7c3a-7cdb-11e6-983f-02593e0d5ca1", "a154a39a-e621-11ea-a94a-06eaa8ca921d", "a246e76c-beda-11e6-9787-02593e0d5ca1", "a35b7fcc-7af7-11eb-a218-02420a00f339", "a3a4ef5a-62f5-11eb-981d-06eaa8ca921d", "a4db84c4-4725-11e6-b036-02593e0d5ca1", "a6fb3cd8-947b-11eb-826a-02420a00f38e", "a6feaff6-4e50-11e6-9311-02593e0d5ca1", "a7584ed8-963e-11e9-bbd2-0624d341e5a7", "a78845dc-827a-11eb-8d5b-02420a00f6ac", "a9827b90-9e7e-11ea-9a91-06eaa8ca921d", "aaac2d16-5929-11eb-9350-06eaa8ca921d", "abfc3194-6206-11eb-97bb-06eaa8ca921d", "ac0dd00e-1275-11e8-980f-0624d341e5a7", "ac57a8c5-8468-11e8-8d8f-06eaa8ca921d", "acf9e2ae-a2d0-11e9-84e1-0624d341e5a7", "aea7c212-921e-11eb-af0b-02420a00fff0", "af45e8c0-6609-11eb-994c-06eaa8ca921d", "b137bfa2-5d6f-11eb-be0a-0624d341e5a7", "b209a1ea-c68c-11ea-9e84-0624d341e5a7", "b21e79b0-df7f-11ea-a785-06eaa8ca921d", "b24546d9-b256-11e8-a436-06eaa8ca921d", "b494bc64-03fe-11e7-ac16-02593e0d5ca1", "b5d43096-fc0b-11e6-bcd2-02593e0d5ca1", "b5ecbe9b-80fc-11e9-af07-0624d341e5a7", "b709a41c-08b0-11ec-a5b6-6606d91167ca", "b72b2afe-19c4-11e7-af34-02593e0d5ca1", "b77f57e7-ea3d-11e8-bf72-06eaa8ca921d", "b78fe74b-7931-11e9-aba8-0624d341e5a7", "b8916024-683b-11eb-8071-0624d341e5a7", "b8d3d6da-4edb-11e8-9cf8-0624d341e5a7", "b957b9bc-63a0-11eb-bf60-0624d341e5a7", "b9e7ab04-c80d-11eb-931f-ae89cd41806e", "bb7e877b-f24f-11e9-b0f6-06eaa8ca921d", "be46f137-82bb-11e8-b0b5-0624d341e5a7", "be601bc6-685d-11e7-aed8-06eaa8ca921d", "c2291f28-7542-11eb-82c1-0624d341e5a7", "c2474c6c-a267-11e6-b80a-02593e0d5ca1", "c38a5438-7928-11eb-b4b7-02420a00f1c4", "c39b8440-a701-11e6-9804-02593e0d5ca1", "c3fef38e-b474-11ea-9f0c-06eaa8ca921d", "c403dc74-73a6-11e9-8e91-06eaa8ca921d", "c81074ce-c147-11ea-9de2-0624d341e5a7", "c8b23bc4-988b-11eb-9280-02420a00f5a7", "c9889f37-9c67-11e8-9998-06eaa8ca921d", "c998350c-a3fa-11e9-b126-06eaa8ca921d", "cc5e7722-cf3d-11eb-a8bd-8e0fd5f99dce", "ce1e3788-d016-11ea-beee-02420a00f7e1", "ceb14ec4-3f9d-11e8-b790-06eaa8ca921d", "cf8654f2-5383-11e9-b941-06eaa8ca921d", "d0146b14-80e1-11e8-afcb-0624d341e5a7", "d0c6f318-33ae-11e7-b85b-02593e0d5ca1", "d10c815a-b0bc-11eb-b931-02420a00fa59", "d16f0c4e-5267-11ea-b9aa-06eaa8ca921d", "d293e574-7e5b-11eb-b302-02420a00f4d5", "d37070ec-caa6-11eb-83da-fe96ed7a20e5", "d576d1f6-888d-11e7-ad55-0624d341e5a7", "d72d843b-7dd6-11e8-ae25-0624d341e5a7", "d7a66ba0-8c83-11eb-a24e-02420a00fa74", "d8fb2a9b-434d-11ea-ad8d-06eaa8ca921d", "d9a0ad70-5d5e-11eb-be05-0624d341e5a7", "db898ea8-3bd0-11e7-87b1-02593e0d5ca1", "dd0d17f8-9208-11eb-adaa-02420a00ffed", "ddcc1c2c-ed1f-11ea-a002-02420a00f7e1", "deb8e700-17d9-11ea-8f01-06eaa8ca921d", "defef3a8-3d9d-11ea-9a15-0624d341e5a7", "df501316-2d49-11ea-8ffc-0624d341e5a7", "e0a8c3c6-ba26-11eb-923f-a6b96633af1b", "e0c16052-9de8-11eb-ad7d-02420a00f789", "e1d002b4-88da-11eb-89b4-02420a00f986", "e4a4f0fc-6af9-11eb-9b98-06eaa8ca921d", "e5067ba5-9ddf-11e8-bfd7-0624d341e5a7", "e542c296-df48-11eb-8239-fe57504a0264", "e7379ce6-7cdf-11eb-9962-02420a00f3e5", "e8378008-4a48-11eb-8cb6-06eaa8ca921d", "e8ec7860-5155-11ea-b897-06eaa8ca921d", "e92dc7ad-192b-11e8-981f-0624d341e5a7", "ec4f6ff3-580f-11e9-bcf1-06eaa8ca921d", "ec872f85-16f4-11e9-ba2a-0624d341e5a7", "ee29996e-a4ef-11ea-9a6a-0624d341e5a7", "ee6e25cf-9a7d-11ea-99cc-06eaa8ca921d", "f0144354-5b34-11e6-9690-02593e0d5ca1", "f09999ea-9737-11e9-a6d1-06eaa8ca921d", "f0cf3cd8-7590-11eb-82c9-0624d341e5a7", "f1b06516-5a86-11eb-945f-06eaa8ca921d", "f21dcf70-fad7-11e5-9ca3-28cfe94b7f71", "f2c07400-6ce7-11eb-9c2a-06eaa8ca921d", "f37dd7ec-a177-11e6-810c-02593e0d5ca1", "f3f85518-93ed-11eb-826a-02420a00f38e", "f4a34e09-52b9-11ea-a52b-0624d341e5a7", "f53fbb75-a9d1-11e8-85db-0624d341e5a7", "f5c533fc-5823-11e7-8383-02593e0d5ca1", "f68f94f8-4b49-11ec-b7f2-86c37de17a49", "f709a896-7b1b-11eb-b18e-02420a00f33a", "f9438718-f299-11ea-a567-0624d341e5a7", "fb41c13e-08aa-11eb-aa04-0624d341e5a7", "fcd26aae-791a-11eb-a35d-02420a00f12c", "fe6017d0-85ea-11e7-aefc-06eaa8ca921d", "feba6c12-fc0c-11ea-b07e-06eaa8ca921d", "ff115fa2-dc8c-11e6-8abd-02593e0d5ca1", "ffb1d500-ae46-11eb-b021-02420a00f921", "ffcbc000-9e97-11e6-ba4d-02593e0d5ca1"]

let arr2 = ["3e2acc6d-312c-11e9-877e-0624d341e5a7", "2b0b9468-d6d4-11e8-9bfb-02420a000032", "19b35f84-80a5-11e6-aec0-02593e0d5ca1", "330ce2ba-67a7-11ea-8b0d-06eaa8ca921d", "a6fb3cd8-947b-11eb-826a-02420a00f38e", "5b94df5b-25f6-11ea-8dc6-0624d341e5a7", "a3a4ef5a-62f5-11eb-981d-06eaa8ca921d", "abfc3194-6206-11eb-97bb-06eaa8ca921d", "e0a8c3c6-ba26-11eb-923f-a6b96633af1b", "df501316-2d49-11ea-8ffc-0624d341e5a7", "6d1224e6-f39d-11e7-97b2-0624d341e5a7", "634e5b72-56dd-11eb-920c-06eaa8ca921d", "a78845dc-827a-11eb-8d5b-02420a00f6ac", "7edc45ec-a0bd-11ea-b99a-0624d341e5a7", "070c12f6-8d78-11eb-9fb9-02420a00fa70", "3260604a-fda1-11ea-a7cb-0624d341e5a7", "7c1d595c-811e-11e7-aef5-06eaa8ca921d", "49615d6f-cc08-11ea-a401-06eaa8ca921d", "7d03d352-7056-11e6-99e5-02593e0d5ca1", "c38a5438-7928-11eb-b4b7-02420a00f1c4", "d37070ec-caa6-11eb-83da-fe96ed7a20e5", "e1d002b4-88da-11eb-89b4-02420a00f986", "403381d8-2a74-11ec-b2a4-56ff1ec94725", "5116b8d2-c038-11ea-a179-06eaa8ca921d"]

let arr = []

for(let i = 0; i < arr1.length; i++){
  if(!arr2.includes(arr1[i])){
    arr.push(arr1[i])
  }
}
console.log(arr)

