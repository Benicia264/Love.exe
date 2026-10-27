import { useState } from 'react'
import { Heart, ArrowRight, Mars, Venus } from 'lucide-react'
import romanticCharacters from '../assets/romantic-characters.png'
import '../styles/Personnalisation.css'

function Personnalisation({ onContinuer }) {
const [genre, setGenre] = useState('')

function handleContinuer() {
if (!genre) return
onContinuer(genre)
}

return ( <main className="personnalisation"> <div className="personnalisation-container"> <div className="personnalisation-illustration"> <img
         src={romanticCharacters}
         alt="Illustration romantique"
       /> </div>

```
    <section className="personnalisation-card">
      <div className="personnalisation-heart" aria-hidden="true">
        <Heart size={25} strokeWidth={1.6} />
      </div>

      <span className="personnalisation-tag">
        AVANT DE PARLER D’AMOUR
      </span>

      <h1>
        Alors, <span>qui es-tu ?</span>
      </h1>

      <p className="personnalisation-description">
        Pour personnaliser ton expérience, dis-nous qui se cache
        derrière cet écran.
      </p>

      <fieldset className="genre-options">
        <legend>Je suis...</legend>

        <button
          type="button"
          className={`genre-option ${genre === 'homme' ? 'selected' : ''}`}
          onClick={() => setGenre('homme')}
          aria-pressed={genre === 'homme'}
        >
          <span className="genre-icon">
            <Mars size={24} strokeWidth={1.7} aria-hidden="true" />
          </span>

          <span className="genre-label">Un homme</span>

          <span className="genre-radio" aria-hidden="true" />
        </button>

        <button
          type="button"
          className={`genre-option ${genre === 'femme' ? 'selected' : ''}`}
          onClick={() => setGenre('femme')}
          aria-pressed={genre === 'femme'}
        >
          <span className="genre-icon">
            <Venus size={24} strokeWidth={1.7} aria-hidden="true" />
          </span>

          <span className="genre-label">Une femme</span>

          <span className="genre-radio" aria-hidden="true" />
        </button>
      </fieldset>

      <button
        type="button"
        className="personnalisation-button"
        onClick={handleContinuer}
        disabled={!genre}
      >
        Continuer
        <ArrowRight size={18} aria-hidden="true" />
      </button>

      <p className="personnalisation-note">
        On ne juge pas. Enfin… presque.
      </p>
    </section>
  </div>
</main>


)
}

export default Personnalisation
