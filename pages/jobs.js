import React from 'react'
import { Link } from 'next/link'
import Navigations from '@/components/Navigations'
import Footer from '@/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function jobs() {
    return (
        <>
            <main id='jobs_page'>
                <Navigations />
                {/* Start of Top Bar */}
                <section className='container-fluid top-bar d-flex align-items-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <h4 className='text-white'>
                                    Top Jobs
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of Top Bar */}

                {/* Start of Search Bar */}

                <section className='container mt-3'>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for any skill" aria-label="Recipient's username with two button addons" />
                        <span class="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <DropdownButton id="dropdown-basic-button" variant="outline-primary" title="Sort">
                            <Dropdown.Item href="#">Sortir berdasarkan nama</Dropdown.Item>
                            <Dropdown.Item href="#">Sortir berdasarkan Skill</Dropdown.Item>
                            <Dropdown.Item href="#">Sortir berdasarkan Lokasi</Dropdown.Item>
                            <Dropdown.Item href="#">Sortir berdasarkan freelance</Dropdown.Item>
                            <Dropdown.Item href="#">Sortir berdasarkan fulltime</Dropdown.Item>
                        </DropdownButton>
                        <button class="btn btn-primary" type="button">Search</button>
                    </div>
                </section>

                {/* End of Search Bar */}

                {/* Start of List Jobs Card */}
                <section className='container mt-3 jobs-card mb-5'>
                    <div class="card mb-3">
                        <div class="row align-items-center">
                            <div class="col-md-1 ms-3">
                                <img src="/profile_photos/profile1.png" class="img-fluid" alt="Photo Profile" />
                            </div>
                            <div class="col-md-7 ms-0">
                                <div class="card-body">
                                    <h5 class="card-title my-1">Nama Lengkap</h5>
                                    <p class="card-text text-body-secondary my-1">Pekerjaan</p>
                                    <p class="card-text my-1"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#9e9e9e", }} /><small class="text-body-secondary ms-1">Lokasi</small></p>
                                    <div className="d-inline">
                                        {[
                                            "Phyton",
                                            "Laravel",
                                            "Golang",
                                        ].map((item, key) => (
                                            <span key={key} class="badge bg-warning my-1 me-1 p-2 ">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 d-flex justify-content-end me-1">
                                <button class="btn btn-primary">Lihat Profile</button>
                            </div>
                        </div>
                        <hr />
                        <div class="row align-items-center">
                            <div class="col-md-1 ms-3">
                                <img src="/profile_photos/profile1.png" class="img-fluid" alt="Photo Profile" />
                            </div>
                            <div class="col-md-7 ms-0">
                                <div class="card-body">
                                    <h5 class="card-title my-1">Nama Lengkap</h5>
                                    <p class="card-text text-body-secondary my-1">Pekerjaan</p>
                                    <p class="card-text my-1"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#9e9e9e", }} /><small class="text-body-secondary ms-1">Lokasi</small></p>
                                    <div className="d-inline">
                                        {[
                                            "Phyton",
                                            "Laravel",
                                            "Golang",
                                        ].map((item, key) => (
                                            <span key={key} class="badge bg-warning my-1 me-1 p-2 ">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 d-flex justify-content-end me-1">
                                <button class="btn btn-primary">Lihat Profile</button>
                            </div>
                        </div>
                        <hr />
                        <div class="row align-items-center">
                            <div class="col-md-1 ms-3">
                                <img src="/profile_photos/profile1.png" class="img-fluid" alt="Photo Profile" />
                            </div>
                            <div class="col-md-7 ms-0">
                                <div class="card-body">
                                    <h5 class="card-title my-1">Nama Lengkap</h5>
                                    <p class="card-text text-body-secondary my-1">Pekerjaan</p>
                                    <p class="card-text my-1"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#9e9e9e", }} /><small class="text-body-secondary ms-1">Lokasi</small></p>
                                    <div className="d-inline">
                                        {[
                                            "Phyton",
                                            "Laravel",
                                            "Golang",
                                        ].map((item, key) => (
                                            <span key={key} class="badge bg-warning my-1 me-1 p-2 ">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 d-flex justify-content-end me-1">
                                <button class="btn btn-primary">Lihat Profile</button>
                            </div>
                        </div>
                        <hr />
                        <div class="row align-items-center">
                            <div class="col-md-1 ms-3">
                                <img src="/profile_photos/profile1.png" class="img-fluid" alt="Photo Profile" />
                            </div>
                            <div class="col-md-7 ms-0">
                                <div class="card-body">
                                    <h5 class="card-title my-1">Nama Lengkap</h5>
                                    <p class="card-text text-body-secondary my-1">Pekerjaan</p>
                                    <p class="card-text my-1"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#9e9e9e", }} /><small class="text-body-secondary ms-1">Lokasi</small></p>
                                    <div className="d-inline">
                                        {[
                                            "Phyton",
                                            "Laravel",
                                            "Golang",
                                        ].map((item, key) => (
                                            <span key={key} class="badge bg-warning my-1 me-1 p-2 ">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 d-flex justify-content-end me-1">
                                <button class="btn btn-primary">Lihat Profile</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of List Jobs Card */}

                <Footer />
            </main>
        </>
    )
}
