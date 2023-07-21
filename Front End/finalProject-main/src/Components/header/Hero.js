import React from 'react';
import './hero.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Motherhood from '../../images/main/home.png';


export default function Header() {
  const isLloggedIn = useSelector(state => state.UserSlice.isLoggedIn)
  console.log(isLloggedIn)
  return (
    <>
      <section className='hero'>
          <div className='con'>
            <div className='hero_content'>
            <h1>أهلاً بكِ في موقعنا</h1>
            <p>نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.
               <span className='newLine'/>تابعينا و إنضمي إلينا و إضمني صحة طفلك.</p>
            {isLloggedIn?'': <NavLink to='/register' className='btn' >سجلي معنا</NavLink>}
            </div>
           
          <img src={Motherhood} className='hero_img' alt=''></img>
          </div>
      </section>
    </>
  )
}