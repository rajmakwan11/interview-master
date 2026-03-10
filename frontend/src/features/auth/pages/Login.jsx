import  { useState } from 'react'
import "../auth.form.scss"
import { Link } from 'react-router'
import  {useAuth}  from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {

  const {loading, handleLogin} = useAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Handlesubmit = async (e)=>{
    e.preventDefault()
    await handleLogin({email,password})
    navigate("/")
  }

  if(loading){
    return(<main><h1>Loading.......</h1></main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={Handlesubmit}>
          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" value={email} autoComplete='current-email' placeholder='Enter Your Email' onChange={(e)=>{
              setEmail(e.target.value)
            }} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" autoComplete='current-password' value={password} placeholder='Enter Your Password' onChange={(e)=>{
              setPassword(e.target.value)
            }} />
          </div>
          <button className='button primary-button'>Login</button>
        </form>

       <p>Don't Have An Account? <Link to={"/register"}>Register</Link></p>

      </div>
    </main>
  )
}

export default Login