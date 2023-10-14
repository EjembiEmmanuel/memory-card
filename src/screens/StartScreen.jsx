import "../styles/StartScreen.css"
import MortalKombatLogo from "../assets/mortal-kombat-logo.png"

export default function StartScreen() {
    return (
        <div className="startScreen">
            <div className="logoContainer">
                <img className="logo" src={MortalKombatLogo} alt="Mortal Kombat Logo" />
            </div>
            <div className="levelBtnsContainer">
                <button className="levelBtn">Easy</button>
                <button className="levelBtn">Medium</button>
                <button className="levelBtn">Hard</button>
            </div>
        </div>
    )
}