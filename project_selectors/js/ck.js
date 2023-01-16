window.addEventListener('contextmenu', (event)=>{
    event.preventDefault()
  })
window.addEventListener("keydown",(event)=>{
    if (event.code == "F12") { // Prevent F12
        event.preventDefault()
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        event.preventDefault()
    }
})
