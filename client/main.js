import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'
import RandomComponent from './../imports/ui/RandomComponent'

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
  return (<p key={player._id}> 
   {player.name} has {player.score} point(s)
   <button onClick={()=> Players.update(player._id, {$inc : {score: 1}})}>+1</button>
   <button onClick={()=> Players.update(player._id, {$inc : {score: -1}})}>-1</button>
   <button onClick={() => Players.remove(player._id)}> X </button>
   </p>
   );
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
    let jsx = (
    <div>
      <TitleBar/>
      <RandomComponent/>
      {renderPlayers(players)}
      <AddPlayer/>
      <form onSubmit = {handleSubmit}>
      <input type = "text" name = "PlayerName" placeholder="Enter Player Name"/>
      <button>Add Player</button>
      </form>
    </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
  });
});