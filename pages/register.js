import Link from "next/link";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function register() {
    const router = useRouter();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [jobTitle, setJobTitle] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [errMsg, setErrMsg] = React.useState(null);

    React.useEffect(() => {
        if (localStorage.getItem("auth") !== null) {
            router.replace('/');
        }
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrMsg("Password tidak sama");
            return;
        }

        // show loading before axios finish
        Swal.fire({
            title: "Please wait...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        axios
            .post(`https://hire-job.onrender.com/v1/auth/register`, {
                email: email,
                password: password,
                fullname: name,
                company: company,
                job_title: jobTitle,
                phone: phoneNumber
            })
            .then((result) => {
                Swal.fire({
                    title: "Register Success",
                    text: "Register success, please login...",
                    icon: "success",
                }).then(() => {
                    router.replace('/login');
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <main className="container" id="auth_page">
            <div className="row align-items-center mt-3">
                <div className="col col-md-6 side-screen">
                    <div style={{ position: "relative" }}>
                        <div
                            className="bg-primary content-to-center"
                            style={{
                                height: "120vh",
                                width: "100%",
                                position: "absolute",
                                top: 0,
                                opacity: 0.8,
                                padding: "20px",
                            }}
                        >
                            <h1 className="text-white">
                                Temukan developer berbakat & terbaik di berbagai bidang keahlian
                            </h1>
                        </div>
                    </div>

                    <img src="/auth.png" width="100%" style={{ height: "120vh" }} />
                </div>
                <div className="col-md-6 p-4 form-container">
                    <h2>Halo, Pewpeople</h2>
                    <p>
                        Silahkan isi Form dibawah ini untuk menjadi bagian dari Pewpeople.
                    </p>

                    {errMsg ? (
                        <div class="alert alert-danger" role="alert">
                            {errMsg}
                        </div>
                    ) : null}

                    <form onSubmit={handleRegister}>
                        <div class="mb-3">
                            <label for="InputName" class="form-label">
                                Nama
                            </label>
                            <input
                                type="name"
                                class="form-control form-control-lg"
                                id="InputName"
                                aria-describedby="nameHelp"
                                placeholder="Masukan nama panjang"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="InputEmail1" class="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                class="form-control form-control-lg"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Masukan alamat email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="InputJob" class="form-label">
                                Job Title
                            </label>
                            <input
                                type="job"
                                class="form-control form-control-lg"
                                id="InputJob"
                                aria-describedby="emailHelp"
                                placeholder="Masukan Bidang Pekerjaan"
                                onChange={(e) => setJobTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="InputCompany" class="form-label">
                                Company
                            </label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                id="InputCompany"
                                aria-describedby="emailHelp"
                                placeholder="Masukan Nama Perusahaan"
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="InputPhone" class="form-label">
                                No Handphone
                            </label>
                            <input
                                type="phone"
                                class="form-control form-control-lg"
                                id="InputPhone"
                                aria-describedby="phoneHelp"
                                placeholder="Masukan nomor handphone"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                class="form-control form-control-lg"
                                id="exampleInputPassword1"
                                placeholder="Masukan kata sandi"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-5">
                            <label for="exampleInputPassword2" class="form-label">
                                Konfirmasi Kata Sandi
                            </label>
                            <input
                                type="password"
                                class="form-control form-control-lg"
                                id="exampleInputPassword2"
                                placeholder="Masukan konfirmasi kata sandi"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" class="btn btn-warning text-white btn-lg">
                                Daftar
                            </button>
                        </div>

                        <p className="text-center mt-3">
                            Anda sudah punya akun?{" "}
                            <Link
                                href="/login"
                                className="text-decoration-none text-warning"
                            >
                                Masuk disini
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}
