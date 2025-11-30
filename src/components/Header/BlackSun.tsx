import styled from 'styled-components';

import blackSunPng from '../../assets/img/icons/BlackSun.png';

const BlackSunImg = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

const BlackSun = () => (
  <BlackSunImg
    src={blackSunPng}
    alt='Black Sun'
  />
);

export default BlackSun;
