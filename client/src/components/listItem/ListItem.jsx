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
import { Link, useHistory } from "react-router-dom";
import { ModalContext } from "../../context/modalContext/ModalContext";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [videoState, setVideoState] = useState(0);

  const history = useHistory();

  const openModalHandler = () => {
    history.push("/?jbv=" + movie._id);
    setIsHovered(false);
  };

  const openMovieHandler = () => {
    history.push({
      pathname: "/watch/" + movie._id,
      movie,
    });
  };

  let movieShowTimeout;

  useEffect(() => {
    console.log(isHovered);
    if (isHovered) {
      movieShowTimeout = setTimeout(() => {
        setShowMovieInfo(true);
      }, 600);
    } else {
      clearTimeout(movieShowTimeout);
      setShowMovieInfo(false);
    }
    return () => clearTimeout(movieShowTimeout);
  }, [isHovered]);

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
    return () => setMovie({});
  }, [item]);

  return (
    <div
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      className="listItemWrapper"
    >
      <div className="listItem" onClick={openModalHandler}>
        <img src={movie.img} alt="" />
      </div>
   
        {showMovieInfo && (
          <div className="itemHover">
            {videoState === 0 && <img src={movie.img} alt="" />}
            <video
              src={movie.trailer}
              autoPlay={true}
              loop
              muted
              onLoadedData={(e) => setVideoState(4)}
              onClick={openMovieHandler}
            />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined
                  className="icon"
                  onClick={() => console.log("Liked")}
                />
                <ThumbDownOutlined className="icon" />
                <KeyboardArrowDown
                  className="icon"
                  onClick={openModalHandler}
                />
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
      </div>

  );
}
