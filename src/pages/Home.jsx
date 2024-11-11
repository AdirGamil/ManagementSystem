import { Link } from 'react-router-dom'
import adminImage from '../assets/img/admin-system.png'

export function Home() {
  return (
    <div className="home">
      {/* Section 1: Overview */}
      <section className="section overview">
        <h1>Welcome to the Management System</h1>
        <p>
          This platform enables seamless management of users, coupons, and
          reports. Designed for efficiency and ease of use, it's perfect for
          admins seeking control and insights.
        </p>
        <Link to="#system-sections" className="start-button">
          Start Now
        </Link>
      </section>
    </div>
  )
}
