const products = [
    { name: "iphone", price: 1200, availability: true },
    { name: "samsung", price: 1100, availability: false },
    { name: "huawei", price: 300, availability: true },
    { name: "oppo", price: 400, availability: false },
    { name: "vivo", price: 500, availability: true },
    { name: "realme", price: 200, availability: false },
    { name: "nokia", price: 1000, availability: true },
    { name: "blackberry", price: 1000, availability: false },
    { name: "lenovo", price: 900, availability: true },
    { name: "xiaomi", price: 600, availability: false },
    { name: "redmi", price: 500, availability: true },
    { name: "blackberry", price: 800, availability: false },
    { name: "lenovo", price: 500, availability: true },
];

const bifurcate = (arr, filter) =>
    arr.reduce(
        (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
            [],
            []
        ]
    );

const result = bifurcate(
    products.map((item) => {
        return item.name.charAt(0).toUpperCase() + item.name.slice(1);
    }),
    products.map((item) => {
        return item.availability;
    })
);

const available = result[0];
const unavailable = result[1];

console.log("AVAILBLE PRODUCTS : " + available);
console.log("UNAVAILABLE PRODUCTS : " + unavailable);

console.log(" ");

console.log('Without using the bifurcate function');

console.log(" ");


const aproductMap = products.map((item) => {
    if (item.availability == true) {
        const availableProducts = [];
        availableProducts.push(item.name);
        console.log("AVAILABLE PRODUCTS : " + availableProducts);
    }
});
console.log(" ");

const unproductMap = products.map((item) => {
    if (item.availability == false) {
        const unavailableProducts = [];
        unavailableProducts.push(item.name);
        console.log("UNAVAILABLE PRODUCTS : " + unavailableProducts);
    }
});