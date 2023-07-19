import {ReactComponent as StarFull} from '../../assets/img/star-full.svg';
import {ReactComponent as StarHalf} from '../../assets/img/star-half.svg';
import {ReactComponent as StarEmpity} from '../../assets/img/star-empity.svg';
import './styles.css';

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
    <StarFull />
    <StarFull />
    <StarFull />
    <StarHalf />
    <StarEmpity />
  </div>
  );
}

export default MovieStars;