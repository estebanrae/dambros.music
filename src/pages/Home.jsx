import React from 'react'
import { imageFiles } from '../utils/imageList'
import '../styles/Home.css'

function Home() {
  // Generate image paths from the auto-generated list
  const galleryImages = imageFiles.map(filename => `/images/gallery/${filename}`)

  return (
    <div className="home">
      <header className="hero">
        <h1 className="band-name">dambros</h1>
      </header>

      <section className="latest-release">
      <a href="https://open.spotify.com/album/2MgLfnmbZO1iwsUcLD2hmn?si=11FPAqJzQvuOFSomLBbylg" target="_blank" rel="noopener noreferrer" >
        <div className="release-image-container">
          <div className="release-badge">Último Lanzamiento</div>
          <img 
            src="/images/main.jpg" 
            alt="Último lanzamiento dambros" 
            className="release-image"
          />
        </div>
        </a>
      </section>
      <section className="streaming-section">
        <h2 className="section-title">Escuchanos Aquí</h2>
        <div className="streaming-links">
          <a href="https://open.spotify.com/album/2MgLfnmbZO1iwsUcLD2hmn?si=11FPAqJzQvuOFSomLBbylg" target="_blank" rel="noopener noreferrer" className="streaming-link">
            Spotify
          </a>
          <a href="https://music.apple.com/co/album/te-voy-a-amar-single/1852087974" target="_blank" rel="noopener noreferrer" className="streaming-link">
            Apple Music
          </a>
          <a href="https://tidal.com/album/473048274/u" target="_blank" rel="noopener noreferrer" className="streaming-link">
            Tidal
          </a>
          <a href="https://music.youtube.com/playlist?list=OLAK5uy_nMBVNiJjL0cBi9eyS6uQoXV5VpE_FwTMY&si=E7IgVXQJYxKmhBSa" target="_blank" rel="noopener noreferrer" className="streaming-link">
            YouTube Music
          </a>
        </div>
      </section>

      

      <section className="gallery-section">
        <div className="gallery">
          {galleryImages.map((imageSrc, index) => (
            <div key={index} className="gallery-item">
              <img src={imageSrc} alt="dambros" className="gallery-image" />
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Acerca de nosotros</h2>
        <div className="about-content">
          <p>
          Somos Steve y Roy. Llevamos haciendo música juntos desde los 15 años, pero en los últimos dos años nos hemos dedicado a escribir y crear este proyecto llamado Dambros con mayor intención.

          </p>
          <p>
          La historia comenzó en 2010, cuando nos conocimos en una clase de música. Roy era el pianista estrella y Steve, el nuevo estudiante. Empezamos a tocar juntos y la química fue inmediata. En la prepa nos dedicábamos a tocar covers de John Mayer, Red Hot Chili Peppers, Jorge Drexler, entre otros. Siempre hemos tenido un gusto muy variado entre rock, pop y cosas medio indies.

          </p>

          <p>
          En 2019 nos mudamos juntos a una casa en CDMX, donde nos pegó la pandemia y empezamos a escribir como locos. Ninguno de los dos nos consideramos tan buenos cantantes, pero si Bob Dylan, C. Tangana y Rubén Albarrán pueden hacerlo, nosotros también.

          </p>

          <p>
          En esa casa, en la calle de Ámsterdam, nació “Sigo Aquí” como nuestro primer single, inspirado por la distancia que separaba a Steve de su novia. De ahí en adelante surgieron jams, ideas y muchos aprendizajes sobre la música y la vida.

          </p>

          <p>Hoy, Dambros es el resultado de todo ello.</p>

        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} dambros. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Home

