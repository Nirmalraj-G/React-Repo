import React from 'react'
import './Task6Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Task6() {
  return (
  <div className='container' id='ml'>
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <img src='https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ='></img>
            </div>
            <div class="col-sm-6">
                <h3 >Member Login</h3>
                <FontAwesomeIcon icon={faEnvelope} />
                <input type='text' placeholder=' E-mail'></input><br></br><br></br>
                <FontAwesomeIcon icon={faLock} />
                <input type='text' placeholder='*********'></input><br></br><br></br>
                <button>Login</button><br></br><br></br>
                Forget<a href='#'>UserName</a>/<a href='#'>Password ?</a><br></br><br></br>
                <a href='#'>Create Your Account <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
        </div>
    </div>
  )
}
