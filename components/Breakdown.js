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
import Style from '../style/Style';

function personOwes(person, state) {
  totalItemsForPerson = 0;
  totalItemsForAll = 0;
  for (var i = 0; i < state.people.length; i++)
  {
    iterPerson = state.people[i];
    for (var k = 0; k < iterPerson.items.length; k++)
    {
      totalItemsForAll += parseFloat(iterPerson.items[k].cost);
      if (iterPerson.name == person.name)
      {
        totalItemsForPerson += parseFloat(iterPerson.items[k].cost);
      }
    }
  }
  totalForPerson = ((totalItemsForPerson/totalItemsForAll) * state.absoluteTotal).toFixed(2);
  return !isNaN(totalForPerson) ? totalForPerson : 0;
}

const Breakdown = props => props.state.people.map(function(person){
  if (person.name != '')
  {
    return (
      <Text style={Style.breakdownItem}>{person.name}: {personOwes(person, props.state)}</Text>
    );
  }
});

export default Breakdown;
