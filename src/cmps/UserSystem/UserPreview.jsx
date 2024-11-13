import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { UserEdit } from './UserEdit'
import { FaEdit, FaTrash } from 'react-icons/fa'

/**
 * A single user preview component. It displays the user's data and allows
 * to edit or delete the user.
 */
export function UserPreview({
  id,
  username,
  role,
  password,
  registrationDate,
  lastLoginDate,
}) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const initialData = {
    id,
    username,
    role,
    password,
    registrationDate,
    lastLoginDate,
  }

  //  Toggle the edit state

  function toggleEdit() {
    setIsEditOpen((prev) => !prev)
  }

  /**
   * Handle the delete button click by showing a toast message and
   * closing the edit dialog if it was open.
   */
  function handleDelete() {
    toast.success('User deleted successfully!')
    if (isEditOpen) toggleEdit()
  }

  return (
    <div className="user-preview">
      <div className="user-info">
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Password:</strong> {password}
        </p>
        <p>
          <strong>Registration Date:</strong> {registrationDate}
        </p>
        <p>
          <strong>Last Login Date:</strong> {lastLoginDate}
        </p>
        <p>
          <strong>Role:</strong> {role}
        </p>
      </div>
      <div className="button-group">
        <button onClick={toggleEdit} title="Edit User" className="edit-button">
          <FaEdit /> Edit
        </button>
        <button
          onClick={handleDelete}
          title="Delete User"
          className="delete-button"
        >
          <FaTrash /> Delete
        </button>
      </div>

      {isEditOpen && (
        <UserEdit initialData={initialData} onClose={toggleEdit} />
      )}
    </div>
  )
}
