import Link from 'react-router-dom'

function Navigation() {
    const currentPage = Link().pathName;
    return (
        <ul>
            <li>
                <Link
                    to="/">
                    About Me
                </Link>
            </li>
            <li>
                <Link
                    to="/Portfolio">
                    Portfolio
                </Link>
            </li>
            <li>
                <Link
                    to="/Contact">
                    Contact
                </Link>
            </li>
            <li>
                <Link
                    to="/Resume">
                    Resume
                </Link>
            </li>
        </ul>
    )
}

export default Navigation;