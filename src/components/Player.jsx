import { useRef, useEffect } from 'react'
import { Pause, Play } from '../icons/Icons'
import { usePlayerStore } from '../store/playerStore'
import { Slider } from './Slider'

export function Player () {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    const { song, playlist } = currentMusic
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.play()
    }
  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='flex justify-between w-full px-4 z-50'>

      <div className='flex flex-col place-content-center'>
        current song
      </div>

      <div className='flex flex-col place-content-center gap-4 flex-1'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <button className='bg-white rounded-full p-3 scale-95 transform hover:scale-100 transition-transform ' onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <Slider defaultValue={[100]} max={100} min={1} className=' w-[500px] mb-2' />
          <audio ref={audioRef} />
        </div>

      </div>

      <div className='grid place-content-center items-center flex-col'>
        <Slider defaultValue={[100]} max={100} min={1} className='w-[120px] flex' />

      </div>

    </div>
  )
}
