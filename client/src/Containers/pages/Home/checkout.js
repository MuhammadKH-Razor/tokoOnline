import React from 'react';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import LocationOn from '@material-ui/icons/LocationOn';
import Payment from '@material-ui/icons/Payment';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { addDataOrder, getDataOrder } from '../../config/redux/actions';
import Paypal from '../payments/payPalBoard';
import './checkout.css';

class CheckOut extends React.Component {

    state = {
        alamat: '',
        dataOr: [],
        totalOr: '',
        kategoriOr: '',
        kurir: '',
        alamatOpsi: '',
        kotaOr: '',
        kotaUser: '',
        dataKirim: [],
        results: [],
        estimasi: '',
        courierName: '',
        valueOngkir: '',
        dataOrder: '',
        isCheckPay: false,
        resMidtrans: ''
    }

    componentDidMount = () => {
        const dataUser = JSON.parse(localStorage.getItem('dataFs'));
       
        const dataOrder = JSON.parse(localStorage.getItem('dataCheck'));

        const {getDataOrder} = this.props;
        getDataOrder(dataUser[0].data.uid);

        this.setState({
            dataOr: dataOrder[0].orderan,
            totalOr: dataOrder[0].total,
            kategoriOr: dataOrder[0].kategori,
            kotaOr: dataOrder[0].kota
        })

    }

