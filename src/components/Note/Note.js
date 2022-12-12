import React from 'react';
import "./Note.css";
import swal from 'sweetalert';

function Note({title, content, noteIndex}) {

  function deleteNotes(){
    const notes = localStorage.getItem("notes");
    if(notes)
    {
      const temp = JSON.parse(notes);
      temp.splice(noteIndex, 1);
      localStorage.setItem("notes", JSON.stringify(temp));
    }

    swal({
      title: "Deleted!",
      text: "Your note has been deleted",
      icon: "success",
    })

    // triggers useEffect in Home.js
    window.location.reload();

  }

  return (
    <div className='card-note'>
      <h6 className='card-note-title'>{title}</h6>
      <p className='card-note-content'>{content}</p>
      <span className='delete-button'onClick={deleteNotes}>❌</span>
    </div>
  )
}

export default Note