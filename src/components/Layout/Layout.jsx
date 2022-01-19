import Header from '../Header/Header.jsx'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
