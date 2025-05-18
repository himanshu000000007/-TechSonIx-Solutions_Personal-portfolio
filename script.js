// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Scroll-to-top button (optional)
  const topButton = document.createElement("button");
  topButton.innerText = "↑ Top";
  topButton.id = "topBtn";
  topButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    background-color: #4b6cb7;
    color: white;
    cursor: pointer;
    display: none;
    z-index: 999;
  `;
  document.body.appendChild(topButton);
  
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };
  
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Animate skill bars when in viewport
  const bars = document.querySelectorAll('.bar');
  
  function animateBars() {
    bars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        bar.style.width = targetWidth;
      }
    });
  }
  
  window.addEventListener("scroll", animateBars);
  window.addEventListener("load", animateBars);
  