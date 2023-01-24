const products =[
    {
    "id":1,
    "nombre":"Acido Hialurico",
    "category": "Faciales",
    "cantidad":1,
    "precio":1200,
    "img": "https://clinicalavanchy.cl/wp-content/uploads/2018/11/blog2-800x438.png"
    },
    {
    "id":2,
    "nombre":"Bblow",
    "category": "Faciales",
    "cantidad":1,
    "precio":1200,
    "img": "https://static.wixstatic.com/media/c5c26d_7cb7a87cb97143eebb8912a8a427b671~mv2.jpg/v1/fill/w_599,h_337,al_c,q_85/c5c26d_7cb7a87cb97143eebb8912a8a427b671~mv2.jpg"
    },
    {
    "id":3,
    "nombre":"Cejas",
    "category": "Faciales",
    "cantidad":1,
    "precio":1400,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAuoIWIzBIxpc6l2G3ZRF0cCFTWsVbql1nqg&usqp=CAU"
    },
    {
    "id":4,
    "nombre":"Depilacion",
    "category": "Corporales",
    "cantidad":1,
    "precio":1300,
    "img": "https://www.materialestetica.com/blog/wp-content/uploads/2016/05/tratamiento-depilacion-con-bandas-de-cera.jpg"
    } ,
    {
    "id":5,
    "nombre":"Dermapen",
    "category": "Faciales",
    "cantidad":1,
    "precio":1300,
    "img": "https://kibospa.cl/wp-content/uploads/2022/02/Microneedling-1200x900-1.jpg"
    },
    {
    "id":6,
    "nombre":"Drenaje Linfatico",
    "category": "Corporales",
    "cantidad":1,
    "precio":1300,
    "img": "https://osteopatiapilar.com/wp-content/uploads/quiromasaje-linfatico-clinica-osteopatia-pilar-pereza-sedavi.jpg"
    },
    {
    "id":7,
    "nombre":"Masaje Relajante",
    "category": "Corporales",
    "cantidad":1,
    "precio":1300,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHkDJP8udBBGGFkhY4fo31UcKLKCFLAm7uA&usqp=CAU"
    },
    {
    "id":8,
    "nombre":"Masaje Reductores",
    "category": "Corporales",
    "cantidad":1,
    "precio":1300,
    "img": "https://vanityspacostarica.com/wp-content/uploads/2021/11/tecnicas.jpg"
    },
    {
    "id":9,
    "nombre":"Mesoterapia",
    "category": "Corporales",
    "cantidad":1,
    "precio":1300,
    "img": "https://clinicaacidohialuronicomadrid.es/wp-content/uploads/2018/05/moises-mesoterapia.jpg"
    },
    {
    "id":10,
    "nombre":"Peeling Organico",
    "category": "Faciales",
    "cantidad":1,
    "precio":1300,
    "img": "https://luizadermatofuncional.com.br/wp-content/uploads/2018/07/Peeling-Organico-Interna.jpg"
    }      

]

export const getProducts = () =>{
return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve (products)
    }, 1000)
})
}


export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
})
}

export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id == id))
    }, 500)
})
}