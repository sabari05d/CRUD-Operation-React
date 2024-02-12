import './home.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")
    let navigate = useNavigate(false)

    let getName =(e)=>{
        setName(e.target.value)
    }
    let getSalary =(e)=>{
        setSalary(e.target.value)
    }
    let getCompany =(e)=>{
        setCompany(e.target.value)
    }

    let getDetails =(e)=>{
        e.preventDefault()
        let employee = {
            empName : name,
            empSalary : salary,
            empCompany : company
        }

        if(employee.empName !== '' || employee.empSalary !== '' || employee.empCompany !== ''){
            axios.post("http://localhost:3005/employees",employee)
            .then(()=>{
                console.log("Data Stored Successfully!!");
            })
            .catch(()=>{
                console.log("Error in storing data!!!")
            })
            navigate("/user")
        } else {
            alert("Please Fill the Empty Fields!")
        }
    }
    return (
        <div id='create'>
            <form className='create-form'>
                <table cellSpacing={10} border={0} cellPadding={0}>
                    <tr>
                        <td><label htmlFor="">Name</label></td>
                        <td> <input type="text" required className='form-input' placeholder='Enter your Name'  value={name} onChange={getName} /></td>
                    </tr>
                    <tr>
                        <td><label>Salary</label></td>
                        <td><input type="number" required className='form-input' placeholder='Enter your Salary' value={salary} onChange={getSalary} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Company</label></td>
                        <td><input type="text"  required className='form-input'placeholder='Enter your Company' value={company} onChange={getCompany} /></td>
                    </tr>
                    <tr>
                    <td colSpan={2} ><button type="submit" className='form-btn' onClick={getDetails}>SUBMIT</button></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default CreateUser
