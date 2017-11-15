import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import React from 'react';

export default class App extends React.Component {
    render() {
        return (
         <div>
         <TitleBar title={this.props.title} players={this.props.players}/>
         <div className="wrapper">
         <PlayerList players={this.props.players}/>
         <AddPlayer/>
         </div>
         </div>
        );
    }
};