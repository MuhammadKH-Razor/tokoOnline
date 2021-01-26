// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import swal from 'sweetalert';
// import Swal from 'sweetalert2';
// import firebase, { storage, firestore, database } from './Home/firebase';
// import { addDataGrab, getData, masukToko } from '../config/redux/actions';

// import grab from '../assets/images/background/jpg/download-removebg-preview.png';
// import Logo from '../../Containers/assets/images/background/png/logo/images__3_-removebg-preview.png';
// import Logo1 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0088.jpg';
// import Logo2 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0090.jpg';
// import Logo3 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0091.jpg';
// import Logo4 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0092.jpg';
// import Logo5 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0093.jpg';
// import Logo6 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0094.jpg';
// import Logo7 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0095.jpg';
// import Logo8 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0096.jpg';
// import Logo9 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0097.jpg';
// import Logo10 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0098.jpg';
// import Logo11 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0089.jpg';
// import Logo12 from '../../Containers/assets/images/background/png/topi/images__25_-removebg-preview.png';

// import sarapan from '../../Containers/assets/images/background/svg/food/undraw_breakfast_psiw.svg';
// import drink from '../../Containers/assets/images/background/svg/food/undraw_coffee_break_j3of.svg';
// import saji from '../../Containers/assets/images/background/svg/undraw_goal_0v5v.svg';
// import murah from '../../Containers/assets/images/background/svg/undraw_monitor_iqpq.svg';
// import terdekat from '../../Containers/assets/images/background/svg/undraw_in_sync_xwsa.svg';
// import biscuit from '../../Containers/assets/images/background/svg/undraw_web_shopping_dd4l.svg';
// import pengiriman from '../../Containers/assets/images/background/svg/undraw_confirmed_81ex.svg';
// import medicane from '../../Containers/assets/images/background/svg/undraw_react_y7wq.svg';

// import crb1 from '../../Containers/assets/images/background/jpg/nasi/tahu.jpg';
// import crb2 from '../../Containers/assets/images/background/jpg/nasi/lengko.jpg';
// import crb3 from '../../Containers/assets/images/background/jpg/nasi/jamblang1.jpg';
// import crb4 from '../../Containers/assets/images/background/jpg/nasi/kuning.jpg';
// import crb5 from '../../Containers/assets/images/background/jpg/nasi/gejrot.jpg';
// import crb6 from '../../Containers/assets/images/background/jpg/nasi/lengko1.jpg';
// import crb7 from '../../Containers/assets/images/background/jpg/nasi/jamblang.jpg';

// import topSeller from '../../Containers/assets/images/background/svg/food/undraw_online_groceries_a02y.svg';
// import limited1 from '../../Containers/assets/images/background/jpg/download.jpg';
// import limited2 from '../../Containers/assets/images/background/png/sepatu/images__23_-removebg-preview.png';
// import limited3 from '../../Containers/assets/images/background/jpg/nasi/seblak1.jpg';
// import limited4 from '../../Containers/assets/images/background/jpg/download.jpg';

// import topBrand1 from '../../Containers/assets/images/background/png/topi/download__12_-removebg-preview.png';
// import topBrand2 from '../../Containers/assets/images/background/png/camera/images__3_-removebg-preview.png';
// import topBrand3 from '../../Containers/assets/images/background/png/sepatu/images__44_-removebg-preview.png';
// import topBrand4 from '../../Containers/assets/images/background/png/laptop/images__68_-removebg-preview.png';
// import topBrand5 from '../../Containers/assets/images/background/png/baju/images__9_-removebg-preview.png';

// import sponsor1 from '../../Containers/assets/images/sponsor/images-removebg-preview.png';
// import sponsor2 from '../../Containers/assets/images/sponsor/download__1_-removebg-preview.png';
// import sponsor3 from '../../Containers/assets/images/sponsor/download-removebg-preview.png';

// import { Button, IconButton } from '@material-ui/core';
// import './home.css';
// import Star from './Home/star';

// import HomeOutlinedIcon from '@material-ui/icons/Home';
// import AppsOutlinedIcon from '@material-ui/icons/Apps';
// import ReplayOutlinedIcon from '@material-ui/icons/Replay';
// import SearchOutlinedIcon from '@material-ui/icons/Search';
// import FlagOutlinedIcon from '@material-ui/icons/Flag';
// import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
// import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
// import ForumOutlinedIcon from '@material-ui/icons/Forum';
// import NotificationActiveOutlinedIcon from '@material-ui/icons/NotificationsActive';
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircle';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import CloudDoneIcon from '@material-ui/icons/CloudDone';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import LoyaltyIcon from '@material-ui/icons/Loyalty';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import MailOutlinedIcon from '@material-ui/icons/Mail';
// import ShoppingCartlOutlinedIcon from '@material-ui/icons/ShoppingCart';
// import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCart';
// import MobileFriendlyOutlinedIcon from '@material-ui/icons/MobileFriendly';
// import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
// import ShareIcon from '@material-ui/icons/Share';
// import AddBoxOutlinedIcon from '@material-ui/icons/AddBox';
// import ExitToApp from '@material-ui/icons/ExitToApp';

