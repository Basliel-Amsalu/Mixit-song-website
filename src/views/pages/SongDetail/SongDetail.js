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
  BackToListButton,
  Pre,
} from "./SongDetails.style";

function SongDetails() {
  const dispatch = useDispatch();
  const songState = useSelector((state) => state.song.songs);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  const song = songState.find((song) => song.id.toString() === params.id);

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
            <>
              <SongDetail>
                <SongDetailText>Song not found</SongDetailText>
              </SongDetail>
              <BackToListButton onClick={handleBackToList}>
                Back to List
              </BackToListButton>
            </>
          )}
        </SongDetailsWrapper>
      </SongBox>
      <Footer />
    </SongContainer>
  );
}

export default SongDetails;
