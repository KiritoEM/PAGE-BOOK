import Welcoming from "../components/Welcoming";
import AuthorBook from "../components/AuthorBook";
import About from "../components/About";
import Trusted from "../components/Trusted";

const Home = (): JSX.Element => {
  return (
    <section id="home">
      <Welcoming />
      <AuthorBook />
      <About />
      <Trusted />
    </section>
  );
};

export default Home;