// import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
// import InstagramOutlinedIcon from '@material-ui/icons/Instagram';
// import WhatsAppOutlinedIcon from '@material-ui/icons/WhatsApp';
// import TwitterOutlinedIcon from '@material-ui/icons/Twitter';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCart';
// import CopyrightOutlinedIcon from '@material-ui/icons/Copyright';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
// import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
// import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';


// class Home extends Component {

//     state = {
//         checkListOrder: 0,
//         checkListBuy: [],
//         nama: '',
//         harga: '',
//         foto: '',
//         paket: '',
//         downloadURL: '',
//         paket: '',
//         unggulan: '',
//         namaUserLogin: '',
//         number: 0,
//         isMenu: 'food',
//         kategori: '',
//         hallo: '',
//         alamatToko: ''
//     }

//     componentDidMount = async () => {
//         const { alamatToko } = this.state;
//         const { getDataGrab } = this.props;
//         const dataPemilikToko = JSON.parse(localStorage.getItem('loginData'));
//         setTimeout(() => {
//             const dataToko = JSON.parse(localStorage.getItem('dataFs'));
//             // this.setState({
//             //     alamatToko: dataToko[0].data.kota
//             // })
//         }, 6000)
//         getDataGrab(dataPemilikToko.uid);
//         this.setState({
//             isPage: true,
//             namaUserLogin: dataPemilikToko.email
//         })

//         // const nama = document.getElementById('#profile');
//         // nama.initial();

//         console.log('data order redux:', this.props.order)

//         const location = this.props.location.pathname;
//         if (location === '/shops') {
//             localStorage.removeItem('dataTokoSementara');
//             console.log('data TOko sudah di hapus');
//         }

//     }

//     valueChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     filex = (e) => {
//         this.setState({
//             foto: e.target.files[0]
//         })
//     }

//     addData = (e) => {
//         const { nama, harga, foto, paket, unggulan, kategori, alamatToko } = this.state;
//         const filename = foto.name;
//         const storageRef = firebase.storage().ref('/toko/' + filename);
//         const uploadTask = storageRef.put(foto);

//         uploadTask.on('state_changed', (snapshot) => {

//         }, (err) => {

//         }, () => {
//             uploadTask.snapshot.ref.getDownloadURL()
//                 .then((downloadURLs) => {
//                     this.setState({
//                         downloadURL: downloadURLs
//                     })
//                     const { addData } = this.props;
//                     const { nama, harga, foto, alamatToko } = this.state;
//                     const dataId = JSON.parse(localStorage.getItem('loginData'))
//                     const dataefs = JSON.parse(localStorage.getItem('dataFs'))
//                     const dataBarang = {
//                         userId: dataId.uid,
//                         nama: nama,
//                         harga: harga,
//                         foto: downloadURLs,
//                         paket: paket,
//                         status: dataId.status,
//                         toko: dataId.toko,
//                         unggulan: unggulan,
//                         kategori: kategori,
//                         kota: dataefs[0].data.kota,
//                         alamat: dataefs[0].data.alamat,
//                         penjual: dataefs[0].data.nama
//                     }
//                     database.ref('sell/' + dataId.uid).push({
//                         userId: dataId.uid,
//                         nama: nama,
//                         harga: harga,
//                         foto: downloadURLs,
//                         paket: paket,
//                         status: dataId.status,
//                         toko: dataefs[0].data.toko,
//                         unggulan: unggulan,
//                         kategori: kategori,
//                         kota: dataefs[0].data.kota,
//                         alamat: dataefs[0].data.alamat,
//                         penjual: dataefs[0].data.nama,
//                         alamatToko: dataefs[0].data.alamat
//                     });
//                     this.setState({
//                         nama: '',
//                         harga: '',
//                         foto: '',
//                         unggulan: ''
//                     })
//                     if (dataBarang) {
//                         const Toast = Swal.mixin({
//                             toast: true,
//                             position: 'top-end',
//                             showConfirmButton: false,
//                             timer: 3000,
//                             timerProgressBar: true,
//                             onOpen: (toast) => {
//                                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//                             }
//                         })

