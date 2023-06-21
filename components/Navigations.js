import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Navigations() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("auth") !== null);
  }, []);

  return (
    <div className="bg-white pb-3">
      <nav className="container pt-3" style={{ width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>

          {isAuthenticated ?
            (
              <div>
                <Link className="btn btn-transparent" href="#">
                  <FontAwesomeIcon icon={faBell} style={{ color: "#7a7a7a", }} />
                </Link>
                <Link className="btn btn-transparent" href="#">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: "#7a7a7a", }} />
                </Link>
                <Link className="btn btn-transparent" href="/profile">
                  <img src="/profile_photos/profile_icon.png" />
                </Link>
              </div>
            ) : (
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
            )
          }
        </div>
      </nav>
    </div>

  );
}

export default Navigations;
