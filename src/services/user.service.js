import axios from 'axios'

export async function fetchUsers() {
  try {
    const res = await axios.get('/data/users.json')
    return res ? res.data : []
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}
