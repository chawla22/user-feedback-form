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



    //event delegation to handle mouse events
    form.addEventListener("mouseover",e => {
      const tooltipId = tooltipMap[e.target.id]
      if(tooltipId){
        document.getElementById(tooltipId).style.display = "inline";
      }
    })

    form.addEventListener("mouseout",e => {
      const tooltipId = tooltipMap[e.target.id]
      if(tooltipId){
        document.getElementById(tooltipId).style.display = "none";
      }
    })

    // event handling for counting characters as the user types 
   form.addEventListener("input", (e) => {
    const charcountId = charcountMap[e.target.id]
    if(charcountId){
     document.getElementById(charcountId).textContent = `Name chars: ${e.target.value.length}`
    }

  })

  
  
});
    
