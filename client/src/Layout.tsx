import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout