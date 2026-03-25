import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import SortButtons from "../components/SortButtons";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (query) => {
    const result = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  const handleSort = (field, order) => {
    const sorted = [...filtered].sort((a, b) => {
      const valA = field === "company" ? a.company.name : a.name;
      const valB = field === "company" ? b.company.name : b.name;

      return order === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
    setFiltered(sorted);
  };

  return (
    <div className="container py-4">

      <h1 className="text-center mb-4">User Directory Dashboard</h1>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
        <SearchBar onSearch={handleSearch} />
        <SortButtons onSort={handleSort} />
      </div>

      <div className="row">
        {filtered.length > 0 ? (
          filtered.map(user => (
            <div key={user.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <p className="text-center">No users found</p>
        )}
      </div>

    </div>
  );
}

export default Dashboard;