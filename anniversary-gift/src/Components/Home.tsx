import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div>
            <div className="home-header">
                <h3>Welcome Hemtaf!</h3>
                <p>What would you like to do first: play a game or explore the gallery?</p>
            </div>
            <div className="home-options">
                <Link to="/gallery">
                    <button>Gallery</button>
                </Link>
                <Link to="/gameplay">
                    <button>GamePlay</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Home