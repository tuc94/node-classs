// Object property shorthand

const name = 'Tuc'
const userAge = 25

const user = { 
    name,
    age: userAge,
    location: 'Arlington'
}

//console.log(user);

// Object destructing

const product = { 
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined,
    rating: 4.2
}

// const label = product.label;
// const stock = product.stock;

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock}) => {
    console.log(type, label, stock)
}

transaction('order',product)