import { useContext, useEffect } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import { GithubContext } from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-col-3 md:grid-cols-2 gap-8 p-8">
        {users.map((user) => (
          <UserItem key={user.login} user={user} />
        ))}
      </div>
    );
  }
}

export default UserResults;
