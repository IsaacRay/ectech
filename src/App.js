import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      {/* Top Banner (now an image) */}
      <div className="banner">
        <img src={`${process.env.PUBLIC_URL}/banner.png`} alt="Banner" className="banner-image" />
      </div>

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ECTech</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Large Text Section */}
      <div className="large-text-section container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo"  /></div>
            <p>
            <section>
        <div class="features">
            <div class="feature">
                <h3>Advanced Technology Stack</h3>
                <p>I utilize top-of-the-line technologies such as AWS Amplify, Docker, Lambda, and MongoDB to build robust and flexible web applications that meet your specific needs.</p>
            </div>
            <div class="feature">
                <h3>Custom Features</h3>
                <p>From dynamic user interfaces to intricate backend functionalities, I can integrate almost any feature you can imagine, ensuring your website stands out in functionality and design.</p>
            </div>
            <div class="feature">
                <h3>Cost-Efficient Maintenance</h3>
                <p>My expertise in DevOps ensures that your website remains efficient and easy to maintain, reducing long-term costs without compromising on quality.</p>
            </div>
            <div class="feature">
                <h3>Professional Excellence</h3>
                <p>With a strong background in DevOps engineering, I bring a disciplined, professional approach to every project, ensuring timely delivery and exceptional results.</p>
            </div>
        </div>
    </section>

    <section>
        <h2>What I Offer</h2>
        <div class="services">
            <div class="service">
                <h3>Complex Web Development</h3>
                <p>Tailored solutions that handle intricate workflows and large-scale operations seamlessly.</p>
            </div>
            <div class="service">
                <h3>Scalable Infrastructure</h3>
                <p>Leveraging AWS Amplify and Lambda for scalable and reliable performance as your business grows.</p>
            </div>
            <div class="service">
                <h3>Containerization with Docker</h3>
                <p>Ensuring consistent environments and streamlined deployments for maximum efficiency.</p>
            </div>
            <div class="service">
                <h3>NoSQL Database Management</h3>
                <p>Utilizing MongoDB for flexible and high-performance data handling.</p>
            </div>
        </div>
    </section>

    <section>
        <h2>Let’s Build Something Amazing Together</h2>
        <p>Whether you're launching a new venture or enhancing an existing platform, I'm here to turn your vision into reality. Let's collaborate to create a web solution that's innovative, reliable, and perfectly aligned with your business goals.</p>
    </section>

    <section>
        <h2>Get in Touch</h2>
        <p>Ready to take the next step? Contact me today to discuss how we can create a standout web presence tailored just for you.</p>
    </section>
            </p>
          </div>
        </div>
      </div>
      <div className="banner footer" >
        <img src={`${process.env.PUBLIC_URL}/banner.png`} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default App;
