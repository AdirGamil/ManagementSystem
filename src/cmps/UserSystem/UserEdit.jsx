import { useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { toast } from 'react-hot-toast'


export function UserEdit({ initialData = {}, onClose }) {
  const dialogRef = useRef(null)
  const isEdit = !!initialData.username

  // Show the dialog when the component is mounted.
  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  // Close the dialog when the close button is clicked or when the save button is clicked.
  function handleClose() {
    dialogRef.current.close()
    if (onClose) onClose()
  }

  // Save the user and close the dialog when the save button is clicked.
  function handleSave() {
    if (isEdit) {
      toast.success('User updated successfully!')
    } else {
      toast.success('User added successfully!')
    }
    handleClose()
  }

  return (
    <dialog ref={dialogRef} className="user-edit-dialog">
      <div className="user-edit-content">
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>

        {/* The form for adding or editing the user. */}
        <form>
          <label>
            Username:
            <input
              type="text"
              name="username"
              defaultValue={initialData.username || ''}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              defaultValue={initialData.password || ''}
            />
          </label>

          <label>
            Role:
            <select name="role" defaultValue={initialData.role || 'User'}>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="User">User</option>
            </select>
          </label>
          <label>
            Registration Date:
            <input
              type="date"
              name="registrationDate"
              defaultValue={initialData.registrationDate || ''}
            />
          </label>
        </form>
        <div className="actions">
          <button className="save-button" onClick={handleSave}>
            {isEdit ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </dialog>
  )
}
