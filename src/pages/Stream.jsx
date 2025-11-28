import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Stream.css'

function Stream() {
  const platforms = [
    { name: 'Spotify', icon: '🎵', color: '#1DB954' },
    { name: 'Apple Music', icon: '🍎', color: '#FA243C' },
    { name: 'YouTube Music', icon: '▶️', color: '#FF0000' },
    { name: 'SoundCloud', icon: '☁️', color: '#FF7700' },
    { name: 'Bandcamp', icon: '💿', color: '#629AA0' },
    { name: 'Amazon Music', icon: '🎧', color: '#FF9900' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📷', color: '#E4405F' },
    { name: 'Twitter', icon: '🐦', color: '#1DA1F2' },
    { name: 'Facebook', icon: '👥', color: '#1877F2' },
    { name: 'TikTok', icon: '🎬', color: '#000000' },
  ]

  return (
    <div className="stream-page">
      <header className="stream-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1 className="band-name">dambros</h1>
        <p className="page-title">Where to Listen</p>
      </header>

      <section className="platforms-section">
        <h2>Stream on Your Favorite Platform</h2>
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <button
              key={index}
              className="platform-btn"
              style={{ '--platform-color': platform.color }}
            >
              <span className="platform-icon">{platform.icon}</span>
              <span className="platform-name">{platform.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="social-section">
        <h2>Connect With Us</h2>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              className="social-btn"
              style={{ '--social-color': social.color }}
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-name">{social.name}</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="stream-footer">
        <p>More links coming soon! Stay tuned.</p>
      </footer>
    </div>
  )
}

export default Stream

