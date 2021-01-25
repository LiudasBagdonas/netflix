import './index.css';

function Button({children, big}) {

const size = big ? 'big' : 'small';

    return (
        <button className={`button button--${size}`}>{children}</button>
    );
}

export default Button;