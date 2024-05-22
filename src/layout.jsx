import Footer from './components/footer'
import Header from './components/header'
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
        <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                        <Outlet />
                </main>
                <Footer />
        </div>
  )
}

export default Layout
