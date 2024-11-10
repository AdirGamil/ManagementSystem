import { useState } from 'react'
import { UserPreview } from './UserPreview'
import { UserEdit } from './UserEdit'

export function UserList({ users }) {
  const [isEditOpen, setIsEditOpen] = useState(false)

  function handleAddUser() {
    setIsEditOpen(true)
  }

  return (
    <div className="user-list">
      <h2>User Management</h2>
      <button onClick={handleAddUser} className="add-user-button">
        Add User
      </button>

      <div className="users">
        {users.map((user) => (
          <UserPreview
            key={user.id}
            username={user.username}
            role={user.role}
          />
        ))}
      </div>

      {isEditOpen && <UserEdit onClose={() => setIsEditOpen(false)} />}
    </div>
  )
}
