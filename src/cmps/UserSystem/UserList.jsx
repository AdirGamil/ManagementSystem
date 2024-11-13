import { useState } from 'react'
import { UserPreview } from './UserPreview'
import { UserEdit } from './UserEdit'

/**
 * A list of users in the system. Each user is represented by a UserPreview
 * component. The component also includes a button to add a new user, which
 * opens a UserEdit dialog for adding a new user.
 */
export function UserList({ users }) {
  const [isAddOpen, setIsAddOpen] = useState(false)

  /**
   * Toggles the add user dialog on and off
   */
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
      {isAddOpen && (
        <UserEdit
          // Pass an empty object as the initial data
          initialData={{}}
          // Close the dialog when it's closed
          onClose={toggleAddUser}
        />
      )}
    </div>
  )
}
