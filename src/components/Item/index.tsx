import ButtonGeneral from "../Button";
import { Link } from "react-router-dom";
import "./styles.css";

interface IItem {
  title: string;
  description: string;
  deleteService: any;
  id: any;
}

const Item = ({
  title,
  description,
  deleteService,
  id,
}: IItem) => {
  return (
    <div className="container_item">
      <div className="descriptions_item">
        <h2 className="title_item">{title}</h2>
        <p className="paragraph_item">{description}</p>
      </div>
      <div className="action_item">
        <Link
          className="action_item-link"
          to={`/edit/${id}`}
        >
          Edit
        </Link>
        <ButtonGeneral
          className="action_item-btn"
          onClick={() => deleteService(id)}
        >
          Delete
        </ButtonGeneral>
      </div>
    </div>
  );
};

export default Item;
