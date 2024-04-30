import { Play, Pause } from '../icons/Icons'
import { usePlayerStore } from '../store/playerStore'

export function CardPlayButton ({ id }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

  const handleClick = () => {
    setCurrentMusic({
      playlist: {
        id
      }
    })
    setIsPlaying(!isPlaying)
  }
  return (
    <button onClick={handleClick} className='hover:scale-110 shadow-lg bg-green-600 p-3 items-center rounded-full'>
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}
