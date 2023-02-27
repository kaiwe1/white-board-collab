import Board from '../Board/Board'
import Header from '../Header/Header'
import "./style.css"

const Container = () => {
  return (
    <div className="container">
        <div className="header-container">
            <Header />
        </div>
        <div className="board-container">
            <Board></Board>
        </div>
    </div>
  )
}

export default Container