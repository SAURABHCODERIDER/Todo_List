import { Provider } from "react-redux";
import Todotask from "./components/TodoTask";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Todotask />
    </Provider>
  );
}

export default App;
