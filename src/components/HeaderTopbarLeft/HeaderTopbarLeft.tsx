import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './HeaderTopbarLeft.scss'
type Props = {}

const HeaderTopbarLeft = (props: Props) => {
    return (
        <Typography
            component="div"
            className="topbar-left"
            sx={{ flexGrow: 1 }}
        >
            <ul className="menu">
                <li>
                    <NavLink to={'/'}>FAQs</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Policy</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>En</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Fr</NavLink>
                </li>
            </ul>
        </Typography>
    )
}

export default HeaderTopbarLeft
