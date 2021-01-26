import firebaseGrab, { database, firestore } from '../../../pages/Home/firebase';
// import firebaseMidtrans, {databaseMidtrans} from '../../firebase/fire-midtrans';


export const registerGrab = (data) => (dispatch) => {
    return new Promise((resolve) => {
        firebaseGrab.auth().createUserWithEmailAndPassword(data.dataUser.email, data.dataUser.password)
            .then(response => {
                const datas = {
                    nama: data.dataUser.nama,
                    alamat: data.dataUser.alamat,
                    email: data.dataUser.email,
                    password: data.dataUser.password,
                    kelamin: data.dataUser.kelamin,
                    nomer: data.dataUser.nomer,
                    kota: data.dataUser.kota,
                    nama_kota: data.dataUser.nama_kota,
                }
                firestore.collection('usersCollection').doc(data.dataUser.password).set(datas)
                database.ref('pengguna/akses')
                    .push({
                        uid: response.user.uid,
                        emailVerified: response.user.emailVerified,
                        nama: data.dataUser.nama,
                        alamat: data.dataUser.alamat,
                        email: data.dataUser.email,
                        password: data.dataUser.password,
                        nomer: data.dataUser.nomer,
                        kelamin: data.dataUser.kelamin,
                        kota: data.dataUser.kota,
                        nama_kota: data.dataUser.nama_kota,
                    })
                    const dataUser1 = {
                        email: response.user.email,
                        uid: response.user.uid,
                        emailVerified: response.user.emailVerified,
                        nama: data.dataUser.nama,
                        alamat: data.dataUser.alamat,
                        nomer: data.dataUser.nomer,
                        toko: data.dataUser.toko,
                        provinsi: data.dataUser.provinsi,
                        status: response.user.metadata.a
                    }
                    resolve(dataUser1);
                    console.log(response)
                    localStorage.setItem('registerData', JSON.stringify(dataUser1));
                })
        })
}


export const loginGrab = (data) => (dispatch) => {
    const getDataUser = database.ref('pengguna/akses');
    return new Promise((resolve, reject) => {
        firebaseGrab.auth().signInWithEmailAndPassword(data.dataUser.email, data.dataUser.password)
            .then(response => {
                const arrays = [];
                let cityRef = firestore.collection('usersCollection').doc(data.dataUser.password).get()
                  .then(doc => {
                    if (!doc.exists) {
                      console.log('No such document!');
                    } else {
                        localStorage.setItem('dataFirestore', JSON.stringify(doc.data()))
                    }
                  })
                  .catch(err => {
                    console.log('Error getting document', err);
                  });
                getDataUser.on('value', (snapshot) => {
                    const array = [];
                    Object.keys(snapshot.val()).map(key => {
                        array.push({
                            id: key,
                            data: snapshot.val()[key]
                        })
                    })
                    localStorage.setItem('dataUser', JSON.stringify(array))
                    dispatch({ type: 'DATA_USER', value: array })
                })


                setTimeout(() => {
                    const dataUser2 = {
                        email: response.user.email,
                        password: data.dataUser.password,
                        uid: response.user.uid,
                        namaPenjual: response.user.nama,
                        status: response.user.metadata.a,
                        emailVerified: response.user.emailVerified,
                        refreshToken: response.user.refreshToken
                    }
                    localStorage.setItem('loginData', JSON.stringify(dataUser2));
                    resolve(dataUser2);
                }, 2000)
                console.log(response)
            })
            .catch((err) => {
                reject(false)
            })
    })
}


export const addDataGrab = (data) => (dispatch) => {
    return new Promise((resolve) => {
        const dataUser = JSON.parse(localStorage.getItem('loginData'));
        const dataFS = JSON.parse(localStorage.getItem('dataFs'))
        let arrayFs = [];
        const docRef = firestore.collection('usersCollection').doc(dataUser);
        docRef.get().then(function (doc) {
            arrayFs.push({
                data: doc.data()
            })
        })
        database.ref('sell/' + data.status)
            .push({
                nama: data.nama,
                harga: data.harga,
                foto: data.foto,
                status: data.status,
                toko: data.toko,
                unggulan: data.unggulan,
                kategori: data.kategori,
            })
            .then(res => {
                console.log('data ini:', res.path.pieces_[2]);
                resolve(true);
                // penjual: dataFS.data.nama
            })
    })
}

export const addDataOrder = (data) => (dispatch) => {
    return new Promise((resolve) => {
        database.ref('order/' + data.status)
            .push({
                order_id: data.order_id,
                gross_amount: data.amount,
                category: data.category,
                city: data.city,
                time: data.date
            })
            .then(res => {
                console.log('data order:', res.path.pieces_[2]);
                resolve(true);
            })
    })
}

export const getDataOrder = (data) => (dispatch) => {
    const getDataOrder = database.ref('order/orderan');
    return new Promise((resolve) => {
        getDataOrder.on('value', (snapshot) => {
            const array = [];
            Object.keys(snapshot.val()).map(key => {
                array.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            })
            dispatch({ type: 'ORDER_MIDTRANS', value: array })
        })
    })
}

export const getData = (data) => (dispatch) => {
    const getDataGrab = database.ref('sell/' + data);
    return new Promise((resolve) => {
        getDataGrab.on('value', (snapshot) => {
            const array = [];
            Object.keys(snapshot.val()).map(key => {
                array.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            })
            dispatch({ type: 'ORDER_GRAB', value: array })
            console.log('firebaseGetData: ', snapshot.val());
        })
    })
}

export const masukToko = (data) => (dispatch) => {
    const array = [];
    array.push({
        status: data.status,
        nama: data.nama,
        background: data.background,
        unggulan: data.unggulan,
        kategori: data.kategori
    })
    console.log('array saya :', array[0].nama)
    dispatch({ type: 'STATUS_GRAB_USER', value: array });
    console.log(data)
}