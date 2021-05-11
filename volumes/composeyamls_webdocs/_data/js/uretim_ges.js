          function setGesName(mySelect){
                var base_url = "http://izleme.medlabyazilim.com:3000/d-solo/";
                var dashboard_id = "RknG-V_Mz/";
                var dashboard_name = "enerji-uretimi?orgId=1&";
                var from = "from=now/d&";
                var to = "to=now&";
                var theme = "theme=light&";
                var panel_id = "panelId=2&"
                var ges_name = "var-ges_name="
                var figure_url = "";

                panel_id = "panelId=2&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['enerji_uretimi'].location.href = figure_url;

                panel_id = "panelId=4&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['guc'].location.href = figure_url;

                panel_id = "panelId=6&"
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['sicaklik'].location.href = figure_url;
              
                dashboard_id = "5vgmXgXGk/";
                dashboard_name = "genel-bilgi?orgId=1&"

                panel_id = "panelId=2&";
                from = "from=now/d&";
                to = "to=now&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['today_generation'].location.href = figure_url;

                panel_id = "panelId=2&";
                from = "from=now-1d/d&";
                to = "to=now-1d/d&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['yesterday_generation'].location.href = figure_url;

                panel_id = "panelId=2&";
                from = "from=now/M&";
                to = "to=now/M&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['thismonth_generation'].location.href = figure_url;

                panel_id = "panelId=2&";
                from = "from=now-1M/M&";
                to = "to=now-1M/M&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['lastmonth_generation'].location.href = figure_url;

                panel_id = "panelId=4&";
                from = "from=now/d&";
                to = "to=now&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['today_profit'].location.href = figure_url;

                panel_id = "panelId=4&";
                from = "from=now/M&";
                to = "to=now/M&";
                figure_url = base_url + dashboard_id + dashboard_name + from + to + theme + panel_id + ges_name + $(mySelect).val();
                frames['thismonth_profit'].location.href = figure_url;

                //document.getElementById("demo").innerHTML = figure_url;
          }
