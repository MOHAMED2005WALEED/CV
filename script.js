// ============================================
// COMPLETE SCRIPT.JS - ALL FEATURES
// ============================================

// Certificate Data
const certificates = [
    { title: "Professional Practice in Software Development", issuer: "University of Moratuwa", image: "uploads/Professional_Practice_in_Software_Development_E-Certificate.png", pdf: "uploads/Professional_Practice_in_Software_Development_E-Certificate.pdf" },
    { title: "Server-side Web Programming", issuer: "University of Moratuwa", image: "uploads/Server-side_Web_Programming_E-Certificate.png", pdf: "uploads/Server-side_Web_Programming_E-Certificate.pdf" },
    { title: "Front-End Web Development", issuer: "University of Moratuwa", image: "uploads/Front-End_Web_Development_E-Certificate.png", pdf: "uploads/Front-End_Web_Development_E-Certificate.pdf" },
    { title: "Web Design for Beginners", issuer: "University of Moratuwa", image: "uploads/Web_Design_for_Beginners_E-Certificate.png", pdf: "uploads/Web_Design_for_Beginners_E-Certificate.pdf" },
    { title: "Python Programming", issuer: "University of Moratuwa", image: "uploads/Python_Programming_E-Certificate.png", pdf: "uploads/Python_Programming_E-Certificate.pdf" },
    { title: "Python for Beginners", issuer: "University of Moratuwa", image: "uploads/Python_for_Beginners_E-Certificate.png", pdf: "uploads/Python_for_Beginners_E-Certificate.pdf" },
    { title: "Agile Project Management", issuer: "University of Moratuwa", image: "uploads/Agile_Project_Management_E-Certificate.png", pdf: "uploads/Agile_Project_Management_E-Certificate.pdf" },
    { title: "Foundations of Project Management", issuer: "University of Moratuwa", image: "uploads/Foundations_of_Project_Management_E-Certificate.png", pdf: "uploads/Foundations_of_Project_Management_E-Certificate.pdf" },
    { title: "Project Scope and Schedule Management", issuer: "University of Moratuwa", image: "uploads/Project_Scope_and_Schedule_Management_E-Certificate.png", pdf: "uploads/Project_Scope_and_Schedule_Management_E-Certificate.pdf" },
    { title: "Project Contract Law and Management", issuer: "University of Moratuwa", image: "uploads/Project_Contract_Law_and_Management_E-Certificate.png", pdf: "uploads/Project_Contract_Law_and_Management_E-Certificate.pdf" },
    { title: "Project Communication & Stakeholder Management", issuer: "University of Moratuwa", image: "uploads/Project_Communication_and_Stakeholder_Management_E-Certificate.png", pdf: "uploads/Project_Communication_and_Stakeholder_Management_E-Certificate.pdf" },
    { title: "ISC2 Candidate", issuer: "ISC2", image: "uploads/isc2-candidate.png", pdf: "uploads/isc2-candidate.png" },
    { title: "CC Domain 1: Security Principles", issuer: "ISC2", image: "uploads/CC Domain 1 Security Principles.png", pdf: "uploads/CC Domain 1 Security Principles.pdf" },
    { title: "CC Domain 2: Incident Response, BC & DR", issuer: "ISC2", image: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.png", pdf: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.pdf" },
    { title: "CC Domain 3: Access Control Concepts", issuer: "ISC2", image: "uploads/CC Domain 3 Access Controls Concepts.png", pdf: "uploads/CC Domain 3 Access Controls Concepts.pdf" },
    { title: "CC Domain 4: Network Security", issuer: "ISC2", image: "uploads/CC Domain 4 Network Security.png", pdf: "uploads/CC Domain 4 Network Security.pdf" },
    { title: "CC Domain 5: Security Operations", issuer: "ISC2", image: "uploads/CC Domain 5 Securitys Operations.png", pdf: "uploads/CC Domain 5 Securitys Operations.pdf" },
    { title: "CC Course Pre-assessment", issuer: "ISC2", image: "uploads/CC Course Pre-assessment.png", pdf: "uploads/CC Course Pre-assessment.pdf" },
    { title: "CC Course Conclusion & Final Assessment", issuer: "ISC2", image: "uploads/CCCourse Conclusion & Finalt Assessment.png", pdf: "uploads/CCCourse Conclusion & Finalt Assessment.pdf" },
    { title: "Certified in Cybersecurity (CC)", issuer: "ISC2", image: "uploads/CCCertified in Cybersecurity (CC).png", pdf: "uploads/CCCertified in Cybersecurity (CC).pdf" },
    { title: "What Is Generative AI?", issuer: "LinkedIn Learning", image: "uploads/CertificateOfCompletion_What Is Generative AI.png", pdf: "uploads/CertificateOfCompletion_What Is Generative AI.pdf" },
    { title: "Generative AI: Evolution of Online Search", issuer: "LinkedIn Learning", image: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.png", pdf: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.pdf" },
    { title: "Streamlining Work with Microsoft Copilot", issuer: "LinkedIn Learning", image: "uploads/CertificateOfCompletion_Streamlining Your Work with Microsoft Copilot.png", pdf: "uploads/Streamlining Your Work with Microsoft Copilot.pdf" },
    { title: "Introduction to Artificial Intelligence", issuer: "LinkedIn Learning", image: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.png", pdf: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.pdf" },
    { title: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", image: "uploads/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.png", pdf: "uploads/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf" },
    { title: "Linux Unhatched", issuer: "Cisco", image: "uploads/LinuxUnhatched20241203-26-aeebkl.png", pdf: "uploads/LinuxUnhatched20241203-26-aeebkl.pdf" },
    { title: "SLIIT University Certificate", issuer: "SLIIT", image: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2024-11-27.png", pdf: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2024-11-27.pdf" },
    { title: "Computer Hardware Basics", issuer: "Cisco", image: "uploads/certificate_wajiwaleed-gmail-com_c57c725d-02bf-4dfd-b996-45fcb40663d5.png", pdf: "uploads/certificate_wajiwaleed-gmail-com_c57c725d-02bf-4dfd-b996-45fcb40663d5.pdf" },
    { title: "CCNA: Introduction to Networks", issuer: "Cisco", image: "uploads/certificate_wajiwaleed-gmail-com_b039ef56-0375-4342-8889-f907ba316858 (1).png", pdf: "uploads/CCNAITNUpdated20250723-31-ovgeq6.pdf" },
    { title: "CCNA: Switching, Routing, Wireless", issuer: "Cisco", image: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.png", pdf: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.pdf" }
];

// Project Photos Data
const projectPhotos = {
    nvr: [
        { src: 'projects/nvr1.jpg', title: 'Live Monitoring Display', desc: 'Multi-view surveillance feed' },
        { src: 'projects/nvr2.jpg', title: 'PTZ Camera Hardware', desc: 'Pan-tilt-zoom camera with IR LEDs' },
        { src: 'projects/nvr3.jpg', title: 'Network Configuration', desc: 'NVR network settings with QR code' },
        { src: 'projects/nvr4.jpg', title: 'Configuration Interface', desc: 'Configuring NVR network parameters' },
        { src: 'projects/nvr5.jpg', title: 'Mobile Remote Access', desc: 'Smartphone displaying live feeds' },
        { src: 'projects/nvr6.jpg', title: 'Lab Testing Setup', desc: 'Students testing NVR system' },
        { src: 'projects/nvr7.jpg', title: 'System Architecture', desc: 'Network topology diagram' },
        { src: 'projects/nvr8.jpg', title: 'Multi-Camera Feed', desc: 'Split-screen surveillance display' },
        { src: 'projects/nvr9.jpg', title: 'Project Overview', desc: 'Complete system documentation' }
    ],
    accesspoint: [
        { src: 'projects/ap1.jpg', title: 'Dual Configuration Display', desc: 'Linksys web interface and CLI testing' },
        { src: 'projects/ap2.jpg', title: 'Linksys Web Admin', desc: 'Wireless AP configuration interface' },
        { src: 'projects/ap3.jpg', title: 'Connectivity Verification', desc: 'Ping tests and Linksys config' },
        { src: 'projects/ap4.jpg', title: 'Complete Testing Setup', desc: 'Workstation with router display' }
    ],
    ccnatest: [
        { src: 'projects/ccna1.jpg', title: 'Router CLI Configuration', desc: 'VLAN and routing configuration' },
        { src: 'projects/ccna2.jpg', title: 'Physical Lab Infrastructure', desc: 'Cisco routers and switches' },
        { src: 'projects/ccna3.jpg', title: 'Dual-Monitor Lab Setup', desc: 'Terminal windows showing configs' },
        { src: 'projects/ccna4.jpg', title: 'CCNA Skills Assessment', desc: 'CCNAv7 SRWE topology docs' }
    ],
    cctv: [
        { src: 'projects/dvr1.jpg', title: 'Night Monitoring Display', desc: 'Live CCTV feed on monitor' },
        { src: 'projects/dvr2.jpg', title: 'System Configuration', desc: 'Configuring DVR settings' },
        { src: 'projects/dvr3.jpg', title: 'Mobile Integration', desc: 'Testing mobile app connectivity' },
        { src: 'projects/dvr4.jpg', title: 'Camera Installation', desc: 'Installing PTZ dome camera' },
        { src: 'projects/dvr5.jpg', title: 'Multi-Channel Display', desc: 'Multiple camera feed grid' }
    ],
    dhcprelay: [
        { src: 'projects/dhcp1.jpg', title: 'Multi-Router Topology', desc: 'Cisco routers stacked for DHCP relay' },
        { src: 'projects/dhcp2.jpg', title: 'DHCP Server Config', desc: 'Windows Server DHCP console' },
        { src: 'projects/dhcp3.jpg', title: 'Dual-Workstation Setup', desc: 'Complete lab with server and clients' },
        { src: 'projects/dhcp4.jpg', title: 'Network Verification', desc: 'Testing DHCP relay functionality' }
    ],
    server: [
        { src: 'projects/server1.jpg', title: 'Server Lab Setup', desc: 'Physical server infrastructure' },
        { src: 'projects/server2.jpg', title: 'Network Topology Design', desc: 'WDS and DHCP architecture' },
        { src: 'projects/server3.jpg', title: 'RAID Storage System', desc: 'HP Smart Array RAID controller' },
        { src: 'projects/server4.jpg', title: 'Assessment Documentation', desc: 'NVTI Level 4 practical requirements' },
        { src: 'projects/server5.jpg', title: 'WDS Configuration', desc: 'Windows Deployment Services steps' },
        { src: 'projects/server6.jpg', title: 'Network Planning', desc: 'Server topology with IP scheme' },
        { src: 'projects/server7.jpg', title: 'RAID Array Status', desc: 'HP Array showing RAID 1' },
        { src: 'projects/server8.jpg', title: 'System Verification', desc: 'Testing server connectivity' },
        { src: 'projects/server9.jpg', title: 'Complete Lab Setup', desc: 'Fully deployed server lab' }
    ],
    cisco: [
        { src: 'projects/cisco1.jpg', title: 'Multi-Station Router Lab', desc: 'Cisco router lab setup' },
        { src: 'projects/cisco2.jpg', title: 'Mobile SSH Access', desc: 'Remote router configuration' },
        { src: 'projects/cisco3.jpg', title: 'Router Configuration Lab', desc: 'Multi-router topology' },
        { src: 'projects/cisco4.jpg', title: 'Network Documentation', desc: 'Router config commands' },
        { src: 'projects/cisco5.jpg', title: 'Windows Server Integration', desc: 'Cisco with Windows Server' }
    ],
    mac: [
        { src: 'projects/mac1.jpg', title: 'iMac Disassembly', desc: 'Opening iMac case' },
        { src: 'projects/mac2.jpg', title: 'Hardware Diagnosis', desc: 'Inspecting internal components' },
        { src: 'projects/mac3.jpg', title: 'Workspace Overview', desc: 'Complete repair station' },
        { src: 'projects/mac4.jpg', title: 'Power Filter Module', desc: 'EMI filter component' }
    ],
    isp: [
        { src: 'projects/isp1.jpg', title: 'Network Topology Design', desc: 'Packet Tracer ISP simulation' },
        { src: 'projects/isp2.jpg', title: '4G Router Integration', desc: 'Physical lab with 4G router' },
        { src: 'projects/isp3.jpg', title: 'Multi-Workstation Lab', desc: 'Complete ISP simulation lab' },
        { src: 'projects/isp4.jpg', title: 'Configuration Testing', desc: 'Router CLI configuration' }
    ],
    asd: [
        { src: 'projects/asd1.jpg', title: 'Equipment Delivery', desc: 'Alta wireless AP equipment' },
        { src: 'projects/asd2.jpg', title: 'Network Infrastructure', desc: 'Installing network switch' },
        { src: 'projects/asd3.jpg', title: 'Access Point Installation', desc: 'Mounting wireless AP' },
        { src: 'projects/asd4.jpg', title: 'Equipment Installation', desc: 'Installing on wall' },
        { src: 'projects/asd5.jpg', title: 'Team Installation Work', desc: 'Ceiling-mounted equipment' },
        { src: 'projects/asd6.jpg', title: 'Infrastructure Setup', desc: 'Network infrastructure progress' },
        { src: 'projects/asd7.jpg', title: 'Cable Management', desc: 'Structured cabling and trunking' },
        { src: 'projects/asd8.jpg', title: 'Lab Completion', desc: 'Completed network lab' },
        { src: 'projects/asd9.jpg', title: 'Project Planning', desc: 'Team coordinating design' },
        { src: 'projects/asd10.jpg', title: 'Cable Installation', desc: 'CAT6 cabling along walls' },
        { src: 'projects/asd11.jpg', title: 'AP Configuration', desc: 'Configuring wireless AP' },
        { src: 'projects/asd12.jpg', title: 'Router Configuration', desc: 'Team configuring router' },
        { src: 'projects/asd13.jpg', title: 'System Testing', desc: 'Testing network equipment' },
        { src: 'projects/asd14.jpg', title: 'Outdoor Cable Work', desc: 'External network cabling' },
        { src: 'projects/asd15.jpg', title: 'Cable Management', desc: 'Organizing network cables' },
        { src: 'projects/asd16.jpg', title: 'Equipment Mounting', desc: 'Installing at height' },
        { src: 'projects/asd17.jpg', title: 'Cable Routing', desc: 'Routing network cables' },
        { src: 'projects/asd18.jpg', title: 'Switch Installation', desc: 'TP-Link Gigabit switch' },
        { src: 'projects/asd19.jpg', title: 'Network Documentation', desc: 'CAT6 UTP specifications' },
        { src: 'projects/asd20.jpg', title: 'Alta Access Point', desc: 'AP ready for deployment' }
    ],
    nat: [
        { src: 'projects/nat1.jpg', title: 'Network Lab Setup', desc: 'Cisco router and switch topology' },
        { src: 'projects/nat2.jpg', title: 'OSPF Network Design', desc: 'Multi-area OSPF in Packet Tracer' },
        { src: 'projects/nat3.jpg', title: 'Lab Configuration', desc: 'Physical network lab' },
        { src: 'projects/nat4.jpg', title: 'Router Verification', desc: 'Checking OSPF and NAT config' },
        { src: 'projects/nat5.jpg', title: 'Completed Lab Topology', desc: 'Fully configured routing lab' }
    ]
};

// Global Variables
let currentCertIndex = 0;
let currentProject = '';
let currentPhotoIndex = 0;
let currentTestimonial = 0;
let testimonialInterval;

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const saved = localStorage.getItem('portfolio-theme');
    
    if (saved) {
        document.body.setAttribute('data-theme', saved);
        icon.className = saved === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    toggle.addEventListener('click', () => {
        const isLight = document.body.getAttribute('data-theme') === 'light';
        const newTheme = isLight ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        icon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// ============================================
// TYPING ANIMATION
// ============================================
const typingTexts = ["Full-Stack Web Developer", "Network Technician", "CCNA Student", "Tech Enthusiast", "Problem Solver"];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeText() {
    const el = document.querySelector('.typing-text');
    if (!el) return;
    const current = typingTexts[textIndex];
    
    if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === current.length) { speed = 2000; isDeleting = true; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % typingTexts.length; speed = 500; }
    
    setTimeout(typeText, speed);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const sections = document.querySelectorAll('.modern-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('fade-in'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    sections.forEach(s => observer.observe(s));
}

// ============================================
// SMOOTH SCROLL & SCROLL TO TOP
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initScrollToTop() {
    const btn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => { btn.classList.toggle('visible', window.pageYOffset > 300); });
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ============================================
// CERTIFICATE CAROUSEL
// ============================================
function displayCertificate(index) {
    const display = document.querySelector('.certificate-display');
    const cert = certificates[index];
    display.innerHTML = `<h2>${cert.title}</h2><p style="color:var(--text-secondary);margin-bottom:20px;">${cert.issuer}</p><img src="${cert.image}" alt="${cert.title}"><a href="${cert.pdf}" target="_blank"><i class="fas fa-download"></i> Download</a>`;
    document.querySelector('.current-cert').textContent = index + 1;
    document.querySelector('.total-certs').textContent = certificates.length;
    document.querySelectorAll('.carousel-thumbnails img').forEach((t, i) => t.classList.toggle('active', i === index));
}

function navigateCert(dir) {
    currentCertIndex += dir;
    if (currentCertIndex < 0) currentCertIndex = certificates.length - 1;
    else if (currentCertIndex >= certificates.length) currentCertIndex = 0;
    displayCertificate(currentCertIndex);
}

function initCertificateCarousel() {
    const container = document.querySelector('.carousel-thumbnails');
    certificates.forEach((cert, i) => {
        const img = document.createElement('img');
        img.src = cert.image; img.alt = cert.title;
        img.onclick = () => { currentCertIndex = i; displayCertificate(i); };
        container.appendChild(img);
    });
    displayCertificate(0);
}

// ============================================
// PROJECT FILTER & MODAL
// ============================================
function initProjectFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.project-item');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            items.forEach(item => {
                item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
            });
        });
    });
}

