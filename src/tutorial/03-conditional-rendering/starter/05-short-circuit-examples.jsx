import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>{text || "hello world"}</h2>
      {text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name}></SomeComponent>}
      <h2 style={{ margin: "1rem 0" }}>Ternery Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>Hello there user {user.name}</h4>
        </div>
      ) : (
        <h2>please login</h2>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>what ever return </h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
