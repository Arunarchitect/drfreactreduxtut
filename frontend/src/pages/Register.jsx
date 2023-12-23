import { useEffect, useState } from 'react'
import React from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom"
import { BiLogInCircle } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'

const Register = () => {

    const [formData, setFormData] = useState({
        "first_name":"",
        "last_name":"",
        "email":"",
        "password":"",
        "re_password":"",
    })

    const {first_name, last_name, email, password, re_password} = formData
    
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password != re_password){
            toast.error("passwords do not match")
        }
    }


  return (
    <div className="container auth__container">
                <h1 className="main__title">Register <BiUser /></h1>

                <form className="auth__form">
                    <input type="text"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange}
                        value={first_name}
                        required
                    />
                    <input type="text"
                        placeholder="Last name"
                        name="last_name"
                        onChange={handleChange}
                        value={last_name}
                        required
                    />
                    <input type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <input type="password"
                        placeholder="Retype-password"
                        name="re_password"
                        onChange={handleChange}
                        value={re_password}
                        required
                    />
                    <Link to="/">Forget Password ?</Link>

                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
  )
}

export default Register