import { useEffect, useState } from 'react'
import axios from 'axios'
import { CouponList } from '../cmps/CouponsSystem/CouponList'
import { CouponInput } from '../cmps/CouponsSystem/CouponInput'

export function Coupons() {
  const [coupons, setCoupons] = useState([])

  useEffect(() => {
    async function fetchCoupons() {
      try {
        const res = await axios.get('/data/coupons.json')
        const data = Array.isArray(res.data) ? res.data : []
        setCoupons(data)
      } catch (error) {
        console.error('Error fetching coupons:', error)
        setCoupons([])
      }
    }

    fetchCoupons()
  }, [])

  return (
    <div className="coupons">
      <h2>Coupons Management</h2>
      <CouponList coupons={coupons} />
      <CouponInput />
    </div>
  )
}
