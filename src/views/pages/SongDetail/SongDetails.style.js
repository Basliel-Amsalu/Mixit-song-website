import styled from "@emotion/styled";

export const SongContainer = styled.div`
  background-color: rgba(9, 9, 9, 0.6);
  text-align: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SongBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SongDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const SongDetail = styled.div`
  margin-bottom: 10px;
  background-color: rgb(255, 213, 213, 0.8);
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 20px;
  max-width: 700px;
`;

export const SongDetailTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #212020;
`;

export const SongDetailText = styled.p`
  font-size: 18px;
  color: #020202;
`;

export const SongDetailLastText = styled.p`
  margin-top: 10px;
`;

export const Pre = styled.pre`
  white-space: pre-wrap;
  font-family: "Courier New", monospace;
`;

export const BackToListButton = styled.button`
  padding: 10px 20px;
  background-color: #e46700;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff8c42;
  }
`;
