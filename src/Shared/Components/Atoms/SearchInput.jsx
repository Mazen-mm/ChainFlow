import { SearchIcon } from "../../../assets/Icons/SVG";

export function SearchInput({ onChange , placeholder , value }) {
  return (
    <div className="input-group w-100 p-0">
      <span className="input-group-text whiteBg"><SearchIcon /></span>
      <input type="search" className="form-control whiteBg"
        placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
}
