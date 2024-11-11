import { FaEdit, FaTrash } from 'react-icons/fa'

export function UserPreview({
  id,
  username,
  role,
  password,
  registrationDate,
  lastLoginDate,
}) {
  return (
    <div className="user-preview">
      <div className="user-info">
        <p>ID: {id}</p>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        <p>Registration Date: {registrationDate}</p>
        <p>Last Login Date: {lastLoginDate}</p>
        <p>Role: {role}</p>
      </div>
      <div className="button-group">
        <button title='Edit User' className="edit-button">
          <FaEdit /> Edit
        </button>
        <button title='Delete User' className="delete-button">
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  )
}
