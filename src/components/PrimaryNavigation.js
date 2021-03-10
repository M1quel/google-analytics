import "./PrimaryNavigation.scss";

function PrimaryNavigation() {
    return(
        <nav className="primaryNavigation">
            <a href="/" className="primaryNavigation__brand">SaaS Company</a>
            <ul className="primaryNavigation__menu">
                <li className="primaryNavigation__menuItem">
                    <a href="/home" className="primaryNavigation__menuLink">Home</a>
                </li>
                <li className="primaryNavigation__menuItem">
                    <a href="/about" className="primaryNavigation__menuLink">About</a>
                </li>
                <li className="primaryNavigation__menuItem">
                    <a href="/contact" className="primaryNavigation__menuLink">Contact</a>
                </li>
            </ul>
        </nav>
    )
}


export default PrimaryNavigation;