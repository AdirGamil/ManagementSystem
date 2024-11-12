import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { validCoupons } from '../../services/coupon.service' 

export function CouponInput() {
  const [couponCode, setCouponCode] = useState('')

  function handleApplyCoupon() {
    if (!couponCode) {
      toast.error('Please enter a coupon code')
      return
    }

    try {
      const coupon = validCoupons.find((c) => c.code === couponCode)

      if (!coupon) {
        throw new Error('Invalid coupon code')
      }

      toast.success(
        `Coupon "${couponCode}" applied successfully! ${coupon.description}`
      )
      setCouponCode('')
    } catch (error) {
      toast.error(error.message || 'Failed to apply coupon')
    }
  }

  return (
    <div className="coupon-input">
      <h4 className="coupon-title">Apply Coupon</h4>
      <div className="coupon-container">
        <input
          type="text"
          value={couponCode}
          placeholder="Enter coupon code"
          className="coupon-code-input"
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="apply-button" onClick={handleApplyCoupon}>
          Apply
        </button>
      </div>
    </div>
  )
}
