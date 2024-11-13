import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { CouponEdit } from './CouponEdit'
import { FaEdit } from 'react-icons/fa'

/**
 * Copies a coupon code to the clipboard.
 */
function copyCouponCode(code) {
  try {
    // Write the coupon code to the clipboard
    navigator.clipboard.writeText(code)
    // Show a success toast notification
    toast.success('Coupon code copied!')
  } catch (error) {
    // Show an error toast notification if the copy operation fails
    toast.error('Failed to copy coupon code')
    console.error(error)
  }
}

/**
 * CouponPreview component displays the details of a coupon and
 * provides options for admins to edit the coupon.
 */
export function CouponPreview({ coupon, isAdmin }) {
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <div className="coupon-preview">
      {/* Title of the coupon, indicating the discount type and value */}
      <h2 className="coupon-title">
        {coupon.discountType === 'percentage'
          ? `${coupon.discountValue}% off`
          : `$${coupon.discountValue} off`}
      </h2>
      {/* Code of the coupon */}
      <p className="coupon-code">Code: {coupon.code}</p>
      {/* Button to copy the coupon code to the clipboard */}
      <button
        className="copy-button"
        title="Copy Coupon Code"
        onClick={() => copyCouponCode(coupon.code)}
      >
        Copy Code
      </button>

      {/* If the user is an admin, show admin-only details and options */}
      {isAdmin && (
        <>
          {/* Admin-only details about the coupon */}
          <div className="admin-info">
            <p className="admin-info-item">Description: {coupon.description}</p>
            <p className="admin-info-item">Max Uses: {coupon.maxUses}</p>
            <p className="admin-info-item">Expiry Date: {coupon.expiryDate}</p>
            <p className="admin-info-item">
              Stackable: {coupon.stackable ? 'Yes' : 'No'}
            </p>
          </div>

          {/* Button to edit the coupon */}
          <button
            title="Edit Coupon"
            className="edit-button"
            onClick={() => setIsEditOpen(true)}
          >
            <FaEdit />
          </button>

          {/* If the edit button is clicked, show the CouponEdit component */}
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