//                         Toast.fire({
//                             icon: 'success',
//                             title: 'Signed in successfully'
//                         })
//                     }
//                     console.log('sukses tambah data yeyy')

//                     // addData(dataBarang);
//                 });
//         })
//     }

//     batalkan = () => {
//         setTimeout(() => {
//             this.setState({
//                 nama_barang: '',
//                 harga: '',
//                 foto: ''
//             })
//         }, 200)
//     }

//     myFunction = () => {
//         var copyText = document.getElementById("myInput");
//         copyText.select();
//         document.execCommand("copy");

//         var tooltip = document.getElementById("myTooltip");
//         tooltip.innerHTML = "Tersalin " + copyText.value;
//     }

//     outFunc = () => {
//         var tooltip = document.getElementById("myTooltip");
//         tooltip.innerHTML = "Salin isi teks";
//     }

//     orderChange = (name, value) => {
//         this.setState({
//             checkListOrder: this.state.checkListOrder + 1,
//             checkListBuy: [...this.state.checkListBuy, { name, value }]
//         })
//     }

//     reload = () => {
//         window.location.reload()
//     }

//     masukToko = (data, data2, data3, data4) => {
//         const { masukTokoGrab } = this.props;
//         const DataToko = {
//             status: data,
//             nama: data3,
//             background: data2,
//             unggulan: data4
//         }
//         localStorage.setItem('dataTokoSementara', JSON.stringify(DataToko));
//         if (data) {
//             masukTokoGrab(DataToko);
//             console.log('masuk goo')
//             setTimeout(() => {
//                 this.props.history.push('/toko');
//             }, 300)
//         } else {
//             console.log('gagal masuk toko')
//         }
//     }

//     openMenu = () => {
//         const menu = document.getElementById('menu-footer');
//         menu.classList.toggle('openUp');
//     }

//     home = () => {
//         localStorage.removeItem('loginData');
//         localStorage.removeItem('dataFs');
//         this.props.history.push('/')
//     }

//     atas = () => {
//         const { number } = this.state;
//         this.setState({
//             number: 2
//         })

//         if (number % 2 == 0) {
//             const menu = document.getElementById('menu-footer');
//             menu.classList.remove('openUp');
//         }

//         console.log(number)
//     }

//     signOut = () => {
//         firebase.auth().signOut()
//             .then((res) => {
//                 localStorage.removeItem('loginData')
//                 localStorage.removeItem('dataFs')
//                 this.props.history.push('/')
//                 console.log('sukses logOut')
//             }).catch(function (error) {
//                 console.log(error)
//             });
//     }

//     render() {

//         const { checkListOrder, checkListBuy, nama, harga, foto, downloadURL, paket, namaUserLogin, number, isMenu, hallo } = this.state;
//         const { reload, valueChange, batalkan, addData, filex, masukToko, openMenu, home, atas, signOut } = this;
//         // console.log('sekarang di:',this.props.location);
//         // window.location.href

//         return (
//             <div className="homepage">

//                 <div className="shop-cart animate__animated animate__fadeInRightBig animate__delay-1s" data-toggle="modal" data-target="#cart">
//                     <ShoppingBasketIcon style={{ fontSize: 40, color: 'rgb(15, 204, 100)' }} /> <span> {checkListOrder} </span>
//                 </div>

//                 <nav className="navbar navbar-expand-lg navbar-fluid navbar-light nav">
//                     <div>
//                         <h3>
//                             Online shop
//                         </h3>
//                     </div>
//                     <div>
//                         <form class="form-inline my-2 my-lg-0">
//                             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </nav>

//                     <div className="tambah animate__animated animate__fadeInLeft animate__delay-1s" data-toggle="modal" data-target="#add">
//                         <AddBoxOutlinedIcon size="lg" />
//                     </div>
//                     <div className="amb animate__animated animate__fadeInLeft animate__delay-1s" onClick={signOut}>
//                         <ExitToApp size="lg" />
//                     </div>

//                     {/* <button className="btn btn-info klr" onClick={signOut}> Keluar </button> */}
//                     <img className="bg-info klr" data-name="Kang Cahya" id="profile" />
//                     <div className="jumbotron jumbotron-fluid jumbots animate__animated animate__fadeInDownBig animate__delay-0.5s" id="atas">
//                         <div className="container1 animate__animated animate__fadeInLeft animate__delay-1s">
//                             <img src={grab} />
//                         </div>
//                         <div className="container2">
//                             <p className="text-white grab-shop animate__animated animate__fadeInLeft animate__delay-1s"> Grab Shop </p>
//                             <p className="grab-p animate__animated animate__fadeInLeft animate__delay-1s"> Grab menyediakan toko yang menyediakan berbagai barang kebutuhan para drive ojol masa kini. </p>
//                         </div>
//                     </div>

