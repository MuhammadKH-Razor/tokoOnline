import React from 'react';
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';
import 'animate.css';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import './toko.css';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import AddShoppingCartlOutlinedIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartlOutlinedIcon from '@material-ui/icons/ShoppingCart';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShareIcon from '@material-ui/icons/Share';
import HomeOutlinedIcon from '@material-ui/icons/Home';
import AppsOutlinedIcon from '@material-ui/icons/Apps';
import ReplayOutlinedIcon from '@material-ui/icons/Replay';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';

import { Link } from 'react-router-dom';

class Toko extends React.Component {

    state = {
        checkListOrder: [],
        total: 0.00,
        statuss: 0,
        nama: '',
        backgrounds: '',
        kategori: '',
        paket: '',
        kota: ''
    }

    compnentDidMount() {
        const dataStatus = JSON.parse(localStorage.getItem('status'));
        const dataToko = JSON.parse(localStorage.getItem('dataTokoSementara'));
        this.setState({
            statuss: Number(dataStatus),
            nama: dataToko.nama,
            backgrounds: dataToko.background
        })
    }

    getPriceAll = (name, value, foto, kategori, paket, kota) => {
        const { total } = this.state;
        
        
        this.setState({
            total: total + Number(value),
            checkListOrder: [...this.state.checkListOrder, {name, value, foto}],
            kategori: kategori,
            paket: paket,
            kota: kota
        })
    }

    kosong = () => {
        this.setState({
            checkListOrder: '',
            total: 0.00
        })
    }

    deletes = (index, index2) => {
        let checked = this.state.checkListOrder;
        let totals = this.state.total;
        var values = checked.indexOf(index, index2)
        checked.splice(values, 1);
        this.setState({
            checkListOrder: checked,
            total: totals - index2
        });
        console.log(this.state.checkListOrder)

        // const array = this.state.checkListOrder;
        // const index = array.indexOf(e);
        // if (index > -1) {
        // array.splice(index, 1);
        // }
        // console.log(e)

    }

    atas = () => {
        const { number } = this.state;
        this.setState({
            number: 2
        })

        if(number % 2 == 0) {
            const menu = document.getElementById('menu-footer');
            menu.classList.remove('openUp');
        }

        console.log(number)
    }

    home = () => {
        this.props.history.push('/')
    }

    openMenu = () => {
        const menu = document.getElementById('menu-footer');
        menu.classList.toggle('openUp');
    }

    share = () => {
        const menu = document.getElementById('social-media');
        menu.classList.toggle('social-media2');
    }

    checkOuts = () => {
        const { checkListOrder, total, kategori, paket, kota } = this.state;
        const dataCheck = [];
        dataCheck.push({
            orderan: checkListOrder,
            total: total,
            kategori: kategori,
            paket: paket,
            kota: kota
        })
        
        localStorage.setItem('dataCheck', JSON.stringify(dataCheck));
    }

