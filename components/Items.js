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
        <Input onChangeText={(value) => props.changeItemText(value, props.person.index, item.index)}/>
      </Item>
    </Form>
  );
});

export default Items;
