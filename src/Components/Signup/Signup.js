import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Config } from '../../Config';
import "./Signup.css"


function Signup() {
    const navigate = useNavigate();

    const formik = useFormik({
      initialValues :{
        name:"",
        email : "",
        password : "",
      },
      validate:(values)=>{
        let error = {};
        if(!values.name){
          error.name = "Please enter your name"
        }
        if(!values.email){
          error.email = "Please enter Your Email"
        }
        if((values.email)&&(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
          error.email =  "Please enter valid Email"
        }
        if(!values.password){
          error.password = "Please enter your Password"
        }
        return error;
      },
      onSubmit : async(values)=>{
        
        try {
          let exist = await axios.get(`${Config.api}/users`,values)
          if(exist){
            alert("Email already Exist")
          }else{
            let user = await axios.post(`${Config.api}/signup`,values)
          console.log("registered")
          navigate('/Login')
        }
          
          
        } catch (error) {
          console.log(error)
        }
          
      }
    })
    
    


  return (
    <div className='Signup-Container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='Signup-Wrapper'>
        <h1 className='Signup-Title'>Welcome..!</h1>
        <div className='Signup-SubTitle'>Signup with Email</div>
        <input className='Signup-Input' placeholder="User Name" name='name'  
                                                             onChange={formik.handleChange} 
                                                             onBlur={formik.handleBlur} 
                                                             value={formik.values.name}/>
                {formik.touched.name && formik.errors.name 
               ? <span style={{color:"#aaaaaa",fontSize:"12px",marginBottom:"15px"}}>{formik.errors.name}</span>
               : null
               }
        <input className='Signup-Input' placeholder="E-mail"  name='email'  
                                                            onChange={formik.handleChange} 
                                                            onBlur={formik.handleBlur} 
                                                            value={formik.values.email}/>
               {formik.touched.email && formik.errors.email 
               ? <span style={{color:"#aaaaaa",fontSize:"12px",marginBottom:"15px"}}>{formik.errors.email}</span>
               : null
               }                                               
        <input className='Signup-Input' type={"password"} placeholder="Password"name='password'  
                                                             onChange={formik.handleChange} 
                                                             onBlur={formik.handleBlur} 
                                                             value={formik.values.password}/>
                {formik.touched.password && formik.errors.password 
               ? <span style={{color:"#aaaaaa",fontSize:"12px",marginBottom:"15px"}}>{formik.errors.password}</span>
               : null
               }
        <button type='submit' className='Signup-Button'>Register</button>
        <div>Already have an account ?</div><span className='Signup-Login' onClick={()=>{navigate('/')}}>Login..</span>
        </div>
        </form>
        </div>
  )
}

export default Signup