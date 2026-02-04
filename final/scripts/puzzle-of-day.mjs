async function puzzleOfDay() {

    try {
        const response = await fetch("https://lichess.org/api/puzzle/daily");
        const puzzle = await response.json();

        const section = document.getElementById("puzzleOfTheDay");

        section.innerHTML = `
        <h2>Daily Puzzle</h2> 
        <p><strong>Game ID:</strong> ${puzzle.game.id}</p>
        <p><strong>Puzzle ID:</strong> ${puzzle.puzzle.id}</p>
        <p><strong>Rating:</strong> ${puzzle.puzzle.rating}</p> 
        <p><strong>Themes:</strong> ${puzzle.puzzle.themes.join(", ")}</p> 
        <p><strong>Solution Moves:</strong> ${puzzle.puzzle.solution.join(", ")}</p>
        <p><strong>Puzzle link at:</strong> <a href="https://lichess.org/training/${puzzle.puzzle.id}">Link here</a></p>
        `;
    } catch (error){
        const section = document.getElementById("puzzleOfTheDay");
        section.innerHTML = 
        `Error found: ${error}`;
    }
    
}


export {puzzleOfDay};