import styled from 'styled-components';
import Button from '../Button';

export const NavBar = styled.header`
  * {
    margin: 0;
  }

  width: 100%;
  display: flex;
  position: fixed;
  padding: 1.1rem 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  z-index: 999;

  @media (max-width: 720px) {
    padding: 1.1rem;
    gap: 1rem;
  }

  .site-a-warp {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;

  p {
    color: #2375ef;
    font-size: 1.125rem;

    @media (min-width: 550px) {
      font-size: 1rem;
    }
  }

  .toggle {
    width: 60px;
    height: 35px;
    border-radius: 2rem;
    background: #2375ef;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    div {
      height: 33px;
      width: 33px;
      margin-right: 1px;
      border-radius: 50%;
      background: #fff;
    }

    @media (min-width: 550px) {
      width: 57px;
      height: 32px;

      div {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  ${Button} {
    padding: 8px 14px;

    @media screen and (max-width: 720px) {
      padding: 6px 14px;
    }
  }

  a {
    transition: all .23s ease-in-out;

    &:hover {
      opacity: .8;
    }
  }
`;
