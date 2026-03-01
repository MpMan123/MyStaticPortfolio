document.addEventListener('DOMContentLoaded', () => {
    // Reveal on Scroll
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Simple smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Page indicator
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // Blurring effect logic for index page
    const cards = document.querySelectorAll('.service-card');
    const body = document.body;

    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                body.classList.add('has-hovered-card');
            });
            card.addEventListener('mouseleave', () => {
                body.classList.remove('has-hovered-card');
            });
        });
    }

});

function copyEmail() {
    const email = "mhp230306@gmail.com";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email)
            .then(() => {
                const tooltip = document.getElementById('copyTooltip');
                tooltip.innerText = 'Copied!';
                setTimeout(() => {
                    tooltip.innerText = 'Click to copy';
                }, 2000);
            })
            .catch(err => {
                console.error("Copy failed:", err);
                fallbackCopyTextToClipboard(email);
            });
    } else {
        fallbackCopyTextToClipboard(email);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        const tooltip = document.getElementById('copyTooltip');
        tooltip.innerText = 'Copied!';
        setTimeout(() => {
            tooltip.innerText = 'Click to copy';
        }, 2000);
        if (!successful) {
            alert("Unable to copy email. Please manually copy: " + text);
        }
    } catch (err) {
        alert("Unable to copy email. Please manually copy: " + text);
    }
    document.body.removeChild(textArea);
}
