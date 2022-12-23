const formData = document.querySelectorAll('.inputStore');
const storedData = {
  name: '',
  email: '',
  message: '',
};
formData.forEach((input) => {
  input.addEventListener('input', () => {
    storedData[input.name] = input.value;
    storedData[input.email] = input.value;
    storedData[input.message] = input.value;
    localStorage.setItem('infoData', JSON.stringify(storedData));
  });
});
const localData = JSON.parse(localStorage.getItem('infoData'));
if (localData) {
  formData.forEach((element) => {
    element.value = localData[element.name];
  });
}