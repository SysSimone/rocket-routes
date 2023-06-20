import { Link } from "react-router-dom";


//o componente usado do react router para alterar as páginas é o componente link
const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contatos</Link>
        </nav>
    );

};

export default Navbar;
