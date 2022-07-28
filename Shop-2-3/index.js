class Vendor{
    // /**
    //  * 
    //  * @param {string} name 
    //  * @param {string} phone 
    //  * @param {string} address 
    //  */
    constructor(name, phone, address){
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}
class shopItem{
    /**
     * 
     * @param {string} name 
     * @param {number} price 
     * @param {number} stock 
     * @param {number} vol 
     * @param {string} image
     * @param {vendor} vendor 
     */
    constructor(name,price, stock, vol, image, vendor ){
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.vol = vol;
        this.image = image;
        this.vendor = vendor;
    }
    /**
     * 
     * @returns {number}
     */
     calcTotalPrice() {
        return this.price * this.stock;
      }
}
class Cart{
  /**
   * 
   * @param {string} itemname 
   * @param {number} price 
   * @param {number} quantity 
   */
  constructor(itemname, price, quantity){
    this.itemname = itemname;
    this.price = price;
    this.quantity = quantity;
    
  }
}
class shop {
    constructor(name, address){
        this.name = name;
        this.address = address;
        this.items = [];
        this.vendors = [];
        this.carts = [];
    }
    registerVendor(name, phone, address) {
        this.vendors.push(new Vendor(name, phone, address));
      }
    
    registerItem(name, price, stock, vol, image, vendorName) {
        let foundVendor = this.vendors.find((vendor) => vendor.name === vendorName);
        if (foundVendor === undefined) {
          throw new Error("Vendor not found");
        }
        this.items.push(new shopItem(name, price, stock, vol, image, foundVendor));
    }
    // registerCard(itemname, price, quantity){
    //    let foundItem = this.items.find((item) => item.name === itemname);
    //    if(this.items.find((item) => item.name === itemname)){
    //      this.cards.push(new Card(itemname, price, quantity));
    //    }
    // }
    addItem(nameItem) {
      let foundItem = this.items.find((item) => item.name === nameItem); 
      if (1 > foundItem.stock) {
          alert("Out of stock");
          throw new Error("Out of stock");
      }
      this.carts.push({
          name: foundItem.name,
          price: foundItem.price,
          quantity: 1,
          
      });
      console.log(this.carts);
      foundItem.stock -= 1;
      return new shopItem(foundItem.name, foundItem.price, foundItem.stock, foundItem.vol, foundItem.image, foundItem.vendor);
  }

  /**
   * 
   * @returns {Cart[]}
   */
  getCarts(){
    return this.carts;
  }
    
    /**
     * 
     * @returns {shopItem[]}
     */
    getItems(){
        return this.items;
    }
    /**
     * 
     * @returns {Vendor[]}
     */
    getVendors(){
        return this.vendors;
    }
    buyItem(itemName, qty) {
        let foundItem = this.items.find((item) => item.name === itemName);
        if (foundItem == undefined) {
          throw new Error(`Items ${itemName} not found`);
        }
        if (qty > foundItem.stock) {
          throw new Error("Out of stock");
        }
        foundItem.stock -= qty;
        return new shopItem(foundItem.name, foundItem.price, qty, foundItem.vendor);
    }
    
    totalPrice(){
      let total = 0;
      for(let i = 0; i < this.carts.length; i++){
          total += this.carts[i].price * this.carts[i].quantity;
      }
      this.carts = [];
      return total;
  }
}

let myShop = new shop("NuocUong", "123 NguyenTrai St");
myShop.registerVendor("PepsiCo", "123456","123 NguyenTrai St");
myShop.registerVendor("CocaCola", "123456", "123 Google St");


myShop.registerItem("Pepsi", 10000, 100, 1.5, "./pepsi.jpg", "PepsiCo");
myShop.registerItem("CocaCola", 8000, 80, 1.5, "./cocacola.jpg", "CocaCola");
myShop.registerItem("7up", 10000, 150, 0.5, "./7up.jpg",  "PepsiCo");

// myShop.registerCard("Pepsi", 10000, 3);
// myShop.registerCard("Pepsi1", 10000, 3);
console.log(myShop.getItems());
console.log(myShop.getCarts());
let my_item = myShop.buyItem("7up", 20);

console.log(my_item);

console.log(myShop.getItems());
/**
 * 
 * @param {shopItem} shopItem 
 * @returns 
 */
function CreateNewItem(shopItem){
  return `<div class="child">
  <div class="a-box">
    <div class="img-container">
      <div class="img-inner">
        <div class="inner-skew">
          <img src=${shopItem.image}>
        </div>
      </div>
    </div>
    <div class="text-container">
      <h3 class="nameitem">${shopItem.name}</h3>
      <p class="box green">${shopItem.price}đ</p>
      <p class="box green">Số lượng: ${shopItem.stock} chai/lon</p>
      <p class="box green">Thể tích: ${shopItem.vol}lít</p>
      <div>
      <h4>${shopItem.vendor.name}</h4>
    </div>
    <button class="details">
      <h3>Add To Cart</h3>
    </button>
  </div>
</div>`;

}

let listShopItem = document.getElementById("list-shop-item");
listShopItem.innerHTML = "";
for(let item of myShop.getItems()){
    console.log(item);
    listShopItem.innerHTML += CreateNewItem(item);
}


let Names = document.getElementsByClassName('nameitem');
// console.log(perNames[0])
let adds = document.getElementsByClassName('details');
for(let i = 0; i < adds.length; i++) {
    let item = adds[i];
    item.onclick = function() {
        for(let j = 0; j < Names.length; j++){
            let nameItem = Names[i];
            myShop.addItem(nameItem.textContent);
            // alert(`${pName.textContent} x 1`);
            break;
        }
       
    }
    
}
