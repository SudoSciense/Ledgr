import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container,
         Header,
         Left,
         Body,
         Right,
         Title,
         Grid,
         Col,
         Row,
         Form,
         Item,
         Input,
         Label,
         Button} from 'native-base';
import People from './components/People';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
      super(props);
      // change code below this line
  this.state = {
    numPeople: 0,
    people: []
  };
      // change code above this line
      this.newPerson = this.newPerson.bind(this);
      this.changePersonText = this.changePersonText.bind(this);
    }
    newPerson() {
    const peopleArray = this.state.people;
    peopleArray.push({name : '', items: [''], index: this.state.numPeople});
    this.setState({
      numPeople: this.state.numPeople + 1,
      people: peopleArray
    });
  }

  changePersonText(value) {
    const peopleArray = this.state.people;
    if (peopleArray.length > 0)
    {
      peopleArray[0].name = value;
      this.setState({
        people: peopleArray
      });
    }
}

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Ledgr</Title>
          </Body>
          <Right />
        </Header>
        <Button rounded info onPress={this.newPerson}>
          <Text>New Person</Text>
        </Button>
        <People people={this.state.people} changePersonText={this.changePersonText} />
        <Text>{this.state.people.length > 0 ? this.state.people[0].name : null}</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
