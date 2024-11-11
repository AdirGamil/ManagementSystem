import { Link } from 'react-router-dom'
import adminImage from '../assets/img/admin-system.png'
import reportImage from '../assets/img/report-system.png'
import couponImage from '../assets/img/coupon-system.png'
import userImage from '../assets/img/user-system.png'
import { ReactTyped } from 'react-typed'

export function Home() {
  return (
    <div className="home">
      {/* Section 1: Overview */}
      <section className="section-overview">
        <div className="overview-content">
          <h4 className="sub-heading">Your Complete Solution for Management</h4>
          <h1>Welcome to the Management System</h1>
          <span>
            <ReactTyped
              strings={[
                'User Management',
                'Coupon Management',
                'Reports Management',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </span>
          <p>
            This platform enables seamless management of users, coupons, and
            reports. Designed for efficiency and ease of use, it's perfect for
            admins seeking control and insights.
          </p>
          <a href="#system-sections" className="start-button">
            Get Started
          </a>
        </div>
      </section>

      {/* Section 2: Admin Panel */}
      <section id="system-sections" className="section-system">
        <div className="section-content">
          <img src={adminImage} alt="Admin Panel" className="section-image" />
          <div className="text-content">
            <h1>Admin Panel</h1>
            <p>
              A secure platform with direct access to User Management, Coupon
              Management, and Reports. Manage users, monitor activity, and
              control system access seamlessly.
            </p>
            <Link to="/admin">
              <button className="section-button">Go to Admin Panel</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Coupon Management System */}
      <section id="learn-more" className="section-system blue">
        <div className="section-content">
          <div className="text-content">
            <h1>Coupon Management System</h1>
            <p>
              View, add, edit, and delete discount coupons. Users can apply
              codes for discounts and combine them as needed.
            </p>
            <Link to="/coupons">
              <button className="section-button">
                Go to Coupon Management
              </button>
            </Link>
          </div>
          <img
            src={couponImage}
            alt="Coupon System"
            className="section-image"
          />
        </div>
      </section>

      {/* Section 4: Reports and Analytics System */}
      <section id="learn-more" className="section-system">
        <div className="section-content">
          <img
            src={reportImage}
            alt="Reports System"
            className="section-image"
          />
          <div className="text-content">
            <h1>Reports and Analytics System</h1>
            <p>
              Track coupon usage with detailed reports. Export data for insights
              into coupon trends and user behavior.
            </p>
            <Link to="/reports">
              <button className="section-button">Go to Reports System</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: User Support System */}
      <section id="learn-more" className="section-system blue">
        <div className="section-content">
          <div className="text-content">
            <h1>User Support System</h1>
            <p>
              Offers admins tools to manage user support, streamline assistance,
              and improve the user experience.
            </p>
            <Link to="/users">
              <button className="section-button">Go to User Support</button>
            </Link>
          </div>
          <img
            src={userImage}
            alt="User Support System"
            className="section-image"
          />
        </div>
      </section>
    </div>
  )
}
