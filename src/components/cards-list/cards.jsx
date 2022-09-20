
import { useEffect } from 'react'
import { useState } from 'react'
import style from './cards.module.css'
import {ReactComponent as BlackLike} from  '../../components/cards-list/icons/blackLike.svg'
import {ReactComponent as EmailIcon} from './icons/email.svg'
import {ReactComponent as InternetIcon} from './icons/internet.svg'
import {ReactComponent as LocationIcon} from './icons/Location.svg'
import {ReactComponent as PhoneIcon} from './icons/SmartPhone.svg'
import {Link} from 'react-router-dom'




const Cards = ({term, contact }) => {

const [liked, setLiked]= useState([ ])
const [ likedIcon, setLikedIcon] = useState(false)
console.log(term)

    



    const favorite = (id) => {
     const like = contact.find( el=> el.id===id);
    setLiked( el => [...el, like])
    }

    useEffect(() => {
        if(liked.length > 0){
            localStorage.setItem('item', JSON.stringify(liked));
          }
   
      }, [liked]);
    

    //  по айдишику добавляй весть массив в локал сторэдж и парси их иначе  не работает редактирование ссделаешь сам 
    return (    
        <>
        {contact?.filter(
        (el) =>{
            if(term===''){
                return el
            }else{
              return  el.firstName.trim().toLowerCase().includes(term.trim().toLowerCase())
            }

        }
        ).map(el=>(
                <div key={el.id} id={el.id} className={style.cards}>
                   
                    <div className={style.imgBox} >
                        <img src={el.image} className={style.img}  alt='profile img/>img'/>
                    </div>

                        <div className='cardsBoxText'>
                            <ul>
                                <li style={{display: 'flex',justifyContent: 'space-between'}}>
                                 
                                   <p className={style.cardTitle}> {el.firstName} {el.lastName} </p> 

                                <div onClick={()=>{ console.log(setLikedIcon(!likedIcon))  }}>

                                 {!likedIcon&&(
                                  <BlackLike className={style.hurt} style={{margin:'15px 9px 0px 0px'}} 
                                    onClick={()=>{favorite(el.id)}}/> 
                                 )
                                 }
                                 {likedIcon&&(
                                  <BlackLike className={style.hurt} style={{margin:'15px 9px 0px 0px', stroke:'#D32F2F'}} 
                                    onClick={()=>{favorite(el.id)}}/> 
                                    )
                                 }
                                 </div>
                                  
                                 
                                 </li>

                                <li style={{display:'flex', marginLeft: '8px'}}>
                                    <LocationIcon   style={{marginTop:'5px'}}/>
                                    <p className={style.subtitle}>  {el.country} </p>
                                </  li>
                                <li style={{display:'flex', marginLeft: '8px'}}>
                                    <PhoneIcon   style={{marginTop:'5px'}}/>
                                    <p className={style.subtitle}>  {el.phoneNumber} </p>
                                </li>
                                <li style={{display:'flex', marginLeft: '8px'}}>
                                    <InternetIcon   style={{marginTop:'5px'}}/>
                                    <p className={style.subtitle}>  {el.website}</p>
                                </li>
                                <li style={{display:'flex', marginLeft: '8px'}}>
                                    <EmailIcon   style={{marginTop:'7px'}}/>
                                    <p className={style.subtitle}>   {el.email} </p>
                                </li>
                            </ul>

                            <div style={{display:'flex', justifyContent: 'flex-end'}}>
                                <Link to={`/${el.id}`} >   <button className={style.cardBtn}>show</button> </Link> 
                            </div>
                        </div>

                </div>
    
            ))}
        </>
     );
}
 
export default Cards;