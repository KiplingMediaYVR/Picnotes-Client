import React, {Component} from 'react';
// When you're not export a default from a module
// you must braces after `import` to choose the values
// that you are import from the module.
import {NoteDetails} from '../NoteDetails';
import {Note} from '../../requests/notes';

class NoteShowPage extends Component {
  // When you create your own constructor, you overwrite
  // the constructor in the parent class, Component.
  // The parent constructor must still be called which
  // is we super(props) as first line of code inside
  // our constructor.

  // We use constructor primarily to set an initial state
  // for our component.
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      note: {},
      image: '',
    };

    console.log(props)

    this.delete = this.delete.bind(this);
  }

  delete(){
    this.setState({
      note:{}
    });
  }

  componentWillMount = async() => {
    const {params} = this.props.match;
    const note = await Note.get(params.id)
    await this.setState({note, image: note.image.url, loading: false})
  }
  // componentDidMount = async () => {
  //   const {params} = this.props.match;
  //   const note = await Note.get(params.id)
  //   console.log("this<>>>>>>>>>",note);
  //   await this.setState({note, loading: false})
  //   // Note
  //   //   .get(params.id)
  //   //   .then(note => {
  //   //     console.log(note)
  //   //     this.setState({note, loading: false})
  //   //   })
  // }

  test(){
    console.log(this.props);
  }

  render () {
    const {note, loading} = this.state;

    // if (loading) {
    //   return (
    //     <main
    //       className="NoteShowPage"
    //       style={{
    //         padding: '0 20px'
    //       }}
    //     >
    //       <h3>Loading question...</h3>
    //     </main>
    //   )
    // }

    /*
    if (Object.keys(this.state.question).length < 1) {
      return (
        <main
          className="QuestionShowPage"
          style={{
            padding: '0 20px'
          }}
        >
          <h2>Question doesn't exist!</h2>
        </main>
      );
    }
    */
    // To pass props to React elements, set them with
    // "HTML attributes". Each attribute will as a property
    // of the `props` object.

    // When passing props in JSX, any value that
    // is a non-string (e.g. numbers, objects, arrays, functions, etc)
    // must be put inside {}.
    return (
      <main
        className="NoteShowPage"
        style={{
          padding: '0 20px'
        }}
      >
        {/* I'm a valid comment */}
        <div key={note.id}>
          <img src = {`http://localhost:5000/${this.state.image}`}/>
          <NoteDetails {...note} />
          <button onClick={this.delete}> Delete </button>
        </div>
      </main>
    );
  }
}

export {NoteShowPage};
