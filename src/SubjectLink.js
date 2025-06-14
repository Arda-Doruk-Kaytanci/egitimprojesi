import react from "react";
import { Link } from "react-router-dom";
import "./styles/SubjectLink.css";
function SubjectLink(props) {
  return (
    <Link to={props.headingTo} className="subject-link">
      <img className="subject-icon" src={props.img} alt={`${props.subjectName}'i temsil eden`} />
      <p className="subject-text" style={{ backgroundColor: props.bgColor }}>
        {props.subjectName}
      </p>
    </Link>
  );
}

export default SubjectLink;
