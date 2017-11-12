import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players=[{
  _id : '1',  
  name : 'Rayan',
  score : 23
}, {
  _id : '2',  
  name : 'Sakshi',
  score : 11

}, {
  _id : '3',  
  name : 'Adwi',
  score : -1
  
}];

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>;
  });
};

Meteor.startup(function(){
  let name = 'Rayan';
  let title = 'Score Keep';
  let jsx = (
  <div>
    <h1>{title}</h1>
    <p>Hello {name}!</p>
    <p>This is my second para.</p>
    {renderPlayers(players)}
  </div>);
  ReactDOM.render(jsx,document.getElementById('app'));
});