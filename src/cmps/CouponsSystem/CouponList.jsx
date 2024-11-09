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
  {
    id: 3,
    code: 'SUMMER15',
    description: '15% off summer collection',
    discountType: 'percentage',
    discountValue: 15,
    expiryDate: '8/30/2024',
    stackable: true,
    maxUses: 8,
    createdBy: 'admin',
    createdAt: '6/1/2023 09:15',
  },
  {
    id: 4,
    code: 'WELCOME5',
    description: '5% off on first purchase',
    discountType: 'percentage',
    discountValue: 5,
    expiryDate: '12/31/2024',
    stackable: true,
    maxUses: 20,
    createdBy: 'admin',
    createdAt: '2/15/2023 12:10',
  },
  {
    id: 5,
    code: 'FREESHIP',
    description: 'Free shipping on orders over $50',
    discountType: 'amount',
    discountValue: 0,
    expiryDate: '3/15/2025',
    stackable: false,
    maxUses: 50,
    createdBy: 'admin',
    createdAt: '3/1/2023 14:25',
  },
  {
    id: 6,
    code: 'VIP25',
    description: '25% off for VIP members',
    discountType: 'percentage',
    discountValue: 25,
    expiryDate: '12/31/2024',
    stackable: true,
    maxUses: 3,
    createdBy: 'admin',
    createdAt: '5/20/2023 10:35',
  },
  {
    id: 7,
    code: 'HOLIDAY50',
    description: '50% off holiday sale',
    discountType: 'percentage',
    discountValue: 50,
    expiryDate: '12/25/2024',
    stackable: false,
    maxUses: 15,
    createdBy: 'admin',
    createdAt: '11/10/2023 08:45',
  },
  {
    id: 8,
    code: 'FLASH30',
    description: '30% off flash sale',
    discountType: 'percentage',
    discountValue: 30,
    expiryDate: '10/10/2024',
    stackable: false,
    maxUses: 10,
    createdBy: 'admin',
    createdAt: '9/15/2023 16:00',
  },
  {
    id: 9,
    code: 'STUDENT20',
    description: '20% off for students',
    discountType: 'percentage',
    discountValue: 20,
    expiryDate: '12/31/2025',
    stackable: true,
    maxUses: 25,
    createdBy: 'admin',
    createdAt: '4/5/2023 11:30',
  },
  {
    id: 10,
    code: 'BLACKFRIDAY',
    description: '70% off Black Friday special',
    discountType: 'percentage',
    discountValue: 70,
    expiryDate: '11/25/2024',
    stackable: false,
    maxUses: 100,
    createdBy: 'admin',
    createdAt: '10/1/2023 07:20',
  },
];


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
