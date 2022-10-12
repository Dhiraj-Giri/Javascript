
// SAMPLE INPUT :





// EXPECTED OUTPUT (array of objects):


// [
//   {
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
//   },
//   {
//     item: "Nintendo Switch",
//     original: 299.99,
//     sale: 299.99,
//     stock: 4,
//     total: 1199.96
//   },
//   {
//     discount: 0.8,
//     item: "PS2 Console",
//     original: 299.99,
//     sale: 59.99799999999999,
//     stock: 1,
//     total: 59.99799999999999
//   },
//   {
//     discount: 0.65,
//     item: "Nintendo 64",
//     original: 199.99,
//     sale: 69.9965,
//     stock: 2,
//     total: 139.993
//   }
// ]

// var data = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];

let obj = {
  sales : data,

  totalsales: function(){
    let arr2 = [];
    for(let i = 0; i < this.sales.length; i++){
      let o = {};
      if(this.sales[i]["discount"] == undefined){
        o["item"]= this.sales[i]["item"];
        o["original"]= this.sales[i]["original"];
        o["sale"]= this.sales[i]["original"];
        o["stock"]= this.sales[i]["stock"];
      
        o["total"]= this.sales[i]["stock"]*this.sales[i]["original"];

        arr2.push(o);
      }
    }
     console.log(arr2);
  }
}


// obj["totalsales"]()