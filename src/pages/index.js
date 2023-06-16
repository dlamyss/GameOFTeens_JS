import Image from 'next/image';
import Link from 'next/link';

function Home() {
    return (
        <>
            <div className="image-container">
                <div className="overlay"></div>
                <Image
                    className="background-mainPage"
                    src="/background-mainPage-photo.png"
                    alt="background"
                    width={'1280'}
                    height={'832'}
                />
            </div>
            <div className="text-container">
                <h1 className="title-mainpage">
                    Інвестуй в стартап твого майбутнього
                </h1>
                <h4 className="subtitle-mainpage">
                    Станьте частиною прориву та здійсніть чиюсь мрію.
                </h4>
                <button className="invest-button">
                    <Link href={'/projects'}>Інвестувати</Link>
                </button>
            </div>
        </>
    );
}

export default Home;
