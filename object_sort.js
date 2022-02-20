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

const searchTerm = 'i';

function productsSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function(a, b) {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

products.sort(productsSort("name"));

const searchResult = products.filter(item => {
    return item.name.includes(searchTerm);
})

console.log(searchResult);