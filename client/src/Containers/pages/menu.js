import React from 'react';
import { connect } from 'react-redux';
import food1 from '../assets/images/news/pizza2.jpg';
import food2 from '../assets/images/news/pizza3.jpg';
import food3 from '../assets/images/news/pizza4.jpg';
import food4 from '../assets/images/news/pizza1.jpg';
import drink1 from '../assets/images/drink/drink2.jpg';
import drink2 from '../assets/images/drink/drink3.jpg';
import drink3 from '../assets/images/drink/drink4.jpg';
import drink4 from '../assets/images/drink/drink1.jpg';
import drink5 from '../assets/images/drink/drink5.jpg';
import drink6 from '../assets/images/drink/drink6.jpg';
import drink7 from '../assets/images/drink/drink7.jpg';
import drink8 from '../assets/images/drink/drink8.jpg';
import Cat1 from '../assets/images/catalog/meja4.jpg';
import Cat2 from '../assets/images/catalog/kursi3.jpg';
import Cat3 from '../assets/images/catalog/lemari3.jpg';
import Cat4 from '../assets/images/catalog/kursi2.jpg';
import Cat5 from '../assets/images/catalog/meja3.jpg';
import Cat6 from '../assets/images/catalog/kursi4.jpg';
import Cat7 from '../assets/images/catalog/lemari2.jpg';
import Cat8 from '../assets/images/catalog/kursi1.jpg';

class Menu extends React.Component {

    state = {
        orderListValue: 0.00,
        checkListOrder: [],
        dataUsers: [],
        emailUser: '',
        kotaUser: '',
        kota: ''
    }

    componentDidMount = async () => {
        const { kota } = this.state
        const data1 = await JSON.parse(localStorage.getItem('loginData'));
        const data2 = await JSON.parse(localStorage.getItem('dataUser'));
        const data3 = await JSON.parse(localStorage.getItem('dataFirestore'));

        setTimeout(() => {
            this.setState({
                emailUser: data1.email,
                dataUsers: data2,
                kota: data3.kota
            })
            console.log('kota', this.state.kota)
        }, 1000)

    }

    render() {
        const { kota } = this.state;
        const { getPriceAll } = this;

        if (this.props.menu === 'food') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={food1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.5</span>
                                </div>
                                <div className="ff ff2">
                                    <small>Bodel story</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>7.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 7000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>The estaminet</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>5.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 5000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>La paris dakar</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>8.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('La paris dakar saint', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>La faras</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>6500</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 6500, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Paket porsi spesial</h2>
                    <h5>Tidak sama dan tetap enak</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={food1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food1</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>2.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 2000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food2</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>4.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 4000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food3} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food3</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>7.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food4</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>5.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 5000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Paket makan malam</h2>
                    <h5>Malam bersama rasa lezat..</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={food1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food5</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foo</span>
                                        <span>2.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 2000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food6</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>4.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 4000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food3} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food7</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>8.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food8</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>8.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else if (this.props.menu === 'drink') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={drink1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink1</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>4.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink1', 4000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={drink2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink2</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>5.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink2', 5000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={drink3} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink3</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>2.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink3', 2000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={drink4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink4</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>3.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink4', 3000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Paket porsi spesial</h2>
                    <h5>Tidak sama dan tetap enak</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={drink5} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink5</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>5.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink5', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={drink6} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink6</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>6.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink6', 6000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={drink7} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink7</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>3.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink7', 3000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={drink8} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>drink8</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">drink</span>
                                        <span>2.000</span>
                                        <span className="cart-plus"><i className="fas fa-cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('drink8', 2000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else if (this.props.menu === 'catalog') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={Cat1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog1</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>40.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog1', 40000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={Cat2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog2</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>50.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog2', 50000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={Cat3} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog3</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>20.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog3', 20000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={Cat4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog4</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>30.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog4', 30000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Paket porsi spesial</h2>
                    <h5>Tidak sama dan tetap enak</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={Cat5} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog5</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>50.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog5', 50000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={Cat6} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog6</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>60.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog6', 60000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={Cat7} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog7</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>30.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog7', 30000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={Cat8} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>catalog8</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">catalog</span>
                                        <span>20.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('catalog8', 20000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

        if (kota === '108') {
            return (
                <div>
                <h2>Paket hemat</h2>
                <h5>Harga murah, rasa pas</h5>
                <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.5</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 7000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 5000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>8000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('La paris dakar saint', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>6500</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 6500, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Paket porsi spesial</h2>
                <h5>Tidak sama dan tetap enak</h5>
                <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food1</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">food</span>
                                    <span>2.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 2000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food2</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">food</span>
                                    <span>4.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 4000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food3} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food3</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">food</span>
                                    <span>7.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food4</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">food</span>
                                    <span>5.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 5000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Paket makan malam</h2>
                <h5>Malam bersama rasa lezat..</h5>
                <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food5</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foo</span>
                                    <span>2.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 2000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food6</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">food</span>
                                    <span>4.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 4000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food3} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food7</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">food</span>
                                    <span>8.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>food8</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">food</span>
                                    <span>8.000</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={food1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.5</span>
                                </div>
                                <div className="ff ff2">
                                    <small>Bodel story</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>7000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 7000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>The estaminet</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>5000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 5000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>La paris dakar</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>8000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('La paris dakar saint', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>La faras</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foods</span>
                                        <span>6500</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 6500, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Paket porsi spesial</h2>
                    <h5>Tidak sama dan tetap enak</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={food1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food1</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>2.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 2000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food2</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>4.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 4000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food3} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food3</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>7.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food4</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>5.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 5000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Paket makan malam</h2>
                    <h5>Malam bersama rasa lezat..</h5>
                    <div className="wrap-list-menu">
                        <div className="board-list-menu">
                            <div>
                                <div className="ff ff1">
                                    <img src={food1} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food5</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">foo</span>
                                        <span>2.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 2000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food2} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food6</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>4.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 4000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food3} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food7</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>8.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ff ff1">
                                    <img src={food4} alt="" />
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                </div>
                                <div className="ff ff2">
                                    <small>food8</small>
                                    <br />
                                    <div className="list-details">
                                        <span className="category">food</span>
                                        <span>8.000</span>
                                        <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 8000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

    }
}

const getStateRedux = (state) => {
    return {
        menu: state.menuSekarang,
        dataUserLogins: state.dataUserLogin
    }
}

export default connect(getStateRedux, null)(Menu);                                                                                                                                      