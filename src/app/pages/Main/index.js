import './index.css';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import AllMovies from '../../components/AllMovies';
import AuthContext from "../../contexts/AuthContext";
import {useContext} from 'react';

function Main() {

    const {loginState} = useContext(AuthContext.context);
    
    const content = loginState ?
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

export default Main;