import  React, {useState} from "react";
import {createGlobalStyle, ThemeProvider} from 'styled-components'; 
import { Provider } from "react-redux";
import store from "./redux/store/store";
import CounterWithReduxClasses from "./components/CounterWithRedux/CounterWithReduxClasses"; 
import { CounterWithReduxFunctional } from "./components/CounterWithRedux/CounterWithReduxFunctional"; 
import NewsPage from "./useState-useEffect-useCallback/pages/NewsPage";


function App() {
  
  // const z = (e:React.MouseEvent<HTMLButtonElement| HTMLAnchorElement>)=>{
  //   e.preventDefault()
  //   console.log("{f")
  // }

  return (
  <>

    <Provider store={store}>
      <CounterWithReduxClasses></CounterWithReduxClasses>
      <CounterWithReduxFunctional></CounterWithReduxFunctional>

      {/* <NewsPage></NewsPage> */}
    </Provider>
  </>
  );
}

export default App;
