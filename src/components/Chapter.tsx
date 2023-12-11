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
    </section>
  );
};
export default Chapter;
