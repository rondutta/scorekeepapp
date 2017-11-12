import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function(){
  let name = 'Rayan';
  let jsx = <p>Hello {name}!</p>;
  ReactDOM.render(jsx,document.getElementById('app'));
});