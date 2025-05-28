
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


  
window.onload = () => {
  const msg = document.getElementById("message");
  msg.style.opacity = "1";
};
