import React from "react";
import PropItem from "./PropItem";
import PropTypes from "prop-types";

function PropComponent({
  userName = "Cosme",
  users = ["No hay datos"],
  children,
}) {
  return (
    <div>
      <h3>{userName}</h3>
      <ol>
        {users.map((user, index) => (
          <PropItem key={index} user={user} />
        ))}
      </ol>
      {children}
    </div>
  );
}

PropComponent.propTypes = {
  userName: PropTypes.string,
  users: PropTypes.array,
};

export default PropComponent;
