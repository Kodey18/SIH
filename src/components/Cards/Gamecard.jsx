import "./Gamecard.css";
import cd1 from "../../images/cd1.jpg";
import logo from "../../images/gameimg.jpg"

export default function Gamecard(props) {
  return (
    <div className="cd5">
        <div className="cd5Wrapper">
            <div className="cd5imgDiv">
                <img src={cd1} alt="" className='cd5Image' />
            </div>
            <img src={logo} alt="" className={props.gp1?"game1logo": "gamelogo"}/>
            <div className="cd5textDiv">
                <p className="cd5Text">{props.name}</p>
            </div>
        </div>
    </div>
  )
}
