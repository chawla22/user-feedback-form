document.addEventListener("DOMContentLoaded", function() {
    // Get the form and its elements
  
    const form = document.getElementById("feedback-form");
    const feedbackmessage = document.getElementById("feedback-message");
  
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentsInput = document.getElementById("comments");
  
    
    //creating a map to hold mulitple objects for event delagation and bubbling
    // maping input ids to tooltip id
    const tooltipMap={

     name : "tooltip-name",
     email : "tooltip-email",
     comments :"tooltip-comments"
    }

    // maping input ids to charcounr id
    const  charcountMap = {

    name :"char-count-name",
    email : "char-count-email",
    comments :"char-count-message"

  }

  
    //initially hiding all the tooltips
    Object.values(tooltipMap).forEach(id => 
      {
        document.getElementById(id).style.display = "none"
      })
    })