const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const allPlaylists = require('./src/lib/playlists.json')
const allSongs = require('./src/lib/songs.json')

app.get('/api/getplaylists/:id', async (req, res) => {
  const { url } = req
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find((playlist) => playlist.id === id)
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId)

  res.json({ playlist, songs })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
/*
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/getplaylists/:id', async (req, res) => {
  const id = req.query.id
  const playlist = allPlaylists.find((playlist) => playlist.id === id)
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId)
  res.json({ playlist, songs });
  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { 'content-type': 'application/json' }
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
*/
