import React from 'react';
import { useParams } from 'react-router-dom' // Importa useParams para obtener la ID de la URL
import { allPlaylists, songs } from '../lib/data'
import MusicsTable from '../components/MusicsTable';

const PlaylistDetails = () => {
  const { id } = useParams() // Obtiene la ID de la URL
  const playlist = allPlaylists.find((playlist)=>playlist.id===id)
  const playlistSongs = songs.filter((song)=>song.albumId===playlist?.albumId)

  console.log(playlist?.color.dark)

  return (
    <div className={`flex relative flex-col h-full overflow-x-hidden bg-gradient-to-t from-zinc-900 to-[${playlist?.color.dark}]`}>
      <header className='flex flex-row my-8'>
        <picture className='mx-6 aspect-square w-52 h-52 flex-none hover:scale-105 transition-all duration-300'>
          <img src={playlist?.cover}
          alt=''
          className='object-cover h-full w-full shadow-lg rounded-md'
          />
        </picture>
        <div className='flex flex-col justify-end gap-4'>
          <h2>Playlist</h2>
          <div>
            <h1 className=' font-bold text-5xl text-white'>
              {playlist?.title}
              <span></span>
            </h1>
          </div>

        <div className='flex gap-3'>
          <picture className=' aspect-square w-6 h-6 flex '>
            <img src={playlist?.cover}
            alt=''
            className='object-cover  shadow-lg rounded-full'
            />
          </picture>
          <p>
            <span>{playlist?.artists.join(", ")} </span>
            <span> • {playlistSongs.length} canciones </span>
          </p>
          </div>

        </div>
      </header>
      <section className='p-6'> 
        <MusicsTable songs={playlistSongs} />
      </section>
    </div>
  )
}
export default PlaylistDetails;