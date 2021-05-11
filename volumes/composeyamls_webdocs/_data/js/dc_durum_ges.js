          var ges_name = "";
          var inv_name = "#INV1"
          
          function setGesName(mySelect){
                ges_name = $(mySelect).val();
          }
          
          function setInverter(mySelect){
                var base_url = "http://izleme.medlabyazilim.com:3000/d-solo/";
                var dashboard_id = "UyKZa4_Mz/";
                var dashboard_name = "dc-akim-gerilim-durumu?orgId=1&";
                var from = "from=now/d&";
                var to = "to=now&";
                var theme = "theme=light&";
                var panel_id = "panelId=3&";
                var gesName = "var-ges_name=" + ges_name + "&";
                var inverter_name = "var-invname=" + $(mySelect).val();
                var figure_url = "";

                panel_id = "panelId=3&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + gesName + inverter_name;
                frames['dc_gerilim'].location.href = figure_url;

                panel_id = "panelId=6&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + gesName + inverter_name;
                frames['dc_gerilim_farki'].location.href = figure_url;

                panel_id = "panelId=5&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + gesName + inverter_name;
                frames['dc_akim'].location.href = figure_url;

                panel_id = "panelId=4&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + gesName + inverter_name;
                frames['dc_akim_farki'].location.href = figure_url;


                //document.getElementById("demo").innerHTML = figure_url;
          }

