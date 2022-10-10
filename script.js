const input1 = document.querySelector(".calc1");
const input2 = document.querySelector(".calc2");

const btnSuma = document.querySelector(".calcButtonSuma");
const btnResta = document.querySelector(".calcButtonResta");
const btnMulti = document.querySelector(".calcButtonMulti");
const btnDivi = document.querySelector(".calcButtonDivi");

const pResult = document.querySelector(".result");

console.log("Tu script está linkeado correctamente ;)")

function buttonCalcSuma () {
    const numValue1 = Number(input1.value),
          numValue2 = Number(input2.value);

    console.log(numValue1 + numValue2)
    const resultado = numValue1 + numValue2;
    pResult.innerText = resultado;
};

function buttonCalcResta () {
    const numValue1 = Number(input1.value),
          numValue2 = Number(input2.value);

    console.log(numValue1 - numValue2)
    const resultado = numValue1 - numValue2;
    pResult.innerText = resultado;
};

function buttonCalcMulti () {
    const numValue1 = Number(input1.value),
          numValue2 = Number(input2.value);

    console.log(numValue1 * numValue2)
    const resultado = numValue1 * numValue2;
    pResult.innerText = resultado;
};

function buttonCalcDivi () {
    const numValue1 = Number(input1.value),
          numValue2 = Number(input2.value);

    console.log(numValue1 / numValue2)
    const resultado = numValue1 / numValue2;
    pResult.innerText = resultado;
};