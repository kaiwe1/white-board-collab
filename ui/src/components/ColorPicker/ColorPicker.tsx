import { useEffect, useState } from 'react'
import store from '../../redux'

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff")
  const [lineWidth, setLineWidth] = useState(5)

  useEffect(() => {
    store.dispatch({type: "setColor", payload: {color, lineWidth}})
    store.dispatch({type: "setLineWidth", payload: {color, lineWidth}})
  }, [color, lineWidth])

  return (
    <div className="color-picker-popup">
          <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          <select value={lineWidth} onChange={e => setLineWidth(parseInt(e.target.value))}>
            <option value="3">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
    </div>
  )
}

export default ColorPicker