import * as supertest from 'supertest';
import config from '../config/base.config'
const request = supertest(config.baseUrl)

// const supertest = require('supertest');
// const config = require('../config/base.config');
// const request = supertest(config.baseUrl);


class productController{
    getProduct(){
        return request.get('/PHONES')
    }
    postProduct(data){
        return request.post('/PHONES')
        .send(data)
    }
    deleteProduct(id){
        return request.delete('/PHONES/'+id);
    }
    getByid(id){
        return request.get('/PHONES/'+id)
    }
    putProduct(data, id){
        return request.put('/PHONES/'+id)
        .send(data)
    }
    deleteByid(id){
        return request.delete('/PHONES/'+id)
    }

}

export default new productController() 