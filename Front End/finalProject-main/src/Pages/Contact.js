import React from 'react'

export default function Contact() {
  return (
     <div className='container'>
        <div className="mb-4">
     
     <h2 className="h1-responsive font-weight-bold text-center my-4">تواصل الآن</h2>
     
     <p className="text-center w-responsive mx-auto mb-5">هل لديك اسئلة؟ من فضلك لا تتردد في الاتصال بنا مباشرة. سيعود فريقنا إليك في الداخل
       في غضون ساعات لمساعدتك.</p>
     <div className="row">

       <div className="col-md-9 mb-md-0 mb-5">
         <form id="contact-form" name="contact-form" action="mail.php" method="POST">
           
           <div className="row">
             <div className="col-md-6">
               <div className="md-form mb-0">
                 <label htmlFor="name" className>الاسم</label>
                 <br/>
                 <br/>
                 <input type="text" id="name" name="name" className="form-control" />
               </div>
             </div>
             <br/>
                 <br/>

             <div className="col-md-6">
               <div className="md-form mb-0">
                 <label htmlFor="email" className>الحساب</label>
                 <br/>
                 <br/>
                 <input type="text" id="email" name="email" className="form-control" />
               </div>
             </div>
           </div>
           <br/>
                 <br/>
    
           
           <div className="row">
             <div className="col-md-12">
               <div className="md-form">
                 <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                 <label htmlFor="message">رسالتك</label>
               </div>
             </div>
           </div>
         </form>

         <div className="text-center text-md-left">
           <a className="btn btn-outline-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
         </div>
         <div className="status" />
       </div>
       
       
       
     </div>
   </div>
     </div>
     
  
 );
}

