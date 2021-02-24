import auth from '../../../auth';

import './index.css';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import AllMovies from '../../components/AllMovies';

function Movies() {

    const token = useSelector(auth.selectors.login)

    const content = token ?
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
                <AllMovies />
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