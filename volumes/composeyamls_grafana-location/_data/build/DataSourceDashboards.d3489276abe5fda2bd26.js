(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5BCB":function(e,t,n){"use strict";var r=n("ZFWI"),a=n("NXk7"),o=n("WnbS"),i=n("3SGO"),u=n("HUMP"),c=n("okuo"),s=n("Vw/f"),l=n("FFN/"),d=n("Obii");function p(e){var t=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter((function(e){return e})),n={},r={},a=[g({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize & explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),g({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize & explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),g({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize & explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),g({id:"grafana-servicenow-datasource",description:"ServiceNow integration & data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),g({id:"grafana-datadog-datasource",description:"DataDog integration & data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),g({id:"grafana-newrelic-datasource",description:"New Relic integration & data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),g({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration & data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"})],o=!0,i=!1,u=void 0;try{for(var c,s=t[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var l=c.value;n[l.id]=l}}catch(e){i=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}var p=!0,m=!1,v=void 0;try{for(var b,h=function(){var e=b.value;if(a.find((function(t){return t.id===e.id}))&&(e.category="enterprise"),e.info.links){var o=!0,i=!1,u=void 0;try{for(var c,s=e.info.links[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){c.value.name="Learn more"}}catch(e){i=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}}(t.find((function(t){return t.id===e.category}))||n.other).plugins.push(e),r[e.id]=e},y=e[Symbol.iterator]();!(p=(b=y.next()).done);p=!0)h()}catch(e){m=!0,v=e}finally{try{p||null==y.return||y.return()}finally{if(m)throw v}}var w=!0,x=!1,S=void 0;try{for(var O,k=t[Symbol.iterator]();!(w=(O=k.next()).done);w=!0){var D=O.value;if("cloud"===D.id&&D.plugins.push({id:"gcloud",name:"Grafana Cloud",type:d.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===D.id){var j=!0,R=!1,I=void 0;try{for(var P,E=a[Symbol.iterator]();!(j=(P=E.next()).done);j=!0){var L=P.value;r[L.id]||D.plugins.push(L)}}catch(e){R=!0,I=e}finally{try{j||null==E.return||E.return()}finally{if(R)throw I}}}f(D.plugins)}}catch(e){x=!0,S=e}finally{try{w||null==k.return||k.return()}finally{if(x)throw S}}return t}function f(e){var t={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};e.sort((function(e,n){var r=t[e.id]||0,a=t[n.id]||0;return r>a?-1:r<a?1:e.name>n.name?-1:1}))}function g(e){return{id:e.id,name:e.name,type:d.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:e.description,logos:{small:e.imgUrl,large:e.imgUrl},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/grafana/plugins/"+e.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var m=n("frIo");function v(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){v(o,r,a,i,u,"next",e)}function u(e){v(o,r,a,i,u,"throw",e)}i(void 0)}))}}n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return y})),n.d(t,"f",(function(){return w})),n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return S})),n.d(t,"e",(function(){return O})),n.d(t,"h",(function(){return k})),n.d(t,"b",(function(){return D}));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loadDataSource:x,getDataSource:m.a,getDataSourceMeta:m.b,importDataSourcePlugin:s.b};return(function(){var n=b(regeneratorRuntime.mark((function n(r,a){var o,i,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!isNaN(e)){n.next=3;break}return r(Object(l.g)(new Error("Invalid ID"))),n.abrupt("return");case 3:return n.prev=3,n.next=6,r(t.loadDataSource(e));case 6:if(!a().dataSourceSettings.plugin){n.next=8;break}return n.abrupt("return");case 8:return o=t.getDataSource(a().dataSources,e),i=t.getDataSourceMeta(a().dataSources,o.type),n.next=12,t.importDataSourcePlugin(i);case 12:u=n.sent,r(Object(l.h)(u)),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(3),console.log("Failed to import plugin module",n.t0),r(Object(l.g)(n.t0));case 20:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(e,t){return n.apply(this,arguments)}}())},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getDatasourceSrv:o.a,getBackendSrv:a.c};return(function(){var n=b(regeneratorRuntime.mark((function n(r,a){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getDatasourceSrv().get(e);case 2:if((o=n.sent).testDatasource){n.next=5;break}return n.abrupt("return");case 5:r(Object(l.o)()),t.getBackendSrv().withNoBackendCache(b(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.testDatasource();case 3:t=e.sent,r(Object(l.p)(t)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n="",n=e.t0.statusText?"HTTP Error "+e.t0.statusText:e.t0.message,r(Object(l.n)({message:n}));case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())};function w(){return function(){var e=b(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.c)().get("/api/datasources");case 2:n=e.sent,t(Object(l.e)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(e){return function(){var t=b(regeneratorRuntime.mark((function t(n){var r,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().get("/api/datasources/".concat(e));case 2:return r=t.sent,t.next=5,Object(c.a)(r.type);case 5:return o=t.sent,t.next=8,Object(s.b)(o);case 8:d=t.sent,n(Object(l.a)(r)),n(Object(l.b)(o)),n(Object(i.d)(Object(u.a)(r,d)));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function S(e){return function(){var t=b(regeneratorRuntime.mark((function t(n,r){var o,u,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(w());case 2:return o=r().dataSources.dataSources,u={name:e.name,type:e.id,access:"proxy",isDefault:0===o.length},j(o,u.name)&&(u.name=R(o,u.name)),t.next=7,Object(a.c)().post("/api/datasources",u);case 7:c=t.sent,n(Object(i.c)({path:"/datasources/edit/".concat(c.id)}));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function O(){return function(){var e=b(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.c)()),e.next=3,Object(a.c)().get("/api/plugins",{enabled:1,type:"datasource"});case 3:n=e.sent,r=p(n),t(Object(l.d)({plugins:n,categories:r}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function k(e){return function(){var t=b(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().put("/api/datasources/".concat(e.id),e);case 2:return t.next=4,I();case 4:return t.abrupt("return",n(x(e.id)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function D(){return function(){var e=b(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().dataSources.dataSource,e.next=3,Object(a.c)().delete("/api/datasources/".concat(r.id));case 3:return e.next=5,I();case 5:t(Object(i.c)({path:"/datasources"}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function j(e,t){return e.filter((function(e){return e.name.toLowerCase()===t.toLowerCase()})).length>0}function R(e,t){for(;j(e,t);)t=P(t)?"".concat(L(t)).concat((n=E(t),isNaN(n)?1:n+1)):"".concat(t,"-1");var n;return t}function I(){return Object(a.c)().get("/api/frontend/settings").then((function(e){r.b.datasources=e.datasources,r.b.defaultDatasource=e.defaultDatasource,Object(o.a)().init()}))}function P(e){return e.endsWith("-",e.length-1)}function E(e){return parseInt(e.slice(-1),10)}function L(e){return e.slice(0,e.length-1)}},BLAY:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"DataSourceDashboards",(function(){return S}));var r=n("q1tI"),a=n.n(r),o=n("0cfB"),i=n("/MKj"),u=n("ZGyg"),c=n("vHOe"),s=n("lzJ5"),l=n("X+V3"),d=n("5BCB"),p=n("jGYO"),f=n("J4KJ"),g=n("frIo");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){var e,n;b(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=y(this,(e=w(t)).call.apply(e,[this].concat(a)))).onImport=function(e,t){var r=n.props,a=r.dataSource,o=r.importDashboard,i={pluginId:e.pluginId,path:e.path,overwrite:t,inputs:[]};a&&i.inputs.push({name:"*",type:"datasource",pluginId:a.type,value:a.name}),o(i,e.title)},n.onRemove=function(e){n.props.removeDashboard(e.importedUri)},n}var n,r,o,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(i=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.loadDataSource,r=t.pageId,e.next=3,n(r);case 3:this.props.loadPluginDashboards();case 4:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=i.apply(e,t);function o(e){v(a,n,r,o,u,"next",e)}function u(e){v(a,n,r,o,u,"throw",e)}o(void 0)}))},function(){return s.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.dashboards,r=t.navModel,o=t.isLoading;return a.a.createElement(u.a,{navModel:r},a.a.createElement(u.a.Contents,{isLoading:o},a.a.createElement(c.a,{dashboards:n,onImport:function(t,n){return e.onImport(t,n)},onRemove:function(t){return e.onRemove(t)}})))}}])&&h(n.prototype,r),o&&h(n,o),t}(r.PureComponent);var O={importDashboard:f.d,loadDataSource:d.d,loadPluginDashboards:p.b,removeDashboard:f.f};t.default=Object(o.hot)(e)(Object(i.connect)((function(e){var t=Object(l.c)(e.location);return{navModel:Object(s.a)(e.navIndex,"datasource-dashboards-".concat(t)),pageId:t,dashboards:e.plugins.dashboards,dataSource:Object(g.a)(e.dataSources,t),isLoading:e.plugins.isLoadingPluginDashboards}}),O)(S))}.call(this,n("3UD+")(e))},HUMP:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("Obii"),a=n("ZFWI");function o(e,t){var n=t.meta,r={img:n.info.logos.large,id:"datasource-"+e.id,subTitle:"Type: ".concat(n.name),url:"",text:e.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:"datasource-settings-".concat(e.id),text:"Settings",url:"datasources/edit/".concat(e.id,"/")}]};if(t.configPages){var o=!0,i=!1,u=void 0;try{for(var c,s=t.configPages[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var l=c.value;r.children.push({active:!1,text:l.title,icon:l.icon,url:"datasources/edit/".concat(e.id,"/?page=").concat(l.id),id:"datasource-page-".concat(l.id)})}}catch(e){i=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}}return n.includes&&void 0!==n.includes.find((function(e){return"dashboard"===e.type}))&&r.children.push({active:!1,icon:"apps",id:"datasource-dashboards-".concat(e.id),text:"Dashboards",url:"datasources/edit/".concat(e.id,"/dashboards")}),a.b.licenseInfo.hasLicense&&r.children.push({active:!1,icon:"lock",id:"datasource-permissions-".concat(e.id),text:"Permissions",url:"datasources/edit/".concat(e.id,"/permissions")}),r}function i(e){var t,n=o({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:""},{meta:{id:"1",type:r.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),a=!0,i=!1,u=void 0;try{for(var c,s=n.children[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;if(l.id.indexOf(e)>0){l.active=!0,t=l;break}}}catch(e){i=!0,u=e}finally{try{a||null==s.return||s.return()}finally{if(i)throw u}}return{main:n,node:t}}},frIo:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return s}));var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.dataSources.filter((function(e){return t.test(e.name)||t.test(e.database)}))},a=function(e){var t=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.plugins.filter((function(e){return t.test(e.name)}))},o=function(e,t){return e.dataSource.id===parseInt(t,10)?e.dataSource:{}},i=function(e,t){return e.dataSourceMeta.id===t?e.dataSourceMeta:{}},u=function(e){return e.searchQuery},c=function(e){return e.layoutMode},s=function(e){return e.dataSourcesCount}},vHOe:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("kDLi");t.a=function(e){var t=e.dashboards,n=e.onImport,r=e.onRemove;return a.a.createElement("table",{className:"filter-table"},a.a.createElement("tbody",null,t.map((function(e,t){return a.a.createElement("tr",{key:"".concat(e.dashboardId,"-").concat(t)},a.a.createElement("td",{className:"width-1"},a.a.createElement(o.Icon,{name:"apps"})),a.a.createElement("td",null,e.imported?a.a.createElement("a",{href:e.importedUrl},e.title):a.a.createElement("span",null,e.title)),a.a.createElement("td",{style:{textAlign:"right"}},e.imported?a.a.createElement("button",{className:"btn btn-secondary btn-small",onClick:function(){return n(e,!0)}},function(e){return e.revision!==e.importedRevision?"Update":"Re-import"}(e)):a.a.createElement("button",{className:"btn btn-secondary btn-small",onClick:function(){return n(e,!1)}},"Import"),e.imported&&a.a.createElement("button",{className:"btn btn-danger btn-small",onClick:function(){return r(e)}},a.a.createElement(o.Icon,{name:"trash-alt"}))))}))))}}}]);
//# sourceMappingURL=DataSourceDashboards.d3489276abe5fda2bd26.js.map