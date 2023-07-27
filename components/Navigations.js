import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from "axios";

function Navigations() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = React.useState("")

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("auth") !== null);
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://hire-job.onrender.com/v1/profile`)
      .then((response) => {
        setUserData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

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
                {/* <Link className="btn btn-transparent" href="#">
                  <FontAwesomeIcon icon={faBell} style={{ color: "#7a7a7a" }} />
                </Link>
                <Link className="btn btn-transparent" href="#">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: "#7a7a7a" }} />
                </Link> */}
                <Dropdown align="end">
                  <Dropdown.Toggle variant="transparent" id="profile-dropdown">
                    <img src={userData.photo} alt="Profile" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/jobs">Jobs</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
