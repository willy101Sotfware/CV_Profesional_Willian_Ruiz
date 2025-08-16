// Professional CV Interactive Features
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for internal links
  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Add hover effects to skill tags
  const skillTags = document.querySelectorAll(".skill-tag");
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(2deg)";
    });

    tag.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Add click to copy functionality for contact info
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item) => {
    item.addEventListener("click", function () {
      const text = this.querySelector("span").textContent;

      // Try to copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showNotification("¡Información copiada al portapapeles!");
        });
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showNotification("¡Información copiada al portapapeles!");
      }
    });

    // Add cursor pointer style
    item.style.cursor = "pointer";
    item.title = "Click para copiar";
  });

  // Notification function
  function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "linear-gradient(135deg, #27ae60, #2ecc71)",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      zIndex: "1000",
      fontSize: "14px",
      fontWeight: "500",
      transform: "translateX(100%)",
      transition: "transform 0.3s ease",
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }, 3000);
  }

  // Typing effect disabled to prevent name duplication
  // The name will display normally without animation

  // Add progress bars for skills (optional enhancement)
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      this.style.background = "linear-gradient(135deg, #f1f2f6, #ddd)";
    });

    category.addEventListener("mouseleave", function () {
      this.style.background = "#f8f9fa";
    });
  });

  // Add floating animation to profile image
  const profileImage = document.querySelector(".profile-image i");
  if (profileImage) {
    setInterval(() => {
      profileImage.style.transform = "translateY(-5px)";
      setTimeout(() => {
        profileImage.style.transform = "translateY(0)";
      }, 1000);
    }, 2000);

    profileImage.style.transition = "transform 1s ease-in-out";
  }

  // Print functionality
  function addPrintButton() {
    const printButton = document.createElement("button");
    printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir CV';
    printButton.className = "print-button";

    Object.assign(printButton.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "linear-gradient(135deg, #3498db, #2980b9)",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "25px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(52, 152, 219, 0.3)",
      zIndex: "1000",
      transition: "transform 0.2s ease",
    });

    printButton.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    printButton.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });

    printButton.addEventListener("click", function () {
      window.print();
    });

    document.body.appendChild(printButton);
  }

  // Add print button
  addPrintButton();

  // Add download as PDF functionality (requires html2pdf library)
  function addDownloadButton() {
    const downloadButton = document.createElement("button");
    downloadButton.innerHTML = '<i class="fas fa-download"></i> Descargar CV';
    downloadButton.className = "download-button";

    Object.assign(downloadButton.style, {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      background: "linear-gradient(135deg, #e74c3c, #c0392b)",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "25px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(231, 76, 60, 0.3)",
      zIndex: "1000",
      transition: "transform 0.2s ease",
    });

    downloadButton.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    downloadButton.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });

    downloadButton.addEventListener("click", function () {
      downloadHTML();
    });

    document.body.appendChild(downloadButton);
  }

  // Add download button
  addDownloadButton();

  console.log("CV Profesional de Willian Ruiz cargado exitosamente! 🚀");
});

// Add some utility functions
const CVUtils = {
  // Function to update contact information
  updateContact: function (field, value) {
    const contactItems = document.querySelectorAll(".contact-item span");
    contactItems.forEach((item) => {
      if (item.textContent.includes(field)) {
        item.textContent = value;
      }
    });
  },

  // Function to add new skill
  addSkill: function (category, skill) {
    const skillCategories = document.querySelectorAll(".skill-category");
    skillCategories.forEach((cat) => {
      const title = cat.querySelector("h4").textContent;
      if (title.includes(category)) {
        const skillsList = cat.querySelector(".skills-list");
        const newSkill = document.createElement("span");
        newSkill.className = "skill-tag";
        newSkill.textContent = skill;
        skillsList.appendChild(newSkill);
      }
    });
  },

  // Function to highlight sections
  highlightSection: function (sectionTitle) {
    const sections = document.querySelectorAll(".section-title");
    sections.forEach((section) => {
      if (section.textContent.includes(sectionTitle)) {
        section.style.background = "linear-gradient(135deg, #f39c12, #e67e22)";
        section.style.color = "white";
        section.style.padding = "10px";
        section.style.borderRadius = "8px";
      }
    });
  },
};

// Make utilities available globally
window.CVUtils = CVUtils;

