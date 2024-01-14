import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, updateUsers] = useState([]);
  useEffect(() => {
    const fetchDat = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        // console.log(users);
        updateUsers(users);
      } catch (err) {
        console.log("error");
      }
    };
    fetchDat();
  }, []);
  return (
    <section>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="{login}" />
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
