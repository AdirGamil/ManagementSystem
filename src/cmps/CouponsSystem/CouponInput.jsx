import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

export function CouponInput() {
  const [couponCode, setCouponCode] = useState('')

  const validCoupons = [
    { code: 'DISCOUNT10', description: '10% off' },
    { code: 'SAVE20', description: 'Save $20' },
  ]

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
      <h3>Apply Coupon</h3>
      <input
        type="text"
        value={couponCode}
        placeholder="Enter coupon code"
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button onClick={handleApplyCoupon}>Apply</button>
      <Toaster />
    </div>
  )
}
