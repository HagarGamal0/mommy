import React from 'react';
import './joincard.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function JoinCard() {
  return (
    <div>
        <div className='card-info'>
          <div className='mum-card'>
              <h1>ام</h1>
              <i className="fa-solid fa-user"></i>
              <p>حدد نوع الواجهه التي تريد/ي الانضمام اليها فجرب الانضمام من هنا، وتأكد من ملء جميع المعلومات المتعلقة بك ولا تنسى متابعتنا على وسائل التواصل الاجتماعي الأخرى، شكرًا لانضمامك إلينا.</p>
              <div className='dropdown'>
                <button className='btn'>انضم الينا</button>
                <div className='dropdown-content'>
                  <a href='#'>إنشاء حساب جديد</a>
                  <a href='#'>لدي حساب بالفعل</a>
                </div>
              </div>
          </div>
          
          <div className='seller-card'>
              <h1>بائع</h1>
              <i className="fa-solid fa-user"></i>
              <p>إذا كنت بائعا لمستلزمات الاطفال او الامهات جديدًا ، فحاول الانضمام من هنا ، فتأكد من ملء جميع المعلومات الخاصة بك ولا تنسَ متابعتنا في صفحاتنا على مواقع التواصل الاجتماعي الأخرى ، وذلك بفضل الانضمام إلينا.</p>
              <div className='dropdown'>
                <button className='btn'>انضم الينا</button>
                <div className='dropdown-content'>
                  <a href='#'>إنشاء حساب بالفعل</a>
                  <a href='#'>لدي حساب بالفعل</a>
                  
                </div>
              </div>

          </div>
        </div>
    </div>
  )
}

export default JoinCard;