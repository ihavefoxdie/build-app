import {useEffect, useRef} from "react";

const sideScroll = () =>
{
    const scrollRef = useRef();
    useEffect(() =>
    {
        const element = scrollRef.current;
        if (element) {
            const wheelListener = e => {
                if (e.deltaY === 0.0) return;
                e.preventDefault();
                element.scrollTo({
                    left: element.scrollLeft + e.deltaY * 5,
                });
            };
            element.addEventListener("wheel", wheelListener);
            return () => element.removeEventListener("wheel", wheelListener);
        }
    }, []);
    return scrollRef;
}

export default sideScroll;