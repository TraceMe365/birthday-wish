export default function Home() {
  return (
    <main className="page-root">
      <div className="card">
        <div className="card-left">
          <svg className="balloons" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#FFB3C6" />
                <stop offset="1" stopColor="#FF7BAC" />
              </linearGradient>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0" stopColor="#B3E5FF" />
                <stop offset="1" stopColor="#7BD7FF" />
              </linearGradient>
            </defs>
            <ellipse cx="60" cy="70" rx="28" ry="36" fill="url(#g1)" />
            <path d="M60 100 C62 120 58 140 60 160" stroke="#FF7BAC" strokeWidth="2" fill="none" />
            <ellipse cx="120" cy="50" rx="26" ry="34" fill="url(#g2)" />
            <path d="M120 84 C122 104 118 124 120 144" stroke="#7BD7FF" strokeWidth="2" fill="none" />
            <ellipse cx="90" cy="30" rx="18" ry="24" fill="#FFF1A8" />
            <path d="M90 54 C92 70 88 86 90 102" stroke="#FFD66A" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="card-right">
          <h1 className="title">Happy Birthday!</h1>

          <div className="wish"> 
            <p className="wish-text">Wishing you a year of good health and steady success</p>
          </div>

          {/* <div className="meta">
            <span className="from">— From all of us</span>
            <button className="cta">Send a virtual hug</button>
          </div> */}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-text">Best wishes from</span>
          <img src="/ov1.png" alt="from" className="footer-logo" />
          <span className="footer-text">team</span>
        </div>
      </footer>
    </main>
  )
}
