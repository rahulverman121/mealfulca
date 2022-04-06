import './Bonus.css';
import data from './P2VO.json';
import {useState} from 'react';
function Bonus() {
    const [fromdate,setfrom] = useState("");
    const [todate,setto] = useState("");
    var daysprior =[];
    var day,days=[] ;
    return(
        <div className='bonus'>
            <div className='searchbox'>
            <label>Input Date From : </label>
            <input type="date" onChange={(e)=>setfrom(e.target.value)}/>
            <label>To : </label>
            <input type="date" onChange={(e)=>setto(e.target.value)}/><br/>
            <br/>
            </div>
            {data.map(data => {
                if(data.item_date>fromdate && data.item_date<todate) {
                    if (parseInt(data.item_date.split("-")[1])==parseInt(data.schedule_time.split("-")[2])) {
                    day = (parseInt(parseInt(data.item_date.split("-")[2]))-(parseInt(data.schedule_time.split("-")[2])));
                    days.push(day);
                    if(daysprior[day]>0)
                        daysprior[day]++;
                    else
                        daysprior[day]=1;
                    }
                }
            })}
            
            <ul className='list'>
            {daysprior.map(prior => {
                    return (
                        <>
                        <br/>
                        
                         <li>{prior} Orders are placed {daysprior.indexOf(prior)} days prior.  </li>
                        
                        </>
                    );
            })}
            </ul>
        </div>  
    );
}
export default Bonus;