import React from 'react';
import style from './header.module.css'
import {ReactComponent as Logo} from './icon/logo.svg'
import { Link} from 'react-router-dom';

const Header = () => {
    return ( 
     <div className={style.header}>
       
       <Link to='/'>    <div className={style.logoBox}>
                
       <Logo className={style.logo} />   <h2 className={style.title}>   MyContacts</h2> 
            </div>
            
         </Link>
     </div>
    );
}
 
export default Header;