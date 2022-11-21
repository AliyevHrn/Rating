import Emoji from "../emoji/emoji"; 
import Styles from './rating.module.scss';
import { useEffect, useState } from "react";

const COLORS = {
    default: '#D7D8DE',
    checked: '#FF0F43',
}

const Rating = ({ id, number, title, getData }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function getStarBg (value) {
        if(value <= hover) {
            return COLORS.checked;
        } else {
            return COLORS.default;
        }
    }

    const onHandleClick = (value) => {
        setRating(value);
    }

    useEffect(() => {
        if(rating > 0) {
            getData(rating);
        }
    }, [rating])

    
    return (
        <div className={Styles.ratingItem}>
            <div className={Styles.head}>
                <span className={Styles.number}>{number}</span>
                <h2 className={Styles.title}>{title}</h2>
            </div>
            <div className={Styles.emojiWrapper}>
                { <Emoji rating={rating}/> }
            </div>
            <div className={Styles.rating}>
                {[...Array(10)].map((item, index) => {
                    index++;
                    return (
                        <label 
                            className={Styles.label}
                            key={index}
                            onClick={() => onHandleClick(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <input type="radio" className={Styles.input} name="rating" id={`rating-${id}`} value={index}/>
                            <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.8246 17.0466L34.0554 15.6763C33.1874 15.5932 32.4374 15.0118 32.0827 14.1398L27.1509 1.55725C26.3618 -0.519082 23.5601 -0.519082 22.771 1.55725L17.8787 14.1398C17.563 15.0118 16.774 15.5932 15.906 15.6763L2.13638 17.0466C0.0847471 17.2543 -0.743795 19.9535 0.794926 21.4069L11.1714 30.9996C11.8422 31.6225 12.1183 32.536 11.9211 33.4496L8.80417 46.9038C8.33072 49.0221 10.5007 50.7658 12.3156 49.645L23.7968 42.5435C24.5465 42.0867 25.4539 42.0867 26.2036 42.5435L37.6852 49.645C39.5001 50.7658 41.6701 49.0636 41.1962 46.9038L38.1188 33.4496C37.9215 32.536 38.1977 31.6225 38.8684 30.9996L49.2449 21.4069C50.7442 19.9535 49.8762 17.2543 47.8246 17.0466Z' 
                            fill={getStarBg(index)}/></svg>
                        </label>
                    );
                })}
            </div>
        </div>
    )
}

export default Rating;