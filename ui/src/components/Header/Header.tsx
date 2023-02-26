import "./style.css"

interface Props {
    color: string;
    lineWidth: number;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    setLineWidth: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({color, lineWidth, setColor, setLineWidth}: Props) => {
  return (
    <div className="header">
        <label>Color picker: </label>
        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        <label className="line-width-label">Line width: </label>
        <select value={lineWidth} onChange={e => setLineWidth(parseInt(e.target.value))}>
            <option value="3">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
    </div>
  )
}

export default Header