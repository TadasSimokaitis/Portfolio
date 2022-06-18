import "./Navbar.css"
import Logo from '../img/Logo'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

  
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <Logo />
            </Link>
            <ul>
                < CustomLinks to="/pricing">Pricing</CustomLinks>
                < CustomLinks to="/about">About</CustomLinks>
            </ul>
        </nav>
    )
}

function CustomLinks({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}