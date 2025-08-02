// Professional CV Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for internal links
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add click to copy functionality for contact info
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            
            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification('¡Información copiada al portapapeles!');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('¡Información copiada al portapapeles!');
            }
        });
        
        // Add cursor pointer style
        item.style.cursor = 'pointer';
        item.title = 'Click para copiar';
    });

    // Notification function
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '1000',
            fontSize: '14px',
            fontWeight: '500',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // Add typing effect to the main title
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let index = 0;
        const typingSpeed = 100;
        
        function typeWriter() {
            if (index < originalText.length) {
                nameElement.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add progress bars for skills (optional enhancement)
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #f1f2f6, #ddd)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
        });
    });

    // Add floating animation to profile image
    const profileImage = document.querySelector('.profile-image i');
    if (profileImage) {
        setInterval(() => {
            profileImage.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                profileImage.style.transform = 'translateY(0)';
            }, 1000);
        }, 2000);
        
        profileImage.style.transition = 'transform 1s ease-in-out';
    }

    // Print functionality
    function addPrintButton() {
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir CV';
        printButton.className = 'print-button';
        
        Object.assign(printButton.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, #3498db, #2980b9)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)',
            zIndex: '1000',
            transition: 'transform 0.2s ease'
        });
        
        printButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        printButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
    }
    
    // Add print button
    addPrintButton();

    // Add download as PDF functionality (requires html2pdf library)
    function addDownloadButton() {
        const downloadButton = document.createElement('button');
        downloadButton.innerHTML = '<i class="fas fa-download"></i> Descargar PDF';
        downloadButton.className = 'download-button';
        
        Object.assign(downloadButton.style, {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)',
            zIndex: '1000',
            transition: 'transform 0.2s ease'
        });
        
        downloadButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        downloadButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        downloadButton.addEventListener('click', function() {
            showNotification('Función de descarga disponible con html2pdf.js');
        });
        
        document.body.appendChild(downloadButton);
    }
    
    // Add download button
    addDownloadButton();

    console.log('CV Profesional de Willian Ruiz cargado exitosamente! 🚀');
});

// Add some utility functions
const CVUtils = {
    // Function to update contact information
    updateContact: function(field, value) {
        const contactItems = document.querySelectorAll('.contact-item span');
        contactItems.forEach(item => {
            if (item.textContent.includes(field)) {
                item.textContent = value;
            }
        });
    },
    
    // Function to add new skill
    addSkill: function(category, skill) {
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach(cat => {
            const title = cat.querySelector('h4').textContent;
            if (title.includes(category)) {
                const skillsList = cat.querySelector('.skills-list');
                const newSkill = document.createElement('span');
                newSkill.className = 'skill-tag';
                newSkill.textContent = skill;
                skillsList.appendChild(newSkill);
            }
        });
    },
    
    // Function to highlight sections
    highlightSection: function(sectionTitle) {
        const sections = document.querySelectorAll('.section-title');
        sections.forEach(section => {
            if (section.textContent.includes(sectionTitle)) {
                section.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
                section.style.color = 'white';
                section.style.padding = '10px';
                section.style.borderRadius = '8px';
            }
        });
    }
};

// Make utilities available globally
window.CVUtils = CVUtils;
