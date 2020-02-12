import styled from 'styled-components';

const Card = styled.div`
  background: #347ea6;
  border-radius: 10px;
  box-shadow: -11px 11px 46px #2235671,
11px -11px 46px #45a6db;
  margin-bottom: 30px;
  padding: 75px 100px;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
  }
`;

export default Card;
