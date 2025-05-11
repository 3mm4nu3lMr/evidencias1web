google.charts.load('current', { packages: ['corechart'] });
var correctas=0;
var nombre = "";

function leer() {
    nombre = document.getElementById('user').value || "Sin nombre";
	correctas = 0;
	 // Respuestas correctas
    
        // Cristiano Ronaldo
        // 2015
        // Keylor Navas
        // No
        // Bayern Munchen
        // Real Madrid
        // Mohamed Salah
        // Chelsea
        // Arsenal
        // Manchester United


   
    var r1 = document.querySelector('input[name="maxgol"]:checked');
    if (r1 && r1.value == "CR7") {
        correctas++;
    }

    var r2 = document.querySelector('input[name="chbar"]:checked');
    if (r2 && r2.value == "BarcCh1") {
        correctas++;
    }

    var r3 = document.querySelector('input[name="Port"]:checked');
    if (r3 && r3.value == "Port3") {
        correctas++;
    }

    var r4 = document.querySelector('input[name="ZI"]:checked');
    if (r4 && r4.value == "ZI2") {
        correctas++;
    }

    var r5 = document.querySelector('input[name="gol8-2"]:checked');
    if (r5 && r5.value == "BM") {
        correctas++;
    }

    var r6 = document.querySelector('input[name="masChamp"]:checked');
    if (r6 && r6.value == "RM") {
        correctas++;
    }

    var r7 = document.querySelector('input[name="hatTrick"]:checked');
    if (r7 && r7.value == "Salah") {
        correctas++;
    }

    var r8 = document.querySelector('input[name="champ2021"]:checked');
    if (r8 && r8.value == "CHE") {
        correctas++;
    }

    var r9 = document.querySelector('input[name="nunca"]:checked');
    if (r9 && r9.value == "ARS") {
        correctas++;
    }

    var r10 = document.querySelector('input[name="champ1999"]:checked');
    if (r10 && r10.value == "MU") {
        correctas++;
    }

	document.getElementById('resultado').innerHTML = `<h2>${nombre} obtuviste ${correctas} de 10 preguntas correctas.</h2>`;
	
}

function generar() {
    
    google.charts.load('current', {'packages':['corechart']});
    
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Resultado');
        data.addColumn('number', 'Preguntas');
        data.addRows([
            ['Correctas', correctas],
            ['Incorrectas', 10 - correctas]
        ]);
        
        var options = {
            title: `Resultado de ${nombre}`,
            titleTextStyle: {
                fontSize: 18,
                bold: true
            },
            width: 500,
            height: 400,
            colors: ['#4CAF50', '#F44336'],
            legend: {position: 'none'},
            hAxis: {
                title: 'Cantidad de preguntas',
                minValue: 0,
                maxValue: 10
            },
            bar: {groupWidth: '75%'},
            animation: {
                duration: 1000,
                easing: 'out',
                startup: true
            }
        };
        
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
		
    }
}

function pdf() {
				var doc = new jsPDF();
				doc.setFontSize(38);
				doc.setTextColor(100,150,0);
				doc.text(40, 20,"Hola "+ nombre);
				doc.setFontSize(16);
   				doc.setTextColor(0, 0, 0);
    			doc.text("Resultados del cuestionario Champions League:", 20, 35);
				doc.text("Obtuviste: " + correctas + "/10 correctas", 20, 45);
				
				var string = doc.output('datauristring');
				$('iframe').attr('src', string);
			}