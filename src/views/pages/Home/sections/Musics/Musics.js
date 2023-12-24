import Section from "../../../../components/Section/Section";
import "./Musics.styles.js";
import { useEffect } from "react";
import {
  deleteSong,
  getSongs,
  setMusic,
  setUpdate,
} from "../../../../../state/reducers";
import { useDispatch, useSelector } from "react-redux";
import {
  MusicContainer,
  MusicRow,
  MusicCell,
  MusicHeader,
  TimeIcon,
  MusicTableIconEdit,
  MusicTableIconDelete,
  LinkStyle,
} from "./Musics.styles";

function Musics() {
  const dispatch = useDispatch();
  const musics = useSelector((state) => state.song);
  const { loading, songs, error } = musics;

  function handleBlur(e) {
    let addmusic = document.querySelector(".blurred-overlay");
    if (addmusic.style.display === "none" || addmusic.style.display === "") {
      addmusic.style.display = "block";
    } else {
      addmusic.style.display = "none";
    }
  }

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <Section handleBlur={handleBlur}>
      <MusicContainer>
        <MusicHeader>
          <MusicRow className='musics__div-container musics__row musics__header'>
            <MusicCell>#</MusicCell>
            <MusicCell>Title</MusicCell>
            <MusicCell>Artist</MusicCell>
            <MusicCell>
              <TimeIcon className='fa-solid fa-clock'></TimeIcon>
            </MusicCell>
            <MusicCell>Actions</MusicCell>
          </MusicRow>
        </MusicHeader>
        {loading && <p>Loading... </p>}
        {!loading && error && <p>{error}</p>}
        {!loading &&
          songs?.map((music) => (
            <MusicRow key={music.id}>
              <MusicCell>{music.id}</MusicCell>
              <MusicCell>
                <LinkStyle to={`/songs/${music.id}`}>{music.name}</LinkStyle>
              </MusicCell>
              <MusicCell>{music.artist}</MusicCell>
              <MusicCell>{music.lengthtime}</MusicCell>
              <MusicCell>
                <MusicTableIconEdit
                  onClick={() => {
                    dispatch(setUpdate(true));
                    dispatch(setMusic(music));
                    handleBlur();
                  }}
                >
                  <i className='fas fa-edit'></i>
                </MusicTableIconEdit>
                <MusicTableIconDelete
                  onClick={() => {
                    dispatch(deleteSong(music.id));
                  }}
                >
                  <i className='far fa-trash-alt'></i>
                </MusicTableIconDelete>
              </MusicCell>
            </MusicRow>
          ))}
      </MusicContainer>
    </Section>
  );
}

export default Musics;
