function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "I believe in love at first sight too! How about we go on a date and see if it's true? Can you please send me your response on Instagram?";
    showConfetti()
  //   let recipient="devarshidotpatel";
  // let at = String.fromCharCode(64);
  // let dotcom="gmail.com";
  // let mail="mailto:";
  // window.open(mail+recipient+at+dotcom);




}

//   function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "devarshipatel.fico@gmail.com",
//         Password: "Dev8112@",
//         To: 'devarshipatel.fico@gmail.com',
//         From: "devarshipatel.fico@gmail.com",
//         Subject: "I believe in love at first sight too! How about we go on a date and see if it's true?",
//         Body: "I believe in love at first sight too! How about we go on a date and see if it's true?",
//     })
//         .then(function (message) {
//             // alert("mail sent successfully")
//         });
// }
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "No worries, it takes time. But can we spend some time together and see if something beautiful blossoms?";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
  
