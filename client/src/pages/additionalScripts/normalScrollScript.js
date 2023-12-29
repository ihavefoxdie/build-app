import {useEffect, useRef} from "react";

const Scroll = () =>
{
    const scrollRef = useRef();
    useEffect(() =>
    {
        const element = scrollRef.current;
        if (element) {
            const wheelListener = e => {
                if (e.deltaX === 0.0) return;
                e.preventDefault();
                element.scrollTo({
                    right: element.scrollDown + e.deltaX * 5,
                });
            };
            element.addEventListener("wheel", wheelListener);
            return () => element.removeEventListener("wheel", wheelListener);
        }
    }, []);
    return scrollRef;
}

export default Scroll;