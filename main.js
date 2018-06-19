$(document).ready(function() {
	$.getJSON('produtos.json', function(data){
			
		this.qtd = data.produtos.length;
		this.retorno = '';

		for(i in data.produtos){
	    	this.retorno += "<tr class='clickable el-alvo'><td>Nome: " + data.produtos[i].nome + '</td>';
	    	this.retorno += '<td>ID: ' + data.produtos[i].id + '</td></tr>';
	    }						

		$('#resultado').html(this.retorno);
		});

		$('tbody').on('click', '.clickable', function(e) {
    	$('#form-frete').toggleClass("active");
		});

});