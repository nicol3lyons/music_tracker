// ============================================================
//  ArtistPulse — App Logic
//  This file handles all navigation and rendering.
//  You don't need to edit this file unless you want to
//  change how the site behaves.
// ============================================================

let currentArtist = null;

function renderDashboard() {
  const sorted = [...artists].sort((a, b) => b.weeklyGrowth - a.weeklyGrowth);
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  document.getElementById('root').innerHTML = `
    <nav class="nav">
      <span class="nav-logo">◈ ArtistPulse</span>
      <span style="font-family:var(--mono);font-size:11px;color:var(--text3)">Personal Tracker</span>
    </nav>
    <div class="dash-header">
      <div class="dash-title">Weekly<br><span>Growth</span> Board</div>
      <div class="dash-sub">Ranked by 7-day listener growth</div>
      <div class="updated">
        <span class="dot"></span> Updated ${today} · ${artists.length} artists tracked
      </div>
    </div>
    <div class="rank-list">
      ${sorted.map((a, i) => `
        <div class="rank-item ${i === 0 ? 'top1' : ''}" onclick="openArtist(${a.id})">
          ${i === 0 ? '<span class="crown">↑ Top Mover</span>' : ''}
          <span class="rank-num">${String(i + 1).padStart(2, '0')}</span>
          <div class="rank-avatar" style="background:${a.color};color:${a.textColor}">${a.initials}</div>
          <div class="rank-info">
            <div class="rank-name">${a.name}</div>
            <div class="rank-genre">${a.genre}</div>
          </div>
          <div class="rank-stats">
            <div class="rank-growth">+${a.weeklyGrowth}%</div>
            <div class="rank-streams">${a.stats.monthlyListeners} listeners</div>
          </div>
          <span class="rank-arrow">›</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderArtist(a) {
  document.getElementById('root').innerHTML = `
    <nav class="nav">
      <span class="nav-logo">◈ ArtistPulse</span>
      <button class="nav-back" onclick="goBack()">← Dashboard</button>
    </nav>
    <div class="artist-page">
      <div class="artist-hero">
        <div class="artist-avatar-lg" style="background:${a.color};color:${a.textColor}">${a.initials}</div>
        <div class="artist-hero-info">
          <div class="artist-hero-name">${a.name}</div>
          <div class="artist-hero-genre">${a.genre}</div>
          <div class="artist-tags">${a.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Monthly Listeners</div>
          <div class="stat-value">${a.stats.monthlyListeners}</div>
          <div class="stat-change">${a.stats.monthlyDelta}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Streams</div>
          <div class="stat-value">${a.stats.streams}</div>
          <div class="stat-change">${a.stats.streamsDelta}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Followers</div>
          <div class="stat-value">${a.stats.followers}</div>
          <div class="stat-change">${a.stats.followersDelta}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Spotify Rank</div>
          <div class="stat-value">${a.stats.spotifyRank}</div>
          <div class="stat-change" style="color:var(--text2)">Global artists</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Discography & Releases</div>
        <div class="releases">
          ${a.releases.map(r => `
            <div class="release">
              <div class="release-icon">${r.icon}</div>
              <div class="release-info">
                <div class="release-title">${r.title}</div>
                <div class="release-meta">${r.type} · ${r.year}</div>
              </div>
              <div class="release-streams">${r.streams}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Background</div>
        <div class="bio">${a.bio}</div>
      </div>

      <div class="section">
        <div class="section-title">Weekly Growth</div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
            <span style="font-family:var(--mono);font-size:12px;color:var(--text2)">7-day listener growth</span>
            <span style="font-family:var(--mono);font-size:20px;font-weight:500;color:var(--accent)">+${a.weeklyGrowth}%</span>
          </div>
          <div class="growth-bar-bg">
            <div class="growth-bar-fill" id="gbar" style="width:0%"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const bar = document.getElementById('gbar');
    if (bar) bar.style.width = Math.min(a.weeklyGrowth * 4, 100) + '%';
  }, 100);

  window.scrollTo(0, 0);
}

function openArtist(id) {
  currentArtist = artists.find(a => a.id === id);
  renderArtist(currentArtist);
}

function goBack() {
  currentArtist = null;
  renderDashboard();
}

// Boot the app
renderDashboard();
