import Link from "next/link";

import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";
import CardCarousel from "../components/CardCarousel";

import { useSelector } from "react-redux";

export default function Home() {

  return (
    <>
      <main id="home_page">
        <Navigations />

        {/* Header */}
        <header className="container content-to-center first-section">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5 order-md-1 order-2">
              <h1 className="d-block mb-3">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className="d-block mb-5">
                Peworld adalah aplikasi inovatif yang memberikan kemudahan bagi para pencari kerja dan perekrut dalam menemukan talenta terbaik untuk mendukung perubahan di era Revolusi Industri 4.0.
              </p>
              <Link href="/register">
                <button className="btn btn-primary btn-lg">
                  Mulai Dari Sekarang
                </button>
              </Link>
            </div>
            <div className="col-md-5 order-md-2 order-1 image-container">
              <img src="home_image1_full.png" className="image-fill" alt="Home Picture" />
            </div>
          </div>
        </header>
        {/* End of Header */}

        {/* Why Peeworld */}
        <section className="container second-section" style={{ marginBottom: "150px" }}>
          <div className="row justify-content-between">
            <div className="col-md-5 image-container">
              <img src="/home_image2_full.png" className="image-fill" alt="Home Picture" />
            </div>
            <div className="col-md-5">
              <h2 className="mb-5">Kenapa harus mencari tallent di Peworld</h2>
              <div className="d-flex align-items-center mb-5 list">
                <img src="/circleCheck.svg" style={{ marginRight: "20px" }} />
                <p className="mb-0">Peworld menawarkan akses mudah ke ribuan lowongan pekerjaan dan talent yang berbakat.</p>
              </div>
              <div className="d-flex align-items-center mb-5 list">
                <img src="/circleCheck.svg" style={{ marginRight: "20px" }} />
                <p className="mb-0">Peworld menyediakan profil memungkinkan Anda untuk menonjolkan kualifikasi, pengalaman, dan prestasi Anda kepada para perekrut terbaik.</p>
              </div>
              <div className="d-flex align-items-center mb-5 list">
                <img src="/circleCheck.svg" style={{ marginRight: "20px" }} />
                <p className="mb-0">Peworld menjamin keamanan dan kerahasiaan data pribadi Anda, memberikan rasa percaya diri selama proses pencarian kerja dan rekrutmen.</p>
              </div>
            </div>
          </div>
        </section>
        {/* End Of Why Peeworld */}

        {/* Skill Tallent */}
        <section className="container third-section" style={{ marginBottom: "150px" }}>
          <div className="row justify-content-end">
            <div className="col-md-5 order-md-1 order-2">
              <h2>Skill Tallent</h2>
              <p className="mb-5">
              Peworld menyediakan talent yang memiliki skill unggulan.
              </p>

              <div className="row justify-content-between">
                <div className="col-md-6">
                  {["Java", "Kotlin", "PHP", "Javascript"].map((item, key) => (
                    <div className="d-flex align-items-center mb-5 list" key={key}>
                      <img
                        src="/circleCheckYellow.svg"
                        style={{ marginRight: "20px" }}
                      />
                      <p className="mb-0">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"].map(
                    (item, key) => (
                      <div className="d-flex align-items-center mb-5 list" key={key}>
                        <img
                          src="/circleCheckYellow.svg"
                          style={{ marginRight: "20px" }}
                        />
                        <p className="mb-0">{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-5 order-md-2 order-1 image-container">
              <img src="/home_image3_full.png" className="image-fill" alt="Home Picture" />
            </div>
          </div>
        </section>
        {/* End Of Skill Tallent */}

        {/* Start of Opinion Carousel */}
        <section className="container forth-section" style={{ marginBottom: '150px' }}>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="mb-5 text-center">
              Pendapat mereka tentang Peworld
              </h2>
              <CardCarousel />
            </div>
          </div>
        </section>
        {/* End of Opinion Carousel */}

        {/* Start of CTA */}
        <section className="container five-section" >
          <div className="row justify-content-between d-flex align-items-center mx-3">
            <div className="col-md-2">
              <h2 className="text-white d-none d-md-block">Ayo bergabung menjadi bagian dari Peworld</h2>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
        </section>

        {/* End of CTA */}

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </main>
    </>
  );
}
