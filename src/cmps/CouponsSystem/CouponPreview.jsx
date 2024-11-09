import { toast } from 'react-hot-toast'

export function CouponPreview({ coupon }) {
  const isAdmin = true //Change to false to hide admin details

  function handleCopyCode() {
    try {
      navigator.clipboard.writeText(coupon.code)
      toast.success('Coupon code copied!')
    } catch (error) {
      toast.error('Failed to copy coupon code')
      console.error(error)
    }
  }
  return (
    <div className="coupon-preview">
      <h4>
        {coupon.discountType === 'percentage'
          ? `${coupon.discountValue}% off`
          : `$${coupon.discountValue} off`}
      </h4>
      <p>Code: {coupon.code}</p>
      <button onClick={handleCopyCode}>Copy Code</button>
      {isAdmin && (
        <>
          <p>Description: {coupon.description}</p>
          <p>Max Uses: {coupon.maxUses}</p>
          <p>Expiry Date: {coupon.expiryDate}</p>
          <p>Stackable: {coupon.stackable ? 'Yes' : 'No'}</p>
        </>
      )}
    </div>
  )
}
