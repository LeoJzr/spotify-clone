import { Library } from '../icons/Library'
import { Home } from '../icons/Home'
import { Search } from '../icons/Search'
import SideMenuItem from './SideMenuItem'
import SideMenuCard from './SideMenuCard'
import { playlists } from '../lib/data'
import { Link } from 'react-router-dom'

export function AsideMenu () {
  return (
    <nav className='flex flex-col flex-1 gap-2'>
      <div className='bg-zinc-900 rounded-lg p-2'>
        <ul>
          <Link to='/'>
            <SideMenuItem>
              <Home />
              Inicio
            </SideMenuItem>
          </Link>

          <Link to='/buscar'>
            <SideMenuItem>
              <Search />
              Buscar
            </SideMenuItem>
          </Link>
        </ul>
      </div>

      <div className='bg-zinc-900 rounded-lg p-2 flex-1'>
        <ul className=''>
          <SideMenuItem>
            <Library />
            Tu biblioteca
          </SideMenuItem>
          {
            playlists.map((playlist) =>
              <SideMenuCard key={playlist.id} playlist={playlist} />
            )
          }
        </ul>
      </div>

    </nav>
  )
}
