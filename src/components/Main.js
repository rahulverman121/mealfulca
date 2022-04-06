import './Main.css';
import React from 'react';
import {useState} from 'react';
import Data from './P2VO.json';
import { Bar,Line } from 'react-chartjs-2';
import CanvasJSReact from './lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Main() {
    const [date,setDate] = useState("");
    const [chkdate,setchkDate] = useState("");
    var achedule = [];
    var schdate = [],datecount = [],phasecount = [0,0,0,0,0],data1 = [],data2 = [];
    var temp= {label: " ", y: " " };
    var phase =['09:00-12:00','12:00-15:00','15:00-18:00','18:00-21:00','21:00-09:00'];
    return (
        <div className="main">
            <div className='searchbox'>
            <label>Select Date :</label>
            <input type="date" onChange={(e)=>setDate(e.target.value)}/><br/>
            </div>
             {Data.map( sch => {
                 if(date===sch.item_date) { 
                     achedule.push(sch.schedule_time);                     
                 }                     
    })
    }
                        {achedule.map( time => {
                            if(schdate.indexOf(time.split(" ")[0])===-1) {
                                schdate.push(time.split(" ")[0]);
                                datecount[schdate.indexOf(time.split(" ")[0])]=1;
                                
                            }
                            else {
                                datecount[schdate.indexOf(time.split(" ")[0])]+=1;
                            }
                        })
                    }
                      {schdate.map( time => {
                          temp= {label: " ", y: " " }
                          temp.label =time;
                          temp.y = datecount[schdate.indexOf(time)];
                          data1.push(temp);                          
                      })
                    }
                    
{achedule.map( time => {        
            if(time.split(" ")[0]===chkdate) {
                if(time.split(" ")[1]>='09:00:00' && time.split(" ")[1]<'12:00:00')
                    phasecount[0]++;
                 else if(time.split(" ")[1]>='12:00:00' && time.split(" ")[1]<'15:00:00')
                    phasecount[1]++;
                 else if(time.split(" ")[1]>='15:00:00' && time.split(" ")[1]<'18:00:00')
                    phasecount[2]++;
                 else if(time.split(" ")[1]>='09:00:00' && time.split(" ")[1]<'12:00:00')
                    phasecount[3]++;
                 else 
                    phasecount[4]++;
            }
         })
     }
{phasecount.map( phas => {
                          temp= {label: " ", y: " " }
                          temp.label =phase[phasecount.indexOf(phas)];
                          temp.y = phas;
                          data2.push(temp);
                      })
                    }
<div className="datebtn">
{schdate.map( time => {
    return (<button onClick={()=>setchkDate(time.split(" ")[0])}>{time.split(" ")[0]}</button>);
})
}
    
</div>   
<div className='graph'>
    <div className='graph1'>
<CanvasJSChart options = {{
        animationEnabled: true,
        animationDuration: 2000,
        backgroundColor: "#F5DEB3",
        width : 600,
        title: {
          text: "Orders Scheduled for "+date
        },
        data: [{				
                  type: "column",
                  dataPoints: data1
         }]
     }}
          />
    </div>
    <div className='graph1'>    
<CanvasJSChart options = {{
        backgroundColor: "#F5DEB3",
        width : 600,
        title: {
          text: "Orders placed on "+chkdate
        },
        data: [{				
                  type: "column",
                  dataPoints: data2
         }]
     }}
          /> 
    </div>
</div>
        </div>
    );
}
export default Main;
