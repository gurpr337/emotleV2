document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.site-footer');
    if (footer) {
        footer.innerHTML = `
        <div class="footer-section">
            <h4>Quick Links</h4>
            <a href="index.html">Play Daily</a>
            <a href="practice.html">Practice Mode</a>
            <a href="archive.html">Archive</a>
            <a href="stats.html">Your Stats</a>
        </div>
        <div class="footer-section">
            <h4>Help & Hints</h4>
            <a href="how-to-play.html">How to Play</a>
            <a href="hints.html">Hints</a>
            <a href="emoji-dictionary.html">Emoji Dictionary</a>
            <a href="faq.html">FAQ</a>
        </div>
        <div class="footer-section">
            <h4>Community</h4>
            <a href="submit-phrase.html">Submit a Phrase</a>
            <a href="top-phrases.html">Top Phrases</a>
            <a href="about.html">About Emotle</a>
            <a href="contact.html">Contact Us</a>
        </div>
        <div class="footer-section">
            <h4>Legal</h4>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="accessibility.html">Accessibility</a>
            <a href="disclaimer.html">Disclaimer</a>
        </div>
        <p>&copy; 2025 Emotle. All rights reserved.</p>
        `;
    }
});
