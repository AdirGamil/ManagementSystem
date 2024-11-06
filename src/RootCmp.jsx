import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AniIndex } from './pages/AniIndex'
import { AniFooter } from './cmps/AniFooter'
import { AniHeader } from './cmps/AniHeader'

export function RootCmp() {
  return (
    <Router>
      <section className="main-container">
        <AniHeader/>
        <main>
          <Routes>
            <Route path="" element={<AniIndex />} />
          </Routes>
        </main>
        <AniFooter/>
      </section>
    </Router>
  )
}
