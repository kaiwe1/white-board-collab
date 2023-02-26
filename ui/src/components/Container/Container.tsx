import { useState } from 'react'
import Board from '../Board/Board'
import "./style.css"

const Container = () => {
  const [color, setColor] = useState("red")

  return (
    <div className="container">
        <div className="color-picker-container">
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        </div>
        <div className="board-container">
            <Board selectedColor={color}></Board>
        </div>
    </div>
  )
}

export default Container