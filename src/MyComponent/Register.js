import axios from 'axios'
import { useForm } from 'react-hook-form'



function Register() {

    const{handleSubmit,register}=useForm()

    const headers={
      'Content-Type':'multipart/form-data',
      //'Content-Type':'application/json'
      
    }

     function getUserReg(obj){
      obj.aadhar_card=obj.aadhar_card[0]
      obj.pan_card=obj.pan_card[0]
      obj.passport_front=obj.passport_front[0]
      obj.passport_back=obj.passport_back[0]
      const resp = axios.post('http://localhost:8000/api/signup/',obj,{headers:headers})
      console.log(resp.status)

     }
  return (
    <>
         <center>
    <br/>
    <form onSubmit={handleSubmit(getUserReg)}>
    <div className='row-ml-6'>
       <div className='col-md-6 text-center'>
    <h2 className='text-light'><b>Register User</b></h2>


    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='First name' {...register('first_name')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Last name'{...register('last_name')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Username'{...register('username')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Password'{...register('password')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Confirm Password'{...register('confirm_password')}/>
    </div>

    <div className="mb-4">
    <input className="form-check-input" type="radio" name="gender" value='Male'{...register('gender')}/>
    <label className="form-check-label text-light">Male</label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input className="form-check-input" type="radio" name="gender" value='Female'{...register('gender')}/>
    <label className="form-check-label text-light">Female</label>
  </div>

  <div className="mb-4">
    <select class="form-select text-center" aria-label="Default select example" {...register('role')}>
        <option value="">Select User Category</option>
        <option value="ADMIN">ADMIN</option>
        <option value="USER">USER</option>
    </select>
  </div>  

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Email Address'{...register('email')}/>
    </div>

    <div class="mb-3">
  <label  className='text-light'><b>Aadhar card</b></label>
  <input class="form-control" type="file"{...register('aadhar_card')} />
</div>

<div class="mb-3">
  <label  className='text-light'><b>Pan Card</b></label>
  <input class="form-control" type="file"{...register('pan_card')} />
</div>

<div class="mb-3">
  <label  className='text-light'><b>Passport Front</b></label>
  <input class="form-control" type="file" {...register('passport_front')}/>
</div>

<div class="mb-3">
  <label  className='text-light'><b>Passport Back</b></label>
  <input class="form-control" type="file" {...register('passport_back')}/>
</div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Country Code' {...register('country_code')}/>
    </div>
  
    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Contact No' {...register('contact_no')}/>
    </div>  

   

    <div className="mb-4">
    <input type='textarea' className='form-control text-center' placeholder='Address'{...register('address')}/>
    </div>


    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='City'{...register('city')}/>
    </div>


    <div className="mb-4">
    <input type='number' className='form-control text-center' placeholder='Pin Code'{...register('pincode')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='State' {...register('state')}/>
    </div>

    <div className="mb-4">
    <input type='text' className='form-control text-center' placeholder='Country' {...register('country')}/>
    </div>
  
<div className="mb-4">
    <input type='submit' className='btn btn-outline-success btn-lg' value='Create User'/>
  </div>


       </div>
    </div>
    </form>
    </center>
    </>
  )
}

export default Register