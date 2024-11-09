import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

export function CouponInput() {
  const [couponCode, setCouponCode] = useState('')

  const validCoupons = [
    { code: 'DISCOUNT10', description: '10% off for first-time users' },
    { code: 'SAVE20', description: 'Save $20 on purchases over $100' },
    { code: 'SUMMER15', description: '15% off summer collection' },
    { code: 'WELCOME5', description: '5% off on first purchase' },
    { code: 'FREESHIP', description: 'Free shipping on orders over $50' },
    { code: 'VIP25', description: '25% off for VIP members' },
    { code: 'HOLIDAY50', description: '50% off holiday sale' },
    { code: 'FLASH30', description: '30% off flash sale' },
    { code: 'STUDENT20', description: '20% off for students' },
    { code: 'BLACKFRIDAY', description: '70% off Black Friday special' },
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
      <h3 className="coupon-title">Apply Coupon</h3>
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
      <Toaster />
    </div>
  )
}
