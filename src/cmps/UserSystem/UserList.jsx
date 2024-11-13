import { useState } from 'react'
import { UserPreview } from './UserPreview'
import { UserEdit } from './UserEdit'

export function UserList({ users }) {
  const [isAddOpen, setIsAddOpen] = useState(false)

  function toggleAddUser() {
    setIsAddOpen((prev) => !prev)
  }

  return (
    <div className="user-list">
      <h1>User Management</h1>
      <button onClick={toggleAddUser} className="add-user-button">
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
      {isAddOpen && <UserEdit initialData={{}} onClose={toggleAddUser} />}
    </div>
  )
}
