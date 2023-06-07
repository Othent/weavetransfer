import styled from 'styled-components';
import Button from '../Button'
import { FeatureHeaderText, FeaturesContainer } from '../common';

interface Props {
  clicked: boolean;
}

interface MenuProps {
  active: string;
}

interface ButtonProps {
  bkg?: boolean;
}

export const MainWrapper = styled(FeaturesContainer)`
  height: 105vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 40% 85%, 110% 80%;
  background-repeat: no-repeat, no-repeat;
  background-position: -15% 160%, -380% 80%;
  background-image: url('/bkg-squares.svg'), url('bkg-circles.svg');
  margin-top: 0;
`;

export const HeaderText = styled(FeatureHeaderText)`
  margin-bottom: 2rem;
  padding: 0.5rem 2.5rem;
`;

export const Container = styled.div`
@media (min-width: 1024px) {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1100px) {
    width: 70%;
    margin: auto;
  }
`;

export const WTContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #d3e3fc;
  background: #f2f2f2;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 550px) {
    width: 65%;
    margin-top: 5rem;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 5rem;
  }

  .weave-transfer {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.875rem;
    line-height: 48px;

    p {
      color: #2375ef;
    }
  }

  .wt-text {
    margin: 1rem 0;
    text-align: center;
    color: #4a505a;
    font-size: 1rem;
    line-height: 24px;

    @media (min-width: 550px) {
      width: 80%;
    }
  }

  input {
    width: calc(100% - 1.5px * 2);
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background: #ffffff;
    border: 1.5px solid #d3e3fc;

    &::placeholder {
      font-size: 1rem;
      color: #7bacf5;
    }

    @media (min-width: 1100px) {
      padding: 10px 1rem;
    }
  }

  .txn-id {
    align-self: flex-start;
    width: 100%;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

    font-size: 1rem;
    color: #7d8795;
    line-height: 24px;
  }

  .txn-input {
    padding: 1rem;
    font-size: 0.9375rem;
    color: #2375ef;
    line-height: 24px;

    @media (min-width: 1100px) {
      padding: 10px 1rem;
    }
  }

  .upload-text {
    font-size: 1rem;
    line-height: 24px;
  }



  .file-upload {
    color: grey;
    cursor: pointer;
    background: rgb(242, 242, 242);
    gap: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: left;
    width: calc(100% - 2px);
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 1px dashed rgb(203, 207, 213);
    width: 100%;
  }

  .file-input-text {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
  }
  .top-text {
    color: rgb(125, 135, 149);
  }
  .bottom-text {
    color: rgb(35, 117, 239);
  }

  #file-input {
    display: none;
  }

  .upload-icon {
    margin-right: 10px
  }

  .user-icon {
    border-radius: 50%;
  }



  .transaction-info {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    background-color: red;
  }

  .txn-id-a {
    color: #2375ef;
    text-decoration: underline;
  }

  .sent-with-email {
    color: #7d8795;
  }

  .upload-profile {
    width: 97%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #2375ef;
    line-height: 24px;
  }
  .id-wallet-upload {
    width: 97%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #7d8795;
    line-height: 24px;
    overflow: auto;
  }







`;

export const StepsContainer = styled.div`
  @media (min-width: 550px) {
    width: 70%;
    margin: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }

  @media screen and (max-width: 720px) {
    ${Button} {
      margin: 0 1.25rem;
    }
  }
`;

export const UploadDemo = styled.div<Props>`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 1px * 2);
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: ${(props) =>
    props.clicked ? '1px solid #D3E3FC;' : '1px dashed #cbcfd5'};

  @media (min-width: 1024px) {
    height: 170px;
    border-radius: 8px;
    border: 1.5px dashed #a7c8f9;

    justify-content: center;
  }

  div {
    p {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const UploadMenu = styled.div<MenuProps>`
  width: 97%;

  gap: 1rem;
  display: flex;
  flex-direction: column;

  input {
    display: none
  }

  .menu-items {
    * {
      margin: 0;
    }

    width: 100%;
    display: flex;
    justify-content: space-around;

    p {
      cursor: pointer;
      font-size: 1rem;
      line-height: 24px;

      &.upload-text {
        font-weight: ${(props) =>
          props.active === 'upload' ? '700' : '500'} !important;

        color: ${(props) =>
          props.active === 'upload' ? '#2375ef' : '#7D8795;'};
      }

      &.download-text {
        font-weight: ${(props) =>
          props.active === 'download' ? '700' : '500'} !important;

        color: ${(props) =>
          props.active === 'download' ? '#2375ef' : '#7D8795;'};
      }
    }
  }

  .progress {
    position: relative;
    width: 100%;
    height: 2px;
    border: none;
    background: #80808030;

    .indicator {
      position: absolute;
      background-color: #2375ef;
      width: 50%;
      height: 100%;
      top: 0;
      left: ${props => props.active === "upload" ? "0" : "50%"};
      transition: all .23s ease-in-out;
    }
  }
`;



export const UploadModalContainer = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    gap: 0.1rem;
    flex-direction: column;

    * {
      margin: 0;
      padding: 0;
    }

    img {
      width: 25%;
    }
  }

  .upload-mobile-svg {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .upload-desktop-svg {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .upload-text-mobile {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .browse-files-mobile {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .upload-text-desktop {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .browse-files-desktop {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .file-selected {
    color: #4a505a;
  }

  .file-size {
    color: #7d8795;
  }

  .upload-text-mobile,
  .browse-files-desktop {
    color: #7d8795;
  }

  .browse-files-mobile,
  .upload-text-desktop {
    color: #2375ef;
  }

  .select-upload-container {
    @media (min-width: 1100px) {
      p {
        font-size: 0.875rem;
        text-align: center;
      }
    }
  }
`;


