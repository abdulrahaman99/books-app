import React from 'react'
import Navbar from './components/Navbar'
import BookForm from './components/BookForm'
import Footer from './components/Footer'
function App() {
  return (
    <div className='app'>
    <Navbar/>
    <main>
    <div className='container'>
    <BookForm/>
    </div>
    </main>
    <Footer/>
    
    </div>
  )
}

export default App