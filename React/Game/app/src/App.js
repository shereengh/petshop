import React, { Component } from "react";
import "./App.css";
import words from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import images from "./images";
import arrow from "./img/arrow.png";
import play from "./img/play.png";

let randomize = () => {
  let randIndex = Math.floor(Math.random() * words.length);
  let ar = words[randIndex];
  console.log("rand" + randIndex);
  return ar;
};

class App extends Component {
  state = {
    chances: 5,
    guessed: 0,
    status: "begin",
    gWord: randomize(),
    array: [],
    wordArray: []
  };
  dashes() {
    let a = this.state.gWord.length;
    let temp = this.state.array;
    for (let i = 0; i < a; i++) {
      temp.push(images["dash"]);
    }
    let temp2 = this.state.gWord;
    let arrayT = temp2.split("");
    this.setState({
      array: temp,
      status: "playing",
      wordArray: arrayT
    });
  }
  selectLetter(letter) {
    let ind = this.state.wordArray.findIndex(lett => {
      return lett === letter;
    });
    if (ind !== -1) {
      let temp = this.state.array;
      temp.fill(images[letter], ind, ind + 1);
      if (this.state.guessed === this.state.gWord.length - 1) {
        this.setState({
          array: temp,
          status: "win"
        });
      } else {
        const newG = this.state.guessed + 1;
        this.setState({
          array: temp,
          guessed: newG
        });
      }
      console.log(temp);
    } else {
      const newC = this.state.chances - 1;
      this.setState({
        chances: newC
      });
      if (this.state.chances === 0) {
        this.setState({
          status: "lose"
        });
      }
    }
  }
  getElements() {
    if (this.state.status === "begin") {
      let image = images[0];
      return (
        <div>
          <img className="hang" src={image} alt="image" />
          <center>
            <img
              className="dash"
              src={play}
              alt="image"
              onClick={() => this.dashes()}
            />
          </center>
        </div>
      );
    } else if (this.state.status === "playing") {
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

      let temp = this.state.array;
      // props.authors.map(author => <AuthorCard author={author} />);
      //let displayArray = temp.map(letters);
      let image2 = temp[0];
      let image3 = temp[1];
      let image4 = temp[2];
      let image5 = temp[3];
      let image6 = temp[4];
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
      let image = images[0];
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
                chances: 5,
                guessed: 0,
                status: "begin",
                gWord: randomize(),
                array: [],
                wordArray: []
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
                chances: 5,
                guessed: 0,
                status: "begin",
                gWord: randomize(),
                array: [],
                wordArray: []
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
