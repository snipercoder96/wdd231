async function loadLeaderboards() {
    const response = await fetch("https://api.chess.com/pub/leaderboards");
    const data = await response.json();

    const container = document.getElementById("leaderboard-container");
    const topPlayers = data.live_blitz.slice(0, 5); 

    container.innerHTML = `
      <h3>Top 5 Blitz Players</h3>
      <ul>
        ${topPlayers.map(player => `
          <li>
            <a href="${player.url}" target="_blank">${player.username}</a>
            (Rank: ${player.rank}, Score: ${player.score})
          </li>
        `).join("")}
      </ul>
    `;
}

loadLeaderboards();

export {loadLeaderboards}
  