    back = (e) => {
        this.props.history.push('/toko');
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    payMidtrans = (e) => {
        e.preventDefault();

        // pengaturan waktu untunk random angko order id dan tanggal order pembelian
        const time = new Date();

        var hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,");
        var bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");
        
        const hari = new Date().getDay();
        const tanggal = new Date().getDate();
        const bulan = new Date().getMonth();
        const tahun = new Date().getFullYear();

        const day = hariarray[hari];
        const month = bulanarray[bulan];

        const date = `${day} ${time.getDate()} ${month} ${time.getFullYear()} | Jam ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        const order_id = `transaction-${tanggal}-${bulan}-${tahun}`;
        
        // Pengumpulan data untuk order
        const {dataOr, totalOr, kategoriOr, kotaOr, resMidtrans, valueOngkir} = this.state;

        const order_data = {
            order_id: order_id,
            amount: totalOr,
            time: date,
            category: kategoriOr,
            order_list: dataOr,
            city: kotaOr
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
          })

        // data order masuk ke database firebase
        const dataOrder = JSON.parse(localStorage.getItem('dataCheck'));


        const category = dataOrder[0].kategori;
        const city = dataOrder[0].kota;
        const amount = valueOngkir + totalOr;
        
        const {addDataOrder} = this.props;
        const status = "orderan";
        const addOrderan = addDataOrder({status, order_id, amount, category, city, date});
        if(addOrderan) {
            console.log('berhasil masuk database orderan')
            console.log(order_id)
            console.log(amount)
        }else {
            console.log('gagal masuk database orderan')
        }
     
    }


    cekOngkir = (e) => {

        e.preventDefault();

        const {kurir} = this.state;
        const dataUser = JSON.parse(localStorage.getItem('dataFs'));
        const dataOrder = JSON.parse(localStorage.getItem('dataCheck'));

        const card_data = {
          origin: 1,
          destination: 1,
          weight: 1500,
          courier: kurir,
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

    paypal = () => {
        this.setState({
            isCheckPay: true
        })
    }

    deal = (e) => {

        e.preventDefault();

        // const snap = new MidtransClient.Snap({
        //     isProduction : false,
        //     serverKey : 'SB-Mid-server-dsJ028IrXfmGmNWkYTVm-ubS',
        //     // clientKey : 'SB-Mid-client-WJzlg6BkIz6-e6GF'
        // });
        
        const payButtons = document.getElementById('pay-button');

        // get data from localstorage
        const dataSnap = JSON.parse(localStorage.getItem('dataurlmidtrans'));
        
        // For example trigger on button clicked, or any time you need
        payButtons.addEventListener('click', () => {
          window.snap.pay(dataSnap.token) 
          console.log('ok')
        });

    }

    render() {

        const { alamat, dataOr, totalOr, kategoriOr, kurir, alamatOpsi, kotaOr, resMidtrans, kotaUser, dataKirim, results, courierName, estimasi, valueOngkir } = this.state;
        const { back, valueChange, cekOngkir, payMidtrans, paypal, bayarMidtrans, deal } = this;
        
        if(this.state.isCheckPay === true) {
            return (
                <div>
                    <Paypal
                        total = {this.state.totalOr + this.state.valueOngkir}
                        items = {dataOr}
                    />
                </div>
            )
        }

        return (
            <div>
                <div className="alamat">
                    <div className="al1">
                        <span onClick={back}>
                            <ArrowBackIos className="iconz"/>
                        </span>
                    </div>
                    <div className="al2">
                        <span className="alam"> {alamat} </span>
                    </div>
                </div>
                <div className="antar">
                    antar ke
                </div>
                <div className="detail-order">
                        <div className="do2 d-flex">
                            <div className="do1">
                                <LocationOn className="iconz"/>
                            </div>
                            
                            {
                                 kategoriOr === 'Food' || kategoriOr === 'Drinks' || kotaOr === kotaUser ? (
                                    <select name="kurir" onChange={valueChange}>
                                        <option value="pilih">
                                            Pilih cara kirim
                                        </option>
                                        <option value="diantar">
                                            Diantar ke rumah
                                        </option>
                                        <option value="ambil-sendiri">
                                            Mau ambil sendiri
                                        </option>
                                    </select>
                                 ) :
                                    <select name="kurir" onChange={valueChange}>
                                        <option value="pilih">
                                            Pilih cara kirim
                                        </option>
                                        <option value="jne">
                                            JNE Express
                                        </option>
                                        <option value="pos">
                                            POS Indonesia
                                        </option>
                                        <option value="tiki">
                                            TIKI 
                                        </option>
                                    </select>
                            }
                            
                        </div>
                        <div className="do3">
                            <textarea name="alamatOpsi" cols="30" rows="10" placeholder="alamat opsi..." onChange={valueChange}></textarea>
                        </div>
                    </div>
                <div className="rangkuman d-block">
                    <div className="pengiriman d-flex">
                        <span>Rangkuman Pesanan</span> <button className="btn btn-info tambahz">tambah</button>
                    </div>
                    <div className="rangkuman-pesanan">
                        {
                            dataOr.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <div className="ass d-flex">
                                            <div className="gambarz"><img src={data.foto}/></div>
                                            <div className="namaz">{data.name}</div>
                                            <div className="total">
                                             <NumberFormat 
                                             value={data.value} 
                                             displayType={'text'} 
                                             thousandSeparator={true} 
                                             prefix={'Rp'} 
                                             />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="subtotal">
                        <div className="d-block">
                            <span>Subtotal</span>
                        </div>
                        <div className="d-block">
                            <span>
                                <NumberFormat 
                                value={totalOr} 
                                displayType={'text'} 
                                thousandSeparator={true} 
                                prefix={'Rp.'} 
                                />
                            </span>
                        </div>
                </div>
                    
                <div className="checkout-end">
                        <div>
                            <span>
                            <NumberFormat 
                            value={this.state.totalOr + this.state.valueOngkir} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'Rp.'} 
                            /></span>
                        </div>
                        <div>
                            <button className="btn btn text-white" onClick={cekOngkir} data-toggle="modal" data-target="#exampleModalongkir">Checkout</button>
                        </div>
                </div>

                
                    {/* Checkout terakhir ongkir */}

                    <div className="modal fade" id="exampleModalongkir" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cek biaya + Ongkir</h5>
                        </div>
                        <div className="alamatOpsi">
                        Alamat: 
                        <br/> 
                        {this.state.alamatOpsi}
                        </div>
                        <hr/>
                        <div className="modal-body mbo">
                            Biaya: <NumberFormat 
                            value={this.state.totalOr} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'Rp.'} 
                            />
                            <br/>
                            Ongkir: <NumberFormat 
                            value={this.state.valueOngkir}
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'Rp.'} 
                            />
                            <hr/>
                            Courier: {this.state.courierName} | {this.state.estimasi} Hari
                            <br/>
                            <hr/>
                            Total: <NumberFormat 
                            value={this.state.totalOr + this.state.valueOngkir} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'Rp.'} 
                            />
                        </div>
                        <div className="modal-footer mfo d-block">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"><ArrowBack/> Batal</button>
                            <br/>
                            <button type="button" className="btn btn-primary" onClick={payMidtrans} data-toggle="modal" data-target="#exampleModalmetode"><Payment/> Pesan Sekarang</button>
                        </div>
                        </div>
                    </div>
                    </div>


                    {/* pilihan menu pembayaran */}

                    <div className="modal fade" id="exampleModalmetode" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Metode Pembayaran</h5>
                        </div>
                        <div className="modal-footer mfo2 d-block">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"><ArrowBack/> Batal </button>
                            <br/>
                            <button type="button" className="btn btn-primary" onClick={deal} id="pay-button"><Payment/> Card -  Rekening</button>
                            <button type="button" className="btn btn-primary" onClick={paypal}><Payment/> Paypal </button>
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
        orderanMidtrans: state.orderan,
    }
}

const getActionRedux = (dispatch) => {
    return {
        addDataOrder: (data) => dispatch(addDataOrder(data)),
        getDataOrder: (data) => dispatch(getDataOrder(data)),
    }
}

export default connect(getStateRedux, getActionRedux)(CheckOut);