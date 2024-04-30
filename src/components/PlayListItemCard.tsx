import React from "react"
import type {Playlist} from '../lib/data'
import { Link } from "react-router-dom"
import { Play } from "../icons/Icons"
import { CardPlayButton } from "./CardPlayButton"
interface Props {
    playlist:Playlist
}
const PlaylistItemCard: React.FC<Props> = ({ playlist }) => {
    const {id, cover, title, artists, color} = playlist
    const artistsString = artists.join(', ')
    return(
        
            <article className="group relative">
                <div className=" absolute right-4 bottom-10 translate-y-4 transition-all duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                    <CardPlayButton id={id}/>
                </div>
                <Link to={`/playlist/`+ id}>
                <a 
                href={`/playlist/${id}`} 
                className="w-44 playlist-item transition-all duration-500 flex flex-none flex-col relative p-2 overflow-hidden 
                items-center gap-2 rounded-md hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30">

                    <picture className="h-auto w-full flex-none aspect-square" >
                        <img src={cover} alt={`Cover of ${title} by ${artistsString}`} 
                            className="object-cover w-full h-full rounded-md" />
                    </picture>

                    <div className="flex flex-auto flex-col items-start px-2">
                        <h4 className="text-white text-sm" >
                            {title}
                        </h4>
                        <span className="text-xs text-gray-400">
                            {artistsString}
                        </span>
                        
                    </div>
                </a>
                </Link>
            </article>
        
    )
}
export default PlaylistItemCard