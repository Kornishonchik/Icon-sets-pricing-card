const plansData = {
    basic: {
        subtitle: "BASIC",
        price: "$60",
        description: "Up to 50 creative & professional icons + one color versions/themes",
        iconSrc: "design/cross.png" 
    },
    standard: {
        subtitle: "STANDARD",
        price: "$120",
        description: "Up to 100 creative & professional icons + two color versions/themes per month",
        iconSrc: "design/list.svg"
    },
    premium: {
        subtitle: "PREMIUM",
        price: "$180",
        description: "Up to 200 creative & professional icons + four color versions/themes",
        iconSrc: "design/list.svg"
    }
};

const tabButtons = document.querySelectorAll('.tab-button');
const subtitleEl = document.getElementById('plan-subtitle');
const priceEl = document.getElementById('plan-price');
const descEl = document.getElementById('plan-desc');
const responsiveIconEl = document.getElementById('responsive-icon');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedPlan = button.getAttribute('data-plan');
        const planInfo = plansData[selectedPlan];

        subtitleEl.textContent = planInfo.subtitle;
        priceEl.textContent = planInfo.price;
        descEl.textContent = planInfo.description;
        
        responsiveIconEl.src = planInfo.iconSrc;
    });
});


const addToCartBtn = document.querySelector('.submit-button');

addToCartBtn.addEventListener('click', () => {
    alert('Thank you! The plan has been added to your cart.');
});