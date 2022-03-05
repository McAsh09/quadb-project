import React from 'react'
import Card from './Card';

function CardList({data}) {

  return ( 
    <div>   
      <h1 className='f1 tc underline purple'>Movie Library</h1>

        {
            data.map((user, i) => {
                return(                    
                <Card 
                key={data[i].score}
                score={data[i].score} 
                showId={data[i].show.id}
                showName={data[i].show.name}
                runningStatus={data[i].show.status}
                showImage={data[i].show.image.medium}
                showLang={data[i].show.language}
                showGenres={data[i].show.genres}
                />
                );  
            })
        } 
    </div>
  );
}

export default CardList