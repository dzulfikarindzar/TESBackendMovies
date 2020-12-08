const products = {}
const model = require('../Models/product')
const respon = require('../Helpers/respon')

products.getAll = async (req, res) => {
    const { search } = req.query;
    const { orderBy, sort } = req.query;
    let result;
    try {
      if (search) {
        result = await model.getSearch(search);
      } else if (orderBy) {
        result = await model.getSort(orderBy, sort);
      } else {
        result = await model.getAll();
      }
      return respon(res, 200, result);
    } catch (error) {
      return respon(res, 500, error);
    }
  }

  products.get = async (req, res) => {
    try {
      const result = await model.get(req.params.id);
      return respon(res, 200, result);
    } catch (error) {
      return respon(res, 500, error);
    }
  }

products.add = async (req, res) => {
    try {
        const result = await model.addProd(req.body)
        return respon(res, 201, result)
    } catch (error){
        return respon(res, 400, error)
    }
    
}

products.update = async (req, res) => {
    try {
        const result = await model.updateProd(req.body)
        return respon(res, 201, result)
    } catch (error){
        return respon(res, 400, error)
    }
}

products.del = async (req, res) => {
   try {
       const result = await model.delProd(req.params.id)
        return respon(res, 200, result)
   }catch (error) {
        return res.send(res, 400, error)
   }
}

module.exports = products
