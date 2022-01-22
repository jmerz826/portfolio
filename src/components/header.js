import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>John Merz</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;