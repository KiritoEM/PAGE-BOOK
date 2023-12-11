import AuthCard from "./author-book/AuthCard";
import AuthBook from "../helper/Data/AuthBook";

const AuthorBook = (): JSX.Element => {
  const { authBooks } = AuthBook();
  return (
    <section id="auth-book">
      <div className="section-header">
        <h3>Author’s Book Includes</h3>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="row gy-5 gy-lg-2 gx-5">
          {authBooks.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <AuthCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorBook;
