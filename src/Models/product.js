const db = require('../Config/db')
const products = {}


products.get = () =>{
    return new Promise((resolve, reject) =>{
        db.query("SELECT * FROM public.product ORDER BY price DESC")
        .then((res) => {
            if (res.rows.length == 0) {
                resolve({msg : "Data Kosong"})
            } else {
                resolve(res.rows)
            }
        })
        .catch((err) => {
            reject(err)
        })
    })
}

products.addProd = (data) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO public.product(name, image, price, category) VALUES ('${data.name}', '${data.image}', ${data.price}, '${data.category}')`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

products.updateProd = (data) =>{
    return new Promise((resolve, reject) =>{
        db.query(`UPDATE public.product SET name='${data.name}', image='${data.image}', price=${data.price}, category='${data.category}' WHERE idprod=${data.idprod}`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


products.delProd = (id) =>{
    return new Promise((resolve, reject) =>{
        db.query(`DELETE FROM public.product WHERE idprod=${id}`)
        .then((res) => {
            resolve(id)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


products.getName = (data) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM public.product WHERE name LIKE '${data}%'`)
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


module.exports = products



