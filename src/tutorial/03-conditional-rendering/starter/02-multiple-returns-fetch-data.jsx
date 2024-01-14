import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, updateUser] = useState(null);
  useEffect(() => {
    const func = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        updateUser(data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
      setIsLoading(false);
    };
    func();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>There is an error...</h2>;
  }

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>{user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
