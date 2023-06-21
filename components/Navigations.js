import React from "react";
import Link from "next/link";

function Navigations() {
  return (
    <div className="bg-white pb-3">
      <nav className="container pt-3" style={{ width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center">
          <img src="/logo.png" alt="logo" />

          <div>
            <Link href="/login">
              <button
                className="btn btn-outline-primary"
                style={{ marginRight: "10px" }}
              >
                Masuk
              </button>
            </Link>
            <Link href="/register">
              <button className="btn btn-primary">
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navigations;
