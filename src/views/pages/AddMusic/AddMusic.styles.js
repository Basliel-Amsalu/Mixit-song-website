import styled from "@emotion/styled";

export const BlurredOverlay = styled.div`
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  min-height: 120vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const AddMusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
`;

export const AddMusicForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 1rem;
`;

export const AddMusicFormContainer = styled.div`
  width: 80%;
  padding-bottom: 3rem;
  background-color: rgba(251, 221, 221, 0.7);
  padding: 20px;
`;

export const AddMusicCover = styled.img`
  border-radius: 10px;
`;

export const AddMusicTitle = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 2vh;
  margin-top: 2vh;
  text-align: center;
`;

export const AddMusicFormLabel = styled.span`
  font-size: 0.9rem;
  line-height: 2rem;
  font-weight: 500;
`;

export const AddMusicFormInput = styled.input`
  margin-bottom: 5px;
  width: 100%;
  border-radius: 2px;
  background: #f0f0f0;
  border: 1px solid #555;
  color: #131212;
  padding: 0.5rem 1rem;
`;

export const AddMusicFormTextArea = styled.textarea`
  margin-bottom: 5px;
  width: 100%;
  border-radius: 2px;
  background: #f0f0f0;
  border: 1px solid #555;
  color: #131212;
  padding: 0.5rem 1rem;
`;

export const AddMusicBtns = styled.div`
  margin-top: 10px;
  font-size: 20px;
  display: flex;
  justify-content: right;
`;

export const AddMusicAddButton = styled.div`
  background-color: #b72025;
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px #555;
  cursor: pointer;
`;

export const AddMusicClearButton = styled.div`
  color: #b72025;
  padding: 0.5rem 2rem;
  cursor: pointer;
`;

export const AddMusicButtonHover = styled.div`
  cursor: pointer;
`;

export const AddMusicButtonActive = styled.div`
  transform: scale(0.95);
  transition: all 0.3s;
  box-shadow: none;
`;
