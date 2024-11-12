import './App.css'
import Nav from './components/Nav/Nav'
import Welcome from './components/Welcome/Welcome'

function App() {

  const names = ["Paul", "Corey", "Nick", "Kayla", "Kiki"]
  const links = ["About", "React Notes", "Movies", "Contact Me"]

  /* 
  ? React
  * SPA - single page application
    * one index.html
    * virtualDOM renders components based on logic
  
  * Component
    * building block of react interface
    * functional or class-based
    * return is what is rendered to the page
    * the code used is called JSX (syntactic sugar over JS + HTML)
  
  * Component lifecycle
    * built within Components folder
    * exported out of their individual component folders
    * import to the <App> component
    * mount it in the App's return()
    
  * Props (short for properties)
    * object allowing us to pass data from parent to children
    * read-only CANNOT be modified
    * passed as an attribute during component mounting
    * extrapolated out of the function parameter
    ! can only travel from parent to child components

  * If you are iterating within return, use key prop and put an index value in it.
  * This causes React to keep track of each component iteration in vDOM
  */

  return (
    <div>
      <Nav links={links} />
      { /* Curly braces within return are expressions */}
      {names.map((name, index) => <Welcome key={index} name={name} />)}
    </div>
  )
}

export default App
