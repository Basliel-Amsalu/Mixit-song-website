import { useDispatch, useSelector } from "react-redux";
import "./AddMusic.styles.js";
import { useState, useRef, useEffect } from "react";
import { songsRequest, updateSong } from "../../../state/reducers";
import {
  BlurredOverlay,
  AddMusicContainer,
  AddMusicForm,
  AddMusicFormContainer,
  AddMusicCover,
  AddMusicTitle,
  AddMusicFormLabel,
  AddMusicFormInput,
  AddMusicBtns,
  AddMusicAddButton,
  AddMusicClearButton,
  AddMusicButtonHover,
  AddMusicButtonActive,
  AddMusicFormTextArea,
} from "./AddMusic.styles";

function AddMusic() {
  const update = useSelector((state) => state.sideEffect.update);
  const music = useSelector((state) => state.sideEffect.music);
  console.log(update);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    artist: "",
    lyrics: "",
  });

  const blur = useRef(null);

  useEffect(() => {
    if (update) {
      setFormData({
        title: music.name,
        duration: music.lengthtime,
        artist: music.artist,
        lyrics: music.lyrics,
      });
    } else {
      setFormData({
        title: "",
        duration: "",
        artist: "",
        lyrics: "",
      });
    }
  }, [music, update]);

  function handleSubmit() {
    if (update) {
      console.log("Update");
      dispatch(
        updateSong({
          ...formData,
          id: music.id,
        })
      );
    } else {
      dispatch(songsRequest(formData));
    }

    toggle();
  }
  function toggle() {
    if (blur.current !== null && blur.current !== undefined) {
      blur.current.style.display = "none";
    }
  }
  return (
    <>
      <BlurredOverlay
        className="blurred-overlay"
        style={{ display: "none" }}
        ref={blur}
      >
        <AddMusicContainer>
          <AddMusicForm>
            <AddMusicFormContainer>
              <AddMusicCover
                src={require("../../images/music_image_cover.png")}
                alt="music cover"
                width={200}
                height={100}
              />
              <AddMusicTitle>
                {update ? `Update Music` : "Add Music"}
              </AddMusicTitle>

              <AddMusicFormLabel>Title:</AddMusicFormLabel>

              <AddMusicFormInput
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

              <AddMusicFormLabel>Duration:</AddMusicFormLabel>

              <AddMusicFormInput
                type="text"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
              />

              <AddMusicFormLabel>Artist:</AddMusicFormLabel>

              <AddMusicFormInput
                type="text"
                value={formData.artist}
                onChange={(e) =>
                  setFormData({ ...formData, artist: e.target.value })
                }
              />

              <AddMusicFormLabel>Lyrics:</AddMusicFormLabel>

              <AddMusicFormTextArea
                type="text"
                value={formData.lyrics}
                onChange={(e) =>
                  setFormData({ ...formData, lyrics: e.target.value })
                }
              />

              <AddMusicBtns>
                <AddMusicAddButton onClick={handleSubmit}>
                  {update ? "Update" : "Add"}
                </AddMusicAddButton>
                <AddMusicClearButton onClick={toggle}>
                  Clear
                </AddMusicClearButton>
              </AddMusicBtns>
            </AddMusicFormContainer>
          </AddMusicForm>
        </AddMusicContainer>
      </BlurredOverlay>
    </>
  );
}

export default AddMusic;
