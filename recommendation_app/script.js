
const recommendations = {
    movie: [
        "Inception (2010)",
        "Interstellar (2014)",
        "The Matrix (1999)",
        "Parasite (2019)",
        "Whiplash (2014)"
    ],
    book: [
        "Atomic Habits by James Clear",
        "Sapiens by Yuval Noah Harari",
        "1984 by George Orwell",
        "The Alchemist by Paulo Coelho",
        "To Kill a Mockingbird by Harper Lee"
    ]
};

function getRecommendation() {
    const category = document.getElementById('category').value;
    const options = recommendations[category];
    const randomItem = options[Math.floor(Math.random() * options.length)];
    document.getElementById('result').textContent = `👉 ${randomItem}`;
}
