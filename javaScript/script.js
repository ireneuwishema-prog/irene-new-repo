// Bible Verses Array
const bibleVerses = [
  { text: "Genesis 1:1 – 'In the beginning God created the heaven and the earth.'", link: "https://www.biblegateway.com/passage/?search=Genesis+1%3A1&version=KJV" },
  { text: "Psalm 23:1 – 'The LORD is my shepherd; I shall not want.'", link: "https://www.biblegateway.com/passage/?search=Psalm+23%3A1&version=KJV" },
  { text: "John 3:16 – 'For God so loved the world, that he gave his only Son...'", link: "https://www.biblegateway.com/passage/?search=John+3%3A16&version=KJV" },
  { text: "Philippians 4:13 – 'I can do all things through Christ which strengtheneth me.'", link: "https://www.biblegateway.com/passage/?search=Philippians+4%3A13&version=KJV" },
  { text: "Psalm 27:1 – 'The Lord is my light and my salvation; whom shall I fear?'", link: "https://www.biblegateway.com/passage/?search=Psalm+27%3A1&version=KJV" },
  { text: "Psalm 51:10 – 'Create in me a clean heart, O God; and renew a right spirit within me.'", link: "https://www.biblegateway.com/passage/?search=Psalm+51%3A10&version=KJV" }
];

// Function to show random verse
function showRandomVerse() {
  const randomIndex = Math.floor(Math.random() * bibleVerses.length);
  const verseContainer = document.getElementById('random-verse');
  const verse = bibleVerses[randomIndex];

  verseContainer.innerHTML = `
    <p class="verse">${verse.text}</p>
    <a href="${verse.link}" target="_blank" class="btn">Read Full Chapter</a>
  `;
}

// Call function when page loads
window.onload = showRandomVerse;

// Optional: make scripture cards clickable to expand
const cards = document.querySelectorAll('.umwe');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});
