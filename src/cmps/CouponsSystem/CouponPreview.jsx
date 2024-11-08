export function CouponPreview({ coupon }) {
  const isAdmin = true

  return (
    <div className="coupon-preview">
      <h4>
        {coupon.discountType === 'percentage'
          ? `${coupon.discountValue}% off`
          : `$${coupon.discountValue} off`}
      </h4>
      <p>Code: {coupon.code}</p>
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
