const totalMoney = document.getElementById('total-money');

// deposit
const depositButton = document.getElementById('deposit-btn').addEventListener('click', () => {
    //find deposit money in input filed

    const depostField = document.getElementById('deposit');
    const deposit = depostField.value;
    //convert string to number

    const newDeposit = parseFloat(deposit);
    //catch pervious deposit money and convert it string to number

    const previousDeposit = document.getElementById('deposit-money');
    const catchPreviousDeposit = previousDeposit.innerText
    const previousDeposite1 = parseFloat(catchPreviousDeposit);
    //calculate total deposit

    const totalDeposit = previousDeposite1 + newDeposit;
    previousDeposit.innerText = totalDeposit;

    //update total money
    //first catch total money and convert it string to number

    const getTotalMoney = totalMoney.innerText;
    const total = parseFloat(getTotalMoney);

    // calcualte and update all money
    const newtotal = total + newDeposit;
    totalMoney.innerText = newtotal;
    depostField.value = '';
});

// widthdraw  money

const widthdrawButton = document.getElementById('widthdraw-btn').addEventListener('click', () => {
    //find deposit money in input filed

    const withdrawField = document.getElementById('widthdraw');
    const widthdraw = withdrawField.value;
    //conver string to number

    const newWidthdraw = parseFloat(widthdraw);
    //finde total money and convet string to number

    const getTotalMoney1 = totalMoney.innerText;
    const total1 = parseFloat(getTotalMoney1);
    //check total or validity check

    if (total1 >= newWidthdraw) {
        //calculate the final money

        const newtotalAfterWidthdraw = total1 - newWidthdraw;
        totalMoney.innerText = newtotalAfterWidthdraw;
        // calculate total widthdraw money
        //1.first catch previous widthdraw history
        //2.convert string to number
        //3.calculate previous with new deposit
        //4.update total widthdraw
        const withdrawMoney = document.getElementById('withdraw-money');
        const initialWidthDraw = withdrawMoney.innerText;
        const initialWidthDraw1 = parseFloat(initialWidthDraw);
        const totalWithdraw = initialWidthDraw1 + newWidthdraw;
        withdrawMoney.innerText = totalWithdraw;
    } else {
        alert('Sorry you have does not enough money')
    }
    withdrawField.value = ''
});