//                     <div className="menu menuxz">
//                         <div className="menuz">
//                             <div onClick={this.props.FoodReduxGrab}><a href="#food"><img src={sarapan} /></a><p>Sarapan</p></div>
//                             <div onClick={this.props.DrinkReduxGrab}><a href="#drink"><img src={drink} /></a><p>Minuman</p></div>
//                             <div onClick={this.props.FashionReduxGrab}><a href="#fashion"><img src={biscuit} /></a><p>Fashion</p></div>
//                             <div onClick={this.props.SportReduxGrab}><a href="#sport"><img src={saji} /></a><p>Sport</p></div>
//                             <div onClick={this.props.ElektronikReduxGrab}><a href="#elektronik"><img src={murah} /></a><p>Elektronik</p></div>
//                             <div onClick={this.props.DigitalReduxGrab}><a href="#digital"><img src={terdekat} /></a><p>Digital</p></div>
//                             <div onClick={() => null}><a href="#drink"><img src={medicane} /></a><p>Medicane</p></div>
//                             <div onClick={() => null}><a href="#drink"><img src={pengiriman} /></a><p>Pengiriman</p></div>
//                         </div>
//                     </div>

//                     <div className="footers">
//                         <p className="text-center"> Hanya itu untuk sekarang </p>
//                     </div>

//                     <div className="menu-footer animate__animated animate__fadeInUpBig animate__delay-0.5s" id="menu-footer">
//                         <div className="open-menu" onClick={openMenu}>
//                             <AppsOutlinedIcon style={{ fontSize: 33 }} />
//                         </div>
//                         <div>
//                             <div className="text-white hm" onClick={home}><HomeOutlinedIcon style={{ fontSize: 30 }} /></div>
//                             <div onClick={atas}><a href="#atas" className="text-white hm"><AppsOutlinedIcon style={{ fontSize: 30 }} /></a></div>
//                             <div className="text-white hm" onClick={reload}><ShareIcon style={{ fontSize: 30 }} /></div>
//                         </div>
//                     </div>

//                     <div className="footer">
//                         <footer>
//                             <div className="footer-input">
//                                 <SearchOutlinedIcon style={{ color: 'white', fontSize: 29, marginRight: 10 }} /> <input type="text" />
//                             </div>
//                             <div className="menus">

//                                 <div className="more">
//                                     <h4> More About Company </h4>
//                                     <p>
//                                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, vero.
//                                     </p>
//                                 </div>

//                                 <div className="sosmed">
//                                     <h4> Keep Connected </h4>
//                                     <li>
//                                         <FacebookOutlinedIcon style={{ fontSize: 30, color: 'white' }} /> Mi-Facebokk.com
//                                     </li>
//                                 </div>

//                                 <div className="info">
//                                     <h4> Connected Information </h4>
//                                     <li><HomeOutlinedIcon style={{ fontSize: 27, color: 'white' }} /> high restfull </li>
//                                     <li><MobileFriendlyOutlinedIcon style={{ fontSize: 27, color: 'white' }} /> Data big </li>
//                                     <li><MailOutlinedIcon style={{ fontSize: 27, color: 'white' }} /> Class high shop </li>
//                                 </div>

//                             </div>

//                             <div className="footer-copyright">
//                                 <div className="copy">
//                                     <CopyrightOutlinedIcon style={{ color: 'white', fontSize: 29, marginRight: 10 }} /> Copyright .etc 2020 By Mi-Shop's | 2023
//                                 </div>
//                                 <div className="privacy">
//                                     <li> Privacy Mi-Shop's |</li>
//                                     <li> Privacy Policy |</li>
//                                     <li> Terms & Conditions</li>
//                                 </div>
//                             </div>

//                         </footer>
//                     </div>

//                     {/* Untuk cart */}
//                     <div className="modal fade cart" id="cart" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                         <div className="modal-dialog">
//                             <div className="modal-content">
//                                 <div className="modal-header">
//                                     <h5 className="modal-title" id="staticBackdropLabel">Keranjang</h5>
//                                 </div>
//                                 <div className="modal-body">
//                                     ...
//                         </div>
//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                     <button type="button" className="btn btn-primary">Understood</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* untuk add data */}

