import { useEffect, useState } from 'react'
import { fetchCoupons, initialCouponData } from '../services/coupon.service'
import { CouponList } from '../cmps/CouponsSystem/CouponList'
import { CouponEdit } from '../cmps/CouponsSystem/CouponEdit'
import { FaPlus } from 'react-icons/fa'
import { OrderSummary } from '../cmps/CouponsSystem/OrderSummary'

/**
 * Coupons page component displays a list of coupons and allows
 * admins to add new coupons.
 */
export function Coupons() {
  const [coupons, setCoupons] = useState([])
  const [isAddOpen, setIsAddOpen] = useState(false)
  const isAdmin = true //! Change this to false if not an admin

  /**
   * Fetches coupons when the component mounts.
   */
  async function loadCoupons() {
    const data = await fetchCoupons()
    setCoupons(data)
  }

  useEffect(() => {
    loadCoupons()
  }, [])

  return (
    <div className="coupons">
      <OrderSummary />
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
