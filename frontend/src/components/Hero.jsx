import "../App.css"
const Hero = () => {
  return (
    <section className="position-relative">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="hero"
        className="img-fluid w-100"
        style={{ height: "85vh", objectFit: "cover" }}
      />

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      ></div>

      {/* Content */}
      <div className="position-absolute top-50 start-0 w-100 translate-middle-y">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT TEXT */}
            <div className="col-lg-6 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-5">
                Consultation, <br />
                Design <br />
                & Marketing
              </h1>
            </div>

            {/* RIGHT FORM (OVER IMAGE) */}
            <div className="col-lg-4 offset-lg-2">
              <div className="card shadow-lg border-0">
                <div className="card-body bg-primary text-white rounded hero-form-card">

                  <h5 className="fw-bold mb-3">
                    Get a Free <br /> Consultation
                  </h5>

                  <form>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Full Name"
                    />

                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email Address"
                    />

                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Mobile Number"
                    />

                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="City"
                    />

                    <button className="btn btn-warning w-100 fw-semibold">
                      Get Quick Quote
                    </button>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
