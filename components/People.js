import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Grid,
         Col,
         Row,
         Form,
         Item,
         Input,
         Label,
         Button} from 'native-base';
import Items from './Items';
import Style from '../style/Style';

const People = props => props.people.map(function(person){
  return (
    <Row>
      <Col>
        <Form>
          <Item floatingLabel>
          <Label>Person</Label>
            <Input onChangeText={(value) => props.changePersonText(value, person.index)}/>
          </Item>
        </Form>
      </Col>
      <Col>
        <Items person={person}
               changeItemText={props.changeItemText}/>
        <Row>
          <View style={Style.container}>
          <Col>
            <Button bordered info style={Style.button} onPress={() => props.newItem(person.index)}>
            <Text>+</Text>
            </Button>
          </Col>
          </View>
          <View style={Style.container}>
          <Col>
            <Button bordered danger style={Style.button} onPress={() => props.removeItem(person.index)}>
            <Text>-</Text>
            </Button>
          </Col>
        </View>
      </Row>
      </Col>
    </Row>
  );
});

export default People;
