import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Toaster, toast } from 'react-hot-toast'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (!username || !password) {
      toast.error('Please fill in all fields')
      return
    }

    if (username === 'admin' && password === 'admin') {
      toast.success('Welcome!')
      console.log('Login success')

      navigate('/admin')
    } else {
      toast.error('Wrong username or password')
      console.log('Login failed')
    }
  }

  return (
    <div className="login">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="admin"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="login-label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="admin"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}
