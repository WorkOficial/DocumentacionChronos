document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainLinks = document.querySelectorAll('.main-link');
    const sections = document.querySelectorAll('.content-section');

    function setActiveSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const activeSection = document.getElementById(id);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }

    // Handle click on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            setActiveSection(sectionId);

            // Update active state in sidebar
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Handle expanding/collapsing main links
    mainLinks.forEach(link => {
        link.addEventListener('click', () => {
            const subNav = link.nextElementSibling;
            
            if (subNav && subNav.classList.contains('sub-nav')) {
                const isActive = link.classList.contains('active');
                
                // Close all other open sub-menus
                document.querySelectorAll('.main-link').forEach(otherLink => {
                    if (otherLink !== link && otherLink.classList.contains('active')) {
                        otherLink.classList.remove('active');
                        otherLink.nextElementSibling.classList.remove('show');
                    }
                });

                // Toggle the current one
                link.classList.toggle('active', !isActive);
                subNav.classList.toggle('show', !isActive);
            }
        });
    });

    // Set initial active section (Home)
    setActiveSection('home');
    document.querySelector('a[href="#home"]').classList.add('active');
});