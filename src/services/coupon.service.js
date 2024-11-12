import axios from "axios"



export async function fetchCoupons() {
    try {
      const res = await axios.get('/data/coupons.json')
      return res ? res.data : []
    } catch (error) {
      console.error('Error fetching coupons:', error)
      return []
    }
  }

  // Valid coupons

export const validCoupons = [
  { code: 'DISCOUNT10', description: '10% off for first-time users' },
  { code: 'SAVE20', description: 'Save $20 on purchases over $100' },
  { code: 'SUMMER15', description: '15% off summer collection' },
  { code: 'WELCOME5', description: '5% off on first purchase' },
  { code: 'FREESHIP', description: 'Free shipping on orders over $50' },
  { code: 'VIP25', description: '25% off for VIP members' },
  { code: 'HOLIDAY50', description: '50% off holiday sale' },
  { code: 'FLASH30', description: '30% off flash sale' },
  { code: 'STUDENT20', description: '20% off for students' },
  { code: 'BLACKFRIDAY', description: '70% off Black Friday special' },
]

// Adding new coupon

export const initialCouponData = {
    code: '',
    description: '',
    discountType: 'percentage',
    discountValue: 0,
    expiryDate: '',
    stackable: false,
    maxUses: 1,
    createdBy: 'admin',
    createdAt: new Date().toLocaleString(),
  }
  