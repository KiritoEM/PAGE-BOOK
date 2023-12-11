import AuthCard from "./author-book/AuthCard";

const AuthorBook = (): JSX.Element => {
  return (
    <section id="auth-book">
      <div className="section-header">
        <h3>Author’s Book Includes</h3>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-6">
            <AuthCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBook;
