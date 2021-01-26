import React from 'react';
import { connect } from 'react-redux';
import food1 from '../assets/images/news/pizza2.jpg';
import Drink1 from '../assets/images/drink/screwdriver-drink-featured-720x540.jpg';
import Cat1 from '../assets/images/catalog/table.jpg';

class Category extends React.Component {

    state = {
        categoryMenu: 'food',
        kota: ''
    }

    componentDidMount = async () => {
        const { kota } = this.state
        const data3 = await JSON.parse(localStorage.getItem('dataFirestore'));

        setTimeout(() => {
            this.setState({
                kota: data3.kota
            })
            console.log('kota', this.state.kota)
        }, 2000)

    }

    slideFull = () => {
        document.getElementById('logoBoard').classList.toggle('gambar-board-show')
        document.getElementById('sec-a').classList.toggle('sec-1a-show')
        document.getElementById('sec-b').classList.toggle('sec-1ab-show')
    }

    foodMenu = () => {
        this.setState({
            categoryMenu: 'food'
        })
    }

    drinkMenu = () => {
        this.setState({
            categoryMenu: 'drink'
        })
    }

    catalogMenu = () => {
        this.setState({
            categoryMenu: 'catalog'
        })
    }

    shortMenu = () => {
        this.setState({
            categoryMenu: 'short'
        })
    }

    hatsMenu = () => {
        this.setState({
            categoryMenu: 'hats'
        })
    }

    healtMenu = () => {
        this.setState({
            categoryMenu: 'healt'
        })
    }

    render() {
        console.log(this.state.categoryMenu);
        return (
            <div className="content-body-2">
                <div className="wrap-categ" onClick={this.props.getFoodMenu}>
                    <div className="page-categ">
                        <img src={food1} alt="" />
                    </div>
                    <div className="content-categ">
                        <h4>Food</h4>
                    </div>
                </div>
                <div className="wrap-categ" onClick={this.props.getDrinkMenu}>
                    <div className="page-categ">
                        <img src={Drink1} alt="" />
                    </div>
                    <div className="content-categ">
                        <h4>Drink</h4>
                    </div>
                </div>
                <div className="wrap-categ" onClick={this.props.getCatalogMenu}>
                    <div className="page-categ">
                        <img src={Cat1} alt="" />
                    </div>
                    <div className="content-categ">
                        <h4>Catalog</h4>
                    </div>
                </div>
            </div>
        )
    }
}

const getStateRedux = (state) => {
    return {
        menu: state.menuSekarang
    }
}

const getActionRedux = (dispatch) => {
    return {
        getFoodMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'food' }),
        getFoodChicken: () => dispatch({ type: 'MENU_SEKARANG', value: 'chicken' }),
        getFoodBurger: () => dispatch({ type: 'MENU_SEKARANG', value: 'burger' }),
        getFoodPizza: () => dispatch({ type: 'MENU_SEKARANG', value: 'pizza' }),
        getFoodBiscuit: () => dispatch({ type: 'MENU_SEKARANG', value: 'biscuit' }),
        getDrinkMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'drink' }),
        getDrinkCoffee: () => dispatch({ type: 'MENU_SEKARANG', value: 'coffee' }),
        getDrinkIce: () => dispatch({ type: 'MENU_SEKARANG', value: 'ice' }),
        getDrinkTea: () => dispatch({ type: 'MENU_SEKARANG', value: 'tea' }),
        getDrinkWater: () => dispatch({ type: 'MENU_SEKARANG', value: 'water' }),
        getCatalogMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'catalog' }),
        getCatalogTable: () => dispatch({ type: 'MENU_SEKARANG', value: 'table' }),
        getCatalogBed: () => dispatch({ type: 'MENU_SEKARANG', value: 'bed' }),
        getCatalogChair: () => dispatch({ type: 'MENU_SEKARANG', value: 'chair' }),
        getCatalogWardrop: () => dispatch({ type: 'MENU_SEKARANG', value: 'wardrop' }),
        getShortMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'short' }),
        getShortShort2: () => dispatch({ type: 'MENU_SEKARANG', value: 'short2' }),
        getShortGlove: () => dispatch({ type: 'MENU_SEKARANG', value: 'glove' }),
        getShortHats: () => dispatch({ type: 'MENU_SEKARANG', value: 'hats' }),
        getShortShoes: () => dispatch({ type: 'MENU_SEKARANG', value: 'shoes' }),
        outMenu: () => dispatch({ type: 'MENU_SEKARANG', value: '' }),
    }
}

export default connect(getStateRedux, getActionRedux)(Category);