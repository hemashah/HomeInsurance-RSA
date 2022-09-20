import "./UserDetails.css";

const UserDetails = ({FirstName,LastName,Address,QuoteRef,StartDate}) => {

let today = new Date(StartDate);
let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()

    
return(
  
  <div className="leftcol-wrapper">
    <div className="name-header"> Hey {FirstName},</div>
    <div className="text-quote">
      Here is your quote for Royal & Sun Alliance, {Address}<br/>
      Quote reference: {QuoteRef}<br/>
      Covers starts on {date}.
    </div>
  </div>
  
)}

export default UserDetails;

