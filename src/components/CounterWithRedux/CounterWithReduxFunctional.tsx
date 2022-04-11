import React, { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BUTTONS } from "./mock-data/CounterWithRedux"
import { RootState } from '../../redux/reducers';
import { changeCountPlus, changeCountMinus } from "../../redux/actions/countActionCreater/actionCreater"
import { countSelector } from '../../redux/selectors/countSelector/countSelector';

export const CounterWithReduxFunctional = () => {
    const count = useSelector(countSelector)

    const dispatch = useDispatch();
    const dispatchedChangeCountPlus = useCallback(
        () => dispatch(changeCountPlus()),
        [dispatch]
    );
    const dispatchChangeCountMinus = useCallback(
        () => dispatch(changeCountMinus()),
        [dispatch]
    );
    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { target } = e
        const { id } = target as HTMLButtonElement
   
        if (id === "plusBtn"){
            dispatchedChangeCountPlus()
        } else {
            dispatchChangeCountMinus()
        }
      }

  return (
    <>
      <p>{count}</p>
      {
        BUTTONS.map(({id, textArea})=><button key={id} id={id} onClick={buttonHandler}>{textArea}</button>)
      }
    </>
  )
}
