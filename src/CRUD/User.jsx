import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './home.css'
import { Link  } from 'react-router-dom';

const User = () => {
    let [relode,setRelode] = useState(false)
    let [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/employees")
        .then((resp)=>{
            setData(resp.data)
        })
        .catch(()=>{
            console.log("Error");
        })
    },[relode])

    let deleteUser =(id)=>{
        axios.delete(`http://localhost:3005/employees/${id}`)
        .then(()=>{
            console.log("User Deleted!!");
        })
        .catch(()=>{
            console.log("Error!!!");
        })
        setRelode(true)
    }

    return (
        <div id='user'>  
            {
                data.map((x)=>{
                    return(
                        <table className='user-details' cellSpacing={0} cellPadding={0} >
                            <tr>
                                <td>Name</td>
                                <td>: {x.empName}</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td>: {x.empSalary}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>: {x.empCompany}</td> 
                            </tr>
                            <tr>
                            <td>
                                <Link to={`/update/${x.id}`} className='user-btn-edit'>
                                    <button className='user-btn'>
                                        EDIT
                                    </button>
                                </Link>
                               </td>
                            <td><button className='user-btn' onClick={()=>{deleteUser(x.id)}}>Delete</button></td>
                            </tr>
                        </table>
                    )
                })
            }
               
        </div>
    )
}

export default User
