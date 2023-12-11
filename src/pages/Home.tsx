import Welcoming from "../components/Welcoming";
import AuthorBook from "../components/AuthorBook";
import About from "../components/About";

const Home = (): JSX.Element => {
  return (
    <section id="home">
      <Welcoming />
      <AuthorBook />
      <About />
    </section>
  );
};

export default Home;
