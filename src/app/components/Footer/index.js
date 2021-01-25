import './index.css';
import visa from '../../imgs/bankpng/visa.png';
import mastercard from '../../imgs/bankpng/mastercard.png';
import amex from '../../imgs/bankpng/amex.png';
import discover from '../../imgs/bankpng/discover.png';


function Footer() {

    return (
        <footer className="footer">
            <p className="footer-text">
            We care about your entertainment. Copyright © 2019–2021 felix.com
            </p>
            <div className="bank-logo-box">
                <img src={visa} className="bank-logo-footer" alt="visa img"></img>
                <img src={mastercard} className="bank-logo-footer" alt="mastercard img"></img>
                <img src={amex} className="bank-logo-footer" alt="amex img"></img>
                <img src={discover} className="bank-logo-footer" alt="discover img"></img>
            </div>
        </footer>
    );
}

export default Footer;