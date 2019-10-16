import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./App";
import "../styles/projects.sass";

const Projects = () => {
  const [state, setState] = useContext(StateContext);

  useEffect(() => {
    setState(state => ({ ...state, loadingScreen: true }));
    setTimeout(() => {
      setState(state => ({
        ...state,
        loadingScreen: false
      }));
    }, 1200);
  }, [setState]);

  const [projects, manageProjects] = useState([
    { id: 1, name: "project1", active: false },
    { id: 2, name: "project2", active: false }
  ]);

  const toggleActiveProject = id => {
    const newProjects = projects.map(project => {
      if (id === project.id) {
        project.active = !project.active;
      }
      return project;
    });
    manageProjects(newProjects);
  };

  const test = projects.map(project => {
    return (
      <div
        className={
          project.active
            ? `floatingDiv floatingDiv${project.id} active`
            : `floatingDiv floatingDiv${project.id}`
        }
        key={project.id}
      >
        <section
          className={
            project.active
              ? `project project${project.id} active`
              : `project project${project.id}`
          }
          onClick={() => toggleActiveProject(project.id)}
        >
          <div className="projectFace projectFaceFront">
            <h1>{project.name}</h1>
          </div>
          <div className="projectFace projectFaceBack">
            <h1>project description</h1>
          </div>
        </section>
      </div>
    );
  });

  return (
    <>
      {!state.loadingScreen && <section className="projects">{test}</section>}
    </>
  );
};

export default Projects;
