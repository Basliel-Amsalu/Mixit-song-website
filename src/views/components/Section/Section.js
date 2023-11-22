import "./Section.css";
import AddButton from "../AddButton/AddButton";
function Section(props) {
  return (
    <div className="section">
      <div className="section__header">
        <div className="section__header-label">
          <span className="section__header--icon icon">
            <i class="fa-solid fa-music"></i>
          </span>
          <span className="section__header--text">All Songs</span>
        </div>
        <AddButton text="Add Music" handleBlur={props.handleBlur} />
      </div>
      {props.children}
    </div>
  );
}

export default Section;
