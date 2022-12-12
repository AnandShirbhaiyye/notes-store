import React, {useState} from 'react';
import './AddNote.css';
import Navbar from '../../components/Navbar/Navbar'

function AddNote() {
  const [title, setTitle] = useState("");
  const [content,setContent]= useState("");

  function addNote(){
    
  }
  return (
    <>
    <Navbar/>
    <div className='app-title-container'>
        <h1 className='app-title text-center'>Add-Notes📚</h1>
      </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
      <div>
        <div className='note-editor-container mb-5'>
          <form>
            <div>
              <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control mt-4" placeholder="Note Title"/>
            </div>

            <div>
              <input type="text" value={content} onChange={(e)=>{setContent(e.target.value)}} className="form-control mt-4" placeholder="Note Discribtion"/>
            </div>
            <div>
              <button type="button" onClick={addNote} className='btn btn-primary w-100 mt-4'>Add Note</button>
            </div>
          </form>
        </div>
      </div>

        </div>

      </div>

    </div>
   
    </>
    
  )
}

export default AddNote