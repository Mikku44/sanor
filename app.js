document.addEventListener("DOMContentLoaded", function () {
	// make it as accordion for smaller screens
	// if (window.innerWidth > 992) {

	// 	document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

	// 		everyitem.addEventListener('mouseover', function (e) {

	// 			let el_link = this.querySelector('a[data-bs-toggle]');

	// 			if (el_link != null) {
	// 				let nextEl = el_link.nextElementSibling;
	// 				el_link.classList.add('show');
	// 				nextEl.classList.add('show');
	// 			}

	// 		});
	// 		everyitem.addEventListener('mouseleave', function (e) {
	// 			let el_link = this.querySelector('a[data-bs-toggle]');

	// 			if (el_link != null) {
	// 				let nextEl = el_link.nextElementSibling;
	// 				el_link.classList.remove('show');
	// 				nextEl.classList.remove('show');
	// 			}


	// 		})
	// 	});

	// }
	// end if innerWidth
	//drag and drop
	const slider = document.querySelector('.items');
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		slider.classList.add('active');
		
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 3; //scroll-fast
		slider.scrollLeft = scrollLeft - walk;
		console.log(walk);
	});


	// scroll check
	window.addEventListener('scroll', (x) =>{
		if(window.scrollY > 300){
			(document.querySelector('#btn-up')).classList.remove('opacity-0');
		}else{
			(document.querySelector('#btn-up')).classList.add('opacity-0');
			
		}
	})
});

