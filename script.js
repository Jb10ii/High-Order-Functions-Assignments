// Task one // 
const listProductNames = (products) => {
    products.forEach(product => console.log(product.name));
};

listProductNames(products);

// Task two //

const filterPhones = (products) => products.filter(product => product.category === "phone");

console.log(filterPhones(products));


// Task three // 

const listProductNamesWithPrices = (products) => 
    products.map(product => `${product.name} - ${product.price}`);

console.log(listProductNamesWithPrices(products));

// Task four // 

const calculateTotalInventoryValue = (products) => 
    products.reduce((total, product) => total + (product.price * product.quantity), 0);

console.log("Total Inventory Value: $" + calculateTotalInventoryValue(products));


// Task five //

const filterLowStock = (products) => 
    products.filter(product => product.quantity < 15);

console.log(filterLowStock(products));


// Task six // 

const applyTabletDiscount = (products) => 
    products.map(product => product.category === "tablet",
         { product, price: product.price * 0.9 },
         product);

console.log(applyTabletDiscount(products));


// Task Seven //

const restockLowQuantityItems = (products) => {
    products.forEach(product => {
        if (product.quantity < 15) {
            product.quantity += 10;
        }
    });
};

restockLowQuantityItems(products);
console.log(products);





