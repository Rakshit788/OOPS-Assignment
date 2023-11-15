class  Product {
    constructor(name, category , price , stock){
        this.name = name ;
        this.category = category ;
        this.price = price ;
        this.stock = stock ;
    }
}

 
class Inventory{
 constructor() {
    this.validproducts = [];
 }

 addProduct(productobj){
if(!this.validproducts.includes(productobj)){
    this.validproducts.push(productobj) ;
    console.log(`Added  ${productobj.name} to the Inventory`);
}
 }


 deleteProduct(objname ){
 let deleteIndex = this.validproducts.findIndex( obj =>obj.name === objname);
   this.validproducts.splice(deleteIndex,1) 
   console.log(`Deleted ${objname} From the inventory`)


 } }

const product1 = new Product('Laptop' , 'Electronics' , 899 , 10) ;
const product2 = new Product('Book' , 'Books' , 20 , 50); 

const inventory = new   Inventory();


inventory.addProduct(product1);
inventory.addProduct(product2) ;

console.log(inventory.validproducts);
inventory.deleteProduct(`Laptop`)
console.log(inventory.validproducts);