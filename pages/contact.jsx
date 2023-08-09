import React from "react";
import { useRouter } from 'next/router';
import Swal from "sweetalert2";
import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const router = useRouter();
    const [userData, setUserData] = React.useState("")
    const [subject, setSubject] = React.useState();
    const [description, setDescription] = React.useState();

    React.useEffect(() => {
        if (localStorage.getItem("auth") == null) {
            router.replace("/login")
        } else {
            setUserData(router.query)
            console.log(router.query)
        }
    }, [])

    const handleHire = () => {
        const token = localStorage.getItem("token");
        axios
            .post(
                `${process.env.NEXT_PUBLIC_APP_BASE_URL}/contact/${userData?.id}`,
                {
                    subject: subject,
                    description: description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                Swal.fire({
                    title: "Update Success!",
                    text: res?.data?.messages,
                    icon: "success",
                });
                router.push("/jobs");
            })
            .catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text:
                        err?.response?.data?.messages?.description?.message ??
                        err?.response?.data?.messages?.subject?.message,
                    icon: "error",
                });
            })
    }

    return (
        <div id="profile_page">
            <Navigations />

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col col-md-4 col-sm-12">
                        <div className="card p-4">
                            <div className="d-flex justify-content-center">
                                <img
                                    src={userData?.photo}
                                    alt="profile"
                                    style={{
                                        height: "150px",
                                        width: "150px",
                                        borderRadius: "50%",
                                    }}
                                />
                            </div>

                            <h1 style={{ fontSize: "30px", marginTop: "30px" }}>
                                {userData?.fullname}
                            </h1>
                            <p>{userData?.job_title}</p>


                            <div className="d-flex mb-3 align-items-center">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className="text-muted ms-2 mb-0">
                                    {userData?.domicile}
                                </p>
                            </div>

                            <p className="text-black-50">
                                {userData?.description}
                            </p>

                            <h2 style={{ fontSize: "25px" }}>Skills</h2>
                            <div className="d-inline">
                                {userData?.skills?.map((item, key) => (
                                    <span key={key} class="badge bg-warning m-1 p-2 ">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-8 col-sm-12 mt-sm-4">
                        <h2>Hubungi {userData?.fullname}</h2>
                        <p>Kirimkan pesan untuk rekruter yang sesuai dengan kriteria perusahaan anda.</p>
                        <div class="mt-3 mb-4">
                            <label for="namaInput" class="form-label text-muted">Subjek</label>
                            <input type="text" class="form-control" id="namaInput" placeholder="Tujuan tentang pesan ini"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div class="mb-5">
                            <label for="descriptionTextArea" class="form-label text-muted">Deskripsi</label>
                            <textarea class="form-control" id="descriptionTextArea" placeholder="Deskripsikan/jelaskan lebih detail " rows="5"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div class="d-grid">
                            <button
                                class="btn btn-warning text-white fw-semibold"
                                type="button"
                                onClick={handleHire}
                            >
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
