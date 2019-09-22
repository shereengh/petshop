import React, { Component } from "react";
import img1 from "./img/1.png";
import "./App.css";
import words from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import images from "./images";
import arrow from "./img/arrow.png";

let randomize = () => {
  let randIndex = Math.floor(Math.random() * words.length);
  let ar = words[randIndex].split("");
  console.log("rand" + randIndex);
  return ar;
};

class App extends Component {
  state = {
    letter: "none",
    letter2: "none",
    letter3: "none",
    letter4: "none",
    letter5: "none",
    letter6: "none",
    letter7: "none",
    chances: 5,
    guessed: 0,
    status: "begin",
    array: randomize(),
    word: []
  };

  selectLetter(letter) {
    this.setState({ status: "playing" });
    if (this.state.array[0] == "R") {
      if (letter === "R") {
        this.setState({
          word: "R"
        });
        if (this.state.guessed === 4) {
          this.setState({
            letter: letter,
            status: "win"
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
        if (this.state.guessed === 4) {
          this.setState({
            status: "win",
            letter2: letter
          });
        } else {
          const newG = this.state.guessed + 1;
          this.setState({
            letter2: letter,
            guessed: newG
          });
        }
      } else if (letter === "A") {
        //Display letter
        if (this.state.guessed === 4) {
          this.setState({
            letter3: letter,
            status: "win"
          });
        } else {
          const newG = this.state.guessed + 1;
          this.setState({
            letter3: letter,
            guessed: newG
          });
        }
      } else if (letter === "C") {
        //Display letter
        if (this.state.guessed === 4) {
          this.setState({
            letter4: letter,
            status: "win"
          });
        } else {
          const newG = this.state.guessed + 1;
          this.setState({
            letter4: letter,
            guessed: newG
          });
        }
      } else if (letter === "T") {
        //Display letter
        if (this.state.guessed === 4) {
          this.setState({
            letter5: letter,
            status: "win"
          });
        } else {
          const newG = this.state.guessed + 1;
          this.setState({
            letter5: letter,
            guessed: newG
          });
        }
      } else {
        if (this.state.chances === 0) {
          this.setState({
            status: "lose"
          });
        } else {
          const newC = this.state.chances - 1;
          this.setState({
            chances: newC
          });
        }
      }
    }
  }
  getElements() {
    if (this.state.status === "begin" || this.state.status === "playing") {
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
      let letterBoxes = letters.map(letter => {
        return (
          <button onClick={() => this.selectLetter(letter)}>{letter}</button>
        );
      });

      return (
        <div>
          <img className="hang" src={image} alt="image" />
          <img className="dash" src={image2} alt="image" />
          <img className="dash" src={image3} alt="image" />
          <img className="dash" src={image4} alt="image" />
          <img className="dash" src={image5} alt="image" />
          <img className="dash" src={image6} alt="image" />
          <div className="container-fluid">
            <br></br>
            <br></br>

            <center>
              <ButtonToolbar>{letterBoxes}</ButtonToolbar>
            </center>
          </div>
        </div>
      );
    } else if (this.state.status === "lose") {
      let image = images[this.state.chances];
      return (
        <div>
          <img className="hang" src={image} alt="image" />
          <h1>YOU KILLED HIM!</h1>
          <img
            className="dash"
            src={arrow}
            alt="image"
            onClick={() =>
              this.setState({
                status: "begin",
                letter: "none",
                letter2: "none",
                letter3: "none",
                letter4: "none",
                letter5: "none",
                letter6: "none",
                letter7: "none",
                chances: 5,
                guessed: 0,
                array: randomize()
              })
            }
          />
        </div>
      );
    } else if (this.state.status === "win") {
      let win = images["win"];
      return (
        <div>
          <img className="win" src={win} alt="image" />
          <h1>HE GETS TO LIVE ANOTHER DAY!</h1>
          <img
            className="dash"
            src={arrow}
            alt="image"
            onClick={() =>
              this.setState({
                status: "begin",
                letter: "none",
                letter2: "none",
                letter3: "none",
                letter4: "none",
                letter5: "none",
                letter6: "none",
                letter7: "none",
                chances: 5,
                guessed: 0,
                array: randomize()
              })
            }
          />
        </div>
      );
    }
  }
  render() {
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

            {this.getElements()}
          </center>
        </div>
      </div>
    );
  }
}

export default App;
