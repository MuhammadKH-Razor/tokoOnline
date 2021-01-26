import actiontype from '../dispatch/dispatchAction';

const initState = {
    menuSekarang: '',
    orderList: 0.00,
    orderPrice: 0.00,
    dataUserLogin: []
  }
  
  const rootReducer = (state = initState, action) => {

    if(action.type === actiontype.MENUSEKARANG) {
      return {
        ...state,
        menuSekarang: action.value
      }
    }else if(action.type === actiontype.ORDERLIST) {
      return {
        ...state,
        orderList: action.value
      }
    }else if(action.type === actiontype.ORDERPRICE) {
      return {
        ...state,
        orderPrice: action.value
      }
    }else if(action.type === actiontype.DATAUSER) {
      return {
        ...state,
        dataUserLogin: action.value
      }
    }

    return state;
  }

  export default rootReducer;