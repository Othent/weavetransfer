import * as Styled from './styles';
import { DMSans700 } from '../../utils/fonts';
import Button from '../Button'

const Nav = () => {
  return (
    <Styled.NavBar>
      <Styled.NavLogo>
        <a href='/' className='site-a-warp'>
          <img src="/wt-logo.svg" alt="Weave Transfer logo" />
          <p className={DMSans700.className}>Weave Transfer</p>
        </a>
      </Styled.NavLogo>

      <Styled.Menu>
        {/* <a href='https://mobile.othent.io' target='_blank' className={`${DMSans700.className} devs`}>
          Mobile
        </a> */}
        <a href='https://docs.othent.io/developers/sdk' target='_blank' className={`${DMSans700.className} devs`}>
          Developers
        </a>
        {/* <a href='https://blog.othent.io' target='_blank' className={DMSans700.className}>
          Blog
        </a> */}
        <Button href='mailto:hello@othent.io'>Contact Us</Button>
      </Styled.Menu>
    </Styled.NavBar>
  );
};

export default Nav;
