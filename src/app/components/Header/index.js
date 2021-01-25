import './index.css';
import navimg from '../imgs/navigationimg.png';
import Button from '../Button';

function Header() {

    return (
        <header>
            <nav>
                <div className="nav-home-img-box">
                    <img src={navimg} className="nav-home-img" alt=""></img>
                </div>
                <Button>Sign In</Button>
            </nav>
        </header>
    );
}

export default Header;