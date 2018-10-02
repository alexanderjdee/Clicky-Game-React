import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    message: "Click an image to begin!",
    score: 0,
    highscore: 0
  };

  sortCards(){
    this.state.cards.sort(() => Math.random() - 0.5);
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1, message:"You guessed correctly"}, function(){
            console.log(this.state.score);
            if(this.state.score === 12){
              this.setState({message:"You won!!!"});
              this.gameOver();
              return true;
            }
          });
          this.sortCards();
          return true; 
        } else {
          this.setState({message:"You guessed incorrectly"});
          this.gameOver();
        }
      }
    });
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    this.setState({score: 0});
    return true;
  }

  render() {
    if(this.state.highscore === 0){
      this.sortCards();
    }
    return (
      <Wrapper>
        <Header message={this.state.message} score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
