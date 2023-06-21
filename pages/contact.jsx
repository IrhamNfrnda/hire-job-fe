import React from "react";
import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div id="profile_page">
            <Navigations />

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col col-md-4">
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
                                    <span key={key} class="badge bg-warning my-1 me-1 p-2 ">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-8">
                        <h2>Hubungi Lous Tomlinson</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        <div class="mt-3 mb-4">
                            <label for="namaInput" class="form-label text-muted">Nama Lengkap</label>
                            <input type="text" class="form-control" id="namaInput" placeholder="Masukan nama lengkap" />
                        </div>
                        <div class="mb-4">
                            <label for="emailInput" class="form-label text-muted">Email</label>
                            <input type="email" class="form-control" id="emailInput" placeholder="Masukan email" />
                        </div>
                        <div class="mb-4">
                            <label for="phoneNumberInput" class="form-label text-muted">No Handpone</label>
                            <input type="text" class="form-control" id="phoneNumberInput" placeholder="Masukan no handpone" />
                        </div>
                        <div class="mb-5">
                            <label for="descriptionTextArea" class="form-label text-muted">Deskripsi singkat</label>
                            <textarea class="form-control" id="descriptionTextArea" placeholder="Deskripsikan/jelaskan lebih detail " rows="5"></textarea>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-warning text-white fw-semibold" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
