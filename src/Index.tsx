import React from 'react'
import { useState } from 'react'
import App from './App.jsx'
import './index.css'
import { playlists } from './lib/data'
import PlaylistItemCard from './components/PlayListItemCard'
import PlayListOverlay from './components/PlayListOverlay.js'
import type { Playlist } from './lib/data'

interface Props{
    playlist: Playlist
}
const Index: React.FC<Props> = ({playlist})=>{

    const [selectedPlaylistId, setSelectedPlaylistId] = React.useState<string | null>(null)
    const [showDetails, setShowDetails] = useState(false)
    
    const handleClick =  (playlistId:string) => {
        setSelectedPlaylistId(playlistId)
        console.log(playlistId)
        console.log(showDetails)
        setShowDetails(true)
        console.log(setShowDetails)
    }
    const handleHideOverlay = () =>{
        setSelectedPlaylistId(null)
        setShowDetails(false)
    }
    return (
    <>
        <App> 
      {showDetails ? (
        <PlayListOverlay playlistId={selectedPlaylistId} onHideOverlay={handleHideOverlay} />
      ) : (
        <div id="playlist-container" className="relative transition-all duration-1000 bg-pink-500">
          {/* Header */}
          <div className="relative z-10 px-6">
            {/* Greetings */}
            <h1 className="pt-4 text-3xl font-bold">Buenos días</h1>

            <div className="flex flex-wrap mt-6 gap-4">
              {playlists.map((playlist) => (
                <div onClick={() => handleClick(playlist.id)} key={playlist.id}>
                  <PlaylistItemCard playlist={playlist} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80" />
        </div>
      )}
        </App>
    </>
    )
}
export default Index