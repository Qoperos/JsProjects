const bill = document.querySelector('.bill');
const rate = document.querySelector('.rate');
const err = document.querySelector('.error');
const btn = document.querySelector('button');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');


btn.addEventListener('click', (e) => {
    if (isNaN(bill.value)) {

        err.innerHTML = 'Please enter a number ONLY';
        err.style.display = "block";
        bill.style.border = "2px solid red";
        setTimeout(() => {
            err.style.display = "none";
            location.reload();
        }, 3000);
        
    } else if (bill.value == '') {

        err.innerHTML = "Sorry input filled can't be Empty!";
        err.style.display = "block";
        bill.style.border = "2px solid red";
        setTimeout(() => {
            err.style.display = "none";
            location.reload();
        }, 3000);
    } else {
        let tipAmt = (bill.value) * (rate.value);
        let totalBill = Number(bill.value) + tipAmt;

        tip.innerHTML = `Tip Amount : $${tipAmt}`;
        total.innerHTML = `Total Bill : $${totalBill}`;
    }
})


