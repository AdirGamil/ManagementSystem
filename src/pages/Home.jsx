import { Link } from 'react-router-dom'
import adminImage from '../assets/img/admin-system.png'
import { ReactTyped } from 'react-typed'
export function Home() {
  return (
    <div className="home">
      {/* Section 1: Overview */}
      <section className="section overview">
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
        <Link to="#system-sections" className="start-button">
          Get Started
        </Link>
        </div>
      </section>

    
    </div>
  )
}
