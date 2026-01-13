import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/project/get-project") // apna backend URL
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="projects-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h3 className="projects-title">Our Projects</h3>
          <p className="projects-subtitle">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Cards */}
        <div className="projects-grid">
          {projects.map((item) => (
            <div className="project-card" key={item._id}>
              <img src={item.image} alt={item.title} />

              <div className="card-body">
                <h6>{item.title}</h6>
                <p>{item.description}</p>

                <button className="btn-see">
                  SEE MORE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
