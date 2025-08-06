
export default function DashBtn({ BtnName, BtnIcon, BtnColor , BtnStyle , onClick }) {
  return (
    <button className={`btn border ${BtnColor} whiteBg`}
      style={BtnStyle} onClick={onClick} >
      {BtnIcon} <span> {BtnName}</span>
    </button>
  );
}


