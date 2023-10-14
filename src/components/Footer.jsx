import "../styles/Footer.css"
import MusicOnIcon from "../assets/music_on.svg"
import MusicOffIcon from "../assets/music_off.svg"
import SoundOnIcon from "../assets/volume_on.svg"
import SoundOffIcon from "../assets/volume_off.svg"
import helpIcon from "../assets/question_mark.svg"
import closeIcon from "../assets/close.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="settings">
                <button className="footerBtn">
                    <img src={MusicOnIcon} alt="Music toggle icon" />
                </button>
                <button className="footerBtn">
                    <img src={SoundOnIcon} alt="Sound toggle icon" />
                </button>
            </div>
            <div className="help">
                <button className="footerBtn">
                    <img src={helpIcon} alt="Help toggle icon" />
                </button>
            </div>
        </div>
    )
}