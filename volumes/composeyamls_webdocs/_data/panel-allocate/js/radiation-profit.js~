var url = "../data/meteo-monthly.csv";
var cost_per_watt = 0.65;
var installation_cost_g = 0;

function initSelectionForm() {
	var text = "<select class=\"custom-select d-block w-100\" required>";
	text += "<option value=\"\">Sehir Seciniz</option>";	
	
	var lines = readMyCSV(url);
	for (var count = 1; count < lines.length; count++) {
		var rowContent = lines[count].split(",");
		text += "<option value=\""+rowContent[0]+"\">"+rowContent[1]+"</option>";
	}	
	
	text += "</select>";
	return text;
}

function calculateRadiation () {
	var plate = document.getElementById("user-inputs").elements[22].value;
	
	var lines = readMyCSV(url);
	var radiation = findRadiation(lines, plate);
	var myRadArr = createRadiationArray(radiation);
	var myTable = createTable(myRadArr);
	
	document.getElementById("myTable").innerHTML = myTable;

}

function findRadiation(lines, plate) {
	for (var count = 0; count < lines.length; count++) {
		var rowContent = lines[count].split(",");
		if (rowContent[0] == plate) {
			console.log(rowContent);
			return rowContent;
		}
	}
}

function readMyCSV(url) {
	var request = new XMLHttpRequest();  
	request.open("GET", url, false);   
	request.send(null);  

	var csvData = new Array();
	var lines = request.responseText.split("\n");
	
	return lines;
}

function createRadiationArray(radiation) {
	var panel_power = parseInt(document.getElementById("user-inputs").elements[17].value)/1000;
	var energy_efficiency = parseFloat(document.getElementById("user-inputs").elements[18].value);
	var usdtl = parseFloat(document.getElementById("user-inputs").elements[19].value);
	var invoice = parseInt(document.getElementById("user-inputs").elements[20].value);
	
	var panel_num = total_panel_number;
	
	var months =  ["Ocak", "Subat", "Mart","Nisan","Mayis","Haziran","Temmuz","Agustos","Eylul","Ekim","Kasim","Aralik"];
	var myRadArr = new Array(4); 
	
	for (var i = 0; i < months.length+1; i++) { 
		myRadArr[i] = new Array(4); 
	}
	
	myRadArr[0][0] = "Aylar";
	myRadArr[0][1] = "Üretim (kWh)";
	myRadArr[0][2] = "Kazanç (&dollar;)";
	myRadArr[0][3] = "Net (&dollar;)";
	
	for (var i = 0; i < months.length; i++) { 
		myRadArr[i+1][0] = months[i]; 
		myRadArr[i+1][1] = parseInt((panel_num*panel_power*radiation[i+2]*energy_efficiency));
		var m_profit = parseInt((panel_num*panel_power*radiation[i+2]*cost_per_watt*energy_efficiency)/usdtl);
		myRadArr[i+1][2] = m_profit;
		myRadArr[i+1][3] = parseInt(m_profit-(invoice/usdtl));
	} 

	//init also required field in the table
	var total_dc_power = parseInt(panel_num*panel_power*energy_efficiency);
	document.getElementById("total_dc_power").innerHTML = total_dc_power+"kW";
	
	var installation_cost = parseInt(panel_num*panel_power*0.68*1000);
	installation_cost_g = installation_cost;	
	document.getElementById("installation_cost").innerHTML = "Kurulum Maliyeti: " + installation_cost + "&dollar;";	
	
	return myRadArr;
}

function createTable (myRadArr) {
	var table='<table class=\"w3-table-all w3-hoverable\">';
	var sumRad = 0;
	var sumGain = 0;
	var sumNet = 0;
	for (var count = 0; count < myRadArr.length; count++) {
		if (count ==0) {
			table += '<thead>';
	      table += '<tr>';
		} else {
			table += '<tr>';
		}
	
		for (var i = 0; i < 4; i++) {
			if (count === 0) {
	        table += '<th>';
	        table += myRadArr[count][i];
	        table += '</th>';
	      } else {
	        table += '<td>';
	        table += myRadArr[count][i];
	        table += '</td>';	        
	      } 
	
		}
		if (count === 0) {
	      table += '</tr>';
	      table += '</thead>';
	      table += '<tbody>';
	   } else {
	      table += '</tr>';
   		sumRad += parseFloat(myRadArr[count][1]);
   		sumGain += parseFloat(myRadArr[count][2]);
   		sumNet += parseFloat(myRadArr[count][3]);
	   }
	   
	}

	table += '</tbody>';
	table += '<tfoot><tr><td>Toplam</td><td>'+sumRad.toFixed(1)+'</td><td>'+sumGain+'</td><td>'+sumNet+'</td></tr></tfoot>';
	table += '</table>';
	
	//init also required field in the table
	var invoice = parseInt(document.getElementById("user-inputs").elements[20].value);
	var usdtl = parseFloat(document.getElementById("user-inputs").elements[19].value);
	var yearly_invoice = parseInt((invoice * 12)/usdtl);
	document.getElementById("yearly_profit").innerHTML = "Yillik kazanc/fatura: "+sumGain+"/"+yearly_invoice+"&dollar;";
	
	document.getElementById("redemption_time").innerHTML = parseFloat(installation_cost_g/sumGain).toFixed(1)+" yil";
	
	return table;
}