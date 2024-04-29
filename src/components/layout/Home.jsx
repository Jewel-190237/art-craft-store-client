/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import ArtCard from "./ArtCard";
import a from "../../assets/11.jpg"
import b from "../../assets/12.jpg"
import c from "../../assets/13.jpg"
import d from "../../assets/14.jpg"
import e from "../../assets/15.jpg"
import f from "../../assets/16.jpg"

const Home = () => {

    const loadedArts = useLoaderData()
    const [arts, setArts] = useState(loadedArts)


    return (
        <div>
            <Banner></Banner>
            <div className="mt-8">
                <h2 className="text-3xl text-center font-bold text-green-600">Arts and Crafts</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Explore a vibrant world of creativity with our diverse collection of arts and crafts! From intricate paintings to handcrafted sculptures, and everything in between, our website offers a captivating array of artistic expressions</p>
                </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {
                    arts.map(art => <ArtCard key={art._id} art={art}></ArtCard>)
                }

            </div>
            <p className="text-center"> <Link to='/allArts'>
                <button className="btn bg-lime-900 text-white m-8">View All arts and Crafts </button>
            </Link></p>
            {/* Review */}
            <div className="mt-10">
                <h2 className="text-3xl text-center font-bold text-green-600">Customer Review</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Delve into the testimonials from our vibrant community of crafters, as they share their heartfelt experiences with our arts and crafts products. Explore a tapestry of reviews that highlight the joy, inspiration, and fulfillment our materials bring to their artistic endeavors. Join us on a journey through the words of those who have found passion, relaxation, and endless possibilities within our carefully curated selection</p>
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={a} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Robert Martin</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">Absolutely love this arts and crafts kit! The variety of materials provided sparked my creativity and allowed me to unleash my imagination. From colorful paints to quality brushes, everything was top-notch. Its perfect for both beginners and seasoned crafters alike. Highly recommend</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={b} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Jukarbarg Jack</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">As an avid DIY enthusiast, Ive tried numerous arts and crafts products, but this one stands out. The assortment of materials included exceeded my expectations, and the step-by-step instructions made it easy to create stunning pieces. Its a fantastic value for the quality you receive.</p>

                    </div>
                    {/* Review 2 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={f} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Jack Kllis</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">Absolutely love this arts and crafts kit! The variety of materials provided sparked my creativity and allowed me to unleash my imagination. From colorful paints to quality brushes, everything was top-notch. Its perfect for both beginners and seasoned crafters alike. Highly recommend</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={c} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Jow Root</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">I purchased this arts and crafts set for my daughters birthday, and it was a hit! She spent hours engrossed in the various projects, exploring her artistic side. The kit provided a wonderful opportunity for us to bond while creating beautiful memories together. Thank you for such a delightful product</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={d} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Daren Michel</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">This arts and crafts kit has become a staple in our household. Its versatile, engaging, and offers endless possibilities for creative expression. Whether its making handmade cards, decorating ornaments, or painting masterpieces, it never fails to entertain both kids and adults. A must-have for any craft enthusiast</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={e} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Jow Biden</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">I bought this arts and crafts kit for a weekend DIY project, and it exceeded my expectations. The variety of supplies provided allowed me to experiment with different techniques and create unique artworks. Its evident that the creators put a lot of thought into ensuring a well-rounded experience. I couldnt be happier with my purchase</p>

                    </div>
                </div>
            </div>

            {/* Rating */}
            <div className="mt-24">
                <h2 className="text-3xl text-center font-bold text-green-600">Customer Rating</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Delve into the testimonials from our vibrant community of crafters, as they share their heartfelt experiences with our arts and crafts products. Explore a tapestry of reviews that highlight the joy, inspiration, and fulfillment our materials bring to their artistic endeavors. Join us on a journey through the words of those who have found passion, relaxation, and endless possibilities within our carefully curated selection</p>
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            {/* <img src={a} alt="Shoes" className="rounded-full w-1/3 " /> */}
                            <div className="radial-progress text-green-600 border-4 border-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Rating 5 out of 5</h2> 
                    </div>
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            {/* <img src={a} alt="Shoes" className="rounded-full w-1/3 " /> */}
                            <div className="radial-progress text-green-600 border-4 border-yellow-600" style={{ "--value": 20 }} role="progressbar">20%</div>
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Rating 4 out of 5</h2> 
                    </div>
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            {/* <img src={a} alt="Shoes" className="rounded-full w-1/3 " /> */}
                            <div className="radial-progress text-green-600 border-4 border-red-500" style={{ "--value": 10 }} role="progressbar">10%</div>
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Rating 3 out of 5</h2> 
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="mb-8 mt-32">
                <h2 className="text-3xl text-center font-bold text-green-600">Frequent Asked Question(FAQ)</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Welcome to our detailed Frequently Asked Questions (FAQ) section, designed to address all your queries with thoroughness and clarity. We understand the importance of clear communication, which is why we have compiled this extensive resource to ensure you have all the information you need at your fingertips</p>
                </p>

                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;