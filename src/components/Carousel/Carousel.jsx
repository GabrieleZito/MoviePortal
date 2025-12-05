import { useRef } from "react";
import "./Carousel.css";
import Card from "../Card/Card";

export default function Carousel({ movies }) {
    const trackRef = useRef(null);
    // null -  valore iniziale "vuoto"
    // Crea un riferimento al div che contiene tutti i film (il "track" del carousel)
    // `trackRef.current` punterà all'elemento DOM del div reale quando sarà renderizzato

    const scrollAmount = () => {
        const track = trackRef.current;
        if (!track) return 0;
        return Math.round(track.clientWidth * 0.8);
    };
    // Funzione che calcola quanto scrollare a destra o sinistra
    // Prende l'80% della larghezza visibile del track
    // `clientWidth` è la larghezza visibile dell'elemento, senza scroll
    // `Math.round` arrotonda il valore

    const handleLeft = () => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    };
    // Funzione per scrollare a sinistra quando clicchi la freccia sinistra
    // scrollBy permette di muovere il contenuto dell'elemento di un certo numero di pixel
    // `behavior: "smooth"` fa in modo che lo scroll sia animato

    const handleRight = () => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    };
    // Funzione per scrollare a destra quando clicchi la freccia destra
    // Usa lo stesso `scrollAmount`, ma in positivo

    return (
        <div className="carousel-container">
            <button className="arrow left" onClick={handleLeft} aria-label="Scroll left">
                ‹
            </button>

            <div className="carousel-track" ref={trackRef}>
                {movies.map((movie) => (
                    <Card key={movie.id} film={movie} />
                ))}
            </div>
            {/* Div che contiene tutte le Card dei film */}
            {/* `ref={trackRef}` associa questo div a trackRef per poterlo scrollare */}
            {/* `.map` genera una Card per ogni film nell'array `movies` */}
            {/* `key={movie.id}` aiuta React a identificare univocamente ogni elemento */}

            <button className="arrow right" onClick={handleRight} aria-label="Scroll right">
                ›
            </button>
        </div>
    );
}
