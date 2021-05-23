import React, { useState,useEffect } from 'react'
import {Nav,Navbar,FormControl,Form,Button,Carousel,Card,Toast,Alert,Spinner} from 'react-bootstrap'
import { FaAlgolia, FaBlog, FaDatabase, FaHeart, FaHeartbeat, FaReadme, FaRegistered, FaUser, FaUserSecret, FaVoicemail } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {Loginuser, Refresherror} from '../Action/Loginaction'
import { Registeraction } from '../Action/Registeraction'
import { Link } from 'react-router-dom'
import { Todo } from '../Action/Todoaction'
export const Register = ({history}) =>{
    const [register,setregister]=useState({})
    const dispatch = useDispatch()

    const Blog= useSelector(state=>state)
    const {registererror,loading}=Blog
    
useEffect(()=>{
    dispatch(Refresherror())
  },[])
    const handlechange = (evt) =>{
        setregister({...register,[evt.target.name]:evt.target.value})
    }

    const handleclick = (evt) =>{
        evt.preventDefault()
        dispatch(Registeraction(register,history))
        dispatch(Todo())
    }
    return (
        <div>
        <Navbar  bg="dark" variant="dark">
     <FaBlog style={{color:'white',fontSize:'2.9rem'}}/><Navbar.Brand style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} href="#home">Blogs</Navbar.Brand>
     <Navbar.Brand style={{color:'white',fontSize:'1.5rem',marginLeft:'305px',fontFamily:'cursive',fontWeight:'bolder'}} href='/login'><FaAlgolia style={{color:'white',fontSize:'2.3rem'}}/>Login</Navbar.Brand>
  </Navbar>
  {loading && <>
      <div style={{textAlign:'center',fontSize:'1.5rem'}}>
      <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
  </div>
</>}
 
  <Form style={{textAlign:'center',width:'30%',lineHeight:'40%',marginLeft:'500px',marginTop:'40px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',paddingBottom:'20px',paddingLeft:'20px',paddingTop:'20px',paddingRight:'20px',borderRadius:'30px'}} onSubmit={handleclick}>
      <Form.Group controlId="formBasicFirstname">
      {registererror && registererror.first_name && <Alert variant="danger">{registererror.first_name[0]}</Alert>}
    <FaUser/><Form.Label style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'20px'}}>Firstname</Form.Label>
    <Form.Control type="Firstname" style={{textAlign:'center',height:'50px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} value={register.first_name} required onChange={handlechange} name='first_name' placeholder="Enter Firstname" />
  </Form.Group>
  <Form.Group controlId="formBasicUsername">
  {registererror && registererror.username &&  <Alert variant="danger">{registererror.username[0]}</Alert>}   
   <FaUser/><Form.Label style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'20px',marginTop:'30px'}}>Username</Form.Label>
    <Form.Control type="Username" style={{textAlign:'center',height:'50px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} value={register.username} required onChange={handlechange} name='username' placeholder="Enter username" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
  {registererror && registererror.email &&  <Alert variant="danger">{registererror.email[0]}</Alert>}
    <FaVoicemail/><Form.Label style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'20px',marginTop:'30px'}}>Email address</Form.Label>
    <Form.Control type="email" style={{textAlign:'center',height:'50px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} value={register.email} required onChange={handlechange} name='email' placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
      <FaUserSecret/><Form.Label style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'20px',marginTop:'30px'}}>Password</Form.Label>
    <Form.Control type="password" style={{textAlign:'center',height:'50px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} value={register.password} name='password' required onChange={handlechange} placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button  bg="dark" variant="dark" type="submit">
    Submit
  </Button>
  <h6 style={{marginTop:'10px',marginRight:'200px',fontWeight:'bolder'}}>Already user? <Link to = '/login'>Login</Link></h6>
</Form>
<h4 style = {{marginTop:'40px',float:'right',marginRight:'100px'}}><FaReadme/>Made the blogs here <FaHeart style={{color:'red'}}/></h4>
        </div>
    )
}