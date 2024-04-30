import React from "react"
import PlaylistItemCard from "../components/PlayListItemCard"
import { playlists } from "../lib/data"

export function Home (){
    return(
        <div id="playlist-container" className="relative transition-all duration-1000 bg-pink-500">
          {/* Header */}
            <div className="relative z-10 px-6">
                {/* Greetings */}
                <h1 className="pt-4 text-3xl font-bold">Buenos días</h1>
                <div className="flex flex-wrap mt-6 gap-4">
                    {
                        playlists.map((playlist) =>  
                        <PlaylistItemCard playlist={playlist} key={playlist.id} />)
                    }
                </div>
            </div >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80" />
        </div>

    )
}
