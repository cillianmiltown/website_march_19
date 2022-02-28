

function clearActiveStatesInTableOfContents() {
    document.querySelectorAll('aside nav li').forEach((section) => {
        section.classList.remove('active');
    });
}



window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`#TableOfContents li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`#TableOfContents li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});

});

