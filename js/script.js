// ========================================
// Système de Navigation Professionnel
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Basculer le menu mobile
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Fermer le menu mobile en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Empêcher le défilement du body quand le menu mobile est ouvert
const toggleBodyScroll = () => {
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

if (hamburger) {
    hamburger.addEventListener('click', toggleBodyScroll);
}

// Défilement fluide et état actif pour les liens de navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        }
    });
});

// ========================================
// Effets de Défilement
// ========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Fond de la navbar au défilement
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Intersection Observer pour Animations de Défilement
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments animés
document.querySelectorAll('.service-card, .project-card, .about-content, .about-image').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// Gestion du Formulaire de Contact avec Validation
// ========================================

const contactForm = document.getElementById('contactForm');

// Patterns de validation
const patterns = {
    name: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    company: /^.{2,100}$/,
    description: /^.{20,1000}$/
};

// Messages d'erreur
const errorMessages = {
    name: 'Please enter a valid name (2-50 characters)',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    company: 'Please enter your company name',
    projectType: 'Please select a project type',
    description: 'Please describe your project (minimum 20 characters)',
    budget: 'Please select a budget',
    timeline: 'Please select a timeline',
    consent: 'You must accept the privacy policy'
};

// Validation en temps réel
function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup?.querySelector('.form-error');
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Supprimer les classes précédentes
    formGroup?.classList.remove('error', 'success');

    // Validation selon le type de champ
    if (field.type === 'text' || field.type === 'email' || field.type === 'tel') {
        if (field.value.trim() === '') {
            isValid = false;
            errorMessage = errorMessages[fieldName] || 'This field is required';
        } else if (patterns[fieldName] && !patterns[fieldName].test(field.value)) {
            isValid = false;
            errorMessage = errorMessages[fieldName];
        }
    } else if (field.tagName === 'SELECT') {
        if (field.value === '') {
            isValid = false;
            errorMessage = errorMessages[fieldName];
        }
    } else if (field.tagName === 'TEXTAREA') {
        if (field.value.trim().length < 20) {
            isValid = false;
            errorMessage = errorMessages[fieldName];
        }
    } else if (field.type === 'radio') {
        const radioGroup = document.getElementsByName(fieldName);
        isValid = Array.from(radioGroup).some(radio => radio.checked);
        if (!isValid) {
            errorMessage = errorMessages[fieldName];
        }
    } else if (field.type === 'checkbox' && field.name === 'consent') {
        if (!field.checked) {
            isValid = false;
            errorMessage = errorMessages[fieldName];
        }
    }

    // Afficher le résultat
    if (formGroup) {
        if (isValid && field.value.trim() !== '') {
            formGroup.classList.add('success');
            if (errorElement) errorElement.textContent = '';
        } else if (!isValid) {
            formGroup.classList.add('error');
            if (errorElement) errorElement.textContent = errorMessage;
        }
    }

    return isValid;
}

// Ajouter les écouteurs de validation en temps réel
if (contactForm) {
    // Validation pour les champs texte
    const textInputs = contactForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea, select');
    textInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.closest('.form-group')?.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    // Validation pour les radio buttons
    const radioGroups = {};
    contactForm.querySelectorAll('input[type="radio"]').forEach(radio => {
        const name = radio.name;
        if (!radioGroups[name]) {
            radioGroups[name] = [];
        }
        radioGroups[name].push(radio);

        radio.addEventListener('change', () => {
            validateField(radio);
        });
    });

    // Validation pour le checkbox de consentement
    const consentCheckbox = contactForm.querySelector('input[name="consent"]');
    if (consentCheckbox) {
        consentCheckbox.addEventListener('change', () => validateField(consentCheckbox));
    }

    // Soumission du formulaire
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valider tous les champs
        let isFormValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        // Valider les groupes radio
        const budgetRadios = contactForm.querySelectorAll('input[name="budget"]');
        if (!Array.from(budgetRadios).some(radio => radio.checked)) {
            isFormValid = false;
            const budgetGroup = budgetRadios[0].closest('.form-group');
            if (budgetGroup) {
                budgetGroup.classList.add('error');
                const errorElement = budgetGroup.querySelector('.form-error');
                if (errorElement) errorElement.textContent = errorMessages.budget;
            }
        }

        if (isFormValid) {
            // Désactiver le bouton pendant l'envoi
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.querySelector('span').textContent;
            submitButton.disabled = true;
            submitButton.querySelector('span').textContent = 'Sending...';
            submitButton.style.opacity = '0.7';

            // Le formulaire sera soumis à Formspree
            // Simulation de succès après envoi
            setTimeout(() => {
                showNotification('🎉 Thank you! Your request has been sent. We will contact you within 24h.', 'success');
                contactForm.reset();
                
                // Réinitialiser les états de validation
                contactForm.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('error', 'success');
                });

                // Réactiver le bouton
                submitButton.disabled = false;
                submitButton.querySelector('span').textContent = originalButtonText;
                submitButton.style.opacity = '1';
            }, 1000);

            // Permettre la soumission réelle à Formspree
            contactForm.submit();
        } else {
            showNotification('❌ Please fix the errors in the form', 'error');
            
            // Scroll vers la première erreur
            const firstError = contactForm.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

// Compteur de caractères pour la description
const descriptionField = document.getElementById('description');
if (descriptionField) {
    descriptionField.addEventListener('input', function() {
        const hint = this.parentElement.querySelector('.form-hint');
        const length = this.value.length;
        if (hint) {
            if (length < 20) {
                hint.textContent = `${20 - length} characters remaining`;
                hint.style.color = '#ef4444';
            } else {
                hint.textContent = `${length} characters`;
                hint.style.color = 'rgba(255, 255, 255, 0.5)';
            }
        }
    });
}

// ========================================
// Système de Notification
// ========================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#3B82F6' : '#EF4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease forwards;
        font-weight: 500;
        max-width: 400px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Ajouter les animations de notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Initialiser au Chargement
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 50);
});

console.log('%c✨ Stellar Labs', 'color: #3B82F6; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully', 'color: #64748B; font-size: 14px;');
