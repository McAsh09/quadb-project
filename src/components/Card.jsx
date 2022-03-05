import React from 'react';
import { Link } from 'react-router-dom';

function Card({showId, showName, runningStatus, showImage, showLang, showGenres}) {

  return (
    <div className='bg-light-green dib br3 pa4 ma3 bw1 shadow-5'>            
            <div>
                <img className='br3' src={showImage} alt='poster' />
                <h2 className='f3 tc' style={{color:'#5b50f5'}}>{showName}</h2>
                <p className='b f5 tc green'>Language: <span className='i purple'>{showLang}</span></p>
                <p className='b f5 tc green'>Genres:  
                <span className='i purple'>
                    {
                        showGenres.map((genre) =>{
                            return(
                                <span> |{genre}|  </span>
                            )
                        })
                    }
                </span></p>                
                <p className='b f5 tc green'>Running Status: <span className='i purple'>{runningStatus}</span></p>
                <p className='tr b underline'><Link to={`/summary/${showId}`}>Read Summary</Link></p>               
                
                
            </div>
        </div>
  );
}

export default Card;