//                     <div className="modal fade cart" id="add" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                         <div className="modal-dialog">
//                             <div className="modal-content">
//                                 <div className="modal-header">
//                                     <h5 className="modal-title" id="staticBackdropLabel">tambah jualan</h5>
//                                 </div>
//                                 <div className="modal-body">
//                                     <div className="mb-3">
//                                         <label className="form-label">Nama barang</label>
//                                         <input type="text" name="nama" className="form-control" onChange={valueChange} placeholder="Saya, Huda" />
//                                     </div>
//                                     <div className="mb-5">
//                                         <label className="form-label">harga</label>
//                                         <input type="number" name="harga" className="form-control" onChange={valueChange} placeholder="Saya, Huda" />
//                                     </div>
//                                     <div className="mb-5">
//                                         <select name="kategori" onChange={valueChange}>
//                                             <option>Pilih Kategori</option>
//                                             <option value="Food">Food</option>
//                                             <option value="Drinks">Drink</option>
//                                             <option value="Fashion">Fashion</option>
//                                             <option value="Elektronik">Elektronik</option>
//                                             <option value="Digital">Digital</option>
//                                             <option value="Obat-obatan">Obat-obatan</option>
//                                         </select>
//                                     </div>
//                                     {
//                                         this.state.kategori === 'Food' || this.state.kategori === 'Drinks' ? (
//                                             <div className="mb-5">
//                                                 <select name="paket" onChange={valueChange}>
//                                                     <option>Pilih paket</option>
//                                                     <option value="Hemat">Paket hemat</option>
//                                                     <option value="ambil-sendiri">Pesan dan Ambil sendiri</option>
//                                                     <option value="rekomendasi">Rekomendasi</option>
//                                                     <option value="angkringan">Angkringan food</option>
//                                                     <option value="makan-malam">Makan malam</option>
//                                                     <option value="spesial-porsi">spesial porsi</option>
//                                                 </select>
//                                             </div>
//                                         ) :
//                                             <div className="mb-5">
//                                                 <select name="paket" onChange={valueChange}>
//                                                     <option>Pilih paket</option>
//                                                     <option value="Hemat">Harga hemat dan promo</option>
//                                                     <option value="brand-terbaru">Brand terbaru</option>
//                                                     <option value="rekomendasi">Rekomendasi</option>
//                                                     <option value="terlaris">Terlaris saat ini</option>
//                                                     <option value="termahal">Termahal dan berkualitas</option>
//                                                     <option value="termahal">Spesial edisi nih</option>
//                                                 </select>
//                                             </div>
//                                     }
//                                     <br />
//                                     <div className="mb-5">
//                                         <label className="form-label">Keunggulan</label>
//                                         <select name="unggulan" onChange={valueChange}>
//                                             <option>Pilih Unggulan</option>
//                                             <option value="">Tidak ada</option>
//                                             <option value="Diskon ongkir 20%, hemat kan!">Diskon ongkir 20%, hemat kan!</option>
//                                             <option value="Pengiriman cepat">Pengiriman cepat</option>
//                                             <option value="Harga murah! loh">Harga murah! loh</option>
//                                         </select>
//                                     </div>
//                                     <div className="mb-5">
//                                         <label className="form-label">foto</label>
//                                         <input type="file" name="foto" className="form-control" onChange={filex} placeholder="Saya, Huda" />
//                                     </div>
//                                     <button type="submit" className="btn btn bt-next" onClick={addData}>Lanjutkan</button>
//                                     <button type="submit" className="btn btn bt-close" data-dismiss="modal" onClick={batalkan}>Batalkan</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//             </div>
//         )
//     }
// }

// const getStateRedux = (state) => {
//     return {
//                     order: state.orderGrab,
//     }
// }

// const getActionRedux = (dispatch) => {
//     return {
//         addData: (data) => dispatch(addDataGrab(data)),
//         getDataGrab: (data) => dispatch(getData(data)),
//         masukTokoGrab: (data) => dispatch(masukToko(data)),
//         FoodReduxGrab: () => dispatch({ type: 'MENU_WHAT', value: 'Food' }),
//         DrinkReduxGrab: () => dispatch({ type: 'MENU_WHAT', value: 'Drink' }),
//         FashionReduxGrab: () => dispatch({ type: 'MENU_WHAT', value: 'Fashion' }),
//         SportReduxGrab: () => dispatch({ type: 'MENU_WHAT', value: 'Sport' }),
//         DigitalReduxGrab: () => dispatch({ type: 'MENU_WHAT', value: 'Digital' }),
//         ElektronikReduxGrab: () => dispatch({ type: 'MENU_WHAT', value: 'Elektronik' }),
//     }
// }

// export default connect(getStateRedux, getActionRedux)(Home);
