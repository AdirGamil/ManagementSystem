import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { validCoupons } from '../../services/coupon.service'

/**
 * CouponInput component renders a simple form for users to input a coupon code and
 * apply it. If the coupon code is valid, it shows a success toast notification with
 * the coupon description. If the coupon code is invalid, it shows an error toast
 * notification.
 */
export function CouponInput() {
  const [couponCode, setCouponCode] = useState('')

  //  Handles the coupon code input change event.

  function handleInputChange(e) {
    setCouponCode(e.target.value)
  }

  // Handles the coupon apply button click event.

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
          onChange={handleInputChange}
        />
        <button className="apply-button" onClick={handleApplyCoupon}>
          Apply
        </button>
      </div>
    </div>
  )
}
