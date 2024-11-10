import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

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

export function CouponInput() {
  const [couponCode, setCouponCode] = useState('')



  function handleApplyCoupon() {
    if (!couponCode) {
      // If the user didn't enter a coupon code, show an error message
      toast.error('Please enter a coupon code')
      return
    }

    try {
      // Find the coupon in the list of valid coupons
      const coupon = validCoupons.find((c) => c.code === couponCode)

      if (!coupon) {
        // If the coupon is not found, throw an error
        throw new Error('Invalid coupon code')
      }

      // Show a success message if the coupon is valid
      toast.success(
        `Coupon "${couponCode}" applied successfully! ${coupon.description}`
      )
      // Reset the coupon code input field
      setCouponCode('')
    } catch (error) {
      // Show an error message if there's a problem applying the coupon
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
      <Toaster />
    </div>
  )
}
