import React from 'react';
import './join.css';
import JoinCard from '../Components/Join/JoinCard';

function Join() {
  return (
    <div className='join'>
        <div className='container'>
            <div className='join-title'>
            <h1>انضم/ي إلينا</h1>
            <p>انضم إلينا لتحقيق حياة أفضل لك ولعائلتك</p>
            </div>
            <div className='join-contant'>
                <JoinCard/>
               
            </div>
        </div>
        
    </div>
  )
}

export default Join;