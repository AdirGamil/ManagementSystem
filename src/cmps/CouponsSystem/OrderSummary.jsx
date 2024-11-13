import { CouponInput } from './CouponInput'

/**
 * OrderSummary component displays a summary of an order including
 * product cost, applied coupon code, and subtotal after discount.
 */
export function OrderSummary() {
  // Initial product cost before any discount
  const initialAmount = 100

  // List of demo coupons with code and discount
  const demoCoupons = [
    { code: 'DISCOUNT10', description: '10% off', discount: '10%' },
    { code: 'WELCOME5', description: '5% off', discount: '5%' },
  ]

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      {/* Display the initial product cost */}
      <div className="summary-item">
        <p>Product Cost:</p>
        <span>{initialAmount} ₪</span>
      </div>

      <CouponInput />

      {/* Display the code of the first demo coupon */}
      <div className="summary-item">
        <p>Coupon Code:</p>
        <span>{demoCoupons[0].code}</span>
      </div>

      <div className="summary-item">
        <p>Subtotal:</p>
        <span>{initialAmount - initialAmount * 0.1} ₪</span>
      </div>
    </div>
  )
}
