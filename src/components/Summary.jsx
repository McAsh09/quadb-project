import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Summary({data}) {

const {id} = useParams();    

console.log('id',id);

const filteredData = data.find((obj)=>obj.show.id===Number(id))
  return (      
    <div>   
      <div className='bg-light-green dib br3 pa4 ma3 bw1 shadow-5'>
          <img className='br3 tc' src={filteredData?.show?.image?.medium} alt='poster' />
            <h1 className='underline green'>Summary</h1>        
            <p className='i f3 blue'>{filteredData?.show?.summary}</p>  
            {/* <br />     */}
            <p className='b f3'>
              <Link to='/'>Go Back</Link>          
            </p>    
            <span className='b f3'><Link to={`/book/${id}`}> Book Ticket</Link></span> 
      </div>
      
    </div>
  );
}   

export default Summary;