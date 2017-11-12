import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players=[{
  _id : '1',  
  name : 'Rayan',
  score : 23
},
{
  _id : '2',  
  name : 'Sakshi',
  score : 11

},
{
  _id : '3',  
  name : 'Adwi',
  score : -1
  
}];

const renderPlayer = function() {

};

Meteor.startup(function(){
  let name = 'Rayan';
  let title = 'Score Keep';
  let jsx = (
  <div>
    <h1>{title}</h1>
    <p>Hello {name}!</p>
    <p>This is my second para.</p>
    {[<p key='1'>1</p>,<p key='2'>2</p>,<p key='3'>3</p>]}
  </div>);
  ReactDOM.render(jsx,document.getElementById('app'));
});