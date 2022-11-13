import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => { 

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Oscar Viana')

    navigate(lastPath, {
        replace: true //evita que pueda regresar al historial anterior
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
