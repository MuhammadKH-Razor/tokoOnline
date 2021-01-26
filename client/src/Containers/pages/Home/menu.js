import React from 'react';
import Food from '../food';
import Drinks from '../drink';
import Fashion from '../fashion';
import Sport from '../sport';
import Elektronik from '../elektronik';
import Digital from '../digital';
import { connect } from 'react-redux';

class Menu extends React.Component {
    render() {
        if(this.props.isMenu === 'Drink') {
            return (
                <Drinks/>
                )
            } else if(this.props.isMenu === 'Fashion') {
                return (
                    <Fashion/>
                )
            } else if(this.props.isMenu === 'Sport') {
                return (
                    <Sport/>
                )
            } else if(this.props.isMenu === 'Elektronik') {
                return (
                    <Elektronik/>
                )
            } else if(this.props.isMenu === 'Digital') {
                return (
                    <Digital/>
                )
            }
            return (
                <Food/>
            )

    }
}

const getStateRedux = (state) => {
    return {
        isMenu: state.menu
    }
}

export default connect(getStateRedux, null)(Menu);