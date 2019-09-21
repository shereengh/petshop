import React, { Component } from "react";
import img1 from "./img/1.png";
import "./App.css";
import words from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import images from "./images";

class App extends Component {
  state = {
    begin: true,
    letter: "none",
    letter2: "none",
    letter3: "none",
    letter4: "none",
    letter5: "none",
    letter6: "none",
    letter7: "none",
    chances: 5,
    guessed: 0,
    win: false,
    lose: false,
    word: words[0]
  };
  selectLetter(letter) {
    // this.setState({ letter: letter });
    // this.setState({ begin: false });
    if (letter === "N") {
      //Display letter
      if (this.state.guessed === 7) {
        alert();
        this.setState({
          win: true
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          letter: letter,
          guessed: newG
        });
      }
    } else if (letter === "E") {
      //Display letter
      if (this.state.guessed === 7) {
        this.setState({
          win: true
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          letter2: letter,
          guessed: newG
        });
      }
    } else if (letter === "T") {
      //Display letter
      if (this.state.guessed === 7) {
        this.setState({
          win: true
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          letter3: letter,
          guessed: newG
        });
      }
    } else if (letter === "F") {
      //Display letter
      if (this.state.guessed === 7) {
        this.setState({
          win: true
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          letter4: letter,
          guessed: newG
        });
      }
    } else if (letter === "L") {
      //Display letter
      if (this.state.guessed === 7) {
        this.setState({
          win: true
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          letter5: letter,
          guessed: newG
        });
      }
    } else if (letter === "I") {
      //Display letter
      if (this.state.guessed === 7) {
        this.setState({
          win: true
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          letter6: letter,
          guessed: newG
        });
      }
    } else if (letter === "X") {
      //Display letter
      if (this.state.guessed === 7) {
        this.setState({
          win: true
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          letter7: letter,
          guessed: newG
        });
      }
    } else {
      if (this.state.chances === 0) {
        this.setState({
          lose: true
        });
      } else {
        const newC = this.state.chances - 1;
        this.setState({
          chances: newC
        });
      }
    }
  }

  render() {
    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];

    let image = images[this.state.chances];
    let image2 = images[this.state.letter];
    let image3 = images[this.state.letter2];
    let image4 = images[this.state.letter3];
    let image5 = images[this.state.letter4];
    let image6 = images[this.state.letter5];
    let image7 = images[this.state.letter6];
    let image8 = images[this.state.letter7];

    let letterBoxes = letters.map(letter => {
      return (
        <button onClick={() => this.selectLetter(letter)}>{letter}</button>
      );
    });

    return (
      <div className="bg">
        <div>
          <center>
            <h1
              className="font-effect-shadow-multiple"
              style={{
                fontSize: 80
              }}
            >
              The Hangman Game
            </h1>
            <img className="hang" src={image} alt="image" />
            <img className="dash" src={image2} alt="image" />
            <img className="dash" src={image3} alt="image" />
            <img className="dash" src={image4} alt="image" />
            <img className="dash" src={image5} alt="image" />
            <img className="dash" src={image6} alt="image" />
            <img className="dash" src={image7} alt="image" />
            <img className="dash" src={image8} alt="image" />
          </center>
        </div>
        <div className="container-fluid">
          <br></br>
          <br></br>
          <center>
            <ButtonToolbar>{letterBoxes}</ButtonToolbar>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