function openProjectModal(project, index) {
    const modal = document.getElementById('projectModal');
    currentProject = project; currentPhotoIndex = index;
    const photos = projectPhotos[project];
    const photo = photos[index];
    
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.desc;
    document.getElementById('currentPhoto').textContent = index + 1;
    document.getElementById('totalPhotos').textContent = photos.length;
    
    const thumbs = document.getElementById('modalThumbnails');
    thumbs.innerHTML = '';
    photos.forEach((p, i) => {
        const img = document.createElement('img');
        img.src = p.src; img.alt = p.title;
        if (i === index) img.classList.add('active');
        img.onclick = () => selectProjectPhoto(i);
        thumbs.appendChild(img);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeProjectPhoto(dir) {
    const photos = projectPhotos[currentProject];
    currentPhotoIndex += dir;
    if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
    else if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;
    selectProjectPhoto(currentPhotoIndex);
}

function selectProjectPhoto(index) {
    currentPhotoIndex = index;
    const photo = projectPhotos[currentProject][index];
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.desc;
    document.getElementById('currentPhoto').textContent = index + 1;
    document.querySelectorAll('.modal-thumbnails img').forEach((t, i) => t.classList.toggle('active', i === index));
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================
function initTestimonials() {
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToTestimonial(parseInt(dot.dataset.index));
            resetAutoSlide();
        });
    });
    startAutoSlide();
    
    const container = document.querySelector('.testimonials-container');
    if (container) {
        container.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
        container.addEventListener('mouseleave', startAutoSlide);
    }
}

