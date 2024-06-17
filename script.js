setInterval(() => {
   // selecting Div id fron html using gwetElementByID
   const hourHand = document.getElementById("hour");
   const minuteHand = document.getElementById("minute");
   const secondHand = document.getElementById("second");

   //    creating date and tine with date function
   const date = new Date();
   const hour = date.getHours();
   const minute = date.getMinutes();
   const second = date.getSeconds();

   //    calculating time
   const hourRotation = 30 * hour + minute / 2;
   const minuteRotation = 6 * minute;
   const secondRotation = 6 * second;

   //    presenting output (hand movement)
   hourHand.style.transform = `rotate(${hourRotation}deg)`;
   minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
   secondHand.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
