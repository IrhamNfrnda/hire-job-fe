import React from 'react'
import { Link } from 'next/link'
import Navigations from '@/components/Navigations'
import Footer from '@/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from "axios";
import { useRouter } from "next/router";

export default function jobs() {
    const router = useRouter();

    const [pageStart, setPageStart] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    const [profiles, setProfiles] = React.useState([]);

    React.useEffect(() => {
        axios
            .get(`https://hire-job.onrender.com/v1/job?page=${currentPage}`)
            .then((response) => {
                const lastData = removeData(response?.data?.data?.rows, localStorage.getItem('userId'));
                setProfiles(lastData);
                setTotalPages(response?.data?.data?.total_page);
            })
            .catch((error) => console.error(error));
    }, [currentPage]);

    const removeData = (data, id) => {
        return data.filter((obj) => obj.id !== id);
    };


    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            if (currentPage % 5 === 0) {
                setPageStart(pageStart + 5);
            }
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            if ((currentPage - 1) % 5 === 0) {
                setPageStart(pageStart - 5);
            }
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

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
                        {

                            profiles.map((item, key) => (
                                <div>
                                    <div class="row align-items-center user-card" key={key}>
                                        <div class="col-md-1 ms-md-3">
                                            <div class="d-flex justify-content-center justify-content-md-start align-items-center">
                                                <img src={item.photo} class="img-fluid" alt="Photo Profile" />
                                            </div>
                                        </div>
                                        <div class="col-md-7 ms-0">
                                            <div class="card-body">
                                                <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
                                                    <h5 class="card-title my-1">{item.fullname}</h5>
                                                    <p class="card-text text-body-secondary my-1">{item.job_title}</p>
                                                    <p class="card-text my-1">
                                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#9e9e9e" }} />
                                                        <small class="text-body-secondary ms-1">{item.domicile}</small>
                                                    </p>
                                                    <div class="d-inline">
                                                        {item.skills?.map((skill, index) => (
                                                            <span key={index} class="badge bg-warning my-1 me-1">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-flex justify-content-center justify-content-md-end me-1">
                                            <button className="btn btn-primary">Lihat Profile</button>
                                            {/* <Link href={`/user/${item.id}`}>
                                                <button className="btn btn-primary">Lihat Profile</button>
                                            </Link> */}
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        }

                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <button
                            className="btn btn-outline-primary me-3"
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        {pageNumbers.slice(pageStart, pageStart + 5).map((number) => (
                            <div className="m-1">
                                <button
                                    className={`btn ${number === currentPage
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                        }`}
                                    key={number}
                                    onClick={() => setCurrentPage(number)}
                                >
                                    {number}
                                </button>
                            </div>
                        ))}
                        <button
                            className="btn btn-outline-primary ms-3"
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </section>
                {/* End of List Jobs Card */}

                <Footer />
            </main >
        </>
    )
}
