import React from 'react'

 const Playlist = () => {
  return (
    <>
    <h1 className='text-2xl font-mono px-10 md:text-4xl pt-20 pb-5 md:text-center'>Playlist</h1>
    <div className="mx-auto sm:w-3/4 md:w-1/2 px-10 ">
      <h1 className='font-mono py-2'>Top Tracks</h1>
      <iframe
        src="https://open.spotify.com/embed/playlist/04Obfauef65RhUSPkr3FOt?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}>
      </iframe>
    </div>
    
    <div className='mx-auto sm:w-3/4 md:w-1/2 px-10 mt-10'>
      <h1 className='font-mono py-2'>Favorite Artist</h1>
      <iframe style={{borderRadius: "12px"}} 
        src="https://open.spotify.com/embed/artist/0blbVefuxOGltDBa00dspv?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    </div>
    </>

  )
}
export default Playlist