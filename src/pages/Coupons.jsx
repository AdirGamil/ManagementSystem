import { CouponList } from '../cmps/CouponsSystem/CouponList'
import { CouponInput } from '../cmps/CouponsSystem/CouponInput'



export function Coupons() {
  return (
    <div className="coupons">
      <h2>Coupons Management</h2>
      <CouponList />
      <CouponInput />
    </div>
  )
}
