import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
     text : "Create an input field"
  }

  lengthHandler = (text) => {
    return text.length;
  }

  deleteCharHandler = (charIndex) => {
    const carac = [...this.state.text.split('')];
    carac.splice(charIndex, 1);
    this.setState({text : carac.join('')});
  }

  render() {
    let carac = null;
    const listText = this.state.text.split('');
    
    carac = (
      <div>
        {
          listText.map( (carac, index) => {
            return <CharComponent 
              click={() => this.deleteCharHandler(index)}
              char={carac}
            />
          } )
        }
      </div>
    );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" value={ this.lengthHandler(this.state.text)}/>
        <p>
          {this.state.text}
        </p>
        <ValidationComponent 
          textLength={ this.state.text.length }
        />
        <CharComponent 
          text={ this.state.text }
        />
        { carac }
      </div>
    );
  }
}

export default App;
