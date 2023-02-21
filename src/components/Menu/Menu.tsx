import { Container } from '@mui/material'
import './Menu.scss'
import MenuItem from './MenuItem'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="navbar">
            <Container maxWidth="lg" className="container">
                <div className="main-menu">
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/about">About Us</MenuItem>
                    <MenuItem to="/typography">Typography</MenuItem>
                    <MenuItem to="/travel">Travel</MenuItem>
                    <MenuItem to="/business">Business</MenuItem>
                    <MenuItem to="/favorites">Favorites</MenuItem>
                    <MenuItem to="/contact">Contact</MenuItem>
                </div>
            </Container>
        </div>
    )
}

export default Menu
