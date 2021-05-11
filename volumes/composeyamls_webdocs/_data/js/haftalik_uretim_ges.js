          function setGesName(mySelect){
                var ges_name = $(mySelect).val(); 
                var base_url = "http://izleme.medlabyazilim.com:3000/d-solo/";
                var dashboard_id = "RknG-V_Mz/";
                var dashboard_name = "enerji-uretimi?orgId=1&";
                var from = "from=now-7d&";
                var to = "to=now&";
                var theme = "theme=light&";
                var panel_id = "panelId=3&";
                var gesName = "var-ges_name=" + ges_name;
                var figure_url = "";

                panel_id = "panelId=4&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + gesName;
                frames['haftalik_uretim'].location.href = figure_url;

                panel_id = "panelId=7&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + gesName;
                frames['haftalik_uretim_farki'].location.href = figure_url;


                //document.getElementById("demo").innerHTML = figure_url;                
          }
