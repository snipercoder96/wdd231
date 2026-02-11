async function loadLeaderboards() {
  const response = await fetch("https://api.chess.com/pub/leaderboards");
  const data = await response.json();
  const container = document.getElementById("leaderboard-container");

  // If container isn't ready yet (script ran before DOM), wait for DOMContentLoaded
  if (!container) {
    document.addEventListener('DOMContentLoaded', () => render(data));
    return;
  }

  render(data);

  function render(data) {
    const topPlayers = (data.live_blitz || []).slice(0, 15);
    const visible = topPlayers.slice(0, 5);
    const hidden = topPlayers.slice(5);

    container.innerHTML = `
          <h3>Top ${topPlayers.length} Blitz Players</h3>
          <ul class="leaderboard-list">
            ${visible.map(player => `
              <li class="leaderboard-item">
                <div class="player-name"><a href="${player.url}" target="_blank" rel="noopener">${player.username}</a></div>
                <div class="player-meta">Rank: <span class="rank">${player.rank}</span></div>
                <div class="player-meta">Score: <span class="score">${player.score}</span></div>
                <div class="player-meta">Profile: <a href="${player.url}" target="_blank" rel="noopener">View</a></div>
              </li>
            `).join("")}
          </ul>
          ${hidden.length > 0 ? `
            <button id="toggle-leaderboard" aria-expanded="false">Show ${hidden.length} more</button>
            <ul id="more-players" class="leaderboard-list" style="display:none">
              ${hidden.map(player => `
                <li class="leaderboard-item">
                  <div class="player-name"><a href="${player.url}" target="_blank" rel="noopener">${player.username}</a></div>
                  <div class="player-meta">Rank: <span class="rank">${player.rank}</span></div>
                  <div class="player-meta">Score: <span class="score">${player.score}</span></div>
                  <div class="player-meta">Profile: <a href="${player.url}" target="_blank" rel="noopener">View</a></div>
                </li>
              `).join("")}
            </ul>
          ` : ''}
        `;

    const toggle = document.getElementById('toggle-leaderboard');
    const more = document.getElementById('more-players');
    if (toggle && more) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
          more.style.display = 'none';
          toggle.textContent = `Show ${hidden.length} more`;
        } else {
          more.style.display = '';
          toggle.textContent = 'Show less';
        }
      });
    }
  }
}

loadLeaderboards();

export { loadLeaderboards }
