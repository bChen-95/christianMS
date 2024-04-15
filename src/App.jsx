import HamburgerMenu from './components/HamburgerMenu.jsx'
import PageHome from './page/PageHome.jsx'

function App() {
  return (
      <div>
        <header>
          <HamburgerMenu />
        </header>
        <main>
          <PageHome/>  
        </main>
         
      </div>
  )
}

export default App
