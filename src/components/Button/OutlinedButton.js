import styled from 'styled-components';

const OutlinedButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #3182ce;
  color: #3182ce;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-width 0.3s;
  height: 3rem; /* Set a fixed height for the button */

  &:hover {
    background-color: #eef6ff;
    color: #3182ce;
    border-width: 1px;
  }
`;

export default OutlinedButton;