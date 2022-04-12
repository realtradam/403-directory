var draggableElements = document.getElementsByClassName("draggable");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.getElementsByClassName("divheader").length > 0) {
    /* if present, the header is where you move the DIV from:*/
    elmnt.getElementsByClassName("divheader")[0].onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function UnhideWindow(element) {
	element.style.visibility='visible'
}

function HideWindow(e){
	e.target.parentNode.parentNode.parentNode.style.visibility='hidden'
}

(function () {
   var CharacterPos = 0;
   var MsgBuffer = "> ";
   var StorePrevMsg = "";
   var TypeDelay = 15; 
   var NxtMsgDelay = 150;
   var MsgIndex = 0;
   var delay;
   var MsgArray = ["Logging in to 403 Database using leaked credentials...",
	   "Login Failed! Credentials may have changed.",
	   "Attempting SHA 256 Backdoor Bypass...",
	   "Bypass Failed! Backdoor Patched.",
	   "Attempting to perform Man in the Middle Attack...",
	   "Attack Failed! No Vulnerable Targets Found.",
	   "Scanning Swap Space for Unencrypted Files...",
	   "Partial Data Found! Rebuilding Files...",
	   "Login Credential Recovery Successful, Attempting Login...",
	   "Access to files 1/4 Gained!",
	   "​"
   ];
   var finished = false;

   function StartTyping() {
      var id = document.getElementById("typing-text");
      if (CharacterPos != MsgArray[MsgIndex].length) {
         MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
         id.textContent = StorePrevMsg + MsgBuffer + "_";
         delay = TypeDelay;
         //id.scrollTop = id.scrollHeight; 
      } else {
         delay = NxtMsgDelay;
		 StorePrevMsg += MsgBuffer;
         MsgBuffer   = "\n> ";
         CharacterPos = -1;
		 MsgArray.splice(0,1);
       }
       CharacterPos++;
	   if (MsgArray.length >= 1){
		   setTimeout(StartTyping,delay);
	   }
	   else if (!finished) {
		   //for each element
		   //unhide
		   hiddenElements = document.getElementsByClassName('openable')
		   var min = 400, max = 1000;
		   for(var i = 0; i < hiddenElements.length; i++){
			   var rand = Math.floor(Math.random() * (max - min + 1) + min);
			   setTimeout(UnhideWindow, rand, hiddenElements[i])
		   }
		   finished = true;
	   }
   }
StartTyping();
})();
