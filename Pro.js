window.onload = function() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = Submet; // 'onclick' doit être tout en minuscules
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'enter') {
        Submet();
    }
  });

function Submet(){
    const username = document.getElementById("name").value ;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    document.getElementById("userName").innerHTML = username ;
document.getElementById("userAge").innerHTML = age ;
document.getElementById("userEmail").innerHTML = email ;
document.getElementById("userJob").innerHTML = job ;
document.getElementById("userDesignation").innerHTML = designation ;
document.getElementById("userProductChoice").innerHTML = productType ;
document.getElementById("userFeedback").innerHTML = feedback ;
alert("thans for your infos");
}


