import './App.css';

function App() {
  return (
    <div class="page-box">
      <h5 class="image"> </h5>
      <h1 class="logo">Chat-1</h1>
      <h4 class="tagline">Your Simple Chat Application</h4>
       <form class="login-form" action="/api/users/login" method="post">
      <input class="email" type="text" placeholder="USERNAME" name="email" />
      <input class="password" type="password" placeholder="PASSWORD" name="password" />
      <button class= "btn-1">Start Chatting</button>
      </form> 
    </div>
    

  
      
  );
}


  

  {/* <div class="row"> 
    <div class="column"> */}
     
    {/* </div>

    <div class="column">
      
      <img src="/images/hinduwedding.jpeg" style="width:100%">
      <img src="/images/wedding-picture.jpeg" style="width:100%">
    </div>  

    <div class="column">
      <img src="/images/spanishwed.jpeg" style="width:100%">
      
    </div>

    <div class="column">
      <img src="/images/black wedding.jpeg" style="width:100%">
      <img src="/images/samirawed.jpeg" style="width:100%">
    </div>
  </div>
        
        <div id="login-form" class="login-page hide">
          <div class="form-box">
            <div class="form">
              
                <p class="asking">Not Signed Up? <a href="#">Sign Up</a>
                </p>
             
              <form class="register-form" action="/api/users" method="post">
                
                  <h1 class="main-heading">Register Form</h1>
               
                <input type="text" placeholder="email" name="email" value="" />
                <input type="text" placeholder="name" name="name" value="" />
                <input type="password" placeholder="password" name="password" value="" />
                <button class="register-btn">Register</button>
                <p class="asking">Already Registerd? <a href="#">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>JDS Consultants 
        </p>
      </footer>
      <script src="/js/script.js"></script>
    
    

  <script src="/js/logout.js"></script> */}


export default App;
// export default Menu
