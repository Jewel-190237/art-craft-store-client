
import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `Jewel Ceramics | ${title}`;
    },[])
};

export default UseTitle;
