import React from 'react';
import YoutubeAutocomplete from 'react-youtube-autocomplete';
import './speech.css'
const Dictaphone = () => {


  return (
    <div>
     
            <input
            YoutubeAutocomplete
            type="text"
            apiKey='AIzaSyCKc56IrjQ0QRlpGgkWLgmR1kRk9Q_2_Tw'
            maxResults='20'
            placeHolder='Search Youtube'
          
           />
    </div>
  )
}
export default Dictaphone;