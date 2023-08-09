import Link from "next/link";
import React from "react";
import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const router = useRouter();
  const [userData, setUserData] = React.useState("")

  React.useEffect(() => {

    if (localStorage.getItem("auth") == null) {
      router.replace("/login")
    } else {
      const id = router?.query?.id
      axios
        .get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/job/detail/${id}`)
        .then((response) => {
          setUserData(response?.data?.data)
        });
    }
  }, [])

  const handleContact = () => {
    router.push({
      pathname: '/contact',
      query: userData, 
    });
  };

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


              <button className="btn btn-primary btn-lg mt-4 mb-3" onClick={handleContact}>Rekrut</button>

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
          <div className="col col-md-8 col-sm-12 mt-md-0 mt-sm-4">
            <div className="card p-4">
              <ul className="nav nav-underline mb-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Pengalaman kerja
                  </a>
                </li>
              </ul>

              {
                userData?.job_history == 0 ? (
                  <div className="d-flex justify-content-center">
                    <h3 className="text-black-50 text-center mt-3">
                      Belum ada pengalaman kerja
                    </h3>
                  </div>
                ) : (
                  userData?.job_history?.map((item, key) => (
                    <div className="row" key={key}>
                      <div className="col col-md-2">
                        <img src={item.logo} style={{ width: "100%" }} alt="Company Logo" />
                      </div>
                      <div className="col col-md-10">
                        <h5 className="mb-0">{item.position}</h5>
                        <p className="mb-0">{item.company}</p>
                        <div className="d-flex align-items-center">
                          <p style={{ color: "#9EA0A5" }}>{item.date}</p>
                          <p style={{ marginLeft: "30px", color: "#9EA0A5" }}>6 bulan</p>
                        </div>
                        <p>{item.description}</p>

                        {key === userData.job_history.length - 1 ? null : <hr />}
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

// looping / create this page as much data we have
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const {
    data: { data },
  } = await axios.get("https://hire-job.onrender.com/v1/job/all");

  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post?.id?.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

// convert this page into html
export async function getStaticProps() {
  return {
    props: {
      id: null,
    },
    revalidate: 10,
  };
}

export default Profile;