function goToTestimonial(index) {
    const slider = document.getElementById('testimonialSlider');
    if (!slider) return;
    currentTestimonial = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.testimonial-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function changeTestimonial(dir) {
    let newIndex = currentTestimonial + dir;
    if (newIndex < 0) newIndex = 3;
    else if (newIndex > 3) newIndex = 0;
    goToTestimonial(newIndex);
    resetAutoSlide();
}

function startAutoSlide() { testimonialInterval = setInterval(() => changeTestimonial(1), 5000); }
function resetAutoSlide() { clearInterval(testimonialInterval); startAutoSlide(); }

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
	// In initContactForm() function:

	emailjs.init("vm4pR01WuWObBIS3W");  
	// ↑ Replace with your Public Key

	await emailjs.send(
	    'service_yvkz2tu',    // ← Replace with Service ID
	    'template_qc0v5uk',   // ← Replace with Template ID
	    formData
	);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const status = document.getElementById('formStatus');
        const btnText = btn.querySelector('.btn-text');
        const btnLoading = btn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        btn.disabled = true;
        
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Open email client (simple method)
        const mailtoLink = `mailto:wajiwaleed@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            status.className = 'form-status success';
            status.innerHTML = '<i class="fas fa-check-circle"></i> Opening your email client...';
            btnText.style.display = 'inline-flex';
            btnLoading.style.display = 'none';
            btn.disabled = false;
            form.reset();
            setTimeout(() => { status.className = 'form-status'; }, 5000);
        }, 1000);
    });
}

// ============================================
// NAV HIGHLIGHT
// ============================================
function highlightActiveNav() {
    const sections = document.querySelectorAll('.modern-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('projectModal');
    const isModalOpen = modal && modal.classList.contains('active');
    
    if (isModalOpen) {
        if (e.key === 'Escape') closeProjectModal();
        else if (e.key === 'ArrowLeft') changeProjectPhoto(-1);
        else if (e.key === 'ArrowRight') changeProjectPhoto(1);
    } else {
        if (e.key === 'ArrowLeft') navigateCert(-1);
        else if (e.key === 'ArrowRight') navigateCert(1);
    }
});

// ============================================
// INITIALIZE
// ============================================
function init() {
    console.log('🚀 Initializing Portfolio...');
    initThemeToggle();
    setTimeout(typeText, 500);
    initScrollAnimations();
    initSmoothScroll();
    initScrollToTop();
    initCertificateCarousel();
    initProjectFilter();
    initTestimonials();
    initContactForm();
    highlightActiveNav();
    console.log('✅ Portfolio Initialized Successfully!');
    console.log('📊 Total Projects: ' + Object.keys(projectPhotos).length);
    console.log('🎓 Total Certificates: ' + certificates.length);
    console.log('🌙 Theme: ' + (document.body.getAttribute('data-theme') || 'dark'));
}

// ============================================
// KEYBOARD NAVIGATION - UPDATE
// ============================================
// Update your existing keyboard navigation to include testimonials:

document.addEventListener('keydown', (e) => {
    const projectModal = document.getElementById('projectModal');
    const isModalOpen = projectModal && projectModal.classList.contains('active');
    
    // Certificate carousel navigation (when modal is closed)
    if (!isModalOpen) {
        if (e.key === 'ArrowLeft') {
            navigateCert(-1);
        } else if (e.key === 'ArrowRight') {
            navigateCert(1);
        }
    }
    
    // Project modal navigation
    if (isModalOpen) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            changeProjectPhoto(-1);
        } else if (e.key === 'ArrowRight') {
            changeProjectPhoto(1);
        }
    }
    
    // Testimonial navigation with T key
    if (e.key === 't' || e.key === 'T') {
        changeTestimonial(1);
    }
});