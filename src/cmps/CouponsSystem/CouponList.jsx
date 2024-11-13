import { CouponPreview } from './CouponPreview'

/**
 * CouponList component displays a list of coupons.
 * If there are no coupons available, it shows an appropriate message.
 */
export function CouponList({ coupons, isAdmin }) {
  return (
    <div className="coupon-list">
      <h1>Available Coupons</h1>
      {coupons.length > 0 ? (
        <ul>
          {coupons.map((coupon) => (
            <li key={coupon.id}>
              {/* Render each coupon using CouponPreview component */}
              <CouponPreview coupon={coupon} isAdmin={isAdmin} />
            </li>
          ))}
        </ul>
      ) : (
        // Message displayed when no coupons are available
        <p>No coupons available</p>
      )}
    </div>
  )
}
