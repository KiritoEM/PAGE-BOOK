import Welcoming from "../components/Welcoming";
import AuthorBook from "../components/AuthorBook";

const Home = (): JSX.Element => {
  return (
    <section id="home">
      <Welcoming />
      <AuthorBook />
    </section>
  );
};

export default Home;
