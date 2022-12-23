const contactData = document.querySelectorAll('.store');
const storedData = {
  name: '',
  email: '',
  message: '',
};
contactData.forEach((input) => {
  input.addEventListener('input', () => {
    storedData[input.name] = input.value;
    storedData[input.email] = input.value;
    storedData[input.message] = input.value;
    localStorage.setItem('info', JSON.stringify(storedData));
  });
});
const infoStored = JSON.parse(localStorage.getItem('info'));
if (infoStored) {
  contactData.forEach((element) => {
    element.value = infoStored[element.name];
  });
}