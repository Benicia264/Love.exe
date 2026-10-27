
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Heart, MessageCircle } from 'lucide-react'

import { obtenirQuestions } from '../data/questions'
import ProgressBar from '../components/ProgressBar'
import '../styles/Quiz.css'

function Quiz({ genre, onTerminer, onRetour }) {
  const questions = obtenirQuestions(genre)
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [reponsesUtilisateur, setReponsesUtilisateur] = useState({})

  const questionActuelle = questions[indexQuestion]
  const reponseSelectionnee = reponsesUtilisateur[questionActuelle.id]

  const reponseActuelle = questionActuelle.reponses.find(
    (reponse) => reponse.id === reponseSelectionnee,
  )

  const derniereQuestion = indexQuestion === questions.length - 1
  const nombreReponses = Object.keys(reponsesUtilisateur).length

  function choisirReponse(idReponse) {
    setReponsesUtilisateur((precedentes) => ({
      ...precedentes,
      [questionActuelle.id]: idReponse,
    }))
  }

  function terminer() {
    const reponses = questions.map((question) => {
      const reponse = question.reponses.find(
        (item) => item.id === reponsesUtilisateur[question.id],
      )

      return {
        questionId: question.id,
        theme: question.theme,
        question: question.question,
        reponseId: reponse?.id,
        texte: reponse?.texte,
        profil: reponse?.profil,
        roast: reponse?.roast,
      }
    })

    onTerminer({ genre, reponses })
  }

  function continuer() {
    if (!reponseSelectionnee) return

    if (derniereQuestion) {
      terminer()
      return
    }

    setIndexQuestion((index) => index + 1)
  }

  function revenir() {
    if (indexQuestion === 0) {
      onRetour()
      return
    }

    setIndexQuestion((index) => index - 1)
  }

  return (
    <main className="quiz-page">
      <div className="quiz-shell">
        <header className="quiz-entete">
          <button
            type="button"
            className="quiz-retour"
            onClick={revenir}
            aria-label="Revenir à la question précédente"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Retour</span>
          </button>

          <div className="quiz-marque">
            <span>LOVE.EXE</span>
            <Heart size={17} aria-hidden="true" />
          </div>

          <span className="quiz-compteur">
            {String(indexQuestion + 1).padStart(2, '0')}
            <span className="quiz-compteur-separateur">/</span>
            {String(questions.length).padStart(2, '0')}
          </span>
        </header>

        <section className="quiz-progression" aria-label="Progression du quiz">
          <div className="quiz-progression-infos">
            <span>Ton profil amoureux se dessine</span>
            <span>{Math.round((nombreReponses / questions.length) * 100)} %</span>
          </div>

          <ProgressBar actuelle={nombreReponses} total={questions.length} />
        </section>

        <section className="quiz-question" aria-live="polite">
          <div className="quiz-question-meta">
            <span className="quiz-theme">{questionActuelle.theme}</span>
            <span className="quiz-question-numero">
              QUESTION {String(indexQuestion + 1).padStart(2, '0')}
            </span>
          </div>

          <h1>{questionActuelle.question}</h1>

          {questionActuelle.description && (
            <p className="quiz-description">{questionActuelle.description}</p>
          )}
        </section>

        <section className="quiz-section-reponses">
          <div className="quiz-titre-reponses">
            <span>Ta réponse</span>
            <span className="quiz-choix-indication">Choisis une seule option</span>
          </div>

          <div className="quiz-reponses" role="group" aria-label="Choisis une réponse">
            {questionActuelle.reponses.map((reponse, index) => {
              const selectionnee = reponseSelectionnee === reponse.id

              return (
                <button
                  key={reponse.id}
                  type="button"
                  className={`quiz-reponse ${selectionnee ? 'selected' : ''}`}
                  onClick={() => choisirReponse(reponse.id)}
                  aria-pressed={selectionnee}
                >
                  <span className="quiz-lettre">
                    {String.fromCharCode(65 + index)}.
                  </span>

                  <span className="quiz-texte-reponse">{reponse.texte}</span>

                  {selectionnee && (
                    <span className="quiz-selection" aria-hidden="true">
                      <Heart size={15} />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </section>

        <section className="quiz-roast-zone" aria-live="polite">
          {reponseActuelle && (
            <div
              className="quiz-roast"
              key={`${questionActuelle.id}-${reponseActuelle.id}`}
            >
              <MessageCircle
                className="quiz-roast-icone"
                size={19}
                aria-hidden="true"
              />

              <div className="quiz-roast-texte">
                <span className="quiz-roast-label">LE PETIT ROAST QUI VA AVEC</span>
                <p>{reponseActuelle.roast}</p>
              </div>
            </div>
          )}
        </section>

        <footer className="quiz-pied">
          <p className="quiz-pied-message">
            {reponseSelectionnee
              ? 'Réponse enregistrée. Assume maintenant.'
              : 'Réponds comme tu es, pas comme tu voudrais paraître.'}
          </p>

          <button
            type="button"
            className="quiz-suivant"
            onClick={continuer}
            disabled={!reponseSelectionnee}
          >
            <span>
              {derniereQuestion ? 'Découvrir mon profil' : 'Question suivante'}
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </footer>
      </div>
    </main>
  )
}

export default Quiz