
import React from 'react'

function Bookform() {
  return (
    <div className="row">
      <span className="col s2" />
      <form className="card col s8">
        <div className="row">
          <div className="input-filed col s6">
            <input id="book_title" type="text" className="valiate" />
            <label htmlFor="book_title">Book Title</label>
          </div>

          <div className="input-filed col s6">
            <input id="book_author" type="text" className="valiate" />
            <label htmlFor="book_author">Book Author</label>
          </div>
        </div>

        <div className="row">
          <div className="input-filed col s6">
            <input id="book_category" type="text" className="valiate" />
            <label htmlFor="book_title">Book Title</label>
          </div>

          <div className="input-filed col s6">
            <input id="book_author" type="text" className="valiate" />
            <label htmlFor="book_author">Book Author</label>
          </div>
        </div>

        <div className='row'>
        <div className='input-field col s12'>
        <textarea id='book_summary' className='materialise-taxarea'></textarea>
        <label htmlFor='book-summary'>Book summary</label>
        </div>
        </div>

        <div className='row'>
        <span className='col s1'/>
        <button className='btn waves-effect col s10'>Submit</button>
        <span className='col s1'/>
        </div>






      </form>
      <span className='col s2'/>
    </div>
  );
}

export default Bookform