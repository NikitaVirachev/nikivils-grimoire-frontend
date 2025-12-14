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
`;

const Mask = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;

  background: var(--eye-color);

  -webkit-clip-path: path(
    'M20.0479 0C28.3223 0.000113657 35.6268 3.95108 40 9.97949C35.638 16.0816 28.2873 20.0897 19.9531 20.0898C11.6783 20.0898 4.37326 16.1382 0 10.1094C4.36215 4.0074 11.7137 0 20.0479 0Z'
  );
  clip-path: path(
    'M20.0479 0C28.3223 0.000113657 35.6268 3.95108 40 9.97949C35.638 16.0816 28.2873 20.0897 19.9531 20.0898C11.6783 20.0898 4.37326 16.1382 0 10.1094C4.36215 4.0074 11.7137 0 20.0479 0Z'
  );
`;

const Iris = styled.div`
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
`;

const Pupil = styled.div`
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
`;

const BlackSun = () => (
  <Wrapper>
    <BlackSunImg
      src={blackSunPng}
      alt='Black Sun'
    />
    <Eye>
      <Mask>
        <Iris />
        <Pupil />
      </Mask>
    </Eye>
  </Wrapper>
);

export default BlackSun;
