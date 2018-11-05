import React from 'react';

// In React, a function that returns a React element (or JSX)
// is called a "component".

// React component function's names must begin with a capital letter.
function NoteDetails (props = {}) {
  const containerStyle = {
    paddingLeft: "10px"
  };


  return (
    // JSX tags are translated into React.createElement() function
    // calls which output React elements.
    <div className="NoteDetails">
      <h2>{props.title}</h2>
      <div style={containerStyle}>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export {NoteDetails};
