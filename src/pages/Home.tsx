import Welcoming from "../components/Welcoming";
import AuthorBook from "../components/AuthorBook";
import About from "../components/About";
import Trusted from "../components/Trusted";
import Callout from "../components/Callout";
import Learn from "../components/Learn";

const Home = (): JSX.Element => {
  return (
    <section id="home">
      <Welcoming />
      <AuthorBook />
      <About />
      <Trusted />
      <Callout />
      <Learn />
    </section>
  );
};

export default Home;
