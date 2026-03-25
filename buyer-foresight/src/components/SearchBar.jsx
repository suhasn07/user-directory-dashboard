function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      className="form-control w-auto"
      placeholder="Search users..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;