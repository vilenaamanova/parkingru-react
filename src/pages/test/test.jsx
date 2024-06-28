import { useSwipeable } from 'react-swipeable';
import  '/src/pages/test/test.css';
import {useState} from "react";

const cards = [
    { id: 1, content: 'Card 1 Content' },
    { id: 2, content: 'Card 2 Content' },
    { id: 3, content: 'Card 3 Content' },
    { id: 4, content: 'Card 4 Content' },
    { id: 5, content: 'Card 5 Content' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'LEFT') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        } else if (direction === 'RIGHT') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('LEFT'),
        onSwipedRight: () => handleSwipe('RIGHT'),
    });

    return (
        <div {...handlers} className={'carousel'}>
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
                >
                    {card.content}
                </div>
            ))}
        </div>
    );
};

export default Carousel;
