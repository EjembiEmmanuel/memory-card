import PropTypes from 'prop-types'
import "../styles/Footer.css"
import MusicOnIcon from "../assets/music_on.svg"
import MusicOffIcon from "../assets/music_off.svg"
import SoundOnIcon from "../assets/volume_on.svg"
import SoundOffIcon from "../assets/volume_off.svg"
import helpIcon from "../assets/question_mark.svg"
import closeIcon from "../assets/close.svg"

export default function Footer({
    props : {
        isMusicPlaying,
        setIsMusicPlaying,
        isSoundPlaying,
        setIsSoundPlaying,
        playClickSound,
        isHelpVisible,
        setIsHelpVisible,
    }   }) {

    const handleMusic = () => {
        setIsMusicPlaying(!isMusicPlaying)
    }

    const handleSound = () => {
        setIsSoundPlaying(!isSoundPlaying)
    }

    const handleHelp = () => {
        setIsHelpVisible(!isHelpVisible)
    }

    return (
        <div className="footer">
            <div className="settings">
                <button onClick={() => {handleMusic(); playClickSound()}} className="footerBtn">
                    {isMusicPlaying ? (
                        <img src={MusicOnIcon} alt="Music toggle icon" />
                    ) : (
                        <img src={MusicOffIcon} alt="Music toggle icon" />
                    )}
                </button>
                <button onClick={() => {handleSound(); playClickSound()}} className="footerBtn">
                    {isSoundPlaying ? (
                        <img src={SoundOnIcon} alt="Sound toggle icon" />
                    ) : (
                        <img src={SoundOffIcon} alt="Sound toggle icon" />
                    )}
                </button>
            </div>
            <div className="help">
                <button onClick={() => {handleHelp(); playClickSound()}} className="footerBtn">
                    {isHelpVisible ? (
                        <img src={closeIcon} alt="Help toggle icon" />
                    ) : (
                        <img src={helpIcon} alt="Help toggle icon" />
                    )}
                    
                </button>
            </div>
        </div>
    )
}

Footer.propTypes = {
    props: PropTypes.object.isRequired
}