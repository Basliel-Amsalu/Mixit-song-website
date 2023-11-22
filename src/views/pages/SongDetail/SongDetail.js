import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../../state/reducers";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  SongContainer,
  SongBox,
  SongDetailsWrapper,
  SongDetail,
  SongDetailTitle,
  SongDetailText,
  SongDetailLastText,
  BackToListButton,
  Pre,
} from "./SongDetails.style";

function SongDetails() {
  const dispatch = useDispatch();
  const songState = useSelector((state) => state.song.songs);
  const params = useParams();
  const navigate = useNavigate();

  let isMounted = true;

  const fetchSongData = () => {
    if (isMounted) {
      dispatch(getSongs());
    }
  };

  useEffect(() => {
    fetchSongData();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  useEffect(() => {
    fetchSongData();
  }, [params.id, dispatch]);

  const song = songState[params.id - 1];

  const handleBackToList = () => {
    navigate("/");
  };

  return (
    <SongContainer>
      <Header />
      <SongBox>
        <SongDetailsWrapper>
          {song ? (
            <>
              <SongDetail>
                <SongDetailTitle>Song Title: {song.name}</SongDetailTitle>
              </SongDetail>
              <SongDetail>
                <SongDetailText>Artist: {song.artist}</SongDetailText>
              </SongDetail>
              <SongDetail>
                <SongDetailText>Length: {song.lengthtime}</SongDetailText>
              </SongDetail>
              <SongDetail>
                <SongDetailText>Lyrics:</SongDetailText>
                <Pre>{song.lyrics}</Pre>
              </SongDetail>
              <BackToListButton onClick={handleBackToList}>
                Back to List
              </BackToListButton>
            </>
          ) : (
            <SongDetail>
              <SongDetailText>Song not found</SongDetailText>
            </SongDetail>
          )}
        </SongDetailsWrapper>
      </SongBox>
      <Footer />
    </SongContainer>
  );
}

export default SongDetails;
