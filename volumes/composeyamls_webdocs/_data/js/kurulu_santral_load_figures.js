          function plotFigures(mySelect){
                var ges_name = $(mySelect).val(); 
                var base_url = "http://izleme.medlabyazilim.com:3000/d-solo/";
                var dashboard_id = "WQUGa4lMz/";
                var dashboard_name = "overview?orgId=1&";
                var from = "from=now/d&";
                var to = "to=now/d&";
                var theme = "theme=light&";
                var figure_url = "";
                var panel_id = "";

                panel_id = "panelId=2&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id;
                frames['harita_uretim'].location.href = figure_url;

                panel_id = "panelId=4&";
                from = "from=now-1h&";
                to = "to=now&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id;
                frames['santral_sayisi'].location.href = figure_url;

                panel_id = "panelId=6&";
                from = "from=now-1h&";
                to = "to=now&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id;
                frames['inverter_sayisi'].location.href = figure_url;

                panel_id = "panelId=14&";
                from = "from=now/d&";
                to = "to=now&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id;
                frames['toplam_enerji_uretim'].location.href = figure_url;

                panel_id = "panelId=10&";
                from = "from=now/d&";
                to = "to=now&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id;
                frames['toplam_inverter'].location.href = figure_url;

                //document.getElementById("demo").innerHTML = figure_url;                
          }

