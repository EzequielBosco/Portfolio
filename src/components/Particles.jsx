import { useEffect } from 'react'

const ParticlesBack = () => {
  useEffect(() => {
    window.particlesJS.load('particles-js', '../../particles.js-master')
  }, [])

  return <div id="particles-js"></div>
}

export default ParticlesBack