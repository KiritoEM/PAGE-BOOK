import ChapterContent from "./chapter/ChapterContent";

const Chapter = (): JSX.Element => {
  return (
    <section id="chapter">
      <div className="section-header">
        <h3>The Chapter Includes</h3>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <ChapterContent />
      </div>
      <div className="section-button">
        <div className="button">
          <button className="btn">Start a 15-Days Free Trail</button>
        </div>
        <div className="text mt-4">
          <p>Short description about each chapter</p>
          <p className="mt-2">
            <b>Have any questions?</b> Contact us
          </p>
        </div>
      </div>
    </section>
  );
};
export default Chapter;
