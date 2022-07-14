import React from 'react'
import SmallFriend from './Friend/SmallFriend';
import { friends } from '../units/contants';
import BigFriend from './Friend/BigFriend';

class Field extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            friend: null
        }
    }

    changeFriend = friendNum => this.setState({ friend: friendNum });



    render() {
        switch (this.state.friend) {
        case 'friend1': return <BigFriend changeFriend={this.changeFriend} value={friends[0]} />
        case 'friend2': return <BigFriend changeFriend={this.changeFriend} value={friends[1]} />
        case 'friend3': return <BigFriend changeFriend={this.changeFriend} value={friends[2]} />
        case 'friend4': return <BigFriend changeFriend={this.changeFriend} value={friends[3]} />
        case 'friend5': return <BigFriend changeFriend={this.changeFriend} value={friends[4]} />
        case 'friend6': return <BigFriend changeFriend={this.changeFriend} value={friends[5]} />
        case 'friend7': return <BigFriend changeFriend={this.changeFriend} value={friends[6]} />
        case 'friend8': return <BigFriend changeFriend={this.changeFriend} value={friends[7]} />
        case 'friend9': return <BigFriend changeFriend={this.changeFriend} value={friends[8]} />
        default: return (
            <div className='grid'>
                {friends.map(value => <SmallFriend key={value} changeFriend={this.changeFriend} value={value} />)}
            </div>
        )
    }
}
}

export default Field