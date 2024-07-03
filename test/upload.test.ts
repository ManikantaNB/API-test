import controller from '../controller/upload.controller'

describe.only('Upload single file', () => {
    it('POST /upload/single', async()=>{
        const req = await controller.postUploadSingle('data\Cat.jpg')
        console.log(req.body);
        
    })

    it('POST /upload/multiple', async () => {
        const files = [
          'data/Cat.jpeg',
          'data/img.jpg'
        ]
        const res = await controller.postUploadMultiple(files);
        expect(res.body.length).toBe(2);
        expect(res.body[0].filename).toEqual('Cat.jpeg');
        expect(res.body[1].filename).toEqual('img.jpg');
      });
})
