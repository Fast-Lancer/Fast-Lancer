import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