// HTML Download Function - Downloads complete CV with design
function downloadHTML() {
  const downloadButton = document.querySelector('.download-button');
  const originalContent = downloadButton.innerHTML;
  
  // Show loading state
  downloadButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparando descarga...';
  downloadButton.style.pointerEvents = 'none';
  
  try {
    // Get the complete HTML content
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Willian Ruiz</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
${document.querySelector('link[href="styles.css"]') ? getCSSContent() : getInlineCSS()}
    </style>
</head>
<body>
${document.querySelector('.container').outerHTML}
</body>
</html>`;
    
    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Willian_Ruiz.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Clean up
    URL.revokeObjectURL(url);
    
    // Restore button
    downloadButton.innerHTML = originalContent;
    downloadButton.style.pointerEvents = 'auto';
    
    // Show success notification
    showNotification('✅ CV descargado como archivo HTML completo');
    
  } catch (error) {
    console.error('Error downloading HTML:', error);
    
    // Restore button
    downloadButton.innerHTML = originalContent;
    downloadButton.style.pointerEvents = 'auto';
    
    // Show error notification
    showNotification('❌ Error al descargar el archivo HTML');
  }
}

// Function to get inline CSS styles
function getInlineCSS() {
  return `
/* CV Profesional Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.header {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 40px;
}

.profile-section {
    display: flex;
    align-items: center;
    gap: 30px;
}

.profile-image i {
    font-size: 80px;
    color: #ecf0f1;
    opacity: 0.9;
}

.name {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    background: linear-gradient(45deg, #f39c12, #e67e22);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.title {
    font-size: 1.4rem;
    font-weight: 400;
    opacity: 0.9;
    margin-bottom: 20px;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    transition: transform 0.2s ease;
}

.contact-item:hover {
    transform: translateX(5px);
}

.contact-item i {
    width: 20px;
    color: #f39c12;
}

.main-content {
    padding: 40px;
}

.section {
    margin-bottom: 40px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 3px solid #f39c12;
}

.section-title i {
    color: #f39c12;
    font-size: 1.3rem;
}

.section-content {
    padding-left: 35px;
}

.summary {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    text-align: justify;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.skill-category {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid #f39c12;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-category:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.skill-category h4 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-weight: 600;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.skill-tag {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: transform 0.2s ease;
}

.skill-tag:hover {
    transform: scale(1.05);
}

.experience-item, .project-item, .education-item {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 20px;
    border-left: 4px solid #3498db;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.experience-item:hover, .project-item:hover, .education-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.job-title, .project-title, .degree {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 8px;
}

.company, .institution {
    font-weight: 600;
    color: #3498db;
    font-size: 1.1rem;
}

.period, .location {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin: 5px 0;
}

.experience-item ul, .project-item ul {
    margin-top: 15px;
    padding-left: 20px;
}

.experience-item li, .project-item li {
    margin-bottom: 8px;
    color: #555;
    line-height: 1.6;
}

.project-tech {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-tag {
    background: #e8f4fd;
    color: #2980b9;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

.certification-grid, .languages-grid, .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.certification-item, .language-item, .interest-item {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.2s ease;
}

.certification-item:hover, .language-item:hover, .interest-item:hover {
    transform: translateY(-2px);
}

.certification-item h4 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
}

.cert-provider, .language, .level {
    color: #7f8c8d;
    font-size: 0.9rem;
}

.cert-year {
    color: #f39c12;
    font-weight: 600;
}

.interest-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.interest-item i {
    font-size: 2rem;
    color: #f39c12;
}

@media (max-width: 768px) {
    body {
        padding: 10px;
    }
    
    .container {
        border-radius: 15px;
    }
    
    .header {
        padding: 30px 20px;
    }
    
    .profile-section {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
    
    .name {
        font-size: 2.5rem;
    }
    
    .title {
        font-size: 1.2rem;
    }
    
    .main-content {
        padding: 30px 20px;
    }
    
    .section-content {
        padding-left: 20px;
    }
    
    .experience-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
    
    .skills-grid,
    .certification-grid,
    .languages-grid {
        grid-template-columns: 1fr;
    }
}

@media print {
    body {
        background: white;
        padding: 0;
    }
    
    .container {
        box-shadow: none;
        border-radius: 0;
        max-width: 100%;
    }
    
    .header {
        background: #2c3e50 !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    
    .section {
        break-inside: avoid;
        margin-bottom: 30px;
    }
    
    .experience-item,
    .project-item {
        break-inside: avoid;
        margin-bottom: 20px;
    }
}
  `;
}

// Function to get CSS content from external file (fallback)
function getCSSContent() {
  // This is a fallback - in practice, we'll use the inline CSS
  return getInlineCSS();
}

// PDF Download Function - Direct text-based generation
function downloadPDF() {
  const downloadButton = document.querySelector('.download-button');
  const originalContent = downloadButton.innerHTML;
  
  // Show loading state
  downloadButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando PDF...';
  downloadButton.style.pointerEvents = 'none';
  
  try {
    // Create new PDF document
    const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
    
    // Set margins and starting position
    const margin = 20;
    const pageWidth = pdf.internal.pageSize.getWidth() - (margin * 2);
    let yPosition = margin;
    
    // Helper function to add text with word wrap
    function addText(text, fontSize = 10, isBold = false, isTitle = false) {
      if (isTitle) {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', 'bold');
      } else if (isBold) {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', 'bold');
      } else {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', 'normal');
      }
      
      const lines = pdf.splitTextToSize(text, pageWidth);
      
      // Check if we need a new page
      if (yPosition + (lines.length * (fontSize * 0.35)) > 270) {
        pdf.addPage();
        yPosition = margin;
      }
      
      pdf.text(lines, margin, yPosition);
      yPosition += lines.length * (fontSize * 0.35) + 3;
    }
    
    function addSpace(space = 5) {
      yPosition += space;
    }
    
    // Extract content from HTML
    const name = document.querySelector('.name')?.textContent || 'Willian Ruiz';
    const title = document.querySelector('.title')?.textContent || 'Desarrollador de Software';
    const summary = document.querySelector('.summary')?.textContent || '';
    
    // Header
    addText(name, 20, true, true);
    addText(title, 14, true);
    addSpace(10);
    
    // Contact Info
    addText('INFORMACIÓN DE CONTACTO', 12, true);
    const contactItems = document.querySelectorAll('.contact-item span');
    contactItems.forEach(item => {
      if (item.textContent.trim()) {
        addText('• ' + item.textContent.trim(), 10);
      }
    });
    addSpace(10);
    
    // Professional Summary
    addText('PERFIL PROFESIONAL', 12, true);
    addText(summary, 10);
    addSpace(10);
    
    // Skills
    addText('COMPETENCIAS TÉCNICAS', 12, true);
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
      const categoryTitle = category.querySelector('h4')?.textContent || '';
      const skills = Array.from(category.querySelectorAll('.skill-tag')).map(tag => tag.textContent).join(', ');
      
      if (categoryTitle && skills) {
        addText(categoryTitle + ':', 11, true);
        addText(skills, 10);
        addSpace(5);
      }
    });
    addSpace(5);
    
    // Experience
    addText('EXPERIENCIA PROFESIONAL', 12, true);
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
      const jobTitle = item.querySelector('.job-title')?.textContent || '';
      const company = item.querySelector('.company')?.textContent || '';
      const period = item.querySelector('.period')?.textContent || '';
      const location = item.querySelector('.location')?.textContent || '';
      const responsibilities = Array.from(item.querySelectorAll('li')).map(li => li.textContent);
      
      if (jobTitle) {
        addText(jobTitle, 11, true);
        if (company) addText(company + ' | ' + period + ' | ' + location, 10);
        responsibilities.forEach(resp => {
          addText('• ' + resp, 10);
        });
        addSpace(8);
      }
    });
    
    // Projects
    addText('PROYECTOS DESTACADOS', 12, true);
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
      const projectTitle = item.querySelector('.project-title')?.textContent || '';
      const projectDesc = item.querySelector('.project-description')?.textContent || '';
      const techs = Array.from(item.querySelectorAll('.tech-tag')).map(tag => tag.textContent).join(', ');
      
      if (projectTitle) {
        addText(projectTitle, 11, true);
        addText(projectDesc, 10);
        if (techs) addText('Tecnologías: ' + techs, 9);
        addSpace(8);
      }
    });
    
    // Education
    addText('FORMACIÓN ACADÉMICA', 12, true);
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach(item => {
      const degree = item.querySelector('.degree')?.textContent || '';
      const institution = item.querySelector('.institution')?.textContent || '';
      const period = item.querySelector('.period')?.textContent || '';
      const location = item.querySelector('.location')?.textContent || '';
      const description = item.querySelector('.education-description')?.textContent || '';
      
      if (degree) {
        addText(degree, 11, true);
        addText(institution + ' | ' + period + ' | ' + location, 10);
        if (description) addText(description, 10);
        addSpace(8);
      }
    });
    
    // Certifications
    addText('CERTIFICACIONES', 12, true);
    const certItems = document.querySelectorAll('.certification-item');
    certItems.forEach(item => {
      const certTitle = item.querySelector('h4')?.textContent || '';
      const provider = item.querySelector('.cert-provider')?.textContent || '';
      const year = item.querySelector('.cert-year')?.textContent || '';
      
      if (certTitle) {
        addText('• ' + certTitle + ' - ' + provider + ' (' + year + ')', 10);
      }
    });
    addSpace(10);
    
    // Languages
    addText('IDIOMAS', 12, true);
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => {
      const language = item.querySelector('.language')?.textContent || '';
      const level = item.querySelector('.level')?.textContent || '';
      
      if (language) {
        addText('• ' + language + ': ' + level, 10);
      }
    });
    
    // Save the PDF
    pdf.save('CV_Willian_Ruiz.pdf');
    
    // Restore button
    downloadButton.innerHTML = originalContent;
    downloadButton.style.pointerEvents = 'auto';
    
    // Show success notification
    showNotification('✅ CV descargado exitosamente como PDF');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Restore button
    downloadButton.innerHTML = originalContent;
    downloadButton.style.pointerEvents = 'auto';
    
    // Show error notification
    showNotification('❌ Error al generar el PDF: ' + error.message);
  }
}
