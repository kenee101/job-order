export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
export const showAlert = (type, msg, time = 5) => {
  hideAlert();
  let markup;
  if (type === 'success')
    markup = `<div class="alert alert--success">${msg}</div>`;
  if (type === 'error') markup = `<div class="alert alert--error">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, time * 1000);
};
