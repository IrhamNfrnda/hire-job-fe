import Link from "next/link";
import React from "react";
import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";

function Profile() {
  return (
    <div id="profile_page">
      <Navigations />

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col col-md-4 mt-2">
            <div className="card p-4">
              <div className="d-flex justify-content-center">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <h1 style={{ fontSize: "30px", marginTop: "30px" }}>
                Louis Tomlinson
              </h1>
              <p>Web Developer</p>

              <p className="text-black-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>

              <button className="btn btn-primary btn-lg mt-4 mb-3">Hire</button>

              <h2 style={{ fontSize: "25px" }}>Skills</h2>

              <div className="d-inline">
                {[
                  "Phyton",
                  "Laravel",
                  "Golang",
                  "Ruby",
                  "Rust",
                  "Javascript",
                  "Express",
                ].map((item, key) => (
                  <span key={key} class="badge bg-warning m-1 p-2 ">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col col-md-8 mt-2">
            <div className="card p-4 mb-4">
              <h3>Data Diri</h3>
              <hr />
              <div class="mb-4">
                <label for="nameInput" class="form-label text-muted">Nama Lengkap</label>
                <input type="text" class="form-control" id="nameInput" placeholder="Masukan nama lengkap" />
              </div>
              <div class="mb-4">
                <label for="jobDeskInput" class="form-label text-muted">Job Desk</label>
                <input type="text" class="form-control" id="jobDeskInput" placeholder="Masukan job desk" />
              </div>
              <div class="mb-4">
                <label for="domisiliInput" class="form-label text-muted">Domisili</label>
                <input type="text" class="form-control" id="domisiliInput" placeholder="Masukan domisili" />
              </div>
              <div class="mb-4">
                <label for="workPlaceInput" class="form-label text-muted">Tempat kerja</label>
                <input type="text" class="form-control" id="workPlaceInput" placeholder="Masukan tempat kerja" />
              </div>
              <div class="mb-4">
                <label for="descriptionTextArea" class="form-label text-muted">Deskripsi singkat</label>
                <textarea class="form-control" id="descriptionTextArea" rows="3"></textarea>
              </div>
            </div>
            <div className="card p-4 mb-4">
              <h3>Skill</h3>
              <hr />
              <div className="row d-flex justify-content-between">
                <div className="col-md-10">
                  <input type="text" class="form-control" id="skillInput" placeholder="Java" />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-warning text-white">Simpan</button>
                </div>
              </div>
            </div>
            <div className="card p-4">
              <h3>Pengalaman Kerja</h3>
              <hr />
              <div class="mb-4">
                <label for="posisiInput" class="form-label text-muted">Posisi</label>
                <input type="text" class="form-control" id="posisiInput" placeholder="Web developer" />
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <div>
                    <label for="companyInput" class="form-label text-muted">Nama perusahaan</label>
                    <input type="text" class="form-control" id="companyInput" placeholder="PT Harus bisa" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label for="dateInput" class="form-label text-muted">Bulan/tahun</label>
                    <input type="text" class="form-control" id="dateInput" placeholder="Januari 2018" />
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label for="descriptionTextArea" class="form-label text-muted">Deskripsi singkat</label>
                <textarea class="form-control" id="descriptionTextArea" placeholder="Deskripsikan pekerjaan anda" rows="3"></textarea>
              </div>
              <hr />
              <div class="d-grid">
                <button class="btn btn-outline-warning fw-semibold" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;

