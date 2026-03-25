function SortButtons({ onSort }) {
  return (
    <div className="d-flex gap-2 flex-wrap">
      <button className="btn btn-primary" onClick={() => onSort("name", "asc")}>
        Name ↑
      </button>

      <button className="btn btn-primary" onClick={() => onSort("name", "desc")}>
        Name ↓
      </button>

      <button className="btn btn-success" onClick={() => onSort("company", "asc")}>
        Company ↑
      </button>

      <button className="btn btn-success" onClick={() => onSort("company", "desc")}>
        Company ↓
      </button>
    </div>
  );
}

export default SortButtons;