import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiLogInCircle } from "react-icons/bi"


const ResetPassword = () => {
    const [formData, setFormData] = useState({
        "email": ""
    })

    const { email } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <div className="container auth__container">
                <h1 className="main__title">Login <BiLogInCircle /></h1>

                <form className="auth__form">
                    <input type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />

                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Reset password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword