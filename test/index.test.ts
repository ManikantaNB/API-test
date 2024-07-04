
// import * as supertest from 'supertest';
// const request = supertest('http://localhost:3000')
import controller from '../controller/index.controller'

//GET REQUEST
describe.only('GET Requests', ()=> {
    
    it('GET /PHONES', async()=>{
        const res = await controller.getProduct()
        // const res = await request
        // .get('/PHONES')
        console.log(res.body)
        expect(res.statusCode).toBe(200)
    })
})

//POST REQUEST
let postProduct;
describe.only('Post requests', ()=>{

    // it('POST /PHONES', async()=>{
    //     const data ={
    //         name: 'Samsung',
    //         series: 's24 U',
    //         price: 110000
    //     }

    //     const res = await request
    //     .post('/PHONES')
    //     .send(data)
    //     console.log(res.body)
    //     expect(res.statusCode).toBe(201)
    //     expect(res.body.name).toBe(data.name)
    // })
    
    
    const data = {
        name: 'Samsung',
        series: 'A22',
        price: 10000
    }

    beforeAll( async()=>{
        postProduct = await controller
        .postProduct(data)
        console.log("Created sucessfully");
        
    })

    afterAll( async()=>{
        postProduct = await controller
        .deleteProduct(postProduct.body.id)
        console.log("Delected sucessfully");
        
    })

    it('GET request', async()=>{
        const res = await controller.getByid(postProduct.body.id)
        console.log(res.body);
        
    })
})

//PUT REQUEST
describe('PUT requests', ()=>{

    it('PUT /PHONES/{id}', async()=>{
        const data ={
            name: 'SAMSUNG',
            series: 'S24 ULTRA',
            price: 119000
        }

        const res = await controller
        .putProduct(data, postProduct.body.id)
        console.log(res.body)
        expect(res.statusCode).toBe(200)
        expect(res.body.name).toBe(data.name)
    })

    const data = {
        name: 'Samsung',
        series: 'A22',
        price: 10000
    }

    beforeAll( async()=>{
        postProduct = await controller
        .postProduct(data)
        console.log("Created sucessfully");
        
    })

    afterAll( async()=>{
        postProduct = await controller
        .deleteProduct(postProduct.body.id)
        console.log("Delected sucessfully");
        
    })
})

//DELECT REQUEST 
describe('DELECT REQUEST', ()=>{
    it('DELECT /PHONES/a457', async()=>{
        const res = await controller.deleteByid(postProduct.body.id)
        console.log(res.body);
        expect(res.statusCode).toBe(200)
    })

     const data = {
        name: 'Samsung',
        series: 'A22',
        price: 10000
    }

    beforeAll( async()=>{
        postProduct = await controller
        .postProduct(data)
        console.log("Created sucessfully");
        
    })

    afterAll( async()=>{
        postProduct = await controller
        .deleteProduct(postProduct.body.id)
        console.log("Delected sucessfully");
        
    })
})


//HOOKS 


  