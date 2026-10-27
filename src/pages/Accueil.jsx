
import { ArrowRight, Heart } from 'lucide-react'
import Header from '../components/Header'
import heroCouple from '../assets/hero-couple.png'
import '../styles/Accueil.css'

function Accueil({ onCommencer }) {
  return (
    <div className="accueil">
      <style>{`
        .hero-button {
          animation: bouton-decouverte 0.7s ease-in-out 0.09s 2,
                     bouton-attente 1s ease-in-out 2.5s infinite;
          transform-origin: center;
        }

        @keyframes bouton-decouverte {
          0%, 100% { transform: translateY(0); }
          35% { transform: translateY(-5px); }
          65% { transform: translateY(2px); }
        }

        @keyframes bouton-attente {
          0%, 75%, 100% { transform: translateY(0); }
          85% { transform: translateY(-4px); }
          92% { transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-button {
            animation: none;
          }
        }
      `}</style>

      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-tag">
              <Heart size={14} strokeWidth={2} aria-hidden="true" />
              LE QUIZ QUI DÉCODE TON CŒUR
            </span>

            <h1>
              L’amour, c’est beau.
              <br />
              <span>Mais toi, tu es comment ?</span>
            </h1>

            <p>
              Romantique invétéré·e, détective sentimental·e
              ou champion·ne du « non, ça va » ?
              Découvre ton profil amoureux.
            </p>

            <button
              className="hero-button"
              type="button"
              onClick={onCommencer}
            >
              Découvrir mon profil
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </button>

            <p className="hero-note">
              <Heart size={14} strokeWidth={2} aria-hidden="true" />
              Quelques questions, beaucoup de vérités.
            </p>
          </div>

          <div className="hero-visual">
            <img
              src={heroCouple}
              alt="Un couple partage un moment romantique sur un lit"
            />

            <Heart
              className="floating-heart heart-one"
              size={42}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <Heart
              className="floating-heart heart-two"
              size={32}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Accueil

