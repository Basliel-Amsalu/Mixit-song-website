import styled from '@emotion/styled';

export const AddButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 180px;
  background-color: #112539;
  box-sizing: border-box;
  margin: 0;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
    transform: scale(0.95);
    transition: all 0.3s;
  }
`;

export const AddButtonIcon = styled.span`
  height: 24px;
  margin: 0 0.5rem;
`;

export const AddButtonText = styled.span`
  font-size: 1rem;
`;
