import { SearchIcon } from "../../../assets/Icons/SVG";

export function SearchInput({ onSearch }) {
  return (
    <div className="input-group">
      <span className="input-group-text whiteBg"><SearchIcon /></span>
      <input type="search" className="form-control whiteBg"
        placeholder="Search Inventory..." onChange={e => onSearch(e.target.value)} />
    </div>
  );
}
