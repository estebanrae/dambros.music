import React, { useState, useRef, useEffect } from 'react'
import '../styles/MusicGame.css'

function MusicGame() {
  const [soundBoard, setSoundBoard] = useState({
    beats: [],
    bass: [],
    melody: [],
    vocals: []
  })
  
  const [isPlaying, setIsPlaying] = useState(false)
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const draw = () => {
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw visualizer bars
      const barCount = 8
      const barWidth = canvas.width / barCount
      
      for (let i = 0; i < barCount; i++) {
        const baseHeight = 20
        const height = baseHeight + Math.random() * 80 + (soundBoard.beats.length > 0 ? 40 : 0)
        const x = i * barWidth + barWidth / 2 - 10
        const y = canvas.height / 2 - height / 2

        ctx.fillStyle = '#000'
        ctx.fillRect(x, y, 20, height)
      }

      animationId = requestAnimationFrame(draw)
    }

    if (isPlaying) {
      draw()
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPlaying, soundBoard])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would start/stop audio here
    // For now, this is just a visual demonstration
  }

  const playButton = (color, trackType) => {
    // Visual feedback
    setSoundBoard(prev => ({
      ...prev,
      [trackType]: [...prev[trackType], color]
    }))

    // In a real implementation, play audio file based on color and trackType
    // For example: playAudio(`${color}-${trackType}.mp3`)
    
    setTimeout(() => {
      setSoundBoard(prev => ({
        ...prev,
        [trackType]: prev[trackType].filter((_, i) => i !== prev[trackType].length - 1)
      }))
    }, 200)
  }

  const ColorButton = ({ color, label, trackType }) => (
    <button
      className={`color-btn ${color}`}
      onClick={() => playButton(color, trackType)}
      style={{ '--color': color }}
    >
      <span className="btn-label">{label}</span>
    </button>
  )

  return (
    <div className="music-game">
      <div className="game-header">
        <h3>Create Your Mix</h3>
        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      <div className="sound-grid">
        <div className="track-row">
          <h4>Beats</h4>
          {['red', 'orange', 'yellow'].map(color => (
            <ColorButton key={color} color={color} label="🎵" trackType="beats" />
          ))}
        </div>

        <div className="track-row">
          <h4>Bass</h4>
          {['blue', 'indigo', 'purple'].map(color => (
            <ColorButton key={color} color={color} label="🎸" trackType="bass" />
          ))}
        </div>

        <div className="track-row">
          <h4>Melody</h4>
          {['green', 'lime', 'mint'].map(color => (
            <ColorButton key={color} color={color} label="🎹" trackType="melody" />
          ))}
        </div>

        <div className="track-row">
          <h4>Vocals</h4>
          {['pink', 'rose', 'coral'].map(color => (
            <ColorButton key={color} color={color} label="🎤" trackType="vocals" />
          ))}
        </div>
      </div>

      <div className="visualizer-container">
        <canvas ref={canvasRef} width={400} height={100} className="visualizer" />
        <p className="visualizer-label">Visualizer</p>
      </div>

      <div className="game-info">
        <p>💡 Click buttons to add sounds • Each row adds a different layer • Audio files coming soon!</p>
      </div>
    </div>
  )
}

export default MusicGame

