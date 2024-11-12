import axios from "axios"

export async function fetchReports() {
    try {
      const res = await axios.get('/data/reports.json')
      return res ? res.data : []
    } catch (error) {
      console.error('Error fetching reports:', error)
      return []
    }
  }