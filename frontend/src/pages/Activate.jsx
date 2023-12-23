import React from 'react'
import {BiUserCheck} from 'react-icons/bi'

const Activate = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="container auth__container">
        <h1 className="main__title">Activate <BiUserCheck /></h1>


            <button className="btn btn-accent btn-activate danger" type="submit" onClick={handleSubmit}>Activate Account</button>

    </div>
  )
}

export default Activate