// ==========================================
// PROFESSIONAL MOVIE SEARCH APP
// ==========================================

const API_KEY = "8487f5e2";

async function searchMovie() {

    const movie = document.getElementById("movieInput").value.trim();

    if (movie === "") {
        alert("Please enter a movie name.");
        return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${API_KEY}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            document.getElementById("movieResult").innerHTML =
            "<h2>❌ Movie Not Found</h2>";
            return;
        }

        document.getElementById("movieResult").innerHTML = `
            <img src="${data.Poster}" alt="${data.Title}">
            <h2>${data.Title}</h2>

            <p>⭐ <b>IMDb:</b> ${data.imdbRating}</p>

            <p>📅 <b>Year:</b> ${data.Year}</p>

            <p>🎭 <b>Genre:</b> ${data.Genre}</p>

            <p>🌍 <b>Language:</b> ${data.Language}</p>

            <p>⏱ <b>Runtime:</b> ${data.Runtime}</p>

            <p>🎬 <b>Director:</b> ${data.Director}</p>

            <p>📖 ${data.Plot}</p>
        `;

    }

    catch (error) {

        document.getElementById("movieResult").innerHTML =
        "<h2>⚠️ Something went wrong.</h2>";

    }

}

// Enter Key Support
document.getElementById("movieInput").addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        searchMovie();

    }

});