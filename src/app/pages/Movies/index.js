import './index.css';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import AllMovies from '../../components/AllMovies';

function Movies(movie) {
    console.log(movie)
    const content = localStorage.getItem("token") ?
        <main>
            <section className="main-content">
                <AllMovies />
            </section>
        </main>
        :
        <main>
            <section className="hero-section">
                <div className="hero-content">
                    <h2 className="hero-highlight">Wanna more content?</h2>
                    <Button big>Get Access</Button>
                </div>
            </section>
            <Divider />
            <section className="main-content">
                <AllMovies movie={movie}/>
            </section>
        </main>
        ;

    return (
        <>
        {content}
        </>
    );
}

export default Movies;