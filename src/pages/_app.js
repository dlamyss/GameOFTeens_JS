import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import '@/styles/Nav.css';
import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/Footer.css';
import '@/styles/404.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
