import React from "react";
import { Song, type songs } from "../lib/data";

interface Props{
    songs:Song[]
}

const MusicsTable: React.FC<Props> = ({songs}) => {
    return(
        <table className=" table-auto text-left min-w-full divide-y divide-gray-500/50">
            <thead className="">
                <tr className=" text-gray-300 text-sm font-light">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Titulo</th>
                    <th className="px-4 py-2">Album</th>
                    <th className="px-4 py-2">Time</th>
                </tr>
            </thead>

            <tbody>
                {songs.map((song, index) => (
                    <tr className=" text-gray-300 text-sm font-light hover:bg-white/10 transition-all duration-500 ">
                        <td className="px-4 py-2 rounded-s-lg">{index + 1}</td>
                        <td className="px-4 py-2 flex gap-3">
                            <picture>
                                <img src={song.image} alt={song.title} className="w-11 h-11" />
                            </picture>

                            <div className="flex flex-col">
                                <h3 className="text-white font-normal">{song.title}</h3>
                                <span>{song.artists.join(", ")}</span>
                            </div>
                            
                        </td>
                        <td className="px-4 py-2">{song.album}</td>
                        <td className="px-4 py-2 rounded-e-lg">{song.duration}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MusicsTable