import './Netflixindex.css';
import Netflixheader from './Netfllixheader';
import Netflixmain from './Netflixmain';
import Netflix from './netflixpage';

export default function Netflixindex()
{
    return (
    <div className="container-fluid">
          <div className='box'>
            <header>
            <Netflixheader/> 
            </header>
            <section className="d-flex justify-content-center align-items-center m-3 p-3 ">
                <main className='m-3 p-3'>
                   <Netflixmain/>  
                   <Netflix/>
                </main>
            </section>
         </div>
    </div>
    );
}