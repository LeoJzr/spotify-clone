import React from "react";
import { allPlaylists, playlists, songs } from "../lib/data";

interface OverlayProps{
    playlistId: string
    onHideOverlay: () => void
}
const PlayListOverlay: React.FC<OverlayProps> = ({playlistId, onHideOverlay}) =>{
    const selectedPlaylist = allPlaylists.find((playlists) => playlists.id === playlistId)

    return(
        <div className=" relative flex flex-col h-full bg-yellow-900 overflow-x-hidden">

            <button onClick={onHideOverlay} className="absolute top-5 px-2 py-1 bg-gray-800 text-white">Hide</button>

            <header className="flex flex-row gap-8 px-6 mt-12">
                <picture className="aspect-square w-52 h-52 flex-none">
                    <img src={selectedPlaylist?.cover} alt="" />
                </picture>
                <div>{selectedPlaylist?.title}</div>
            </header>
        </div>
    )
}
export default PlayListOverlay