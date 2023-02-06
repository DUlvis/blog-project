import './HeaderTopbarRight.scss'
type Props = {}

const HeaderTopbarRight = (props: Props) => {
    return (
        <div className="topbar-right">
            <div className="header-social">
                <ul className="social-list">
                    <li>
                        <a href="https://www.instagram.com/">
                            <span>Instagram</span>
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            <span>Facebook</span>
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <span>Twitter</span>
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/">
                            <span>Pinterest</span>
                            <i className="fa fa-pinterest"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://soundcloud.com/">
                            <span>SoundCloud</span>
                            <i className="fa fa-soundcloud"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="header-search">
                <form action="" className="search-form">
                    <input
                        type="text"
                        className="search-field"
                        placeholder="Search ..."
                    />
                </form>
            </div>
        </div>
    )
}

export default HeaderTopbarRight
