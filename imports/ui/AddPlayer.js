import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(event) {
        let PlayerName = event.target.PlayerName.value;
        event.preventDefault();
        if (PlayerName) {
            event.target.PlayerName.value = '';
            Players.insert({name: PlayerName, score: 0})
        }
    }
    render() {
        return (
            <div className="item">
                <form className="form" onSubmit ={this.handleSubmit}>
                    <input className="form__input" type="text" name="PlayerName" placeholder="Enter Player Name"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}