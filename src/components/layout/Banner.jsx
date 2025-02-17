import 'animate.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero rounded-xl sm:w-full md:w-full lg:w-full min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7Wbp96d/ancient-earthenware-jar-ornate-decoration-blue-colors-generated-by-ai.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft">   
                                    <Typewriter
                                        words={['Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000} 
                                    />
                                </h1>
                                <p className="mb-5 animate__animated animate__backInRight">Step into a World of Endless Inspiration and Artistic Expression: Delve Deep into the Ancient Craft of Ceramics & Pottery, Where Every Piece Tells a Story and Every Curve Holds History</p>
                                <Link to='/login'>
                                    <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/JxLk7bb/decorative-terracotta-vase-with-intricate-indigenous-pattern-generated-by-ai.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft"> 
                                <Typewriter
                                        words={['Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000} 
                                    />
                                
                                </h1>
                                <p className="mb-5 animate__animated animate__backInRight">Step into a World of Endless Inspiration and Artistic Expression: Delve Deep into the Ancient Craft of Ceramics & Pottery, Where Every Piece Tells a Story and Every Curve Holds History</p>
                                <Link to='/login'>
                                    <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/XCgS7nc/close-up-woman-painting-clay-pot.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft"> 
                                
                                <Typewriter
                                        words={['Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000} 
                                    />
                                </h1>
                                <p className="mb-5 animate__animated animate__backInRight">Step into a World of Endless Inspiration and Artistic Expression: Delve Deep into the Ancient Craft of Ceramics & Pottery, Where Every Piece Tells a Story and Every Curve Holds History</p>
                                <Link to='/login'>
                                    <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/nj5GhwL/assortment-elegant-ceramics-stands-arranged-neatly.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft"> 
                                
                                <Typewriter
                                        words={['Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd', 'Welcome to Jewel Ceramics Ltd']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000} 
                                    />
                                </h1>
                                <p className="mb-5 animate__animated animate__backInRight">Step into a World of Endless Inspiration and Artistic Expression: Delve Deep into the Ancient Craft of Ceramics & Pottery, Where Every Piece Tells a Story and Every Curve Holds History</p>
                                <Link to='/login'>
                                    <button className="btn btn-primary animate__animated animate__backInUp">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;