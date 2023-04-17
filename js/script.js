/* Sliders */
jQuery(document).ready(function(){
							// case studies slider
							jQuery('.case_studies_slider').slick({

								infinite: true,
								slidesToShow: 3,
								slidesToScroll: 1,
								dots: false,
								prevArrow: false,
								nextArrow: false,

								responsive: [
								{
									breakpoint: 991,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 1,
									}
								},
								{
									breakpoint: 767,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1
									}
								}
								]
							});
						});
const videoBtn = document.querySelector('#video-button');
const videoPicture = document.querySelector('.video_picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
		videoWrapper.classList.remove('video-darker');
		videoBtn.classList.add('hidden');
		video.play();
	} else {
		videoWrapper.classList.add('video-darker');
		videoBtn.classList.remove('hidden');
		video.pause();
	}
});