import React from 'react'

function Footer() {
  return (
    <footer className="bg-primary" style={{ minHeight: "300px" }}>
      <div className="container pt-5">
        <img src="/logo-white.png" alt="logo" />

        <p className="text-white mt-3 mb-5">
          Talenta terbaik negri untuk perubahan revolusi 4.0
          <br /> Cara mudah mencari kandidat bertalenta untuk perusahan
        </p>

        <hr style={{ borderBottom: "2px solid white" }} />

        <p className="text-white mt-3">2023 Peworld. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer
