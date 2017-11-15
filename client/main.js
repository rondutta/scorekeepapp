import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';
import App from './../imports/ui/App';

Meteor.startup(() => {

  Tracker.autorun(() => {
    let name='Score Keep';
    let sub='An app by Rayan Dutta';
    let players = Players.find({},{
      sort:{
        score: -1
      }
    }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    ReactDOM.render(<App title={name} players={positionedPlayers}/>,document.getElementById('app'));
  });
});