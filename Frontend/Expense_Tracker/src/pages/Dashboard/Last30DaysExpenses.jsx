import React, { useEffect, useState } from 'react'
import { prepareExpenseBarCharData } from '../../utils/helper';
import CustomerBarChart from '../../components/charts/CustomerBarChart';
const Last30DaysExpenses = ({data}) => {
    const [charData,setCharData]=useState([]);
    useEffect(()=>{
        const result = prepareExpenseBarCharData(data);
        setCharData(result);
        return () => {};
    },[data]);
  return (
    <div className='card col-span-1'>
     <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Last 30 Days Expenses</h5>
        </div>   
      <CustomerBarChart data={charData}/>
    </div>
  )
}

export default Last30DaysExpenses
