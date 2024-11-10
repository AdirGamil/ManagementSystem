import { useEffect, useState } from 'react'
import axios from 'axios'

import { CouponList } from '../cmps/CouponsSystem/CouponList'
import { CouponInput } from '../cmps/CouponsSystem/CouponInput'
import { CouponEdit } from '../cmps/CouponsSystem/CouponEdit'
import { FaPlus } from 'react-icons/fa'

const initialCouponData = {
  code: '',
  description: '',
  discountType: 'percentage',
  discountValue: 0,
  expiryDate: '',
  stackable: false,
  maxUses: 1,
  createdBy: 'admin',
  createdAt: new Date().toLocaleString(),
}

export function Coupons() {
  const [coupons, setCoupons] = useState([])
  const [isAddOpen, setIsAddOpen] = useState(false)
  const isAdmin = true //! Change this to false if not an admin

  useEffect(() => {
    async function fetchCoupons() {
      try {
        const res = await axios.get('/data/coupons.json')
        const data = res ? res.data : []
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
      <CouponInput />
      <CouponList coupons={coupons} isAdmin={isAdmin} />

      {isAdmin && (
        <button
          className="add-coupon-button"
          onClick={() => setIsAddOpen(true)}
          title="Add Coupon"
        >
          <FaPlus />
        </button>
      )}

      {isAddOpen && (
        <CouponEdit
          initialData={initialCouponData}
          onClose={() => setIsAddOpen(false)}
        />
      )}
    </div>
  )
}

