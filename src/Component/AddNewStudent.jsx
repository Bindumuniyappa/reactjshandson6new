import React,{useState,useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import DataContext from './DataContext';

const AddNewStudentPage = () => {
    const context=useContext(DataContext);
    const navigate=useNavigate();
    const [state,setDetails]=useState({
      name:"",
      age:"",
      course:"",
      batch:""
     });
    const handleChange=(e)=>{
      setDetails({...state,[e.target.name]:e.target.value})
        console.log(e.target.value);
    }
    const onSubmit=(e)=>{
      e.preventDefault();
      context.updateFunction((prevState)=>{prevState.push(state); 
    return prevState})
      navigate('/tablepage')
    }
  return (
    <div>
        <input type='text' placeholder='Name' name="name" onChange={handleChange} className='inputCon'/>
        <input type='number' placeholder='Age'name="age" onChange={handleChange} className='inputCon'/>
        <br/>
        <br/>
        <input type='text' placeholder='Course' name="course" onChange={handleChange} className='inputCon'/>
        <input type='text' placeholder='Batch' name="batch" onChange={handleChange} className='inputCon'/>
        <br/>
        <br/>
        <br/>
        <Link to='/tablepage'><button  className='btn_btn'>Cancel</button></Link>
        <button className='btn_btn' onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default AddNewStudentPage