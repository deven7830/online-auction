import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function Products() {
  
  const{handleSubmit,register}=useForm()

  const headers={
    'Content-Type':'multipart/form-data',
    //'Content-Type':'application/json'
    
  }

  async function addProduct(obj){
    obj.product_images=obj.product_images[0]
    const resp =await  axios.post('http://localhost:8000/api/product/',obj,{headers:headers})
    console.log(resp.status)
  }
  return (
    <>
    <center>
    <br/>
    <form onSubmit={handleSubmit(addProduct)}>
    <div className='row-ml-6'>
       <div className='col-md-6 text-center'>
    <h2 className='text-light'><b>Add Product For Auction</b></h2>
    
    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Product Name' {...register('product_name')}/>
    </div>

    <div className="mb-4">
      <textarea className='form-control text-center' placeholder='Product Description'  rows={4} {...register('product_description')}/>
    </div>
    
   <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Product Manufaturing Year' {...register('product_manufacture_year')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Product Base Price' {...register('product_base_price')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Product Owner' {...register('owner')}/>
    </div>

    <div className="mb-4">
    <input multiple type='file' className='form-control text-center'{...register('product_images')} />
    </div>
{/*
    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Product Verification' {...register('product_verify')}/>
    </div>
  */}
    <div className="mb-4">
    <input type='submit' className='btn btn-outline-primary btn-lg col-5' value='SUBMIT'/>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    <input type='reset' className='btn btn-outline-warning btn-lg col-5' value='RESET'/>
  </div>

    </div>
    </div>
    </form>
    </center>
    </>
  )
}

export default Products