import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSong, getSongs } from "../../../state/reducers";
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
  const songState = useSelector((state) => state.song);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSong(params.id));
  }, [dispatch, params.id]);

  const { loading, song, error } = songState;

  const handleBackToList = () => {
    navigate("/");
  };

  return (
    <SongContainer>
      <Header />
      <SongBox>
        <SongDetailsWrapper>
          {loading && <p>Loading...</p>}
          {!loading && error && <p>{error} </p>}
          {!loading && song ? (
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
