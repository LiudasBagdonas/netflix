import './index.css';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import AllMovies from '../../components/AllMovies';

function Movies({token}) {
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
                <AllMovies/>
            </section>
        </main>
        ;

    return (
        <>
        {content}
        </>
    );
}

function mapState({auth}) {
    return {
        token: auth.token
    }
}

export default connect(mapState, null)(Movies);