var total_panel_number =0;

function calculatePanelNums () {
	<!-- User defined variables -->
	var name_surname=document.getElementById("user-inputs").elements[0].value; //ad soyad
	var phone=document.getElementById("user-inputs").elements[1].value; //telefon
	var email=document.getElementById("user-inputs").elements[2].value; //eposta
	
	var r_width=parseInt(document.getElementById("user-inputs").elements[3].value); // Alan Genisligi 
	var r_length=parseInt(document.getElementById("user-inputs").elements[4].value); //Alan Eni
	
	var m_up=parseInt(document.getElementById("user-inputs").elements[8].value)/100; // Yukari Kenar Boslugu
	var m_down=parseInt(document.getElementById("user-inputs").elements[7].value)/100; // Asagi Kenar Boslugu
	var m_right=parseInt(document.getElementById("user-inputs").elements[5].value)/100; // Sag Kenar Boslugu
	var m_left=parseInt(document.getElementById("user-inputs").elements[6].value)/100; // Sol Kenar Boslugu
	
	var p_width=parseInt(document.getElementById("user-inputs").elements[9].value)/100; //Panel Genisligi
	var p_length=parseInt(document.getElementById("user-inputs").elements[10].value)/100;	//Panel Yuksekligi
	
	var grid_col_gap=parseInt(document.getElementById("user-inputs").elements[15].value)/100; // Masalar arasi Dikey Bosluk, Koridor
	var grid_row_gap=parseInt(document.getElementById("user-inputs").elements[14].value)/100; // Masalar arasi Yatay Bosluk, Golge Mesagesi
	
	var str_col_number=parseInt(document.getElementById("user-inputs").elements[12].value); // Masa kolon sayisi
	var str_row_number=parseInt(document.getElementById("user-inputs").elements[11].value);	 // Masa sutun sayisi
	
	var panelOrientation = document.getElementById("panelOrientation"); // Panel Yerlesimi; yatay dikey
	var p_angle = parseInt(document.getElementById("user-inputs").elements[13].value); // Panel yatay acisi, defualt:0
	var shadow_cons = parseFloat(document.getElementById("user-inputs").elements[16].value); // Golge carpim katsayisi, default: 1.5
	<!-- End of user defined variables -->
	
	<!-- Find panel number and spaces -->
	// Panel dikey yerlestirmek gerekirse
	if (panelOrientation.checked == true) {		
		var temp = p_width;
		p_width = p_length;
		p_length = temp;
	}	
	
	// Panel acisina gore yatay ve dikey izdusumleri, ve onerilen golge mesafesinin hesaplanmasi
	var str_width = p_width*str_col_number;
	var str_length = (p_length * str_row_number) * Math.cos(p_angle * (Math.PI / 180)); <!-- yatay izdusum -->	
	var str_v_projection = (p_length * str_row_number) * Math.sin(p_angle* (Math.PI / 180)); <!-- dikey izdusum, yukseklik -->
	var str_shadow_dist = str_v_projection * shadow_cons;

	
	// Yatay da sigabilecek masa sayisi ve atil kalan uzunluk ve orani | | | 
	var p_num_h = Math.floor((r_width-m_right-m_left)/(str_width+grid_col_gap)); 
	var p_rem_h = (r_width-m_right-m_left)%(str_width+grid_col_gap);

	p_num_h += Math.floor(p_rem_h / str_width);	
	p_rem_h = p_rem_h % str_width;
	
	var p_rem_h_ratio = (p_rem_h/str_width).toFixed(2);
	
	// Dikey sigabilecek masa sayisi ve atil kalan uzunluk ve orani - - -
	var p_num_v = Math.floor((r_length-m_up-m_down)/(str_length+grid_row_gap));
	var p_rem_v = (r_length-m_up-m_down)%(str_length+grid_row_gap);

	p_num_v += Math.floor(p_rem_v/str_length);
	p_rem_v = p_rem_v % str_length;
	
	var p_rem_v_ratio = (p_rem_v/(str_length+grid_row_gap)).toFixed(2);
	
	// Gercekte sigan panel sayisi, en fazla sigabilir panel sayisi ve alan kullanim verimliligi
	var num_of_panel = p_num_h*p_num_v*str_col_number*str_row_number
	var max_num_of_panel = Math.floor((r_width-m_right-m_left)/(str_width)) * Math.floor((r_length-m_up-m_down)/(str_length)) *str_col_number * str_row_number;
	var efficiency = Math.floor((num_of_panel/max_num_of_panel)*100);
	
	// Masalar arasi onerilen dikey bosluk uzunlugu, bu durumda eklenebilecek ek panel sayisi
	var col_gap_rate = Math.floor((grid_col_gap-((str_width-p_rem_h)/p_num_h))*100);
	var col_add_pan_num = p_num_v * str_col_number*str_row_number;
	
	// Masalar arasi onerilen yatay bosluk uzunlugu, bu durumda eklenebilecek ek panel sayisi
	var row_gap_rate = Math.floor((grid_row_gap-((str_length+grid_row_gap-p_rem_v)/p_num_v))*100);
	var row_add_pan_num = p_num_h * str_row_number*str_col_number;
	<!-- End of find panel number and spaces -->
	
	// Panel yerlesim grafigi guncelleme
	var col_gap_ratio = (grid_col_gap/str_width).toFixed(2);
	var row_gap_ratio = (grid_row_gap/str_length).toFixed(2);
	

	<!-- update the figure based on user requirements -->
	// Yeni hesaba gore kurulum alaninin grafikte ayarlanmasi
	document.documentElement.style.setProperty('--grid-row-num', p_num_v);
	document.documentElement.style.setProperty('--grid-col-num', p_num_h);
	
	document.documentElement.style.setProperty('--padding-a', m_up+"px");
	document.documentElement.style.setProperty('--padding-b', m_right+"px");
	document.documentElement.style.setProperty('--padding-c', m_down+"px");
	document.documentElement.style.setProperty('--padding-d', m_left+"px");
	
	document.documentElement.style.setProperty('--panel-v-rem', p_rem_h_ratio+"fr");
	document.documentElement.style.setProperty('--panel-h-rem', p_rem_v_ratio+"fr");
	
	document.documentElement.style.setProperty('--string-col-num', str_col_number);
	document.documentElement.style.setProperty('--string-row-num', str_row_number);	
	
	document.documentElement.style.setProperty('--col-gap-ratio', col_gap_ratio+"fr");	
	document.documentElement.style.setProperty('--row-gap-ratio', row_gap_ratio+"fr");
	<!-- End of update figure -->	
	
	<!-- Allocate panels properly -->
	// Yeni hesaba gore panellerin kurulum alanina grafikte yerlestirilmesi
   document.getElementById("panel_allocate").innerHTML = allocatePanels(p_num_h, p_num_v);
	document.getElementById("panel_allocate").style.display = "none";	
	
	<!-- Print out results -->
	// Hesaplarin html sayfasi uzerinde kullaniciya sunulmasi
	document.getElementById("h_str_num").innerHTML = "Yatay masa: "+ p_num_h;
	document.getElementById("v_str_num").innerHTML = "Dikey masa: "+ p_num_v;	
	document.getElementById("total_panel_num").innerHTML = num_of_panel;
	document.getElementById("max_panel_num").innerHTML = max_num_of_panel;
	document.getElementById("efficiency").innerHTML = "Verimlilik: %"+ efficiency;
	document.getElementById("p_projection").innerHTML = str_length.toFixed(2) + "m/"+str_v_projection.toFixed(2)+"m";
	document.getElementById("shadow_dist").innerHTML = "Onerilen golge mesafesi: "+str_shadow_dist.toFixed(2)+"m";
	document.getElementById("h_str_free_space").innerHTML = p_rem_h.toFixed(2) + "m/"+p_rem_h_ratio+"masa";
	document.getElementById("v_str_free_space").innerHTML = p_rem_v.toFixed(2) + "m/"+p_rem_v_ratio+"masa";
	document.getElementById("max_col_panel_num").innerHTML = "Oneri koridor/panel: "+col_gap_rate+"cm/"+col_add_pan_num;	
	document.getElementById("max_row_panel_num").innerHTML = "Oneri koridor/panel: "+row_gap_rate+"cm/"+row_add_pan_num;		
	document.getElementById("cost_name_surname").innerHTML = name_surname;
	<!-- End of print out -->
	
	total_panel_number = num_of_panel;
	calculateRadiation();
}

