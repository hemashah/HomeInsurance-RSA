import "./ActivePlan.css";

const ActivePlan =({planPrice,isPaymentMonthly,setPaymentMonthly})=>{

    return(
       
    <div className="activePlan-wrapper">
        <div className="planprice">£{planPrice}</div>
        <div className="planmonthly">{isPaymentMonthly ? "per month" : "per year"}</div>
        <div className="plantext">This price includes Insurance Premium Tax at the <br/> 
              current rate. No charge for paying monthly.</div>

        <div><button type="button" className="btnactiveplan" onClick={()=>setPaymentMonthly(!isPaymentMonthly)}>{isPaymentMonthly ? "Switch to annual" : "Switch to monthly"}</button></div>
    </div>
    
)}

export default ActivePlan;