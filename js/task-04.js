let counterValue = 0;
const decrBtn = document.querySelector('[data-action="decrement"]');
const inkrBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value')
console.log(decrBtn);
console.log(inkrBtn);
console.log(value);

inkrBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})

decrBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

