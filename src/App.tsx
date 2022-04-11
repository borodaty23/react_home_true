import  React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import CounterWithReduxClasses from "./components/CounterWithRedux/CounterWithReduxClasses"; 
import { CounterWithReduxFunctional } from "./components/CounterWithRedux/CounterWithReduxFunctional"; 
import NewsPage from "./useState-useEffect-useCallback/pages/NewsPage";


function App() {
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
