import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { isValidUrl } from '../utils';
import { urlShorteningService } from '../services/urlShorteningService';

const URL_SHORTENER_DESC =  "Enter your URL here!";
const INVALID_URL_DESC = "This is not a valid Url!";

const AppBody = () => {
  const [ originalUrl, setOriginalUrl ] = useState("");
  const [ shortenedUrl, setShortenedUrl ] = useState("");
  const [ isSnackBarOpen, setIsSnackBarOpen ] = useState(false)

  const convertUrl = async (originalUrl) =>  {
    if (!isValidUrl(originalUrl)) {
      setIsSnackBarOpen(true);
      return;
    }

    const payload = {
      originalUrl: originalUrl,
    }

    const data = await urlShorteningService(payload);
    setShortenedUrl(data.shortenedUrl);
  }
  
  return (
    <div className="App-body">
        <div className="url-input-container">
          <TextField 
            id="outlined-basic" 
            label={URL_SHORTENER_DESC} 
            size="small" 
            variant="outlined" 
            value={originalUrl}
            onChange={e => {setOriginalUrl(e.target.value)}}
          />
          <Button 
            variant="contained" 
            size="small" 
            onClick={() => convertUrl(originalUrl)}
          >
            Shorten!
          </Button>
          <Snackbar open={isSnackBarOpen} autoHideDuration={6000} onClose={()=>setIsSnackBarOpen(false)}>
            <Alert onClose={()=>setIsSnackBarOpen(false)} severity="warning" sx={{ width: '100%' }}>
              {INVALID_URL_DESC}
            </Alert>
          </Snackbar>
        </div>
        <div className="response-container">
          {
            shortenedUrl ? 
              <span>The shortened URL is: <span className='response-url'>{shortenedUrl}</span> </span>
              : null
          }
        </div>
      </div>
  );
}

export default AppBody;
