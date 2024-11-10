import { useState, useEffect } from 'react'
import { UserList } from '../cmps/UserSystem/UserList'
import axios from 'axios'

export function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get('/data/users.json')
        const data = res ? res.data : []
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
        setUsers([])
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="users-page">
      <UserList users={users} />
    </div>
  )
}
