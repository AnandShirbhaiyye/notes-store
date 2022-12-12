import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
import Note from "../../components/Note/Note";
import boynotesapp from "./img/boy-notes-app.png";
import girlnotesapp from "./img/girl-notes-app.png";
import swal from 'sweetalert';

const headerImage = Math.floor(Math.random() * 2) ? boynotesapp : girlnotesapp;

function Home() {

  const [notes, setNotes] = useState([
    {
      title: "Notes",
      content: "You can add more notes to this list..."
    }
  ])

  // triggers initially
  useEffect(()=>{
    const notes = localStorage.getItem("notes")
    if(notes){
      setNotes(JSON.parse(notes))
    }
  }, [])

  // triggers when notes changes
  useEffect(()=>{
    if(notes.length > 1){
      localStorage.setItem("notes", JSON.stringify(notes))
    }
  }, [notes])

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  

  function addNote() {
    const newNote = {
      "title": title,
      "content": content
    }

    if(title ==="" || content ===""){
      swal({
        title: "Error",
        text: "Please fill all the fields",
        icon: "error",
      })
      return;
    }

    setNotes([...notes, newNote])

    swal({
      title: "Note Added",
      text: "Your note has been added to the list",
      icon: "success",
    })

    setTitle("")
    setContent("")
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="app-title-container">
        <h1 className="app-title text-center">My Short Notes📚</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="notes-container mt-5 p-3">
            <div className="add-show-title">
                  <h3 className="text-center">Show Notes📖</h3>
                </div>
              {notes.map((note, index) => {
                return <Note title={note.title} content={note.content} />;
              })}
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-2 mt-5">
              <img
                src={headerImage}
                alt=""
                className="img-fluid mx-auto d-block "
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="note-editor-container mt-5">
              <form>
                <div className="add-note-title">
                  <h4 className="text-center mt-1">Add Notes📝</h4>
                </div>
                <div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="form-control mt-4"
                    placeholder="Note Title"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    className="form-control mt-4"
                    placeholder="Note Discribtion"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={addNote}
                    className="btn btn-primary w-100 mt-4"
                  >
                    Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-notes text-center mt-5">
        <h2>Thankyou..🙏</h2>
      </div>
    </>
  );
}

export default Home;
