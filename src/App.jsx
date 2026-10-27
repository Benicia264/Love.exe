import { useState } from 'react'

import Accueil from './pages/Accueil'
import Personnalisation from './pages/Personnalisation'
import Quiz from './pages/Quiz'
import Resultat from './pages/Resultat'

import './styles/global.css'

function App() {
  const [page, setPage] = useState('accueil')
  const [genre, setGenre] = useState('')
  const [resultat, setResultat] = useState(null)
  const [sessionQuiz, setSessionQuiz] = useState(0)

  function commencerQuiz() {
    setPage('personnalisation')
  }

  function continuerVersQuiz(genreChoisi) {
    setGenre(genreChoisi)
    setSessionQuiz((session) => session + 1)
    setPage('quiz')
  }

  function terminerQuiz(reponses) {
    setResultat(reponses)
    setPage('resultat')
  }

  function recommencerQuiz() {
    setResultat(null)
    setGenre('')
    setPage('personnalisation')
  }

  return (
    <>
      {page === 'accueil' && (
        <Accueil onCommencer={commencerQuiz} />
      )}

      {page === 'personnalisation' && (
        <Personnalisation onContinuer={continuerVersQuiz} />
      )}

      {page === 'quiz' && (
        <Quiz
          key={sessionQuiz}
          genre={genre}
          onTerminer={terminerQuiz}
          onRetour={() => setPage('personnalisation')}
        />
      )}

      {page === 'resultat' && (
        <Resultat
          resultat={resultat}
          onRecommencer={recommencerQuiz}
        />
      )}
    </>
  )
}

export default App