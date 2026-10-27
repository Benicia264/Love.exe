
import '../styles/ProgressBar.css'

function ProgressBar({ actuelle, total }) {
  const progression = (actuelle / total) * 100

  return (
    <div
      className="progression"
      role="progressbar"
      aria-label="Progression du quiz"
      aria-valuenow={actuelle}
      aria-valuemin={0}
      aria-valuemax={total}
    >
      <div className="progression-infos">
        <span>TON PROFIL AMOUREUX</span>
        <span>
          {actuelle} / {total}
        </span>
      </div>

      <div className="progression-piste">
        <div
          className="progression-remplissage"
          style={{ width: `${progression}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar

