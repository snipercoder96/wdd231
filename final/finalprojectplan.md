# 📑 Page Structure
## index.html  (Home Page)

- Intro to chess, hero image, site branding.

- No form here — keep it clean and welcoming.

## learn.html  (Learn Chess Page)

- Rules, openings, tactics.

- API integration: “Puzzle of the Day” from Lichess.

- Interactive diagrams.

## community.html  (Community & Stats Page)

- Leaderboards or recent games via Chess.com  API.

- This is where your form goes.

- Example: “Join the Chess Community” or “Sign up for Chess Mentor tips.”

- Collect name, email, chess level, favorite opening.

- Submit(form) → thankyou.html  (displays submitted data).

------------------------------------------------------------------------------------------------------------------------
# Index.html In Detail:
- Have your header with a hero image, footer
- For the `<main>`:

``` html
<div>
    <article> 
        <h3>♟ Learn the Rules</h3> 
        <p>Step-by-step guides for beginners and advanced players.</p> 
    </article> 
    <article> 
        <h3>🧩 Daily Puzzle</h3> 
        <p>Sharpen your skills with interactive challenges.</p> 
    </article> 
    <article> 
        <h3>🌍 Community</h3> 
        <p>Join a global network of chess lovers.</p> 
    </article>
</div>

```
---------------------------------------------------------------------------------------------------------------------------------
# Learn.html In detail:

- Have the header with hero image
- For the `<main>`:


## Rules Section
``` html

<main> 
    <section class="rules"> 
        <h2>Chess Basics</h2> 
        <p>Chess is played on an 8x8 board with 16 pieces per side. The goal is to checkmate the opponent’s king.</p> 
        <ul> 
            <li>Pawns move forward but capture diagonally.</li> 
            <li>Knights move in an L-shape.</li> <li>Bishops move diagonally.</li> 
            <li>Rooks move horizontally or vertically.</li> <li>Queens move in any direction.</li> 
            <li>Kings move one square in any direction.</li> 
        </ul> 
    </section>
</main>

```

`NB` bUT have them in a modal (dialog), so that the user can interact with these elements.

## Opennings

- Must consist of openings like: Ruy lopez(Spanish game), Italian Game, French Defense, Queens Gambit, Scicillian defense
- Give the history of each openning, what it does, and the movement notation eg. Nc5 etc ( If possible include a live game on that)

## Puzzle of the day
- Use API fetching to fetch the puzzle of the day, so that it creates a natural play for beginners to solve a puzzle.
- INside Js provide a link to them so that they are able to go play the puzzle.
eg.

``` javascript

async function loadPuzzle() {
  try {
    const response = await fetch("https://lichess.org/api/puzzle/daily");
    const data = await response.json();

    document.getElementById("puzzle-container").innerHTML = `
      <p><strong>Rating:</strong> ${data.puzzle.rating}</p>
      <p><strong>Themes:</strong> ${data.puzzle.themes.join(", ")}</p>
      <a href="https://lichess.org/training/${data.puzzle.id}" target="_blank">
        Play Today’s Puzzle on Lichess
      </a>
    `;
  } catch (error) {
    document.getElementById("puzzle-container").textContent = "Failed to load puzzle.";
  }
}
loadPuzzle();

```

----------------------------------------------------------------------------------------------------------------------------
## Community.html In Detail
- Using API from chess.com to display the leaderboard of the top 5 players eg.

``` html
<main> 
    <section class="leaderboards"> 
        <h2>Top Chess Players</h2> 
        <div id="leaderboard-container"> 
            <p>Loading leaderboards...</p> 
            <!-- Inject javascript here -->
        </div> 
    </section>
</main>

```
- Get the community form here (put it in a modal)
``` html

  <section class="join">
    <h2>Join the Chess Community</h2>
    <form action="thankyou.html" method="get">
      <fieldset>
        <legend>Sign Up</legend>

        <label for="name">Name
          <input type="text" id="name" name="name" required>
        </label>

        <label for="email">Email
          <input type="email" id="email" name="email" required>
        </label>

        <label for="level">Chess Level
          <select id="level" name="level" required>
            <option value="" disabled selected>Select level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </label>

        <label for="favoriteOpening">Favorite Opening
          <input type="text" id="favoriteOpening" name="favoriteOpening" placeholder="e.g. Sicilian Defense">
        </label>

        <button type="submit">Join Now</button>
      </fieldset>
    </form>
  </section>

  <dialog id="signUpForm">
        <!-- Inject the form in here -->
  </dialog>
</main>

```
- Then in the page you put something like Sign up to join chess community `NB`, use Javascript to fullfill the injection of ths form in a modal (dialog)

----------------------------------------------------------------------------------------------------------------------------------

# Thankyou.html In Detail

- Get the Url (using js) inject the users form data in there


