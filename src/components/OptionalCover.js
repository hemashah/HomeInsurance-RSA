import "./OptionalCover.css";
import React, { useState } from 'react';

const OptionalCover = ({Title,isPaymentMonthly,MonthlyAmount,YearlyAmount,Description,MonthlyPlan,handleTotalValue}) =>{

    const [addonExtra, setAddonExtra] = useState(false);

    const handleExtraAddition = () =>{
        console.log("Extra button clicked");
        handleTotalValue(addonExtra ? -MonthlyAmount : MonthlyAmount, addonExtra ? -YearlyAmount : YearlyAmount);
        setAddonExtra(!addonExtra);
    }

return(
    <div className="optionalCover-wrapper">
        <div className="row">
        <div className="optionalCover-type">{Title}</div>
        <div className="optionalCover-amount">£{isPaymentMonthly ? MonthlyAmount : YearlyAmount}  {MonthlyPlan}</div>
        </div>
        <div className="optionalCover-desc">{Description}  </div>
        <button className="optionalCover-btn" type="button" onClick={handleExtraAddition}>{addonExtra ? "Remove this extra" : "Select this extra"}</button>
    </div>
)}

export default OptionalCover;
