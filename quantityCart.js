const shoppingCart = [
    {name: 'Shoe', price: 1200 , quantity: 8 },
    {name: 'Watch', price: 500 , quantity: 5 },
    {name: 'Shirt', price: 2200, quantity: 2  },
    {name: 'Pant', price: 4000 , quantity: 3 },
    {name: 'Shocks', price: 100, quantity: 2 },
    {name: 'ring', price: 50000, quantity: 2  }
]

function products(product){
    let totalPrices = 0;
    for (let index = 0; index < product.length; index++) {
        const element = product[index];
        const productTotal = element.price * element.quantity;
        totalPrices = totalPrices + productTotal;   
    }
    return totalPrices;
}
 const totalPrice = products(shoppingCart);
 console.log(totalPrice);