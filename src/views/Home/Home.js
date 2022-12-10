import React from "react";
import "./Home.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Note from "../../components/Note/Note";
import boynotesapp from "./img/boy-notes-app.png";
import girlnotesapp from "./img/girl-notes-app.png";

const headerImage = Math.floor(Math.random() * 2) ? boynotesapp : girlnotesapp;

function Home() {
  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      content: "This is the content of note 1",
    },
    {
      title: "Note 2",
      content: "This is the content of note 2",
    },
    {
      title: "Note 3",
      content: "This is the content of note 3",
    },
    {
      title: "Note 4",
      content: "This is the content of note 4",
    },
    {
      title: "Note 5",
      content: "This is the content of note 5",
    },
    {
      title: "Note 6",
      content: "This is the content of note 6",
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="app-title-container">
        <h1 className="app-title text-center">My Short Notes📚</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="notes-container mb-3">
              {notes.map((note, index) => {
                return <Note title={note.title} content={note.content} />;
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-2 mt-5">
              <img
                src={headerImage}
                alt=""
                className="img-fluid mx-auto d-block "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
