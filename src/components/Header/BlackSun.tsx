import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import blackSunPng from '../../assets/img/icons/BlackSun.png';
import concretePng from '../../assets/img/textures/concrete.png';
import whiteCracks from '../../assets/img/textures/whiteCracks.png';

const Wrapper = styled(NavLink)<{ $isOpen?: boolean }>`
  width: 4rem;
  height: 4rem;
  position: relative;
  text-decoration: none;

  filter: ${(props) => (props.$isOpen ? 'drop-shadow(0 0 0.6rem var(--tertiary-color))' : '')};
  transition: filter 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    filter: drop-shadow(0 0 0.6rem var(--tertiary-color));
  }
`;

const BlackSunImg = styled.img``;

const Mask = styled.div<{ $isOpen?: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 50%;

  background: var(--eye-color);

  -webkit-clip-path: path(
    'M20.0479 0C28.3223 0.000113657 35.6268 3.95108 40 9.97949C35.638 16.0816 28.2873 20.0897 19.9531 20.0898C11.6783 20.0898 4.37326 16.1382 0 10.1094C4.36215 4.0074 11.7137 0 20.0479 0Z'
  );
  clip-path: path(
    'M20.0479 0C28.3223 0.000113657 35.6268 3.95108 40 9.97949C35.638 16.0816 28.2873 20.0897 19.9531 20.0898C11.6783 20.0898 4.37326 16.1382 0 10.1094C4.36215 4.0074 11.7137 0 20.0479 0Z'
  );

  transform: ${(props) =>
    props.$isOpen ? 'translateY(-50%) scaleY(1)' : 'translateY(-50%) scaleY(0)'};
  transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Eye = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:hover ${Mask} {
    transform: translateY(-50%) scaleY(1);
  }
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

type BlackSunProps = {
  className?: string;
  isOpen?: boolean;
};

const BlackSun = ({ className, isOpen }: BlackSunProps) => (
  <Wrapper
    className={className}
    to='/login'
    $isOpen={isOpen}
  >
    <BlackSunImg
      src={blackSunPng}
      alt='Black Sun'
    />
    <Eye>
      <Mask $isOpen={isOpen}>
        <Iris />
        <Pupil />
      </Mask>
    </Eye>
  </Wrapper>
);

export default BlackSun;
