import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const router = useRouter();
  const [userData, setUserData] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [job, setJob] = React.useState("");
  const [domicile, setDomicile] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [skills, setSkills] = React.useState([]);
  const [jobHistory, setJobHistory] = React.useState([]);
  const [jobImage, setJobImage] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [photoProfile, setPhotoProfile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSkillsChanged, setisSkillsChanged] = React.useState(false);


  React.useEffect(() => {
    // show loading before axios finish
    if (localStorage.getItem("auth") == null) {
      router.replace("/login");
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/profile`)
        .then((response) => {
          setUserData(response?.data?.data);
          setFullname(response?.data?.data?.fullname);
          setJob(response?.data?.data?.job_title);
          setDomicile(response?.data?.data?.domicile);
          setCompany(response?.data?.data?.company);
          setPhone(response?.data?.data?.phone);
          setDescription(response?.data?.data?.description);
          setSkills(response?.data?.data?.skills);
          setJobHistory(response?.data?.data?.job_history);
          setIsLoading(false);
          Swal.close()
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setIsLoading(false);
        });
    }
  }, []);

  React.useEffect(() => {
    if (isLoading) {
      Swal.fire({
        title: "Mohon ditunggu...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }, [isLoading])

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    setisSkillsChanged(true);
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    const skillInput = document.getElementById("skillInput");

    if (skillInput.value) {
      setisSkillsChanged(true);
      const newSkill = skillInput.value;
      const updatedSkills = [...skills, newSkill];
      setSkills(updatedSkills);
      skillInput.value = "";
    }
  };

  const handleDeleteJobHistory = (jobId) => {
    setIsLoading(true);
    axios
      .delete(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/job/${jobId}`)
      .then((response) => {
        setJobHistory(response?.data?.data);
        setIsLoading(false);
        Swal.close()
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          title: "Failed to add job history",
          text: error.messages,
          icon: "error",
        })
      });
  };


  const handleAddJobHistory = () => {
    setIsLoading(true);

    const jobPosition = document.getElementById("jobPositionInput").value;
    const jobCompany = document.getElementById("jobCompanyInput").value;
    const jobDate = document.getElementById("jobDateInput").value;
    const jobDescription = document.getElementById("jobDescriptionInput").value;

    // Create form data object to send to API
    const formData = new FormData();
    formData.append("position", jobPosition);
    formData.append("company", jobCompany);
    formData.append("date", changeDateFormat(jobDate));
    formData.append("description", jobDescription);
    formData.append("photo", jobImage);

    if (jobPosition && jobCompany && jobDate && jobDescription) {

      console.log(formData);

      axios.post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/job`, formData)
        .then(response => {
          setIsLoading(false);
          Swal.close()
          setJobHistory(response?.data?.data);
          document.getElementById("jobPositionInput").value = "";
          document.getElementById("jobCompanyInput").value = "";
          document.getElementById("jobDateInput").value = "";
          document.getElementById("jobDescriptionInput").value = "";
          document.getElementById("imageInput").value = "";
          setJobImage(null);
          setSelectedImage(null);
        })
        .catch(error => {
          setIsLoading(false);
          Swal.fire({
            title: "Failed to add job history",
            text: error?.response?.data?.messages?.description?.message ||
              error?.response?.data?.messages?.position?.message ||
              error?.response?.data?.messages?.company?.message ||
              error?.response?.data?.messages?.date?.message ||
              error?.response?.data?.messages?.photo?.message,
            icon: "error",
          })
        });
    }
  }


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onloadend = () => {
        setPhotoProfile(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedImage(file);
    }
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    setJobImage(file);
  };

  const handlePostSkills = () => {
    const skillData = {
      skills: skills,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/skills`, skillData)
      .then((response) => {
        setIsLoading(false);
        Swal.close()
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          title: "Failed to update skills",
          text: error.messages,
          icon: "error",
        });
      });
  };

  const updateUser = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (selectedImage) {
      await uploadPhoto()
        .catch((error) => {
          return;
        });
    }

    axios
      .patch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/profile`, {
        fullname,
        company,
        job_title: job,
        phone,
        description,
        domicile,
      })
      .then((response) => {
        setIsLoading(false);

        if (isSkillsChanged) {
          handlePostSkills();
        }

        Swal.fire({
          title: "Profile updated",
          text: response.data.message,
          icon: "success",
        });

        router.replace('/profile');

      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          title: "Failed to update profile",
          text: error?.response?.data?.messages?.fullname?.message ||
            error?.response?.data?.messages?.job_title?.message ||
            error?.response?.data?.messages?.company?.message ||
            error?.response?.data?.messages?.phone?.message ||
            error?.response?.data?.messages?.domicile?.message ||
            error?.response?.data?.messages?.description?.message,
          icon: "error",
        });
      });
  };

  const handleCancelEdit = () => {
    router.replace('/profile');
  };

  const uploadPhoto = async () => {
    const formData = new FormData();
    formData.append("photo", selectedImage);
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/profile/picture`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal upload foto profil",
        text: error.response?.data?.messages || "Error updating profile picture. Please try again later.",
        confirmButtonText: "OK",
      });
      return;
    }
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  const changeDateFormat = (dateString) => {
    const parts = dateString.split('-');
    const newDateFormat = parts[1] + '-' + parts[0];
    return newDateFormat;
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
                  src={photoProfile || userData?.photo}
                  alt="profile"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h1 style={{ fontSize: "30px", marginTop: "30px" }}>
                {fullname}
              </h1>
              <p>{job}</p>

              <div className="d-flex mb-3 align-items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="text-muted ms-2 mb-0">
                  {domicile != "-" ? domicile : "Belum ada lokasi"}
                </p>
              </div>

              <p className="text-black-50">
                {description != "-" ? description : "Belum ada deskripsi"}
              </p>

              <button className="btn btn-primary btn-lg mt-4 " onClick={updateUser}>Simpan</button>
              <button className="btn btn-outline-primary btn-lg mt-2 mb-3" onClick={handleCancelEdit}>Batal</button>
            </div>
          </div>
          <div className="col col-md-8 col-sm-12 mt-md-0 mt-sm-5">
            <div className="card p-4 mb-4">
              <h3>Foto Profil</h3>
              <hr />
              <label
                htmlFor="photoInput"
                className="photo-input-label"
              >
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  className="form-control photo-input"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="card p-4 mb-4">
              <h3>Data Diri</h3>
              <hr />
              <div class="mb-4">
                <label for="nameInput" class="form-label text-muted">Nama Lengkap</label>
                <input
                  type="text"
                  class="form-control"
                  id="nameInput"
                  placeholder="Masukan nama lengkap"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label for="jobDeskInput" class="form-label text-muted">Job Desk</label>
                <input
                  type="text"
                  class="form-control"
                  id="jobDeskInput"
                  placeholder="Masukan job desk"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label for="domisiliInput" class="form-label text-muted">Domisili</label>
                <input
                  type="text"
                  class="form-control"
                  id="domisiliInput"
                  placeholder="Masukan domisili"
                  value={domicile}
                  onChange={(e) => setDomicile(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label for="workPlaceInput" class="form-label text-muted">Tempat kerja</label>
                <input
                  type="text"
                  class="form-control"
                  id="workPlaceInput"
                  placeholder="Masukan tempat kerja"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label for="phoneNumberInput" class="form-label text-muted">No Handphone</label>
                <input
                  type="text"
                  class="form-control"
                  id="phoneNumberInput"
                  placeholder="Masukan Nomor Handphone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label for="descriptionTextArea" class="form-label text-muted">Deskripsi singkat</label>
                <textarea
                  class="form-control"
                  id="descriptionTextArea"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                >
                 {description}p
                </textarea>
              </div>
            </div>
            <div className="card p-4 mb-4">
              <h3>Skill</h3>
              <hr />
              <div className="row d-flex justify-content-between">
                <div className="col-md-10">
                  <input type="text" class="form-control" id="skillInput" placeholder="Masukan Skill" />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-warning text-white mt-md-0 mt-sm-2 mb-3" onClick={handleAddSkill}>Simpan</button>
                </div>
                <hr />
                <div className="d-inline">
                  {
                    skills?.map((item, key) => (
                      <span key={key} className="badge bg-warning m-1 p-2">
                        {item}
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faTrash}
                          style={{ marginLeft: "5px", cursor: "pointer" }}
                          onClick={() => handleDeleteSkill(key)}
                        />
                      </span>
                    ))
                  }

                </div>
              </div>
            </div>
            <div className="card p-4">
              <h3>Pengalaman Kerja</h3>
              <hr />
              <div className="mb-4">
                <div>
                  <label htmlFor="imageInput" className="form-label text-muted photo-input-label">Logo Perusahaan</label>
                  <input type="file" className="form-control photo-input" id="imageInput" onChange={handleImageInputChange} />
                </div>
              </div>
              <div class="mb-4">
                <label for="posisiInput" class="form-label text-muted">Posisi</label>
                <input type="text" class="form-control" id="jobPositionInput" placeholder="Contoh: Full Stack Developer" />
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <div>
                    <label for="companyInput" class="form-label text-muted">Nama perusahaan</label>
                    <input type="text" class="form-control" id="jobCompanyInput" placeholder="Contoh: PT. SMARTRI Tbk" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label for="dateInput" class="form-label text-muted">Bulan/tahun</label>
                    <input type="month" class="form-control" id="jobDateInput" placeholder="Contoh: Januari 2018" />
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label for="descriptionTextArea" class="form-label text-muted">Deskripsi singkat</label>
                <textarea class="form-control" id="jobDescriptionInput" placeholder="Deskripsikan pekerjaan anda" rows="3"></textarea>
              </div>
              <hr />
              <div class="d-grid">
                <button class="btn btn-outline-warning fw-semibold" type="button" onClick={handleAddJobHistory}>Simpan</button>
              </div>
              <hr />
              {
                jobHistory == 0 ? (
                  <div className="d-flex justify-content-center">
                    <h3 className="text-black-50 text-center mt-3">
                      Belum ada pengalaman kerja
                    </h3>
                  </div>
                ) : (
                  jobHistory?.map((item, key) => (
                    <div className="row" key={key}>
                      <div className="col col-md-2">
                        <img src={item.logo || URL.createObjectURL(jobImage)} style={{ width: "100%" }} alt="Company Logo" />
                      </div>
                      <div className="col col-md-10">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div>
                            <h5 className="mb-0">{item.position}</h5>
                            <p className="mb-0">{item.company}</p>
                            <div className="d-flex align-items-center">
                              <p style={{ color: "#9EA0A5" }}>{item.date}</p>
                              <p style={{ marginLeft: "30px", color: "#9EA0A5" }}>6 bulan</p>
                            </div>
                            <p>{item.description}</p>
                          </div>
                          <FontAwesomeIcon
                            className="text-danger"
                            icon={faTrash}
                            style={{ color: "#9EA0A5", cursor: "pointer" }}
                            onClick={() => handleDeleteJobHistory(item.id)}
                          />
                        </div>

                        {key === jobHistory.length - 1 ? null : <hr />}
                      </div>
                    </div>
                  ))
                )
              }
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;

