/**
 * @author talba
 */

/*
 * Localizar texto
 */
function localizarTexto()
{
	// texto da página
	var txt = document.getElementById("txt").innerHTML;
	
	// sequência para procurar
	var texto = document.forms["localizar"].loc.value;
	
	// localizar no texto (1ª, última e nº ocorrências)
	var primeira = txt.indexOf(texto); 		// index começa na posição zero
	var ultima = txt.lastIndexOf(texto);	// index começa na posição zero
	var num = txt.match(new RegExp(texto,"gi")).length;
	
	document.getElementById("resultado").innerHTML = 
		(primeira == -1) ? 
			// não encontrado
			('"' + texto + '" não encontrado.') : (
				(primeira == ultima) ?
					// ocorrência única
					'"' + texto + '" aparece uma única vez e está a partir do ' + primeira + 'º caractere.' :
					// mais de uma ocorrência no texto
					'"' + texto + '" => \r\n \
					<br />\tPrimeira ocorrência:' + (primeira+1) + 'º caractere. \r\n \
					<br />\tÚltima ocorrência: ' + (ultima+1) + 'º caractere. \r\n\
					<br />\tEsse texto aparece ' + num + ' vezes.'
			);
			
}

/*
 * Substituir texto
 */
function substituirTexto()
{
	// texto da página
	var txt = document.getElementById("txt").innerHTML;
	
	// palavra a ser substituída
	var procura = document.forms["substituir"].proc.value;
	// palavra que vai substituir a outra no texto
	var substitui = document.forms["substituir"].subs.value;
	
	// substituir expressão no texto
	var novoTxt = txt.replace(new RegExp(procura,"gi"),substitui);
	document.getElementById("txt").innerHTML = novoTxt;
}
