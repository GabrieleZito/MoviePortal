import { Card } from "../Card/Card";
import "./FavoritePage.css";

function FavoritePage({ favorites, setFavorites }) {
    return (
        <div>
            {favorites.length > 0 ? (
                <div className="favorite-grid">
                    {favorites.map((f) => (
                        <Card key={f.id} film={f}></Card>
                    ))}
                </div>
            ) : (
                "Non hai ancora aggiunto nessun Preferito"
            )}
        </div>
    );
}

export default FavoritePage;
