function fnLimitarCaracteres(e)
{

	if (e.keyCode >= 33 && e.keyCode <= 96)
	{
		return false;
	}
	else
	{
		if (e.keyCode >= 123 && e.keyCode <= 126)
		{
			return false;
		}
		else
		{
			if (e.keyCode >= 128 && e.keyCode <= 163)
			{
				return false;
			}
			else
			{
				if (e.keyCode >= 165 && e.keyCode <= 240)
				{
					return false;
				}
				else
				{
					if (e.keyCode >= 242 && e.keyCode <= 255)
					{
						return false;
					}
					else
					{
						return true;	
					}
				}
			}
		}
	}
				
}

function fnRestablecerAlerta()
{
	if (document.getElementById('txtOriginal').value == "")
	{
		document.getElementById('lblAlerta').innerHTML = "Ingrese solo letras minúsculas sin acentos."
	}
	else
	{
		return false;	
	}
}

txtOriginal.onpaste = function(event)
{
	document.getElementById('lblAlerta').innerHTML = "Recuerde que no debe pegar letras con acentos o mayúsculas. Ingrese solo letras minúsculas sin acentos."
}