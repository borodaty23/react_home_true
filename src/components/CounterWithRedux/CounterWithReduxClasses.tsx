import React, { ButtonHTMLAttributes, Component } from 'react'
import { connect, ConnectedProps } from "react-redux";
import { changeCountPlus, changeCountMinus } from "../../redux/actions/countActionCreater/actionCreater"
import { RootState } from '../../redux/reducers';
import { AppDispatch } from '../../redux/store/store';
import { BUTTONS } from "./mock-data/CounterWithRedux"

interface IPropsCounterWithRedux extends PropsFromRedux {}

interface ICounterWithRedux {
}

 class CounterWithRedux extends Component<IPropsCounterWithRedux, ICounterWithRedux> {
   buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
     const { target } = e
     const { id } = target as HTMLButtonElement

     const { changeCountPlus, changeCountMinus } = this.props;

     if (id === "plusBtn"){
       changeCountPlus()
     }else{
       changeCountMinus()
     }
   }

  render() {
    const { count, changeCountPlus, changeCountMinus } = this.props;

    return (
        <>
      <p>{count}</p>
      {
        BUTTONS.map(({id, textArea}) => <button key = {id} id = {id} onClick= {this.buttonHandler} > {textArea} </button>)
      }
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const { count } = state;
  return { count } 
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    changeCountPlus: () => {
          dispatch(changeCountPlus());
      },
      changeCountMinus: () => {
        dispatch(changeCountMinus());
    },
  }
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CounterWithRedux)