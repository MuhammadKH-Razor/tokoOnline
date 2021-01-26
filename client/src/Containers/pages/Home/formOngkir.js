import React from "react";

class FORM extends React.Component {
  state = {
    origin: "",
    destination: "",
    weight: 0.0,
    courier: "",
    courierName: "",
    etdCourier: "",
    noteCourier: "",
    ongkirTotal: ""
  };

  valueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cekOngkir = (e) => {

    e.preventDefault();
    const { origin, destination, weight, courier } = this.state;

    const card_data = {
      origin: origin,
      destination: destination,
      weight: weight,
      courier: courier,
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
        //   courierName: res.data.data.code,
        //   etdCourier: res.data.data.costs[0].cost[0].etd,
        //   noteCourier: res.data.data.costs[0].cost[0].note,
        //   ongkirTotal: res.data.data.costs[0].cost[0].value
        // })
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { courierName, etdCourier, noteCourier, ongkirTotal } = this.state;
    const { cekOngkir, valueChange } = this;
    // console.log("test :", tesOngkir);
    // console.log('TEST:', this.state.tesOngkir)
    return (
      <div>
          <ul>
            <li>Courier: {courierName}</li>
            <li>Etd: {etdCourier}</li>
            <li>Note: {noteCourier}</li>
            <li>Ongkir: {ongkirTotal}</li>
          </ul>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Origin</label>
                    <input type="text" name="origin" className="form-control" id="exampleInputEmail1" onChange={valueChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Destination</label>
                    <input type="text" name="destination" className="form-control" id="exampleInputPassword1" onChange={valueChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Weight</label>
                    <input type="number" name="weight" className="form-control" id="exampleInputPassword1" onChange={valueChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Courier</label>
                    <input type="text" name="courier" className="form-control" id="exampleInputPassword1" onChange={valueChange} />
                </div>
                <button type="submit" onClick={cekOngkir} className="btn btn-primary">
                  Submit
                </button>
          </form>
        
      </div>
    );
  }
}

export default FORM;
