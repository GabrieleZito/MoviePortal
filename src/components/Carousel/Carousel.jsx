import { useEffect, useRef } from "react";
import "./Carousel.css";
import Card from "../Card/Card";

export default function Carousel({ movies }) {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = track;

            if (scrollLeft <= 0) {
                console.log("👉 Sei tutto a sinistra!");
            }

            if (scrollLeft + clientWidth >= scrollWidth - 1) {
                console.log("👉 Sei tutto a destra!");
            }
        };

        track.addEventListener("scroll", handleScroll);
        return () => track.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollAmount = () => {
        const track = trackRef.current;
        if (!track) return 0;
        return Math.round(track.clientWidth * 0.8);
    };

    const handleLeft = () => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    };

    const handleRight = () => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    };

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

            <button className="arrow right" onClick={handleRight} aria-label="Scroll right">
                ›
            </button>
        </div>
    );
}
