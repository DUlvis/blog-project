import { Typography } from '@mui/material'
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
                    <a href="#">FAQs</a>{' '}
                </li>
                <li>
                    <a href="#">Policy</a>{' '}
                </li>
                <li>
                    <a href="#">En</a>{' '}
                </li>
                <li>
                    <a href="#">Fr</a>{' '}
                </li>
            </ul>
        </Typography>
    )
}

export default HeaderTopbarLeft
