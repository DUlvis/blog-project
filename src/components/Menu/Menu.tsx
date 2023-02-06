import { Container } from '@mui/material'
import './Menu.scss'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="navbar">
            <Container maxWidth="lg" className="container">
                <div className="main-menu">
                    <button>Home</button>
                    <button>About Us</button>
                    <button>Typography</button>
                    <button>Travel</button>
                    <button>Business</button>
                    <button>Favorites</button>
                    <button>Contact</button>
                </div>
            </Container>
        </div>
    )
}

export default Menu
