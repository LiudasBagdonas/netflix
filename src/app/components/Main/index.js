import './index.css';
import Button from '../Button';
import Divider from '../Divider';
import AllMovies from '../AllMovies';

function Main() {

    return (
        <main>
            <section className="hero-section">
                <div className="hero-content">
                     <h2 className="hero-highlight">Wanna more content?</h2>
                    <Button big>Get Access</Button>
                </div>
            </section>
            <Divider/>
            <section className="main-content">
                <AllMovies/>
            </section>
        </main>
    );
}

export default Main;