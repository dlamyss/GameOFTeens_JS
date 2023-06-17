import Link from 'next/link';
const Footer = () => {
    return (
        <div className="background">
            <footer className="footerDiv background">
                <div className="footerBox">
                    <ul className="fotterButtons">
                        <h2>Сторінки</h2>

                        <li>
                            <Link className="navButton" href={'/'}>
                                Головна
                            </Link>
                        </li>
                        <li>
                            <Link className="navButton" href={'/projects'}>
                                Проєкти
                            </Link>
                        </li>
                        <li>
                            <Link className="navButton" href={'/news'}>
                                Новини
                            </Link>
                        </li>
                    </ul>
                    <ul className="fotterButtons">
                        <h2>Умови користування</h2>
                        <li>
                            <Link className="navButton" href={'/polictics'}>
                                Політика
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="contactDiv">
                    <h1>GoITeensLab</h1>
                    <ul>
                        <li>Telegram: @Artemis_Vainhtein</li>
                        <li>Gmail: artemka7.av@gmail.com</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
