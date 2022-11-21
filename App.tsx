import TabNavigation from "./src/navigations/TabNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
};

export default App;
