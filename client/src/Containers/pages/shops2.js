import React from 'react';
import PayPalBoard from './payments/payPalBoard';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import './shops2.css';
import food1 from '../assets/images/news/pizza2.jpg';
import Box from '../assets/images/background/box.png';
import food3 from '../assets/images/news/pizza4.jpg';
import Menu from './menu';
import Category from './category';

class Shops2 extends React.Component {

    state = {
        categoryMenu: 'food',
        orderListValue: 0.00,
        checkListOrder: [],
        kategori: '',
        kota: '',
        kota2: '',
        alamat: '',
        foto: '',
        emailUser: '',
        passwordUser: '',
        dataUsers: [],
        kurir: '-',
        alamatTambahan: '',
        courierName: '',
        estimasi: '',
        valueOngkir: 0.00,
        isCheckPaypal: false,
        payStatus: false,
        redirect_url: ''
    }

    componentDidMount = async () => {
        const { dataUserLogins } = this.props;


        const data = await JSON.parse(localStorage.getItem('loginData'));
        const data2 = await JSON.parse(localStorage.getItem('dataUser'));
        const data3 = await JSON.parse(localStorage.getItem('dataFirestore'));

        this.setState({
            emailUser: data.email,
            dataUsers: data2,
            kota2: data3.kota,
            alamat: data3.alamat
        })
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate = (e) => {
        const data3 = JSON.parse(localStorage.getItem('dataFirestore'));
        return true
    }

    valueChangeOngkir = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        const data = this.componentDidUpdate();
        if(data) {
            this.cekOngkir();
        }
    }

    slideFull = () => {
        document.getElementById('logoBoard').classList.toggle('gambar-board-show')
        document.getElementById('sec-a').classList.toggle('sec-1a-show')
        document.getElementById('sec-b').classList.toggle('sec-1ab-show')
        document.getElementById('barTop').classList.toggle('bar-top-show')
    }

    slideFull2 = () => {
        if (window.innerWidth <= 900) {
            document.getElementById('sec-bb2').classList.toggle('sec-bb-show')
        }
    }

    slideFull3 = () => {
        document.getElementById('sec-bb2').classList.remove('sec-bb-show')
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

    getPriceAll = (name, value, foto, kategori, kota, alamat) => {
        this.setState({
            orderListValue: this.state.orderListValue + Number(value),
            checkListOrder: [...this.state.checkListOrder, { name, value, foto }],
            kategori: kategori,
            kota: kota,
            alamat: alamat
        })
    }

    deletes = (index, index2) => {
        let checked = this.state.checkListOrder;
        let totals = this.state.orderListValue;
        var values = checked.indexOf(index, index2)
        checked.splice(values, 1);
        this.setState({
            checkListOrder: checked,
            orderListValue: totals - index2
        });
    }

    cekOngkir = () => {
        const data3 = JSON.parse(localStorage.getItem('dataFirestore'));

        const card_data = {
            origin: '108',
            destination: data3.kota,
            weight: 1000,
            courier: this.state.kurir,
        }

        fetch("http://localhost:4000/api/cek_ongkir", {
            method: 'post',
            headers: {
                key: "d7a3cd3dfc1c216f87aa19aa88e8bfda",
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify(card_data)
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    courierName: res.data.rajaongkir.results[0].code,
                    estimasi: res.data.rajaongkir.results[0].costs[0].cost[0].etd,
                    valueOngkir: res.data.rajaongkir.results[0].costs[0].cost[0].value
                })
            })
            .catch((err) => {
                console.log(404);
            });
    }

    cekOngkir2 = () => {
        console.log('kota yang dekat!')
    }

