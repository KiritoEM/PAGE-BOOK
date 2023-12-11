import Welcoming from "../components/Welcoming";
import AuthorBook from "../components/AuthorBook";
import About from "../components/About";
import Trusted from "../components/Trusted";
import Callout from "../components/Callout";
import Learn from "../components/Learn";
import Chapter from "../components/Chapter";

const Home = (): JSX.Element => {
  return (
    <section id="home">
      <Welcoming />
      <AuthorBook />
      <About />
      <Trusted />
      <Callout />
      <Learn />
      <Chapter />
    </section>
  );
};

export default Home;
