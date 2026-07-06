function calculateAge(){

const dob=document.getElementById("dob").value;
const result=document.getElementById("result");

if(dob===""){
result.innerHTML="⚠️ Please select your Date of Birth.";
return;
}

const birthDate=new Date(dob);
const today=new Date();

let years=today.getFullYear()-birthDate.getFullYear();
let months=today.getMonth()-birthDate.getMonth();
let days=today.getDate()-birthDate.getDate();

if(days<0){

months--;

const previousMonth=new Date(today.getFullYear(),today.getMonth(),0);

days+=previousMonth.getDate();

}

if(months<0){

years--;

months+=12;

}

result.innerHTML=`
🎉 <strong>Your Age</strong><br><br>

👤 Years : <b>${years}</b><br>

📅 Months : <b>${months}</b><br>

🗓 Days : <b>${days}</b>
`;

}