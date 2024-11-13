import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'

/**
 * Login component handles user login process
 * and navigating to the admin page if the login is successful.
 */
export function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  //! Can be secure by .env file and adding to .gitignore
  function handleSubmit({ username, password }) {
    if (username === 'admin' && password === 'admin') {
      toast.success('Welcome!')
      navigate('/admin')
    } else {
      toast.error('Wrong username or password')
    }
  }

  return (
    <div className="login">
      <h2 className="login-title">Login</h2>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(credentials)
        }}
      >
        <label className="login-label" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="admin"
          className="login-input"
          value={credentials.username}
          onChange={({ target }) =>
            setCredentials({ ...credentials, username: target.value })
          }
        />
        <label className="login-label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="admin"
          className="login-input"
          value={credentials.password}
          onChange={({ target }) =>
            setCredentials({ ...credentials, password: target.value })
          }
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}
