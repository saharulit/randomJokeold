import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class jokeContainer extends Component {

     constructor() {
      super();
      this.state = { jokeStr: "" };
      this.upDateJoke();
    }
    render() { 
        return ( 
         <Card className="w-75 mt-4 mx-auto">
            <Card.Body>
               <Card.Title className="mb-4">{this.state.jokeStr}</Card.Title>
                <Button variant="dark" onClick={this.upDateJoke}>Next Joke</Button>
            </Card.Body>
        </Card>

         );
    }
    async getJoke  () {
        const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
        });
        const resJson = await jokeRes.json();
        return resJson.joke;
      }
    upDateJoke = () => {
     this.getJoke().then((value) => this.setState({ jokeStr: value }));
    }
}
 
export default jokeContainer;