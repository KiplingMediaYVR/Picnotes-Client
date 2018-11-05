import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Note} from '../../requests/notes';
import {ReactDOM} from "react-dom";
import jwtDecode from 'jwt-decode';

class NoteIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      notes: [],
      show: false,
      username: undefined,
    };
  }
  // async-await version
  async componentDidMount () {
    const notes = await Note.all();
    this.setState({notes, loading: false});
  }

  render () {
    const {loading} = this.state;

    if (loading) {
      return (
        <main
          className="NoteIndexPage"
          style={{padding: '0  20px'}}
        >
          <h3>Loading notes...</h3>
        </main>
      )
    }

    return (
      <main
        className="NoteIndexPage"
        style={{padding: '0  20px'}}
      >
        {/* This is how we comment in JSX! */}
        <h2>Note</h2>
          <div className = "index-container">
          {
            this.state.notes.map(note => (
              <div key={note.id} className = "index-item">
                  <img src = {`http://localhost:5000/${note.image.url}`} className = "index-image"/>
                  <Link to={`/notes/${note.id}`}>
                  {note.title}
                  </Link>
              </div>
            ))
          }
          </div>
      </main>
    );
  }
}

export {NoteIndexPage};
