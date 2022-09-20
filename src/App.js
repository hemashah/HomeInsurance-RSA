import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import OptionalCover from './components/OptionalCover';
import UserDetails from './components/UserDetails';
import ActivePlan from './components/ActivePlan';
import {data} from './data/data.js';
import React, { useEffect, useState } from 'react';

function App() {

const [isPaymentMonthly,setPaymentMonthly] = useState(false);

const [totalMonthlyAmount,setTotaMonthlylAmount] = useState(0);
const [totalYearlyAmount,setTotalYearlyAmount] = useState(0);

const handleTotalValue=(extraMonthlyAmount,extraYearlyAmount)=>{
  setTotaMonthlylAmount(Math.round((totalMonthlyAmount + Number(extraMonthlyAmount))*100)/100);
  setTotalYearlyAmount(Math.round((totalYearlyAmount + Number(extraYearlyAmount))*100)/100);
}

useEffect(()=>{
  setTotaMonthlylAmount(Number(data.quote[0].monthlyPrice));
  setTotalYearlyAmount(Number(data.quote[0].annualPrice));
},[])

  return (
    <div className="App">

    
      <Header/>

      
      <UserDetails 
        FirstName={data.quote[0].firstName}
        LastName={data.quote[0].lastName}
        Address={data.quote[0].address1 +', '+ data.quote[0].address2} 
        QuoteRef={data.quote[0].quoteRef}
        StartDate={data.quote[0].startDate}  
      />
      <br/>
      <ActivePlan planPrice={isPaymentMonthly ? totalMonthlyAmount :totalYearlyAmount} isPaymentMonthly={isPaymentMonthly} setPaymentMonthly={setPaymentMonthly}/>
     
      <div className='optionalCover-title'>Tailor your cover with our optional extra</div>
      <div>
      {
        data.addons.map((addonsData) => (
          <OptionalCover 
            Title={addonsData.title}
            isPaymentMonthly={isPaymentMonthly}
            MonthlyAmount={addonsData.monthlyPrice}
            YearlyAmount={addonsData.annualPrice}
            Description={addonsData.text} 
            MonthlyPlan={isPaymentMonthly ? "per month" : "per year"}
            handleTotalValue={handleTotalValue}
          />
        ))
      }
    </div>
    </div>
    
  );
}

export default App;
