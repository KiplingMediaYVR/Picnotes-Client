import React, {Component} from 'react';
import {NoteForm} from '../forms/NoteForm';
import {Note} from '../../requests/notes';

class NoteNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newNote: {
        title: '',
        body: '',
        image: null,
      }
    };

    this.createNote = this.createNote.bind(this);
    this.updateNewNote = this.updateNewNote.bind(this);
  }

  updateNewNote(data) {
    const {newNote} = this.state;

    this.setState({
      newNote: {... newNote, ...data}
    });
  }

  createNote() {
    const {history} = this.props;
    const {newNote} = this.state;

    Note
      .create(newNote)
      .then(data => {
        history.push(`/notes/${data.id}`)
      })
  }

  render() {
    const{newNote} = this.state;

    return (
      <main className = 'NoteNewPage'>
        <h2> New Note </h2>
        <NoteForm
          note = {newNote}
          onChange = {this.updateNewNote}
          onSubmit = {this.createNote}
        />
      </main>
    )
  }
}

export {NoteNewPage};
