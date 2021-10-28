import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  ArrowDownwardOutlined,
  KeyboardArrowDown,
} from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context/modalContext/ModalContext";

export default function ListItem({ index, item }) {
  const modalCtx = useContext(ModalContext)

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [videoState, setVideoState] = useState(0);

  let movieShowTimeout;
  
  useEffect(() => {
    console.log(isHovered)
    if(isHovered){
      movieShowTimeout = setTimeout(() => {
        setShowMovieInfo(true)
      }, 600)
    } else{
      clearTimeout(movieShowTimeout)
      setShowMovieInfo(false)
    }
    return(() => clearTimeout(movieShowTimeout))
  }, [isHovered])
  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
    return (() => setMovie({}))
  }, [item]);

  return (
    <Link
      to={{ pathname: "/", movie: movie }}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div
        className="listItem"
        // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      >
        <img src={movie.img} alt="" />
      </div>
      {showMovieInfo && (
        <div className="itemHover">
          {videoState === 0 &&  <img src={movie.img} alt="" />}
          <video src={movie.trailer} autoPlay={true} loop muted onLoadedData={(e) => setVideoState(4)}/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
              <KeyboardArrowDown className="icon" onClick={modalCtx.openModal} />
            </div>
            <div className="itemInfoTop">
              {/* <span>{movie.duration}</span> */}
              <span className="rating">98% Cocok</span>
              <span className="limit">+{movie.limit}</span>
              <span>1 Session</span>
              <span className="quality">HD</span>
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </div>
      )}
    </Link>
  );
}
