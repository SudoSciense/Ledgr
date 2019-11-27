import React, { Component } from 'react';
import { Platform, Text, View, ScrollView } from 'react-native';
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
import Breakdown from './components/Breakdown';
import Style from './style/Style';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
      super(props);
      // change code below this line

  initialPeopleArray = [];
  initialPeopleArray.push({name: '', numItems: 1, items: [{cost: '', index: 0}], index: 0});
  initialPeopleArray.push({name: '', numItems: 1, items: [{cost: '', index: 0}], index: 1});
  
  this.state = {
    numPeople: 2,
    people: initialPeopleArray,
    absoluteTotal: 0,
  };
      // change code above this line
      this.newPerson = this.newPerson.bind(this);
      this.newItem = this.newItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.changePersonText = this.changePersonText.bind(this);
      this.changeItemText = this.changeItemText.bind(this);
  }
  newPerson() {
    const peopleArray = this.state.people;
    peopleArray.push({name: '', numItems: 1, items: [{cost: '', index: 0}], index: this.state.numPeople});
    this.setState({
      numPeople: this.state.numPeople + 1,
      people: peopleArray
    });
  }

  newItem(personIndex) {
    const peopleArray = this.state.people;
    peopleArray[personIndex].items.push({cost: '', index: peopleArray[personIndex].numItems});
    peopleArray[personIndex].numItems++;
    this.setState({
      people: peopleArray
    });
  }

  removeItem(personIndex) {
    const peopleArray = this.state.people;
    peopleArray[personIndex].items.pop();
    if (peopleArray[personIndex].numItems > 0)
    {
      peopleArray[personIndex].numItems--;
    }
    this.setState({
      people: peopleArray
    });
  }

  changePersonText(value, index) {
    const peopleArray = this.state.people;
    if (peopleArray.length > 0)
    {
      peopleArray[index].name = value;
      this.setState({
        people: peopleArray
      });
    }
  }

  changeItemText(value, personIndex, itemIndex) {
    const peopleArray = this.state.people;
    if (peopleArray[personIndex].items.length > 0)
    {
      peopleArray[personIndex].items[itemIndex].cost = value;
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
        <ScrollView>
          <View style={Style.container}>
            <Button bordered info style={Style.button} onPress={this.newPerson}>
              <Text>New Person</Text>
            </Button>
          </View>
              <Form>
                <Item floatingLabel>
                <Label>Total to split</Label>
                  <Input onChangeText={(value) => this.setState({absoluteTotal: parseFloat(value)})}/>
                </Item>
              </Form>
          <People people={this.state.people}
                  changePersonText={this.changePersonText}
                  changeItemText={this.changeItemText}
                  newItem={this.newItem}
                  removeItem={this.removeItem}/>
          <View style={Style.breakdownSection}>
          <Breakdown state={this.state}/>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
