const data = [
    {
        id: 1,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/dsc005701-1688fe60e4c181bf5c16330959174666-320-0.jpg",
        title: "Boxer Model Tyrant Negro",
        description: "Este es el primer producto",
        category: "ropa-interior",
        price: "2500",
        stock: "10",
    },
    {
        id: 2,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/dsc005721-13cc87b92f28aa5dcf16330955752300-320-0.jpg",
        title: "Boxer Model Tyrant Gris",
        description: "Este es el segundo producto",
        category: "ropa-interior",
        price: "2500",
        stock: "10",
    },
    {
        id: 3,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/dsc005761-b1ae682c8ed387099c16330961587834-320-0.jpg",
        title: "Boxer Model Tyrant Azul",
        description: "Este es el tercer producto",
        category: "ropa-interior",
        price: "2500",
        stock: "10",
    },
    {
        id: 4,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/dsc015361-9373605ef0a6b6948e16358776652416-320-0.jpg",
        title: "Medias Crew Face",
        description: "Este es el cuarto producto",
        category: "medias",
        price: "1500",
        stock: "5",
    },
    {
        id: 5,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/wat047661-59da52ae905de2d49d16522103861396-640-0.jpg",
        title: "Medias Crew Kyoto",
        description: "Este es el quinto producto",
        category: "medias",
        price: "1500",
        stock: "8",
    },
    {
        id: 6,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/wat047771-d511f6fe0c78bb8c7a16522101123009-640-0.jpg",
        title: "Medias Crew Legend",
        description: "Este es el sexto producto",
        category: "medias",
        price: "1500",
        stock: "3",
    },
    {
        id: 7,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/wat010051-7f18d35bbef058e02a16463270473519-320-0.jpg",
        title: "Baseball Kali",
        description: "Este es el septimo producto",
        category: "gorras",
        price: "4600",
        stock: "3",
    },
    {
        id: 8,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/wat009781-c1512e8c6e30f3866516463273427861-320-0.jpg",
        title: "Baseball Line",
        description: "Este es el octavo producto",
        category: "gorras",
        price: "4600",
        stock: "9",
    },
    {
        id: 9,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/wat010441-267bf3e6bb843f132816473699314534-320-0.jpg",
        title: "Baseball Nintendo",
        description: "Este es el noveno producto",
        category: "gorras",
        price: "4600",
        stock: "1",
    },
    {
        id: 10,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/014/products/wat009961-afb1cd458a9c699ec516473697227855-320-0.jpg",
        title: "Baseball Worker",
        description: "Este es el decimo producto",
        category: "gorras",
        price: "4500",
        stock: "3",
    },
];

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
    setTimeout(() => {
        resolve(categoryId ? data.filter(products => products.category === categoryId) : data)
        },)
    })
}


export const getProduct = (id) => {
        return new Promise(resolve => {    
        setTimeout(() => {
            resolve(data.find(product => product.id === parseInt(id)));
    }, 300)
})
}