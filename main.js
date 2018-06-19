$(document).ready(function() {
	///Impressão do JSON no HTML
	$.getJSON('produtos.json', function(data){

		this.qtd = data.produtos.length;
		this.retorno = '';

		for(i in data.produtos){
				this.retorno += "<tr class='clickable el-alvo'>";
	    	this.retorno += "<td>" + data.produtos[i].nome + "</td>";
	    	this.retorno += "<td>" + data.produtos[i].id + "</td>";
	    	this.retorno += "</tr>";
	    }

		$('#resultado').html(this.retorno);
		});

		$('tbody').on('click', '.clickable', function(e) {
    	$('#form-frete').toggleClass("active");
		});

});
///Validação dos campos núméricos
function validaCamposSomenteNumero() {
  var inputs = document.getElementsByClassName("somente-numero");
  for (var i = 0; i < inputs.length; ++i) {
      var input = inputs[i];
      if (input.value !== "") {
          if (isNaN(input.value)) {
              alert("Preencha apenas com números!");
              return;
          }
      }
  }
}