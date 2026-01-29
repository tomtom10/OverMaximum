import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} text-gradient`}>
              OVER<br />MAXIMUM
            </h1>
            <p className={styles.heroTagline}>
              Push Beyond The Limit
            </p>
            <p className={styles.heroDescription}>
              A cutting-edge record label championing groundbreaking artists who refuse to be confined by convention.
            </p>
            <div className={styles.heroCtas}>
              <button className="btn btn-primary">Explore Artists</button>
              <button className="btn btn-secondary">Latest Releases</button>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* Featured Artists */}
      <section className={styles.artists}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Artists</h2>
          <p className={styles.sectionSubtitle}>
            Meet the visionaries redefining sound
          </p>
          <div className={styles.artistGrid}>
            {[
              { name: "Echo Pulse", genre: "Electronic / Experimental", color: "var(--color-primary)" },
              { name: "Neon Cascade", genre: "Synthwave / Retrowave", color: "var(--color-secondary)" },
              { name: "Void Frequency", genre: "Dark Ambient / Industrial", color: "var(--color-accent)" },
              { name: "Crystal Horizon", genre: "Future Bass / Chillwave", color: "var(--color-primary-light)" },
            ].map((artist, index) => (
              <div key={index} className={`card ${styles.artistCard}`}>
                <div className={styles.artistImage} style={{ background: `linear-gradient(135deg, ${artist.color}, transparent)` }}>
                  <div className={styles.artistOverlay}>
                    <span className={styles.playIcon}>▶</span>
                  </div>
                </div>
                <div className={styles.artistInfo}>
                  <h3>{artist.name}</h3>
                  <p>{artist.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className={styles.releases}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Latest Releases</h2>
          <p className={styles.sectionSubtitle}>
            Fresh tracks from our roster
          </p>
          <div className={styles.releaseGrid}>
            {[
              { title: "Quantum Dreams", artist: "Echo Pulse", date: "2026" },
              { title: "Midnight Drive", artist: "Neon Cascade", date: "2026" },
              { title: "Event Horizon", artist: "Void Frequency", date: "2025" },
            ].map((release, index) => (
              <div key={index} className={`glass ${styles.releaseCard}`}>
                <div className={styles.releaseArtwork}>
                  <div className={styles.releaseGradient}></div>
                </div>
                <div className={styles.releaseInfo}>
                  <h3>{release.title}</h3>
                  <p className={styles.releaseArtist}>{release.artist}</p>
                  <p className={styles.releaseDate}>{release.date}</p>
                  <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Beyond Convention</h2>
              <p>
                Over Maximum was founded on a simple principle: great art doesn't follow rules, it creates them.
                We're more than a label—we're a collective of artists, producers, and visionaries united by our
                refusal to accept the status quo.
              </p>
              <p>
                From experimental electronic to boundary-pushing ambient, we champion sounds that challenge,
                inspire, and transform. Our roster represents the future of music, today.
              </p>
              <button className="btn btn-primary">Our Story</button>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.aboutGlow}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3 className="text-gradient">OVER MAXIMUM</h3>
              <p>Push Beyond The Limit</p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <h4>Music</h4>
                <ul>
                  <li><a href="#artists">Artists</a></li>
                  <li><a href="#releases">Releases</a></li>
                  <li><a href="#playlists">Playlists</a></li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h4>About</h4>
                <ul>
                  <li><a href="#story">Our Story</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h4>Connect</h4>
                <ul>
                  <li><a href="#spotify">Spotify</a></li>
                  <li><a href="#soundcloud">SoundCloud</a></li>
                  <li><a href="#instagram">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2026 Over Maximum Records. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
