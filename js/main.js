// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Projects data - Chronologically ordered
const projects = [
    {
        title: "Driver Safety V2X Models Research",
        organization: "IIT Madras Zanzibar",
        period: "February 2025 - Present",
        description: "Leading research on Driver Safety based V2X models, focusing on making the models fast and more efficient. Developing novel approaches (Sparse attention based) to reduce latency while maintaining high accuracy in driver behavior prediction and threat detection.",
        tags: ["V2X", "Driver Safety", "Model Optimization", "Real-time Processing", "Sparse Attention"],
        type: "research"
    },
    {
        title: "Swahili ASR and NLP Research",
        organization: "IIT Madras Zanzibar",
        period: "February 2025 - March 2025",
        description: "Conducted research on Swahili Automatic Speech Recognition and Natural Language Processing. Developed novel approaches for handling low-resource language processing challenges. Paper currently under review in a double-blind workshop.",
        tags: [ "ASR", "NLP", "Low-resource Languages", "Speech Recognition"],
        type: "research"
    },
    {
        title: "UYIR Roadsafety Hackathon",
        organization: "UYIR-IEEE",
        period: "December 2024 - February 2025",
        description: "Participated in the UYIR Roadsafety Hackathon in partnership with IEEE, Collaborated in a team to develop ML and Computer vision based method to detect if driver is in or poses a threat.",
        tags: ["IEEE", "Road Safety", "Computer Vision", "Machine Learning"],
        link: "https://hackathon.uyir.org/"
    },
    {
        title: "Deepfake Face Detection",
        organization: "IEEE",
        period: "October 2024 - January 2025",
        description: "Participating in the IEEE SPS Cup 2025 challenge, focusing on detecting deepfake facial images using real-world data captured in diverse scenarios.",
        tags: ["IEEE", "Deepfake", "Face Detection", "Machine Learning", "Computer Vision"],
        link: "https://2025.ieeeicassp.org/sp-cup/"
    },
    {
        title: "Hackathon - Exoplanet Candidate Classification",
        organization: "IIT Madras Zanzibar",
        period: "November 2024 - December 2024",
        description: "Organized a hackathon using Kepler data to teach AI/ML basics to juniors. Designed datasets and evaluation metrics for hands-on learning.",
        tags: ["Hackathon", "Exoplanet Classification", "Kepler Data", "Machine Learning"],
        link: "https://www.kaggle.com/competitions/hackathon-uno-2024-iitmz/overview"
    },
    {
        title: "Data Analyst Intern",
        organization: "Flowcatalyst Consulting Inc.",
        period: "July 2024 - September 2024",
        description: "Collaborated with the startup founder to manage and analyze early-stage data for strategic planning and system development of the to-be established Fin-Tech. Developed a comprehensive dashboard to track key business metrics for merchant onboarding and sales performance.",
        tags: ["Data Analysis", "Dashboard Development"],
        location: "Remote, Guyana, S.America"
    },
    {
        title: "Kaggle ISIC Challenge",
        organization: "Kaggle",
        period: "June 2024 - September 2024",
        description: "Achieved Bronze Medal in Kaggle's ISIC competition, securing a rank of 178/2739 (Top 7%). Developed and fine-tuned advanced CNN models for accurate skin lesion classification using ISIC dataset.",
        tags: ["CNN","Skin Lesion Classification", "Image Processing"],
        link: "https://www.kaggle.com/certification/competitions/manasrajanpandya/isic-2024-challenge"
    },
    {
        title: "Techathon in AI/ML",
        organization: "IIT Madras Zanzibar",
        period: "April 2024 - May 2024",
        description: "Led one of the seven joint-winning teams in an AI/ML challenge conducted by Shaastra, IIT Madras, using LSTM to perform regression on COVID-19 data to predict deaths.",
        tags: ["LSTM", "Machine Learning"],
        link: "https://drive.google.com/file/d/1lLH2TX3GQseBixGAGyMwcb8oFICeAXfz/view"
    },
    {
        title: "Speech Emotion Prediction",
        organization: "IIT Madras Zanzibar",
        period: "March 2024 - June 2024",
        description: "Assisted in a senior level project on Deep Learning based speech emotion recognition for lightweight models, exploring Quantization techniques",
        tags: ["Data Augmentation", "Feature Engineering", "Librosa", "Deep Learning", "MLP", "Quantization"]
    },
    {
        title: "Stellar Classification using Spectral Data",
        organization: "IIT Madras Zanzibar",
        period: "January 2024 - February 2024",
        description: "Developed a kNN-based model to classify stellar bodies using spectral data from SDSS-DR17.",
        tags: ["kNN", "Classification", "Astronomy"],
        link: "https://github.com/manasrpandya/stellar-classification-using-spectral-analysis-using-SDSS-DR17"
    },
    {
        title: "Two-Player Chess from Scratch",
        organization: "IIT Madras Zanzibar",
        period: "January 2024 - February 2024",
        description: "Defined the environment and functionalities for a two-player chess game using Python.",
        tags: ["Python", "PyGame"],
        link: "https://github.com/manasrpandya/two-player-chess-game-using-python"
    },
    {
        title: "Binary Classification of Industrial Casts",
        organization: "IIT Madras Zanzibar",
        period: "December 2023 - February 2024",
        description: "Collaborated with a senior to create ensemble ML models for automating the sorting of defected and non-defected industrial casts.",
        tags: ["Machine Learning", "Ensemble Classifier"],
        link: "https://github.com/manasrpandya/Binary-Classification-of-Industrial-Casts-using-Ensemble-Classifier"
    }
];

// Publications data
const publications = [
    {
        title: "Swahili ASR and NLP Research",
        status: "Under Review",
        description: "Papers on Swahili based ASR and NLP are under review (of a double blind workshop, which prevents me from naming it)"
    },
    {
        title: "Driver Safety V2X Models",
        status: "In Progress",
        description: "Working on Driver Safety based V2X models, researching on how to make the models fast and more efficient."
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card ${project.type || ''}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="organization">${project.organization}</p>
                ${project.location ? `<p class="location">${project.location}</p>` : ''}
                <p class="period">${project.period}</p>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">Related Link</a>` : ''}
            </div>
        </div>
    `;
}

// Function to create publication cards
function createPublicationCard(publication) {
    return `
        <div class="publication-card">
            <div class="publication-content">
                <h3>${publication.title}</h3>
                <p class="status">${publication.status}</p>
                <p>${publication.description}</p>
            </div>
        </div>
    `;
}

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Close mobile menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});

// Make all sections visible by default
document.querySelectorAll('section').forEach(section => {
    section.classList.add('visible');
});

// Load projects and publications
const projectsContainer = document.querySelector('.projects-grid');
const publicationsContainer = document.querySelector('.publications-grid');

if (projectsContainer) {
    projectsContainer.innerHTML = projects.map(createProjectCard).join('');
}

if (publicationsContainer) {
    publicationsContainer.innerHTML = publications.map(createPublicationCard).join('');
}

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1
        }
    });
});

// Animate project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add visible class to sections when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 
