import React from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

const UsersList = (props) => {

  if (props.items.length === 0) {
    return (
      <div>
        <h2>No Users found.</h2>
      </div>
    );
  }
  return (
    <div class="row">
      {props.items.map((item) => (
        <div className="col s12 m6 l4 section" key={item.id}>
          <Link to="/"><UserItem {...item} /></Link>
          
        </div>
      ))}
    </div>
  );
};

export default UsersList;
