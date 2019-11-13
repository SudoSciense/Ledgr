import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Form,
         Item,
         Input,
         Label} from 'native-base';

const Items = props => props.person.items.map(function(item) {
  return (
    <Form>
      <Item floatingLabel>
        <Label>Item</Label>
        <Input value={item}/>
      </Item>
    </Form>
  );
});

export default Items;
