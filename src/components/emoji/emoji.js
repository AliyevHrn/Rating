import Styles from './emoji.module.scss';
import emoji1 from '../../img/emoji-rating-1.svg';
import emoji2 from '../../img/emoji-rating-2.svg';
import emoji3 from '../../img/emoji-rating-3.svg';
import emoji4 from '../../img/emoji-rating-4.svg';
import emoji5 from '../../img/emoji-rating-5.svg';
import emoji6 from '../../img/emoji-rating-6.svg';
import emoji7 from '../../img/emoji-rating-7.svg';
import emoji8 from '../../img/emoji-rating-8.svg';
import emoji9 from '../../img/emoji-rating-9.svg';
import emoji10 from '../../img/emoji-rating-10.svg';


const Emoji = ({rating}) => {

    let imgsrc = '';

    switch (rating) {
        case 1:
            imgsrc = emoji1;
            break;
        case 2:
            imgsrc = emoji2;
            break;
        case 3: 
            imgsrc = emoji3;
            break;
        case 4: 
            imgsrc = emoji4;
            break;
        case 5: 
            imgsrc = emoji5;
            break;
        case 6: 
            imgsrc = emoji6;
            break;
        case 7: 
            imgsrc = emoji7;
            break;
        case 8: 
            imgsrc = emoji8;
            break;
        case 9:
            imgsrc = emoji9;
            break;
        case 10:
            imgsrc = emoji10;
            break;
        default:
            imgsrc = emoji1;
            break;
    }

    return rating > 0 ? <img className={Styles.img} src={imgsrc}/> : <img className={Styles.img} src={emoji6}/>
}
export default Emoji;