    render() {
        const { getPriceAll, kosong, deletes, openMenu, home, atas, share, checkOuts } = this;
        const { statuss, nama, backgrounds, checkListOrder, paket } = this.state;
        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-white">
                <div className="header">
                    <img src={this.props.statusGrab[0].background} alt=""/>
                </div>
                <div className="container">
                    <div className="chat d-flex">
                        <h6 className="pilihan"><NewReleasesIcon style={{color: 'black', fontSize: 20}}/>
                        Toko pilihan
                        </h6>
                        <button className="btn btn-info text-white text-center wa">
                            <a href="https://wa.me/6285221024092?text=Hallo%20Kak.">
                            Chat Penjual
                            </a>
                        </button>
                    </div>
                    <br/>
                    <p className="lead led">
                        Restorant / tempat makan yg menyediakan {this.props.statusGrab[0].nama}
                    </p>
                    <br/>
                    <hr/>
                    <br/>
                    <small className="keunggulan"><LocalOfferOutlinedIcon/> {this.props.statusGrab[0].unggulan} </small>
                    <hr/>
                </div>
                </div>

                <div className="shop-cart animate__animated animate__fadeInRightBig animate__delay-0.5s" data-toggle="modal" data-target="#cart">
                    <ShoppingBasketIcon style={{fontSize: 40, color: 'rgb(15, 204, 100)'}}/> <span> {checkListOrder.length} </span>
                </div>

                <div className="title-kategori">
                <h5 className="txt-kat h5"> Lebih banyak pilihan </h5>
                </div>
                <div className="wrap2">
                    <div className="header-right2">
                        <div className="limited-edition2">
                             {       
                                this.props.order.map((data, index) => {
                                    if (data.data.status === this.props.statusGrab[0].status && data.data.kategori === this.props.statusGrab[0].kategori)  {
                                        return (
                                            <div className="limited-option2" key={index}>
                                                <div className="gambar-makanan2 s">
                                                    <img src={data.data.foto} alt=""/>
                                                </div>
                                                <div className="nama-makanan2 s">
                                                    <h5 className="nama-food"> {data.data.nama} </h5>
                                                    <small className="small"> Rp.{data.data.harga} /- </small>
                                                </div>
                                                    <div className="buy d-flex">
                                                        <div className="d-flex d">
                                                        <small className="beli" onClick={() => getPriceAll(data.data.nama, data.data.harga, data.data.foto, data.data.kategori, data.data.paket, data.data.kota)}><AddShoppingCartlOutlinedIcon className="as"/></small>
                                                        <small className="beli2 " onClick={() => null}>Beli</small>
                                                        </div>
                                                    </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="social-media" id="social-media">
                    <div className="fb sm">
                        <Facebook style={{fontSize: 35}}/>
                    </div>
                    <div className="tw sm">
                        <Instagram style={{fontSize: 35}}/>
                    </div>
                </div>

                <div className="menu-footer animate__animated animate__fadeInUpBig animate__delay-0.3s" id="menu-footer">
                    <div className="open-menu" onClick={openMenu}>
                        <AppsOutlinedIcon style={{fontSize: 33}}/>
                    </div>
                    <div>
                        <div className="text-white" onClick={home}><HomeOutlinedIcon style={{fontSize: 30}}/></div>
                        <div onClick={atas}><a href="/shops" className="text-white"><AppsOutlinedIcon style={{fontSize: 30}}/></a></div>
                        <div className="text-white" onClick={share}><ShareIcon style={{fontSize: 30}}/></div>
                    </div>
                </div>


                    {/* end */}
                    {/* Untuk cart */}
                    <div className="modal fade cart" id="cart" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header d-flex ml-3">
                            <h5 className="modal-title" id="staticBackdropLabel">Keranjang</h5>
                            <button className="btn btn pesan text-white" onClick={kosong}> Kosongkan <ShoppingCartlOutlinedIcon/></button>
                        </div>
                        <div className="modal-body">
                            {
                            this.state.checkListOrder.length ? (
                                this.state.checkListOrder.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="ass d-flex">
                                                <div className="gambar"><img src={data.foto}/></div>
                                                <div className="nama">{data.name}</div>
                                                <div className="total">{data.value}</div>
                                                <div className="del" onClick={() => deletes(data.name, data.value)}>x</div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : 
                                <div className="text-align wrap-kosong">
                                    <ShoppingCartlOutlinedIcon/>
                                    <p className="mt-2 kosong-nih"> keranjang masih kosong nih!</p>
                                </div>
                            }
                        </div>
                        <div className="modal-footer">
                            <button 
                            type="button" 
                            className="btn btn pesan1 text-white disabled" 
                            data-dismiss="modal">
                                Total : <NumberFormat 
                                        value={this.state.total} 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        prefix={'Rp.'} 
                                        />
                            </button>
                            <Link to="/checkOut"><button type="button" onClick={checkOuts} className="btn btn pesan text-white">Lanjutkan</button></Link>
                        </div>
                        </div>
                    </div>
                    </div> 

            </div>
        )
    }
}

const getStateRedux = (state) => {
    return {
        statusGrab: state.status,
        order: state.orderGrab
    }
}

export default connect(getStateRedux, null)(Toko);