// SAMPLE INPUT :

// var sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];




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


  var data = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];




let obj = {
  sale: data,
  calculateSalesTotals: function(){
    let arr = [];
    for(let i = 0; i < this.sale.length; i++){
      let obj1 = {};
      if(this.sale[i]["discount"]==undefined){
        obj1["item"] = this.sale[i]["item"]
        obj1["original"] = this.sale[i]["original"]
        obj1["sale"] = this.sale[i]["original"]
        obj1["stock"] = this.sale[i]["stock"]
        obj1["total"] = this.sale[i]["stock"]*this.sale[i]["original"]

        arr.push(obj1)
      }else{
        obj1["discount"] = this.sale[i]["discount"]
        obj1["item"] = this.sale[i]["item"]
        obj1["original"] = this.sale[i]["original"]
        obj1["sale"] = this.sale[i]["original"] - this.sale[i]["original"]*this.sale[i]["discount"]
        obj1["total"] = this.sale[i]["stock"]*obj1["sale"]
        obj1["stock"] = this.sale[i]["stock"]

        arr.push(obj1)
      }
    }
    return arr
  }
}


  let x = obj["calculateSalesTotals"]()
  console.log(x)