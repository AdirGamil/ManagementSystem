import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { CouponEdit } from './CouponEdit'
import { FaEdit } from 'react-icons/fa'

function copyCouponCode(code) {
  try {
    navigator.clipboard.writeText(code)
    toast.success('Coupon code copied!')
  } catch (error) {
    toast.error('Failed to copy coupon code')
    console.error(error)
  }
}

export function CouponPreview({ coupon, isAdmin }) {
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <div className="coupon-preview">
      <h4 className="coupon-title">
        {coupon.discountType === 'percentage'
          ? `${coupon.discountValue}% off`
          : `$${coupon.discountValue} off`}
      </h4>
      <p className="coupon-code">Code: {coupon.code}</p>
      <button
        className="copy-button"
        onClick={() => copyCouponCode(coupon.code)}
      >
        Copy Code
      </button>

      {isAdmin && (
        <>
          <div className="admin-info">
            <p className="coupon-description">
              Description: {coupon.description}
            </p>
            <p className="coupon-max-uses">Max Uses: {coupon.maxUses}</p>
            <p className="coupon-expiry">Expiry Date: {coupon.expiryDate}</p>
            <p className="coupon-stackable">
              Stackable: {coupon.stackable ? 'Yes' : 'No'}
            </p>
          </div>

          <button className="edit-button" onClick={() => setIsEditOpen(true)}>
            <FaEdit />
          </button>

          {isEditOpen && (
            <CouponEdit
              initialData={coupon}
              onClose={() => setIsEditOpen(false)}
            />
          )}
        </>
      )}
    </div>
  )
}
