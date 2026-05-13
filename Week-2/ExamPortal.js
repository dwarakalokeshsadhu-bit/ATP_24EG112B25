// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
let exam = function submitExam() {
    if(true)
    console.log("Exam submitted successfully")
  //         After 2 seconds → show: “Evaluating answers…”
setTimeout(()=>{
    console.log("Evaluating answers...")
},2000)
//         After 4 seconds → show: “Result: Pass”
setTimeout(()=>{
    console.log("result: Pass")
},4000)
}
exam()


// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”

    console.log("OTP sent Successfully")

        let seconds=5
//         Start 10-second countdown
//         Allow resend only after countdown ends
let intervelId = setInterval(()=>{
   seconds--;
   console.log(`OTP can resend after ${seconds} secs`)
   if(seconds==0) {
    console.log("Resend OTP")
    clearInterval(intervelId)
   }
},1000)


