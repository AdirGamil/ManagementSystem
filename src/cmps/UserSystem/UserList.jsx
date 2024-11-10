import { useState } from 'react'
import { UserPreview } from './UserPreview'

export function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>User Management</h2>
      <button className="add-user-button">
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
    </div>
  )
}
