import PropTypes from 'prop-types'
import "../styles/Card.css"
import Tilt from "react-parallax-tilt"

export default function Card({ props: {
    isFlipped,
    handleFlip,
} }) {

    return (
        <Tilt
            className='tilt'
            glareEnable={true}
            glareColor="#ffffff"
            glareBorderRadius="18px"
            glareMaxOpacity={0.8}
            glarePosition="bottom"
        >
            <div onClick={handleFlip} className={`card ${isFlipped ? 'flipped' : ''}`}>
                <div className="cardInner">
                    <div className="cardFront"></div>
                    <div className="cardBack"></div>
                </div>
            </div>
        </Tilt>
    )
}

Card.propTypes = {
    props: PropTypes.object.isRequired
}