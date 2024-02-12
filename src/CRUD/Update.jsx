import axios from 'axios'
import './home.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let userId = useParams()
    let navigate = useNavigate()

    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")

    let getName =(e)=>{
        setName(e.target.value)
    }
    let getSalary =(e)=>{
        setSalary(e.target.value)
    }
    let getCompany =(e)=>{
        setCompany(e.target.value)
    }

    useEffect(()=>{
        axios.get(`http://localhost:3005/employees/${userId.id}`)
        .then((res)=>{
            setName(res.data.empName)
            setSalary(res.data.empSalary)
            setCompany(res.data.empCompany)
            // console.log(res.data);
        })
        .catch(()=>{
            console.log("Error!!");
        })
        
    },[])

    let updateUser =()=>{

        let payLoad = {
            empName : name,
            empSalary : salary,
            empCompany : company
        }
        if(payLoad.empName !== '' || payLoad.empSalary !=='' || payLoad.empCompany !== ''){
            axios.put(`http://localhost:3005/employees/${userId.id}`,payLoad)
            .then(()=>{
                console.log("Updated");
            })
            .catch(()=>{
                console.log("Error!!");
            })
            navigate('/user')
        } else {
            alert("Don't please the fields as Empty!!!")
        }
    }

    return (
        <div id='update-user'>
            <form action="" className='update-form'>
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
                        <td><input type="text" required  className='form-input'placeholder='Enter your Company' value={company} onChange={getCompany} /></td>
                    </tr>
                    <tr>
                    <td colSpan={2} ><button type="submit" className='form-btn' onClick={updateUser}>UPDATE</button></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Update
