import Navbar from './assets/Navbar'
import Main from './assets/Main'
import './App.css'

function App() {
  

 const navLinks = [
  {linkHref: "/Home", linkText: "Home"},
  {linkHref: "/About", linkText: "About"},
  {linkHref: "/Songs", linkText: "Songs"},
  {linkHref: "/Lifestyle", linkText: "Lifestyle"},
  {linkHref: "/Contact", linkText: "Contact"}
 ]

  return (
    <>
      <Navbar imgUrl='https://biografieonline.it/img/bio/g/Gianni_Morandi.jpg' imgAlt={'Gianni'} navLinks= {navLinks}/>
      <Main imgUrl= 'https://www.sorrisi.com/wp-content/uploads/2023/03/gianni-morandi.jpg'
      imgAlt='Gianni rock&roll'/>

    </>
  )
}

export default App
