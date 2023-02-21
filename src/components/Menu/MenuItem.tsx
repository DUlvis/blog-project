import { NavLink } from 'react-router-dom'
import './MenuItem.scss'
type Props = {
    to: string
    children: React.ReactNode
}

const MenuItem = ({ to, children }: Props) => {
    return (
        <button>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'nav-active' : 'nav-item'
                }
                to={to}
            >
                {children}
            </NavLink>
        </button>
    )
}

export default MenuItem
