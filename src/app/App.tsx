import React, {} from 'react'; /* useState war drinnen in {} */
import styles from "./App.module.css";
import Image from "/home/dev/bapelmemeapp/src/app/Images/IT Bild.jpg";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App(): JSX.Element {



  return (
  <BrowserRouter>
    <Switch>
      <Route path="/loggingin">
    
        <h1>Hi</h1>

      </Route>



      <Route path="/global">
       <section>
         
       <div className={styles.header}>

          <h1>Willkommen hier auf Omnius.one</h1>

        </div>
         
         </section> 

        

      </Route>



      <Route path="/">

        <body>
         <section className={styles.main}>

          <div className={styles.top}>

            <h1 className={styles.Omnius}>OMNIUS.ONE</h1>

             <div className="wrapper">
               <a href="loggingin"><span>LOGGING IN</span></a>
               <a href="global"><span>GLOBAL</span></a>
             </div>
          
          </div>

 
          <img className={styles.image} src={Image} />
 
         </section>
        </body>
      </Route>
     </Switch>
</BrowserRouter>


  );
}
export default App;
