import { useState, useEffect } from 'react';

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ENTER = 13;

export default function useKeySelect({ itemCount, selectItem }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleKeyDown = (event) => {
        if (event.keyCode === ARROW_DOWN) {
            setSelectedIndex(prevIndex => {
                return prevIndex < (itemCount - 1) ? prevIndex + 1 : 0;
            });
        } else if (event.keyCode === ARROW_UP) {
            setSelectedIndex(prevIndex => {
                return prevIndex > 0 ? prevIndex - 1 : itemCount - 1;
            });
        } else if (event.keyCode === ENTER && selectItem) {
            selectItem();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, false);
        return () => {
            document.removeEventListener('keydown', handleKeyDown, false);
        };
    }, []);

    return [selectedIndex, setSelectedIndex];
}
