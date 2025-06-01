import './sign.css'
import { useForm, } from 'react-hook-form'
import { useState } from 'react';

function SignUp(){

    
    // const [data, setData] = useState({
    //     email: "",
    //     password: ""
    // })

    // const handleSubmit = (data) =>{
    //     setData(data)
    // }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    return(
        <>
        <div className='con'>
            <div className="main">
                <div className="header">
                    <h1>Sign up</h1>
                </div>
                <form action="" className="form">
                    <div className="spread">
                      <label htmlFor="firstname">First Name</label>
                      <input type="text" name='firstname' id='firstname' onChange={handleChange}/>
                    </div>
                    <div className="spread">
                       <label htmlFor="lastname">Last Name</label>
                       <input type="text" id='lastname' name='lastname' onChange={handleChange}/>
                    </div>
                    <div className="spread">
                        <label htmlFor="email">Email</label>
                       <input type='email' onChange={handleChange}/>
                    </div>
                    
                    <button type="submit">
                        Sign-up
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignUp