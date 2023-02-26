import { useEffect, useRef } from "react"
import useDrawOnCanvas from "../../hooks/useDrawOnCanvas"
import io from 'socket.io-client';
import "./style.css"

// connect to the server
const socket = io("http://localhost:5000");

interface Props {
  selectedColor: string,
  selectedLineWidth: number,
}

const Board = ({selectedColor, selectedLineWidth}: Props) => {
  const ref = useRef(null)

  useEffect(() => {
    // add draw feature on canvas
    useDrawOnCanvas(ref.current as unknown as HTMLCanvasElement, socket)

    // listen other user's data from server and draw data into canvas
    socket.on("canvas-data", (data) => {
      const image = new Image()
      const canvas = ref.current as unknown as HTMLCanvasElement
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
      image.onload = () => {
        ctx.drawImage(image, 0, 0)
      }
      image.src = data
    })
  }, [])

  // user change stroke color
  useEffect(() => {
    const canvas = ref.current as unknown as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.strokeStyle = selectedColor
    ctx.lineWidth = selectedLineWidth
  }, [selectedColor, selectedLineWidth])


  return (
    <canvas ref={ref} className="board"></canvas>
  )
}

export default Board