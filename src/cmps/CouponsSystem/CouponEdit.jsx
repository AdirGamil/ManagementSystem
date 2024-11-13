import { useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import toast from 'react-hot-toast'

/**
 * CouponEdit component displays a dialog for editing a coupon.
 * It allows the coupon to be saved or deleted.
 */
export function CouponEdit({ initialData, onClose }) {
  // Reference to the dialog element
  const dialogRef = useRef(null)

  // Show the dialog when the component is mounted
  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  // Close the dialog and call the onClose callback
  function handleClose() {
    dialogRef.current.close()
    if (onClose) onClose()
  }

  // Save the coupon and close the dialog
  function handleSave() {
    toast.success('Coupon saved successfully!')
    handleClose()
  }

  // Delete the coupon and close the dialog
  function handleDelete() {
    toast.success('Coupon deleted successfully!')
    handleClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="coupon-edit-dialog"
      onCancel={handleClose}
    >
      <div className="coupon-edit-content">
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        <form>
          <label>
            Code:
            <input type="text" name="code" defaultValue={initialData.code} />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              defaultValue={initialData.description}
            />
          </label>
          <label>
            Discount Type:
            <select name="discountType" defaultValue={initialData.discountType}>
              <option value="percentage">Percentage</option>
              <option value="amount">Amount</option>
            </select>
          </label>
          <label>
            Discount Value:
            <input
              type="number"
              name="discountValue"
              defaultValue={initialData.discountValue}
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="date"
              name="expiryDate"
              defaultValue={initialData.expiryDate}
            />
          </label>
          <label>
            Stackable:
            <input
              type="checkbox"
              name="stackable"
              defaultChecked={initialData.stackable}
            />
          </label>
          <label>
            Max Uses:
            <input
              type="number"
              name="maxUses"
              defaultValue={initialData.maxUses}
            />
          </label>
          <label>Created By: {initialData.createdBy}</label>
          <label>Created At: {initialData.createdAt}</label>
        </form>
        <div className="actions">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </dialog>
  )
}
