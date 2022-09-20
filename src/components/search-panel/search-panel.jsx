import React from 'react';
import style from './search-panel.module.css';
import { useState, useEffect} from 'react';
import {ReactComponent as LogoBlack} from './icons/sortOne.svg';
import {ReactComponent as LogoRed} from './icons/sortTwo.svg';
import {ReactComponent as Like} from './icons/iconLike.svg';
import  Cards from '../cards-list/cards';
import FormEdit from '../form/form';
import { sort, sortReverse,fetchCards} from '../../store/cardsSlice'
import { useDispatch, useSelector } from 'react-redux';
import {Routes, Link, Route} from 'react-router-dom';



const SearchPanel = () => {
    console.log(sort)
    const [ term, setTerm]= useState('');
    // const [name1, setName1] = useState([])
    const dispatch = useDispatch();

    const contact = useSelector(state=> state.cards.cards);
  
    console.log(contact);

        
      //   useEffect(() => {
      //   if(contact.length > 0){
      //       localStorage.setItem('items', JSON.stringify(contact));
      //     }
   
      // }, [contact]);
    



    
     useEffect(()=>{   
      if(contact===null ){
       dispatch(fetchCards())
      }
    }, []);  
   





    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("item");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    
     



    return ( 
      
     <div >
       
        <div className={style.searchWrapper}> 
        
            <input placeholder="type to search..." 
                   className={style.searchInput}
                   onChange={(e)=>  {  setTerm(e.target.value)}}
                   value={ term}
             />
        <div>
              <Link to='/liked'>  <Like   className={style.logo}  onClick={ ()=>{} }  /> </Link>
               <Link to='/'><LogoRed className={style.logo} style={{margin: '0px 15px 0 15px'}} onClick={ ()=>(dispatch(sort() )  ) }    /> </Link> 
                <LogoBlack className={style.logo}   onClick={ ()=>(dispatch(sortReverse() )  ) }      />
              </div>

     </div>



            <div className={style.cardWrapper}>
         

            <Routes>
            <Route path='/' element={
                <Cards
                term={term}
                contact={contact}
               />
            }>
            
            </Route>
      
          <Route path='/liked'  element={
             <Cards
             term={term}
             contact={name}/>
          }

            />


          <Route path='/:idParam'  element={
              <FormEdit contact={contact}/>
          }/>

          
            </Routes>
            </div>
        </div>
     );
}
 
export default SearchPanel;