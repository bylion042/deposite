document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const amounts = document.querySelectorAll(".amount");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
      });
    });
  
    amounts.forEach((amount) => {
      amount.addEventListener("click", () => {
        document.querySelector(".amount.active").classList.remove("active");
        amount.classList.add("active");
      });
    });
  });
  