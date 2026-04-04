import React, {useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
const Register = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [errors,setErrors]=useState({})
    const [success,setSuccess]=useState(false)
    const[loading,setLoading]=useState(false)
    const handleRegistration = async (e)=>{
        e.preventDefault();
        const userdata={username,email,password}
        setLoading(true)
        try{
            const response= await axios.post('http://127.0.0.1:8000/api/v1/register/',userdata)
            console.log(response.data)
            setErrors({})
            setSuccess(true)
        }catch(error){
            if (error.response && error.response.data) {
        setErrors(error.response.data);
        }
    }finally{
        setLoading(false)
    }
    }
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-4'> Create an Account</h3>
                <form onSubmit={handleRegistration}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                    </div>
                    <div className='mb-3'>
                        <input type='email' className='form-control' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <small>{errors.email && <div className='text-danger'>{errors.email[0]}</div>}</small>
                    </div>
                    <div className='mb-3'>
                         <input type='password' className='form-control' placeholder='Set password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                         <small>{errors.password && <div className='text-danger'>{errors.password[0]}</div>}</small>
                    </div>
                    {success && <div className='alert alert-success'>Registration Successful</div>}
                    <button 
  type='submit' 
  className='btn btn-info d-block mx-auto' 
  disabled={loading}
>
  {loading ? (
    <>
      <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
      Please wait...
    </>
  ) : (
    "Register"
  )}
</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register