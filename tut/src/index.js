import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { books } from './books';
import Book from './Book';
import { greeting } from './testt/testing'
//Css
//setup vars


// const Greeting = () => {
//    return React.createElement('div', {},
// React.createElement('h1',{}, 'hello world');
// )
// }



function BookList() {
   console.log(greeting)
   return (
      <section className='booklist'>
         {books.map((book) => {
            return (<Book key={book.id} {...book}></Book>)
         })}
      </section>
   );
}





ReactDOM.render(<BookList />, document.getElementById('root'))