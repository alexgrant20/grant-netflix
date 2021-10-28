import "./movieModal.scss";
import Modal from "../modal/Modal";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
  VolumeOffOutlined,
  VolumeUp,
} from "@material-ui/icons";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext/ModalContext";

const MovieModal = () => {
  const modalCtx = useContext(ModalContext)

  return (
    <Modal>
      <div className="movieModal">
        <div className="header">
          <img
            className="trailerImg"
            src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVCFrj9i1lHdbEYVDlAIFWn7OvXx61Z5RZpYfhwPDQKmkWNFLJFejazZe8pHwwTNxtjcKZPtTQlrOsOeFs9DOoUK39r_.webp?r=3e9"
            alt=""
          />
          <div className="close" onClick={modalCtx.closeModal}>
            <svg viewBox="0 0 24 24">
              <path
                d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="movieAction">
            <img
              src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVbL30b3gh_gKNHGqMGIKxKXmiorbzJpqJ7316AsSQTB4m7Q13egSJo2wyPhf8kOoO1YLcZgtEYVTd6x1nCbS-ROQbKSR2hr8J8817AdjlbcppE1DnJz5zul5FXE8F3l68-ppV3V31Wezoat1k1z3m7Nn78ZmVy6XcOgNxZaJgCQ.webp?r=a78"
              alt=""
            />
            <div className="action">
              <button>
                <PlayArrow className="b-icon" />
                Play
              </button>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
              <VolumeUp className="icon" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="movieInfo">
            <div className="left">
              <div className="info">
                <span className="rating">97% Cocok</span>
                <span className="year">2020</span>
                <span className="limit">13+</span>
                <span className="duration">1 Season</span>
                <span className="quality">HD</span>
              </div>
              <div className="desc">
                Di lingkungan Seoul yang penuh warna, mantan napi dan
                teman-temannya melawan musuh yang tangguh demi mewujudkan impian
                ambisius mereka merintis bar jalanan.
              </div>
            </div>
            <div className="right">
              <p>
                <span className="highlight">Pemeran: </span>Park Seo-jun, Kim
                Da-mi, Yoo Yoo
              </p>
              <p>
                <span className="highlight">Genre: </span>Korea, Drama Korea,
                Drama TV
              </p>
              <p>
                <span className="highlight">Acara ini: </span>Meluluhkan Hati,
                memberi Inspirasi
              </p>
            </div>
          </div>
          <div className="episodeContainer">
            <div className="header">
              <span className="left">Episode</span>
              <span className="right">Season 1</span>
            </div>
            <div className="session active">
              <span className="episodeNumber">
                <p>1</p>
              </span>
              <div className="titleCard">
                <img
                  src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfZdgWEAY0z9RY_RQb4YpeDIexxjn7MCanLSjjxRQ31GUaOCW5EzbnbjARA44Gy1Duq7ATwi6wXlIHLgjUYvwG03qw5ZYGAnOGqEkn0iHEG2A-Vv.webp?r=4da"
                  alt=""
                />
                <PlayArrow className="icon" />
              </div>
              <div className="desc">
                <div className="cardtitle">
                  <span className="title">Episode 1</span>
                  <span className="duration">74m</span>
                </div>
                <p>
                  Semua tampak suram bagi Yoon Hye-jin usai berhenti bekerja. Di
                  perjalanan ke Gongjin, dia mengalami serangkaian kejadian
                  malang, dan bertemu satu warga lokal yang aneh.
                </p>
              </div>
            </div>
            <div className="session">
              <span className="episodeNumber">
                <p>2</p>
              </span>
              <div className="titleCard">
                <img
                  src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRnk0z-Uf2wyJkIkdCoDhrcWvpIT0hm74UIv6oxbSCXZPavOLwhLvRmLPTSIPo6D-vpsd9sOx7nlTdW7_L4XCCx3eevpqmpYDBL4Ct4lqYpO4R_K.webp?r=d27"
                  alt=""
                />
                <PlayArrow className="icon" />
              </div>
              <div className="desc">
                <div className="cardtitle">
                  <span className="title">Episode 2</span>
                  <span className="duration">64m</span>
                </div>
                <p>
                  Hye-jin bersiap menyambut pasien. Namun, ketika sebuah
                  kejadian di suatu pesta membuatnya tidak disukai warga kota,
                  dia membutuhkan petunjuk dari Hong Du-sik.
                </p>
              </div>
            </div>
            <div className="session">
              <span className="episodeNumber">
                <p>3</p>
              </span>
              <div className="titleCard">
                <img
                  src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXE8qYdqT5PbUQm5AQD0hN-pCwppPF39OhDcADiNeCShbfGOLtww6MC5TR9j2pQYX38sxRL7xAPxuNbMqZvbBZ3CSR0tI-BEF8SV0eYCR_amABHh.webp?r=d37"
                  alt=""
                />
                <PlayArrow className="icon" />
              </div>
              <div className="desc">
                <div className="cardtitle">
                  <span className="title">Episode 3</span>
                  <span className="duration">64m</span>
                </div>
                <p>
                  Perjalanan panjang ke Seoul dengan Du-sik dan para penumpang
                  tak diundang menguji kesabaran Hye-jin di mobil. Meskipun
                  giginya sakit, Kim Gam-ri menolak untuk dirawat.
                </p>
              </div>
            </div>
            <div className="session">
              <span className="episodeNumber">
                <p>4</p>
              </span>
              <div className="titleCard">
                <img
                  src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbyVgNIrI7_4xoQHDT-bDjLdnZuS_gr6oHazW6iLKOh-bgg81VXm0VuFee7vZ4Rj8GTLk0xn37Eh-kpVbb8rI7brkGR-BHhoFppb6vDYuGtUDD2C.webp?r=701"
                  alt=""
                />
                <PlayArrow className="icon" />
              </div>
              <div className="desc">
                <div className="cardtitle">
                  <span className="title">Episode 4</span>
                  <span className="duration">64m</span>
                </div>
                <p>
                  Saat seorang pasien menyebabkan keributan di tempat kerja,
                  Du-sik datang menolong. Di tempat lain, Chang Yeong-guk kini
                  tahu bahwa cinta pertamanya kembali ada di kota.
                </p>
              </div>
            </div>
            <div className="session">
              <span className="episodeNumber">
                <p>5</p>
              </span>
              <div className="titleCard">
                <img
                  src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUU7hxCJg1Qhi4UASoXlO_hxzd1H-7-e04kbM8DR4lCUeQc1_068RV2ib15cTmX1_3P8k-j5SOYvO4wsdwb-KdSxnnudok0hkzVtV3ZJr872nLVh.webp?r=8a3"
                  alt=""
                />
                <PlayArrow className="icon" />
              </div>
              <div className="desc">
                <div className="cardtitle">
                  <span className="title">Episode 5</span>
                  <span className="duration">64m</span>
                </div>
                <p>
                  Pada suatu pagi, Hye-jin terlihat meninggalkan rumahnya
                  Du-sik. Sumber gosip kota itu menjadi-jadi sementara ia
                  mencoba mengingat-ingat kejadian malam sebelumnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
