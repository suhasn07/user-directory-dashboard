import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    
    <div
      className="card h-100 shadow-sm border-0"
      style={{ cursor: "pointer", borderRadius: "15px" }}
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <div className="card-body text-center">

        {/* Avatar */}
        <img
          src={`https://i.pravatar.cc/150?img=${user.id}`}
          alt="avatar"
          className="rounded-circle mb-3"
          width="80"
          height="80"
        />

        {/* Name */}
        <h5 className="card-title fw-bold">{user.name}</h5>

        {/* Email */}
        <p className="card-text text-muted">
          <FaEnvelope className="me-2 text-primary" />
          {user.email}
        </p>

        {/* Phone */}
        <p className="card-text">
          <FaPhone className="me-2 text-success" />
          {user.phone}
        </p>

        {/* Company */}
        <p className="card-text text-info fw-semibold">
          <FaBuilding className="me-2" />
          {user.company.name}
        </p>

      </div>
    </div>
  );
}

export default UserCard;