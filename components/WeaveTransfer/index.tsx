import { useState, useEffect } from 'react';
import { FeatureTextSmall } from '../common';

import { DMSans700, SpaceGrotesk700, DMSans500 } from '../../utils/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import * as Styled from './styles';
import Button from '../Button'
import styled from 'styled-components';
import { Othent } from 'othent';



const WeaveTransfer = () => {


  
  const [menuActive, setMenuActive] = useState('upload');
  const [downloadDemo, setDownloadDemo] = useState(false);




  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState("");



  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  function handleFileUpload(event) {
    const file = event.target.files[0];
    setFile(file);
    setFileName(file.name);
  }


  

  const [txnInputValue, setTxnInputValue] = useState("");

  const [downloadTransactionId, setDownloadTransactionId] = useState('');
  function downloadWTLink() {
    if (!downloadTransactionId) {
      alert("Please enter a transaction id");
    }
    window.open('https://arweave.net/' + downloadTransactionId)
  }



  const [sendToEmail, setSendToEmail] = useState("")
  const [userEmail, setUserEmail] = useState(null);
  function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    async function createOthentInstance() {
      const othent = await Othent({ API_ID: 'd7a29242f7fdede654171a0d3fd25163' });
      setOthentInstance(othent);
    }
    createOthentInstance();
  }, []);


  const [transaction_id, setTransactionId] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [othentInstance, setOthentInstance] = useState(null);
  async function uploadFileButton() {

    if (!file) {
      alert("No file selected to upload");
      return;
    }

    if (!sendToEmail) {
      alert("Please enter the recipient email");
      return;
    }

    if (!isValidEmail(sendToEmail)) {
      alert('Please enter a valid recipient email address');
      return;
    }

    setLoading(true)


    let user_details 
    if (JSON.parse(localStorage.getItem('othentUserDetails'))) {
      user_details = await othentInstance.userDetails()
    } else {
      user_details = await othentInstance.logIn()
      localStorage.setItem('othentUserDetails', JSON.stringify(user_details));
    }

    if (user_details.message === 'new user created') {
      alert('New Othent account created! Please re send the file')
      setLoading(false)
    } else {

      const signedArweaveTransaction = await othentInstance.signTransactionArweave({
        othentFunction: 'uploadData', 
        data: file,
        tags: [ {name: 'Content-Type', value: file.type} ]
      });
  
      const transaction = await othentInstance.sendTransactionArweave(signedArweaveTransaction);
    
      const formData = new FormData();
      formData.append("transaction_id", transaction.transactionId);
      formData.append("sendToEmail", sendToEmail);
      formData.append("sendFromEmail", user_details.email);
    
      fetch('https://server.othent.io/weavetransfer', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setFileName("");
          setSendToEmail("")
          setFile(null);
          if (data.success === true) {
            setRequestStatus('success');
            setTransactionId(transaction.transactionId);
            setUserEmail(user_details.email)
            setWalletAddress(user_details.contract_id)
          } else {
            setRequestStatus('failed');
          }
        })
        .catch((error) => {
          console.error(error);
          setRequestStatus('failed');
          setLoading(false);
        });

    }

  

  }



  return (
    <Styled.MainWrapper>

      <Styled.Container >
        <Styled.WTContainer>
          <div className='weave-transfer'>
            <img src='/wt-logo.svg' alt='weave transfer logo' draggable={false} />
            <p className={SpaceGrotesk700.className}>Weave Transfer</p>
          </div>

          <p className={`${DMSans500.className} wt-text`}>
            On chain file transfer on the Arweave blockchain without a cryptocurrency wallet
          </p>

          <Styled.UploadMenu active={menuActive}>
            <div className='menu-items'>
              <p
                className={`${DMSans700.className} upload-text`}
                onClick={() => {
                  setTxnInputValue('');
                  setMenuActive('upload');
                }}
              >
                Upload
              </p>
              <p
                className={`${DMSans700.className} download-text`}
                onClick={() => setMenuActive('download')}
              >
                Download
              </p>
            </div>
            <div className='progress'>
              <div className='indicator' />
            </div>
          </Styled.UploadMenu>

          {menuActive === 'upload' ? (
            <>
            {!(transaction_id && walletAddress) && (
              <>
                <label 
                  onDragOver={handleFileUpload}
                  onDrop={handleFileUpload} 
                  className={`${DMSans700.className} file-upload`} 
                  htmlFor="file-input">
          
                  <span className="upload-icon" role="img" aria-label="upload icon">
                    {fileName ? "✅" : "📁"}
                  </span>
                  <span className="upload-text">
                    {fileName ? fileName : "Choose a file or drag it here"}
                  </span>
          
                </label>
                <input id="file-input" type="file" onChange={handleFileUpload} />
          
                <input
                  type='text'
                  placeholder='Recipient email'
                  className={`${DMSans500.className} upload-text`}
                  value={sendToEmail} 
                  onChange={(event) => setSendToEmail(event.target.value)} 
                />
              </>
            )}
          
            {transaction_id && walletAddress && (
              <>
                <p className='upload-profile'>
                  <b>Successfully sent with, </b> 
                  <span className='sent-with-email'>{userEmail}</span>
                </p>
                <p className='id-wallet-upload'>
                  <b>Transaction ID: </b>
                  <span>
                    <a className='txn-id-a' href={'https://arweave.net/' + transaction_id} target="_blank">{transaction_id}</a>
                  </span>
                </p>

                <p className='id-wallet-upload'>
                  <b>Your Wallet Address: </b>
                  <a className='txn-id-a' href={'https://sonar.warp.cc/#/app/contract/' + walletAddress} target="_blank">{walletAddress}</a>
                </p>

                <Button fullWidth onClick={() => window.location.reload()}>
                  <img src="/refresh.svg" alt="Refresh icon" draggable={false} />
                  Send another file
                </Button>
              </>
              
            )}
          
            {!(transaction_id && walletAddress) && (
              <Button fullWidth onClick={uploadFileButton}>
                {loading ? (
                  <>
                    <img src="/spinner.gif" alt="Spinner icon" draggable={false} />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <img src="/wt-google.svg" alt="Google icon" draggable={false} />
                    Send on chain with Google
                  </>
                )}
              </Button>
            )}
          </>











          ) : (
            <>
              <p className='txn-id'>Transaction ID: </p>
              {downloadDemo ? (
                <img src='/downloading.svg' alt='' draggable={false} />
              ) : (
                <input
                  type='text'
                  className='txn-input'
                  placeholder='Enter your Transaction ID here...'
                  value={downloadTransactionId} 
                  onChange={(event) => setDownloadTransactionId(event.target.value)} 
                />
              )}

              <Button onClick={downloadWTLink} fullWidth>
                <img src='/download.svg' alt='upload icon' draggable={false} />
                Download
              </Button>
            </>
          )}
        </Styled.WTContainer>




      </Styled.Container>
    </Styled.MainWrapper>
  );
};

export default WeaveTransfer;
