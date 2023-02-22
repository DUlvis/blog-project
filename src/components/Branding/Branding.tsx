import { Container } from '@mui/material'
import logo from 'assets/logo.png'
import { NavLink } from 'react-router-dom'
import './Branding.scss'
type Props = {}

const Branding = (props: Props) => {
    return (
        <div className="site-branding">
            <Container maxWidth="lg" className="container">
                <div className="site-branding-inner">
                    <NavLink to={'/'}>
                        <img src={logo} alt="Logo Radians" />
                    </NavLink>
                    <p className="site-branding-theme">Modern Magazine Theme</p>
                </div>
            </Container>
        </div>
    )
}

export default Branding
