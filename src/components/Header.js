import './Header.css';
import Logo from '../images/mealful-22.svg';
function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="logo" height="40"/>
        </div>
    );
}
export default Header;