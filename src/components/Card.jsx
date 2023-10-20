import PropTypes from 'prop-types'
import "../styles/Card.css"
import Tilt from "react-parallax-tilt"

export default function Card({
    isFlipped,
    handleCardClick,
    character
  }) {

    return (
        <Tilt
            className='tilt'
            glareEnable={true}
            glareColor="#ffffff"
            glareBorderRadius="18px"
            glareMaxOpacity={0.8}
            glarePosition="bottom"
            >
                <div onClick={() => handleCardClick(character)} className={`card ${isFlipped ? 'flipped' : ''}`}>
                    <div className="cardInner">
                        <div className="cardFront">
                            <img src={character.src} alt="Mortal Kombat character" />
                            <p>{character.name}</p>
                        </div>
                        <div className="cardBack"></div>
                    </div>
                </div>
        </Tilt>
    )
}

Card.propTypes = {
    isFlipped: PropTypes.bool.isRequired,
    handleCardClick: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
}