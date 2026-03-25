import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="container py-5">
      <button className="btn btn-link mb-3" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <div className="card p-4 shadow">
        <h2>{user.name}</h2>

        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Website:</b> {user.website}</p>

        <h5 className="mt-3">Company</h5>
        <p>{user.company.name}</p>

        <h5 className="mt-3">Address</h5>
        <p>{user.address.street}, {user.address.city}</p>
      </div>
    </div>
  );
}

export default UserDetail;