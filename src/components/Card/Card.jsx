export function Card({ film }) {
  const fallback = "https://via.placeholder.com/400x600?text=No+Image";
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f3f3",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "300px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          background: "white",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
              : fallback
          }
          alt={film.title}
          style={{ width: "100%", height: "420px", objectFit: "cover" }}
        />
        <div style={{ padding: "16px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            {film.title}
          </h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
            {film.release_date ? film.release_date.slice(0, 4) : "N/A"}
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.4" }}>
            {film.overview || "Nessuna descrizione disponibile."}
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "12px",
              color: "#333",
            }}
          >
            ⭐ {film.vote_average ? film.vote_average.toFixed(1) : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
