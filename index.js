function addingEventListener(){
  document.querySelector('#button').addEventListener('click', clickAlert)
}
function clickAlert() {
  alert('I was clicked')
}
addingEventListener()
