// زر الترحيب
const welcomeScreen = document.getElementById('welcomeScreen');
const startBtn = document.getElementById('startBtn');
const mainContent = document.getElementById('mainContent');

startBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  mainContent.style.display = 'block';
});

// همبرقر
function toggleMenu(){
  const menu = document.getElementById('menu');
  if(menu.style.display === "block"){
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