function locateStringPanel(num_panel_col, num_panel_row) {
	var num_panel_total = num_panel_col * num_panel_row;
	var i;
	var m_text="";
	for (i=1; i < num_panel_total+1; i++) {
		m_text += "<div class=\"item\"></div>";
	}
	return m_text;
}

function initArbitraryPanels() {
	var row_num = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-row-num'));
	var col_num = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-col-num'));
		
	return allocatePanels(col_num, row_num);;
}	


function allocatePanels(col_n, row_n) {
	
	var str_row_num = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--string-row-num'));
	var str_col_num = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--string-col-num'));
	
	var str_panel = locateStringPanel(str_col_num, str_row_num);

	var i,j;
	var text = "<div class=\"grid-container\">";
	for (i = 1; i < row_n+1; i++) {			
		for (j = 1; j < col_n+1; j++) {
  			text += "<div class=\"grid-item\">"+str_panel+"</div>";
  			text += "<div class=\"grid-col-item\">"+" "+"</div>";
  		}
  		text += "<div class=\"panel-col-rem\">"+" "+"</div>";
  		
  		for (j = 1; j < col_n+1; j++) {
  			text += "<div class=\"grid-row-item\">"+" "+"</div>";
  			text += "<div class=\"grid-row-item\">"+" "+"</div>";
  		}
  		text += "<div class=\"grid-row-item\">"+" "+"</div>";
	} 
	
	for (j = 1; j < (col_n*2)+2; j++) {
  		text += "<div class=\"panel-row-rem\">"+" "+"</div>";
  	}		
	
	text += "</div>";
   return text;
}

function showPanel () {
	
	var x = document.getElementById('panel_allocate');
 	if (x.style.display === 'none') {
   	x.style.display = 'inline';
   	document.getElementById("showPanel").innerHTML = "Yerlesimi Gizle";
	} else {
   	x.style.display = 'none';
   	document.getElementById("showPanel").innerHTML = "Yerlesimi Goster";
  	}
  	
}

function showRegistrationForm () {
	
	var x = document.getElementById('myRegForm');
 	if (x.style.display === 'none') {
   	x.style.display = 'inline';
	} else {
   	x.style.display = 'none';
  	}
  	
}
