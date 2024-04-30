import React from "react"
import { Home } from "../pages/Home"
import { playlists } from "../lib/data"
import PlaylistItemCard from "./PlayListItemCard"

export function Main(){
    return(
    <Home> 
        <div
        id="playlist-container"
        className="relative transition-all duration-1000 bg-green-600"
        >
            <div className="relative z-10 px-6 pt-10">
                <div className="flex flex-wrap mt-6 gap-4">
                    {
                        playlists.map((playlist) =>  
                        <PlaylistItemCard playlist={playlist} key={playlist.id} />)
                    }
                </div>
            <div
                className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"
            >
            </div>
            </div>
        </div>
    </Home>
    )
}