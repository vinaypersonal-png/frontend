

const WhyChooseUs = () => {
    return (
        <section className="why-section">
            <div className="container">

                {/* TOP SECTION */}
                <div className="row align-items-center mb-5">
                    {/* LEFT TEXT */}
                    <div className="col-lg-4">
                        <h6 className="small-title">Not Your Average Realtor</h6>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec tincidunt, nunc vel facilisis.
                        </p>
                    </div>

                    {/* RIGHT CIRCULAR IMAGES */}
                    <div className="col-lg-7 position-relative text-center">
                        <div className="circle-img main">
                            <img
                                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                                alt=""
                            />
                        </div>

                        <div className="circle-img top">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt=""
                            />
                        </div>

                        <div className="circle-img bottom">
                            <img
                                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* WHY CHOOSE US */}
                <div className="text-center mb-5">
                    <h3 className="section-title">Why Choose Us?</h3>
                </div>

                <div className="row text-center mt-2">
                    <div className="col-md-4">
                        <div className="feature-box">
                            <div className="icon-circle">🏠</div>
                            <h5>Potential ROI</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-box">
                            <div className="icon-circle">🎨</div>
                            <h5>Design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-box">
                            <div className="icon-circle">📢</div>
                            <h5>Marketing</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

                {/* IMAGE GRID */}
                <div className="image-grid-wrapper">
                    <div className="image-grid">

                        <div className="grid-item item-1">
                            <img
                                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                                alt=""
                            />
                        </div>

                        <div className="grid-item item-2">
                            <img
                                src="https://media.istockphoto.com/id/1009877634/photo/happy-kids-happy-family.webp?a=1&b=1&s=612x612&w=0&k=20&c=cYWSwd_CzKF_4hdhLh5qf5pfbBkleaD71xBjLx64U-Y="
                                alt="img"
                            />
                        </div>

                        <div className="grid-item item-3">
                            <img
                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                                alt=""
                            />
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default WhyChooseUs;
