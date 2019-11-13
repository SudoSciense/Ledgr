import React, { Component } from 'react';
import { Text } from 'react-native';
import { Grid,
         Col,
         Row,
         Form,
         Item,
         Input,
         Label,
         Button} from 'native-base';
import Items from './Items';

const People = props => props.people.map(function(person){
  return (
    <Grid>
    <Row>
      <Col>
      <Form>
        <Item floatingLabel>
        <Label>Person</Label>
          <Input onChangeText={(value) => props.changePersonText(value)}/>
        </Item>
      </Form>
      </Col>
      <Col>
      <Items person={person}/>
      <Button rounded info>
        <Text>Info</Text>
      </Button>
      </Col>
    </Row>
    </Grid>
  );
});

export default People;
