import React from 'react';

function NoteForm(props) {
  const {
    note = {},
    onSubmit = () => {},
    onChange = () => {},
    errors = []
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = name => event => {
    onChange({[name]: event.currentTarget.value});
  };

  return (
    <form className = "NoteForm" onSubmit = {handleSubmit}>
      <div>
        <label htmlFor = 'title'> Title </label> <br/>
        <input
          onChange = {handleChange('title')}
          value = {note.title}
          name = 'title'
          id = 'title'
        />
      </div>

      <div>
        <label htmlFor = 'body'> Body </label> <br/>
        <textarea
          onChange = {handleChange('body')}
          value = {note.body}
          name = 'body'
          id = 'body'
        />
      </div>

      <div>
        <input type = 'submit' value = 'Submit' />
      </div>
    </form>
  )
}

export {NoteForm};
