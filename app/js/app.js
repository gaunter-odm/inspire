
import { Swiper, Navigation, Autoplay } from 'swiper';
import Blazy from "blazy";

Swiper.use([Navigation, Autoplay]);

document.addEventListener('DOMContentLoaded', () => {

	// lazy lodaing
	new Blazy();

	new Swiper(".swiper-container", {
		speed: 1000,
		loop: true,
		spaceBetween: 30,
		autoplay: {
			delay: 5000
		},
		navigation: {
			prevEl: ".slider__button_prev",
			nextEl: ".slider__button_next"
		},
		breakpoints: {
			992: {
				spaceBetween: 0
			}
		}
	})

	const open = document.querySelector(".header__open");
	const close = document.querySelector(".header__close");
	const menu = document.querySelector(".header__nav");

	open.addEventListener("click", () => {
		menu.classList.add('header__nav_open')
		document.body.style.overflowY = 'hidden'
	})
	close.addEventListener("click", () => {
		menu.classList.remove('header__nav_open')
		document.body.style.overflowY = 'scroll'
	})

})
