
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex my-6">
            <button className="btn outline outline-1 outline-green-700 bg-emerald-200">Latest Update</button>
            <Marquee pauseOnHover={true}>
                <Link className="mr-12" to='/'>
                    Mountain View Serenity has discount 10%
                </Link>
                <Link className="mr-12" to='/'>
                    Tranquil Riverfront Retreat has discount 14%
                </Link>
                <Link className="mr-12" to='/'>
                    Tranquil Lakefront Sanctuary has discount 13%
                </Link>
                <Link className="mr-12" to='/'>
                    Secluded Forest Haven has discount 12%
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;