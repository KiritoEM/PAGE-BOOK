import Layout from "./Layout";
import "./styles/global.scss";
import Home from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
