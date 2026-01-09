const facts = [
    "Mark Zuckerberg taught himself programming at a young age.",
    "He created Facebook while at Harvard University.",
    "Zuckerberg has a net worth of over $100 billion.",
    "He is known for wearing gray t-shirts and hoodies.",
    "Zuckerberg has donated over $14 billion to charity through the Chan Zuckerberg Initiative.",
    "He learned Mandarin Chinese to better understand China.",
    "Zuckerberg has two daughters: Max and August."
];

document.getElementById('toggleBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Show More';
    }
});

document.getElementById('factBtn').addEventListener('click', function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factDisplay').textContent = randomFact;
});

document.getElementById('darkModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Switch to Light Mode';
    } else {
        this.textContent = 'Switch to Dark Mode';
    }
});