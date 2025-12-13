import styled from 'styled-components';

import blackSunPng from '../../assets/img/icons/BlackSun.png';
import concretePng from '../../assets/img/textures/concrete.png';
import whiteCracks from '../../assets/img/textures/whiteCracks.png';

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
`;

const BlackSunImg = styled.img``;

const Eye = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.6rem;
    height: 2.6rem;
    background-image: url(${concretePng});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    background-image: url(${whiteCracks});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
`;

const BlackSun = () => (
  <Wrapper>
    <BlackSunImg
      src={blackSunPng}
      alt='Black Sun'
    />
    <Eye />
  </Wrapper>
);

export default BlackSun;
