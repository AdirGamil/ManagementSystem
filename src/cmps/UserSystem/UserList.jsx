import { useState } from 'react'
import { UserPreview } from './UserPreview'
import { UserEdit } from './UserEdit'

export function UserList({ users }) {
  const [isAddOpen, setIsAddOpen] = useState(false)

  // Opens the add user dialog.
  function handleAddUser() {
    setIsAddOpen(true)
  }

  // Closes the add user dialog.
  function handleCloseAddUser() {
    setIsAddOpen(false)
  }

  return (
    <div className="user-list">
      <h2>User Management</h2>
      <button onClick={handleAddUser} className="add-user-button">
        Add User
      </button>

      {/* User list  */}
      <div className="users">
        {users.map((user) => (
          <UserPreview
            key={user.id}
            id={user.id}
            username={user.username}
            password={user.password}
            registrationDate={user.registrationDate}
            lastLoginDate={user.lastLoginDate}
            role={user.role}
          />
        ))}
      </div>

      {/* Add user dialog */}
      {isAddOpen && <UserEdit initialData={{}} onClose={handleCloseAddUser} />}
    </div>
  )
}
