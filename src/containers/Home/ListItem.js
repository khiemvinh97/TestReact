import React from "react";
import { useHistory } from "react-router-dom";

const ListItem = (props) => {
  const { item } = props;
  const history = useHistory();

  const moveDetail = (id) => {
    history.push(`/blog/${id}`);
  };

  return (
    <li
      className="media mb-2 blogs__list__item"
      onClick={() => moveDetail(item.id)}
    >
      <img
        src={item.image}
        className="mr-3 blogs__list__item__img"
        alt="item.title"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{item.title}</h5>
        {item.content}
      </div>
    </li>
  );
};

export default ListItem;
