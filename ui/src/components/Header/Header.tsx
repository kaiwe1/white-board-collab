import "./style.css"
import { FaPen, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";

const Header = () => {
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div className="header">
      <div className="color-picker">
        <FaPen className="fa-pen"/>
        <FaAngleDown className="fa-angle-down" onClick={() => setShowColorPicker(!showColorPicker)} />
        {
          showColorPicker ? 
          <ColorPicker /> : 
          null
        }

      </div>
    </div>
  )
}

export default Header