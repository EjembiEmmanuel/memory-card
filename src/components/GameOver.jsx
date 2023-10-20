import PropTypes from 'prop-types'
import "../styles/GameOver.css"
import gameOverImg from "../assets/gameover.jpeg"


export default function GameOver({
    props: {
        gameStatus,
        restartGame
    }
}) {

    return (
        <div className="gameOver">
            <div className="gameOverImgContainer">
                {gameStatus === "win" && (
                    <div className="win">
                        <p>You win!</p>
                    </div>
                )}

                {gameStatus === "lose" && (
                    <img src={gameOverImg} alt="Game over img" />
                )}
                <button onClick={restartGame} className="restartBtn">Restart</button>
            </div>
        </div>
    )
}

GameOver.propTypes = {
    props: PropTypes.object.isRequired
}