import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MusicContainer = styled.div`
  border: 2px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  margin: 1rem auto;
  background-color: rgba(255, 246, 246, 0.9);
  width: 60%;
`;

export const MusicRow = styled.div`
  display: flex;
  margin-bottom: 5px;
  box-shadow: 0 -4px 8px #eee;
  padding: 10px;
`;

export const MusicCell = styled.div`
  flex: 1;
  text-align: center;
`;

export const MusicHeader = styled.div`
  background-color: rgba(255, 188, 188, 0.6);
  font-weight: bold;
  color: #666;
`;

export const TimeIcon = styled.i`
  height: 16px;
`;

export const MusicTableIconEdit = styled.span`
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const MusicTableIconDelete = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #666;
`;
