import { Heart } from "lucide-react";
import '../styles/Header.css'

export default function Header () {
    return (
        <header className="site-header">
            <a href="/" className="site-log" aria-label="Ah, l'amour ! - Accueil">
            Ah, l'amour !
            <Heart  size={19} strokeWidth={2} aria-hidden="true"/>
            </a>
            <span className="site-brand">LOVE.EXE</span>

        </header>
    )
}