    payMidtrans = (e) => {
        e.preventDefault();

        const time = new Date();

        var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
        var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");

        const hari = new Date().getDay();
        const tanggal = new Date().getDate();
        const bulan = new Date().getMonth();
        const tahun = new Date().getFullYear();

        const day = hariarray[hari];
        const month = bulanarray[bulan];

        const dated = `${day} ${time.getDate()} ${month} ${time.getFullYear()} | Jam ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        const order_id = `transaction-${tanggal}-${bulan}-${tahun}`;

        const { valueOngkir, orderListValue } = this.state;
        const totalBayar = valueOngkir + orderListValue;

        const order_data = {
            order_id: order_id,
            amount: totalBayar,
            time: dated,
        }

        // Meminta response balik dari backend untuk kirim token midtrans - orderan
        fetch("http://localhost:4000/payment", {
            method: 'post',
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify(order_data)
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem('dataurlmidtrans', JSON.stringify(res));
                console.log('response midtrans backend', res)
                Swal.fire({
                    title: 'Lanjutkan pembayaran?',
                    text: "Selesaikan pembayaran secara aman",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#rgba(25, 226, 149, 0.836)',
                    cancelButtonColor: 'rgba(25, 226, 149, 0.836)',
                    confirmButtonText: 'Lanjutkan'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.dealPayMistrans(e);
                    }
                })
            })

    }

    sendEmail = () => {
        fetch("http://localhost:4000/emailSend", {
            method: 'post',
        })
            .then((res) => res.json())
            .then((res) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4200,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Kami telah mengirim pesan ke email kamu'
                })
            })
    }

    paypal = () => {
        this.setState({
            isCheckPay: true
        })
    }

    dealPayMistrans = (e) => {
        e.preventDefault();
        const dataSnap = JSON.parse(localStorage.getItem('dataurlmidtrans'));

        window.snap.pay(dataSnap.token)
    }

    openPay = () => {
        if (window.innerWidth >= 900) {
            document.getElementById('pay').classList.add('pay-hidden')
        } else {
            document.getElementById('pay').classList.add('pay-hidden-mobile')
        }
    }

    closePay = () => {
        document.getElementById('pay').classList.remove('pay-hidden')
        document.getElementById('pay').classList.remove('pay-hidden-mobile')
    }

    errorPay = () => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'warning',
            title: 'Ongkos kirim/data lainnya mungkin belum terisi'
        })

    }

    render() {
        const { slideFull, slideFull2, slideFull3, valueChange, valueChangeOngkir, getPriceAll, deletes, tikiPos, openPay, closePay, errorPay, payMidtrans, sendEmail } = this;
        const { alamat, checkListOrder, orderListValue, alamatTambahan, kurir, kota, valueOngkir, isCheckPaypal, payStatus } = this.state;
        console.log('kurir kami:', this.state.kurir)

        if (isCheckPaypal === true) {
            return (
                <div>
                    <PayPalBoard
                        total={valueOngkir + orderListValue}
                        items={checkListOrder}
                    />
                </div>
            )
        }

        return (
            <div>
                <div className="sec-parent">

                    {/* bars untuk mobile device */}

                    <section className="sec-1abb" id="sec-bb2">
                        <div className="bar-top">
                            <div>
                                <i className="fas fa-user"></i>
                                {
                                    checkListOrder.length ? (
                                        <div className="cart">
                                            {checkListOrder.length}
                                        </div>
                                    ) :
                                        <div className="cart">
                                            0
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="alamatPembeli">
                            <i className="fas fa-angle-left" onClick={slideFull3}></i>
                            <div className="alamat-top">
                                <p><i className="fas fa-map-marker-alt"></i>
                                    {alamat}
                                </p>
                            </div>
                        </div>
                        <div className="body-1bb">
                            <h2>My order</h2>
                            <label htmlFor="exampleFormControlSelect1">Pilih kurir</label>
                            <div className="form-group">
                                {
                                    kota === '108' || kota === '109' ? (
                                        <div>
                                            <select className="form-control" name="kurir" value={kurir} id="exampleFormControlSelect1" onChange={valueChangeOngkir}>
                                                <option value="-">Pilih kurir</option>
                                                <option value="COD">COD</option>
                                                <option value="Kirim sampai rumah">Kirim sampai rumah</option>
                                                <option value="Ambil langsung">Ambil langsung</option>
                                            </select>
                                        </div>
                                    ) :
                                        <div>
                                            <select className="form-control" name="kurir" id="exampleFormControlSelect1" onChange={valueChangeOngkir}>
                                                <option value="-">Pilih kurir</option>
                                                <option value="jne">JNE</option>
                                                <option value="pos">POS</option>
                                                <option value="tiki" onClick={tikiPos}>TIKI</option>
                                            </select>
                                        </div>
                                }

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Alamat (opsi)</label>
                                <input type="text" className="form-control" name="alamatTambahan" value={alamatTambahan} onChange={valueChange} />
                            </div>
                        </div>
                        <div className="body-3bb">
                            {
                                checkListOrder.length ? (
                                    checkListOrder.map((data, index) => {
                                        return (
                                            <div className="order" key={index}>
                                                <span className="del" onClick={() => deletes(data.name, data.value)}><i className="fas fa-times"></i></span>
                                                <div className="img-order">
                                                    <img src={food1} alt="" />
                                                </div>
                                                <div className="details-order">
                                                    <div className="namaMakanan">
                                                        <p>
                                                            {data.name} -  <NumberFormat
                                                                value={data.value}
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                prefix={'Rp.'}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) :
                                    <div className="order">
                                        ...............................
                                </div>
                            }
                        </div>
                        <div className="body-4bb">
                            <div className="total-order">
                                <div className="huruf-total">
                                    <p className="text-total">Harga :</p>
                                </div>
                                <div className="angka-total">
                                    {
                                        checkListOrder.length ? (
                                            <p className="angka-total">
                                                <NumberFormat
                                                    value={orderListValue}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'Rp.'}
                                                />
                                            </p>
                                        ) :
                                            <p className="angka-total">Rp.0.00</p>
                                    }
                                </div>
                            </div>
                            <div className="total-order">
                                <div className="huruf-total">
                                    <p className="text-total">Ongkir :</p>
                                </div>
                                <div className="angka-total">
                                    <p className="angka-total">
                                        <NumberFormat
                                            value={valueOngkir}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp.'}
                                        />
                                    </p>
                                </div>
                            </div>
                            <div className="total-order">
                                <div className="huruf-total">
                                    <p className="text-total">Total :</p>
                                </div>
                                <div className="angka-total">
                                    <p className="angka-total">
                                        <NumberFormat
                                            value={orderListValue + valueOngkir}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp.'}
                                        />
                                    </p>
                                </div>
                            </div>
                            <div className="checkout-wrap">
                                {
                                    checkListOrder.length && kota !== '108' || kota !== '109' && payStatus === true ? (
                                        <div>
                                            <div className="checkouts" onClick={openPay}>
                                                <p>Checkout  <i className="fas fa-arrow-right"></i></p>
                                            </div>
                                        </div>
                                    ) :
                                        <div>
                                            <div className="checkouts" onClick={errorPay}>
                                                <p>Checkout  <i className="fas fa-arrow-right"></i></p>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </section>

                    {/* akhir bars untuk mobile device */}

                    <section className="sec-1a" id="sec-a">
                        <div className="bar-top" id="barTop">
                            <div className="navbar">
                                <i className="fas fa-bars" id="bars" onClick={slideFull}></i>
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
                                    <img src={food3} alt="" id="logoBoard" />
                                </div>
                                <div className="content-board">
                                    <div>
                                        <h3 onClick={sendEmail}>$0 delivery for 30 days!</h3>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quaerat maxime quam consequuntur. Accusantium veniam ex perferendis, autem assumenda ratione!</small>
                                        <br />
                                        <a href="#">learn more <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="body-2">
                            <div className="board-menu">
                                <div className="categ">
                                    <Category />
                                </div>
                            </div>
                        </div>

                        <div className="body-3">
                            <Menu orderMenu={getPriceAll} />
                        </div>

                        <div className="body-4">
                            <div className="board-iklan">
                                <div className="gambar-board">
                                    <img src={food3} alt="" id="logoBoard" />
                                </div>
                                <div className="content-board">
                                    <div>
                                        <h3>$0 delivery for 30 days!</h3>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quaerat maxime quam consequuntur. Accusantium veniam ex perferendis, autem assumenda ratione!</small>
                                        <br />
                                        <a href="#">learn more <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sec-footer">
                            <h6>Hanya itu saja untuk sekarang</h6>
                        </div>

                    </section>

                    <section className="sec-1ab" id="sec-b">
                        <div className="bar-top">
                            <div>
                                <i className="fas fa-user"></i>
                                <i className="fas fa-cart"></i>
                                {
                                    checkListOrder.length ? (
                                        <div className="cart">
                                            {checkListOrder.length}
                                        </div>
                                    ) :
                                        <div className="cart">
                                            0
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="body-1b">
                            <h2>My order</h2>
                        </div>
                        <div className="body-2b">
                            <div className="content">
                                <div className="body-1bb">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Alamat saat ini</label>
                                        <input type="email" style={{ color: 'grey', opacity: '0.7' }} className="form-control" value="Jl. Cideng Jaya No.55" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Alamat tambahan (opsi)</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    {
                                        kota === '108' || kota === '109' ? (
                                            <div>
                                                <select className="form-control" name="kurir" id="exampleFormControlSelect1" onChange={valueChangeOngkir}>
                                                    <option value="default">-</option>
                                                    <option value="COD">COD</option>
                                                    <option value="Kirim sampai rumah">Kirim sampai rumah</option>
                                                    <option value="Ambil langsung">Ambil langsung</option>
                                                </select>
                                            </div>
                                        ) :
                                            <div>
                                                <select className="form-control" name="kurir" id="exampleFormControlSelect1" onChange={valueChangeOngkir}>
                                                    <option value="default">-</option>
                                                    <option value="jne">JNE</option>
                                                    <option value="pos">POS</option>
                                                    <option value="tiki" onClick={tikiPos}>TIKI</option>
                                                </select>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="body-3b">
                            {
                                checkListOrder.length ? (
                                    checkListOrder.map((data, index) => {
                                        return (
                                            <div className="order" key={index}>
                                                <span className="del" onClick={() => deletes(data.name, data.value)}><p>hapus</p></span>
                                                <div className="img-order">
                                                    <img src={Box} alt="" />
                                                </div>
                                                <div className="details-order">
                                                    <div className="namaMakanan">
                                                        <p>{data.name}</p>
                                                        <p className="price-orders">Rp.{data.value}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) :
                                    <div className="order">
                                        <div className="details-order">
                                            <p className="pesanan"><i className="fas fa-coffee" style={{ marginTop: '10px' }}></i></p>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="body-4b">
                            <div className="total-order">
                                <div className="huruf-total">
                                    <p className="text-total">Harga :</p>
                                </div>
                                <div className="angka-total">
                                    {
                                        checkListOrder.length ? (
                                            <p className="angka-total">
                                                <NumberFormat
                                                    value={orderListValue}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'Rp.'}
                                                />
                                            </p>
                                        ) :
                                            <p className="angka-total">Rp.0.00</p>
                                    }
                                </div>
                            </div>
                            <div className="total-order">
                                <div className="huruf-total">
                                    <p className="text-total">Ongkir :</p>
                                </div>
                                <div className="angka-total">
                                    <p className="angka-total">
                                        {
                                            kurir === 'default' ? (
                                                <NumberFormat
                                                    value={0}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'Rp.'}
                                                />
                                            ) :
                                                <NumberFormat
                                                    value={valueOngkir}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'Rp.'}
                                                />
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="total-order">
                                <div className="huruf-total">
                                    <p className="text-total">Total :</p>
                                </div>
                                <div className="angka-total">
                                    <p className="angka-total">
                                        {
                                            kurir === 'default' ? (
                                                <NumberFormat
                                                    value={orderListValue}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'Rp.'}
                                                />
                                            ) :
                                                <NumberFormat
                                                    value={orderListValue + valueOngkir}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'Rp.'}
                                                />
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="checkout-wrap">
                                {
                                    checkListOrder.length && kota !== '108' || kota !== '109' && payStatus === true ? (
                                        <div>
                                            <div className="checkouts" onClick={openPay}>
                                                <p>Checkout  <i className="fas fa-arrow-right"></i></p>
                                            </div>
                                        </div>
                                    ) :
                                        <div>
                                            <div className="checkouts" onClick={errorPay}>
                                                <p>Checkout  <i className="fas fa-arrow-right"></i></p>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </section>

                </div>

                <div className="pay" id="pay">
                    <i className="fas fa-times" onClick={closePay}></i>
                    <h2>Payment with this app, Ok</h2>
                    <small>Waktunya selesaikan belanjamu dengan aman dan cepat</small>
                    <hr />
                    <button className="btn-pays mid" onClick={payMidtrans}>
                        <i className="fas fa-receipt"></i>
                        Pay - midtrans
                    </button>
                    <button className="btn-pays paypals" onClick={() => {
                        if (checkListOrder.length) {
                            this.setState({ isCheckPaypal: true })
                        }
                    }}>
                        <i className="fas fa-receipt">
                        </i>
                        pay - Paypal
                    </button>
                </div>

            </div>
        )
    }
}


const getActionRedux = (dispatch) => {
    return {
        getFoodMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'food' }),
        getDrinkMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'drink' }),
        getCatalogMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'catalog' }),
    }
}

const getStateRedux = (state) => {
    return {
        dataUserLogins: state.dataUserLogin
    }
}

export default connect(getStateRedux, getActionRedux)(Shops2);