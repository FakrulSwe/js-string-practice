const shoppingCart = [
    {name: 'Shoe', price: 1200},
    {name: 'Watch', price: 500},
    {name: 'Shirt', price: 2200},
    {name: 'Pant', price: 4000},
    {name: 'Shocks', price: 100},
    {name: 'ring', price: 50000}
]

function products(product){
    let totalPrices = 0;
    for (let index = 0; index < product.length; index++) {
        const element = product[index];
        totalPrices = totalPrices + element.price;   
    }
    return totalPrices;
}
 const totalPrice = products(shoppingCart);
 console.log(totalPrice);