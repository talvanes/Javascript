/**
 * @author talba
 * Script que conterá as operações para uma calculadora simples (adição, subtração, multiplicação e divisão)
 * 
 */
function atualizaCalculo() {
	// obter o formulário
	var formulario = document.getElementById("calc1");
	// obter a saída (output)
	var saida = formulario.elements["z"];
	// obter as entradas (input)
	var num1 = parseFloat(formulario.elements["x"].value);
	var num2 = parseFloat(formulario.elements["y"].value);
	// obter o operador
	var operador = parseInt(formulario.elements["op"].value);
	// realizar o cálculo, selecionando o operador
	switch(operador){
		case 0:
			// adição
			saida.value = num1 + num2;
			break;
		case 1:
			// subtração
			saida.value = num1 - num2;
			break;
		case 2:
			// multiplicação
			saida.value = num1 * num2;
			break;
		case 3:
			// divisão
			saida.value = (num1 / num2).toFixed(2);
		default:
			//operação inválida
			break;
	}
	// output vs. NaN
	if (isNaN(saida.value)) {
		saida.value = 0;
	}
}
/*
 * Copiar resposta para o elemento X 
 */
function copiaRespostaParaX() {
	// obter o formulário
	var formulario = document.getElementById("calc1");
	// obter a saída (output)
	var saida = formulario.elements["z"];
	// obter a entrada x (input)
	var entrada1 = formulario.elements["x"];
	// fazer a cópia;
	entrada1.value = saida.value;
	entrada1.setFocus();
}
