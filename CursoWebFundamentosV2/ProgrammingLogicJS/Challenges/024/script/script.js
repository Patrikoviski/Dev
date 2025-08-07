const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]

const today = new Date()
const weekDayToday = today.getDay()
alert(days[weekDayToday])