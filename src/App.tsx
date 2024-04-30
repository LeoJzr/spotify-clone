import React from 'react'
import './index.css'
import { AsideMenu } from './components/AsideMenu'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import PlaylistDetails from './pages/PlayListDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Player } from './components/Player'

function App () {
  return (
    <Router>
      <div id='app' className='relative h-screen p-2 gap-2'>

        <aside className='[grid.area:aside] flex flex-col overflow-y-auto'> 
          <AsideMenu />
        </aside>

        <main className='[grid-area-main] rounded-lg bg-zinc-900 overflow-y-auto w-full '>
          {/* {children}  este viene de index */}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buscar' element={<Search />} />
            <Route path='/playlist/:id' element={<PlaylistDetails />} />
          </Routes>

        </main>

        <footer className='[grid-area:player] min-h-[50px] text-cyan-400'>
            <Player />
        </footer>

      </div>
    </Router>
  )
}

export default App
