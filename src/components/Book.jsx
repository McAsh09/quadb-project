import React from "react";
import { useParams, Link } from "react-router-dom";

function Book({ data }) {
  const { id } = useParams();
  const filteredData = data.find((obj) => obj.show.id === Number(id));

  console.log("booking", filteredData);

  const handleSubmit = () =>{
      alert('Ticket Booked!');
  }

  return (
    <div className='bg-light-green dib br3 pa5 ma3 vh-80 w-50 bw1 shadow-5' style={{position:'relative', left:'23em'}}>
        <h1 className='underline tc light-red'>BOOK TICKET</h1>
        <img className='br3 tc' src={filteredData?.show?.image?.medium} style={{position:'relative', left:'13em'}} alt='poster' />
        <h2 className='f2 tc' style={{color:'#5b50f5'}}>Title: {filteredData?.show?.name}</h2>  
        <h2 className='f3 tc green' style={{color:'#eb749e'}}>Language: {filteredData?.show?.language}</h2>   

      <form className='tc' onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="name"  />
        </label>       

        <br />
        <br />

        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <br />
        <input style={{marginTop:'10px',marginLeft:'4rem'}} type="submit" value="Submit" />

      </form>
        <p className='b f3 tc' style={{marginLeft:'3rem'}}>
              <Link to='/'>Go Back</Link>          
        </p> 
    </div>
  );
}

export default Book;
