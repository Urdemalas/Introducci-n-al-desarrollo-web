// Form validation for Contact section
document.addEventListener('DOMContentLoaded', function() {
	var contactForm = document.querySelector('#contact form');
	if (contactForm) {
		contactForm.addEventListener('submit', function(e) {
			var name = contactForm.querySelector('#name');
			var email = contactForm.querySelector('#email');
			var message = contactForm.querySelector('#message');
			var valid = true;
			var errorMsg = '';
			if (!name.value.trim()) {
				valid = false;
				errorMsg += 'Por favor ingrese su nombre.\n';
			}
			if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
				valid = false;
				errorMsg += 'Por favor ingrese un correo electrónico válido.\n';
			}
			if (!message.value.trim()) {
				valid = false;
				errorMsg += 'Por favor ingrese un mensaje.\n';
			}
			if (!valid) {
				e.preventDefault();
				alert(errorMsg);
			}
		});
	}
});
// Lightbox effect for project images
document.addEventListener('DOMContentLoaded', function() {
	const projectImages = document.querySelectorAll('.project-img');
	const lightboxModal = document.getElementById('lightbox-modal');
	const lightboxImg = document.getElementById('lightbox-img');
	const lightboxClose = document.getElementById('lightbox-close');

	projectImages.forEach(img => {
		img.addEventListener('click', function() {
			lightboxImg.src = this.src;
			lightboxModal.style.display = 'flex';
		});
	});

	lightboxClose.addEventListener('click', function() {
		lightboxModal.style.display = 'none';
		lightboxImg.src = '';
	});

	lightboxModal.addEventListener('click', function(e) {
		if (e.target === lightboxModal) {
			lightboxModal.style.display = 'none';
			lightboxImg.src = '';
		}
	});
});
function filterProjects(category) {
	const projects = document.querySelectorAll('#projects .projects-list article');
	projects.forEach(project => {
		const projectCategory = project.getAttribute('data-category');
		if (!category || category === 'all' || projectCategory === category) {
			project.style.display = '';
		} else {
			project.style.display = 'none';
		}
	});
}
document.addEventListener('DOMContentLoaded', function() {
	// ...existing code...

	// Smooth scroll for navigation links
	document.querySelectorAll('nav[role="navigation"] a[href^="#"]').forEach(function(link) {
		link.addEventListener('click', function(e) {
			const targetId = this.getAttribute('href').slice(1);
			const target = document.getElementById(targetId) || document.querySelector('.' + targetId);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
				// Opcional: cerrar menú móvil después de hacer clic
				const navMenu = document.getElementById('main-menu');
				if (navMenu && navMenu.classList.contains('open')) {
					navMenu.classList.remove('open');
					const navToggle = document.querySelector('.nav-toggle');
					if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
				}
			}
		});
	});
});
document.addEventListener('DOMContentLoaded', function() {
	const navToggle = document.querySelector('.nav-toggle');
	if (navToggle) {
		navToggle.addEventListener('click', toggleMenu);
	}
});
function toggleMenu() {
	const navToggle = document.querySelector('.nav-toggle');
	const navMenu = document.getElementById('main-menu');
	const expanded = navToggle.getAttribute('aria-expanded') === 'true';
	navToggle.setAttribute('aria-expanded', !expanded);
	navMenu.classList.toggle('open');
}
