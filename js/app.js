// console.log("testing")

window.onload = function () {
	let emailState = false

	let emailModal = document.getElementsByClassName('email-modal')[0]

	let closeButton = document.getElementsByClassName('email-modal__close-btn')[0]

	let emailInput = document.getElementsByClassName('email-modal__input')[0]

	let emailButton = document.getElementsByClassName('email-modal__button')[0]

	let discountOffer = document.getElementsByClassName(
		'email-modal__decline-offer',
	)[0]

	let confirmationMessage = document.getElementsByClassName('email-thank')[0]

	let showModal = () => {
		document.body.addEventListener('mouseleave', () => {
			if (emailState == false) {
				emailModal.classList.add('email-modal--visible')
				emailState = true
			}
		})
	}

	let closeModalWithButton = () => {
		closeButton.addEventListener('click', () => {
			emailModal.classList.remove('email-modal--visible')
		})
	}

	let closeModalWithLink = () => {
		discountOffer.addEventListener('click', () => {
			emailModal.classList.remove('email-modal--visible')
		})
	}

	let closeModalWithTimer = () => {
		setTimeout(function () {
			emailModal.classList.remove('email-modal--visible')
		}, 4000)
	}

	let submitEmailWithButton = () => {
		emailButton.addEventListener('click', () => {
			if (emailIsValid(emailInput.value)) {
				removeError()
				removeActive()
				addSuccess()
				closeModalWithTimer()
			} else {
				addError()
				addActive()
			}
		})
	}

	let addError = () => {
		document
			.getElementsByClassName('email-modal__form-group')[0]
			.classList.add('email-modal__form-group--error')
	}

	let removeError = () => {
		document
			.getElementsByClassName('email-modal__form-group')[0]
			.classList.remove('email-modal__form-group--error')
	}

	let addActive = () => {
		document
			.getElementsByClassName('email-modal__error-message')[0]
			.classList.add('email-modal__error-message--active')
	}

	let removeActive = () => {
		document
			.getElementsByClassName('email-modal__error-message')[0]
			.classList.remove('email-modal__error-message--active')
	}

	let addSuccess = () => {
		confirmationMessage.classList.add('email-thank--success')
	}

	let createModal = () => {
		showModal()
		closeModalWithButton()
		closeModalWithLink()
		submitEmailWithButton()
	}

	let emailIsValid = (email) => {
		return /\S+@\S+\.\S+/.test(email)
	}

	createModal()
}
