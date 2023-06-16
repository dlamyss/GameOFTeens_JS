import Image from 'next/image';

function Home() {
    return (
        <div className="image-container">
            <Image
                className="background-mainPage"
                src="/background-mainPage-photo.png"
                alt="background"
                width={'1280'}
                height={'832'}
            />
        </div>
    );
}

export default Home;
