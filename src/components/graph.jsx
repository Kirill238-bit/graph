'use client'
import React, { useEffect, useMemo, useState } from 'react';
import style from './graph.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function Graph({data}){
  const [year,setYear]=useState(false);
  const [half_year,setHalf_year]=useState(false);
  const [month,setMonth]=useState(true);
  const [selectedValue, setSelectedValue] = useState("")
  //const dataMonth=[data.graph.month];
  //for(let i=1;i<=31;i++){
  //  if(i<5||i%5===0){
  //    for(let j=0;j<5;j++){
  //      dataMonth.push(Object.values(data.graph.month[i]));
  //    }
  //  }
  //}
  //console.log(dataMonth)
  useMemo(()=>{
    if(selectedValue==='month'){
      setMonth(true);
      setHalf_year(false);
      setYear(false);
    }
    if(selectedValue==='half year'){
      setMonth(false);
      setHalf_year(true);
      setYear(false);
    }
    if(selectedValue==='year'){
      setMonth(false);
      setHalf_year(false);
      setYear(true);
    }
  },[selectedValue]);
    return(
        <div className={style.wrapper}>
            <div className={style.selected_item}>
                <select className={style.selector} onChange={(e)=>{setSelectedValue(e.target.value)}} defaultValue={'month'}>
                    <option value='month'>За последний месяц</option>
                    <option value='half year'>За последние 6 месяцев</option>
                    <option value='year'>За последний год</option>
                </select>
            </div>
            <div className={style.graphic}>
            <div className={`${style.half_year} ${half_year ? style.half_year_active : ''}`}>
            <Bar
                data={{
                  backgroundColor:"#FF00F50D",
                  datasets: [{
                    data: data.graph.half_year,
                    backgroundColor: "#000AFF",
                    borderRadius:16,
                    borderWidth:1,
                    barPercentage:0.20
                  },],
                }}
                options={{
                  plugins:{
                    legend:{
                      display:false
                    }
                  },
                  scales:{
                    y:{
                      beginAtZero:true,
                      min:0,
                      max:10000,
                      ticks:{
                        stepSize:2000,
                      },
                      grid:{
                        display:false,
                      }
                    },
                    x:{
                      grid:{
                        display:false,
                      }
                    }
                  }
                }}
            />
            </div>
            <div className={`${style.year} ${year ? style.year_active : ''}`}>
            <Bar
                data={{
                  backgroundColor:"#FF00F50D",
                  datasets: [{
                    data: data.graph.year,
                    backgroundColor: "#000AFF",
                    borderRadius:16,
                    borderWidth:1,
                    barPercentage:0.25
                  },],
                }}
                options={{
                  plugins:{
                    legend:{
                      display:false
                    }
                  },
                  scales:{
                    y:{
                      beginAtZero:true,
                      min:0,
                      max:10000,
                      ticks:{
                        stepSize:2000,
                      },
                      grid:{
                        display:false,
                      }
                    },
                    x:{
                      grid:{
                        display:false,
                      }
                    }
                  }
                }}
            />
            </div>
            <div className={`${style.month} ${month ? style.month_active : ''}`}>
            <Bar
                data={{
                  backgroundColor:"#FF00F50D",
                  datasets: [{
                    data:data.graph.month,
                    backgroundColor: "#000AFF",
                    borderRadius:16,
                    borderWidth:1,
                    barPercentage:0.5,
                    categoryPercentage:0.8
                  }],
                }}
                options={{
                  plugins:{
                    legend:{
                      display:false
                    }
                  },
                  scales:{
                    y:{
                      beginAtZero:true,
                      min:0,
                      max:10000,
                      ticks:{
                        stepSize:2000,
                      },
                      grid:{
                        display:false,
                      },
                      border:{
                        display:false,
                      }
                    },
                    x:{
                      border:{
                        display:false,
                      },
                      grid:{
                        display:false,
                      }
                    }
                  }
                }}
            />
            </div>
            </div>
        </div>
    )
}