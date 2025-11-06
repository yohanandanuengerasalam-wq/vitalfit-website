// script.js — VitalFit common JS

document.addEventListener('DOMContentLoaded', () => {
  // fill year placeholders
  document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());
});

// Registration form validation
function validateForm() {
  const name = document.getElementById('name')?.value.trim() || '';
  const email = document.getElementById('email')?.value.trim() || '';
  const phone = document.getElementById('phone')?.value.trim() || '';
  const classType = document.getElementById('classType')?.value || '';

  if (!name || !email || !phone || !classType) {
    alert('Please fill all required fields.');
    return false;
  }

  // email regex (digit-by-digit approach)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    document.getElementById('email').focus();
    return false;
  }

  // phone digits validation
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 9) {
    alert('Please enter a valid phone number (at least 9 digits).');
    document.getElementById('phone').focus();
    return false;
  }

  // show Bootstrap modal (if available)
  const modalEl = document.getElementById('successModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  } else {
    alert('Registration received. Thank you!');
  }

  // log submission (for instructor/demo)
  console.log('Registration:', { name, email, phone, classType, datePref: document.getElementById('datePref')?.value || '' });

  // reset form
  const form = document.getElementById('trialForm');
  if (form) form.reset();

  return false; // prevent actual submit
}
