import { useState } from 'react'
import Board from '../Board/Board'
import Header from '../Header/Header'
import "./style.css"

const Container = () => {
  const [color, setColor] = useState("#ffffff")
  const [lineWidth, setLineWidth] = useState(5)

  const props = {
    color,
    lineWidth,
    setColor,
    setLineWidth
  }

  return (
    <div className="container">
        <div className="header-container">
            <Header {...props}/>
        </div>
        <div className="board-container">
            <Board selectedColor={color} selectedLineWidth={lineWidth}></Board>
        </div>
    </div>
  )
}

export default Container