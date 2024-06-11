import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddRecipe = () => {
    const [data,setData]=useState(
        {
            "rname":"",
            "rid":"",
            "rdesc":"",
            "rimage":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Successfully added")
                    }
                else{
                    alert("Error")
                }
            }
        ).catch()
    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Recipe Name</label>
                            <input type="text" className="form-control" name='rname' value={data.rname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Recipe Id</label>
                            <input type="text" className="form-control" name='rid' value={data.rid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Recipe Description</label>
                            <input type="text" className="form-control" name='rdesc' value={data.rdesc} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="text" className="form-control" name='rimage' value={data.rimage} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRecipe