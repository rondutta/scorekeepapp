import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';
export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <p className="item__message item__message--empty">Enter First Player to Continue !</p>
            );
        } else {
            return (this.props.players).map((player) => {
                return <Player key={player._id} player={player}/>
            });
        }
    }
    render() {
        return (
            <div className="item">
                <FlipMove maintainContainerHeight={true}>
                {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
};