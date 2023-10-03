function fnEncriptar(sOperacion,sCadena)
{	
	let aLlave	  	= ["e","i","a","o","u","enter","imes","ai","ober","ufat"];
	let aPatron		= [/e/g,/i/g,/a/g,/o/g,/u/g,/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
	let sResultado 	= "";
	let sAux 		= "";

	if (document.getElementById('txtOriginal').value == "")
	{
		document.getElementById('lblAlerta').innerHTML = "Ingrese un texto para Codificar/Decodificar."
	}
	else
	{			
		sAux = sCadena;

		for (var i = 0; i < 5; i++)
		{
			if (sOperacion == "encode")
			{
				sResultado = sAux.replace(aPatron[i],aLlave[i+5]);				 	
			}

			if (sOperacion == "decode")
			{
				sResultado = sAux.replace(aPatron[i+5],aLlave[i]);			
			}	

			sAux = sResultado;
		}				 

		document.getElementById('txtOriginal').value = "";
		document.getElementById('txtModificado').innerHTML = sResultado;
	}
}

function fnCopiar()
{
	let eContenido = document.getElementById('txtModificado').innerText;	

	const textArea = document.createElement('textarea');
  	
  	textArea.textContent = eContenido;
  	
  	document.body.append(textArea);  	

	textArea.select();       

  	document.execCommand("copy");       
  
  	textArea.remove() 
}