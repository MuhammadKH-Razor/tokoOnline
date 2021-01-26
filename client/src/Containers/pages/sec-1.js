import React from 'react';
import logoBoard from '../assets/images/news/Mobile note list-pana.png';
import Menu from './menu';
import Category from './category';


class Sec1 extends React.Component {

    state = {
        categoryMenu: 'food',
        orderListValue: 0.00,
        checkListOrder: [],
        kategori: '',
        kota: '',
        alamat: '',
        foto: ''
    }
    
    slideFull = () => {
        document.getElementById('logoBoard').classList.toggle('gambar-board-show')
        document.getElementById('sec-a').classList.toggle('sec-1a-show')
        document.getElementById('sec-b').classList.toggle('sec-1ab-show')
        document.getElementById('barTop').classList.toggle('bar-top-show')
    }

    slideFull2 = () => {
        if(window.innerWidth <= 900) {
            document.getElementById('sec-bb2').classList.toggle('sec-bb-show')
        }
    }

    getPriceAll = (name, value, foto, kategori, kota, alamat) => {
        this.setState({
            orderListValue: this.state.orderListValue + Number(value),
            checkListOrder: [...this.state.checkListOrder, { name, value, foto }],
            kategori: kategori,
            kota: kota,
            alamat: alamat
        })
    }

    render() {
        const { slideFull, slideFull2, slideFull3, foodMenu, drinkMenu, catalogMenu, hatsMenu, shortMenu, healtMenu, getPriceAll, deletes } = this;
        const { categoryMenu, kategori, alamat, kota, checkListOrder, orderListValue, foto } = this.state;
        console.log(this.state.checkListOrder)

        return (
            <div>
                <section className="sec-1a" id="sec-a">
                    <div className="bar-top" id="barTop">
                        <div className="navbar">
                            <i className="fas fa-bars" id="bars" onClick={slideFull}></i>
                            <h3>eCommerce</h3>
                            <div className="cart-shop" id="cart-shopX" onClick={slideFull2}>
                                <i className="fas fa-shopping-cart"></i>
                                <span>{checkListOrder.length}</span>
                            </div>
                        </div>
                        <div className="navbar-search">
                            <div className="pencarian">
                                <input type="search" className="searchX" placeholder="cari sekarang" />
                                <i className="fas fa-search" id="src1"></i>
                            </div>

                        </div>
                    </div>
                    <div className="body-1">
                        <div className="board-iklan">
                            <div className="gambar-board">
                                <img src={logoBoard} alt="" id="logoBoard" />
                            </div>
                            <div className="content-board">
                                <div>
                                    <h3>$0 delivery for 30 days!</h3>
                                    <small>$0 delivery feed for orders over $10 for 30 days</small>
                                    <br />
                                    <a href="#">learn more <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-2">
                        <div className="board-menu">
                            <div className="title-body-2">
                                <h3>Resturant</h3> <i className="fas fa-hamburger" id="humberger"></i>
                                <div className="button-board-2">
                                    <button className="btn-delivery">delivery now</button>
                                </div>
                            </div>
                            <div className="categ">
                                <Category />
                            </div>
                        </div>
                    </div>
                    <div className="body-3">
                        <Menu orderMenu={getPriceAll} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Sec1;