import { toast } from 'react-hot-toast'

export function CouponPreview({ coupon }) {
  const isAdmin = true; // Change to false to hide admin details

  function handleCopyCode() {
    try {
      navigator.clipboard.writeText(coupon.code);
      toast.success('Coupon code copied!');
    } catch (error) {
      toast.error('Failed to copy coupon code');
      console.error(error);
    }
  }

  return (
    <div className="coupon-preview">
      <h4 className="coupon-title">
        {coupon.discountType === 'percentage'
          ? `${coupon.discountValue}% off`
          : `$${coupon.discountValue} off`}
      </h4>
      <p className="coupon-code">Code: {coupon.code}</p>
      <button className="copy-button" onClick={handleCopyCode}>
        Copy Code
      </button>
      {isAdmin && (
        <div className="admin-info">
          <p className="coupon-description">Description: {coupon.description}</p>
          <p className="coupon-max-uses">Max Uses: {coupon.maxUses}</p>
          <p className="coupon-expiry">Expiry Date: {coupon.expiryDate}</p>
          <p className="coupon-stackable">Stackable: {coupon.stackable ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}
