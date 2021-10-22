import {Row, Col} from 'react-bootstrap';
import logo from '../media/logo.png';

function Header(props) {

    return (
        <div class='bg-primary py-5 ps-md-5 mb-5 '>
            <div class='glass-holder'>
                <div class='glass'></div>
                <img src={logo} class='headerLogo' width='30%'></img>
            </div>
        </div>
    );
}

export default Header;
