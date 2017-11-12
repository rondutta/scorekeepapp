import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';




const players=[{
  _id: '1',
  name: 'Rayan',
  score: 23
},{
  _id: '2',
  name: 'Boo',
  score: 10
}];

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>;
  });
};

const handleSubmit = (event) => {
  let PlayerName = event.target.PlayerName.value;
  event.preventDefault();
  if(PlayerName) {
    event.target.PlayerName.value = '';    
    Players.insert({
      name: PlayerName,
      score: 0
    });    
  }  
}; 

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let name = 'Rayan';
    let title = 'Score Keep';
    let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      {renderPlayers(players)}
      <form onSubmit = {handleSubmit}>
      <input type = "text" name = "PlayerName" placeholder="Enter Player Name"/>
      <button>Add Player</button>
      </form>
    </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
  });
/*Players.insert({
  name: 'Adwi',
  score:-10
});*/

});