import './index.css';

function Button({children, big, fav, event, id, logout, watch}) {

const size = big ? 'big' : 'small';
const favorite = fav ? 'true' : 'false';

return (
        <button onClick={() => (
            logout ? logout(false) + localStorage.removeItem("token"):
            event ? event(id) : 
            watch ? watch(true) : ''
            )} className={`button button--${size} button-isfav--${favorite}`}>{children}</button>
    
        );
}

export default Button;