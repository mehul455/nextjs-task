import { useState } from 'react'
import Header from './Component/Header'
import Editor from './Component/Editor'
import Sidebar from './Component/Sidebar'

function App() {

  return (
    <>
    <Header/>
    <div className='space'> 
      {/* <Sidebar/> */}

 <Editor/>
    </div>
   
    </>
  )
}

export default App
