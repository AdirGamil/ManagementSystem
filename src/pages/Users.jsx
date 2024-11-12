import { useState, useEffect } from 'react'
import { UserList } from '../cmps/UserSystem/UserList'
import { fetchUsers } from '../services/user.service'

export function Users() {
  const [users, setUsers] = useState([])

  // Load users data from the service
  async function loadUsers() {
    const data = await fetchUsers()
    setUsers(data)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className="users-page">
      <UserList users={users} />
    </div>
  )
}
