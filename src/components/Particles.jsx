import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBack() {

  async function loadParticles(main) {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        "fullScreen": {
          "enable": true,
          "zIndex": -1
        },
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": true,
              "value_area": 868.0624057955
            }
          },
          "color": {
            "value": "#e32833"
          },
          "shape": {
            "type": "triangle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.8996283114607908,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2.8,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 144.30708547789706,
            "color": "#ffffff",
            "opacity": 0.4489553770423464,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 103.89610389610391,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    }
    ></Particles>
  )
}

export default ParticlesBack