import { CouponPreview } from './CouponPreview'

const sampleCoupons = [
  {
    id: 1,
    code: 'DISCOUNT10',
    description: '10% off for first-time users',
    discountType: 'percentage',
    discountValue: 10,
    expiryDate: '12/12/2024',
    stackable: true,
    maxUses: 5,
    createdBy: 'admin',
    createdAt: '1/1/2023 13:21',
  },
  {
    id: 2,
    code: 'SAVE20',
    description: 'Save $20 on purchases over $100',
    discountType: 'amount',
    discountValue: 20,
    expiryDate: '12/12/2024',
    stackable: false,
    maxUses: 10,
    createdBy: 'admin',
    createdAt: '1/1/2023 13:21',
  },
]

export function CouponList() {
  return (
    <div className="coupon-list">
      <h3>Available Coupons</h3>
      <ul>
        {sampleCoupons.map((coupon) => (
          <li key={coupon.id}>
            <CouponPreview coupon={coupon} />
          </li>
        ))}
      </ul>
    </div>
  )
}
