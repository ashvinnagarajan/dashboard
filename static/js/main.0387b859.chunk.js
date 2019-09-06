(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(52),c=a.n(n),i=(a(61),a(3)),l=a(4),m=a(6),o=a(5),p=a(7),u=a(34),d=a.n(u),b={apiKey:"AIzaSyAnFTWZTgWEugKOSUM6WY_NkxrPzRzn6dU",authDomain:"bruin-racing.firebaseapp.com",databaseURL:"https://bruin-racing.firebaseio.com",projectId:"bruin-racing",storageBucket:"bucket.appspot.com"};d.a.initializeApp(b);var h=d.a,v=(a(71),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={date:"",time:"",daysLeft:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=new Date,t=e.toDateString(),a=" AM",s=e.getHours();s>12&&(s-=12,a=" PM");var r=s+":"+e.getMinutes()+":"+e.getSeconds()+a,n=new Date(2020,3,6);11===e.getMonth()&&e.getDate()>25&&n.setFullYear(n.getFullYear()+1);var c="Days to Competition: "+Math.ceil((n.getTime()-e.getTime())/864e5);this.setState({date:t,time:r,daysLeft:c})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar is-fixed-top is-dark color-dark",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"https://www.bruinracing.com/smv/"},r.a.createElement("h1",null,"Bruin Racing | Super Mileage Vehicle"))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},"Made by A. Nagarajan"),r.a.createElement("div",{className:"navbar-item"},this.state.daysLeft),r.a.createElement("div",{className:"navbar-item"},this.state.date),r.a.createElement("div",{className:"navbar-item"},this.state.time)))}}]),t}(r.a.Component)),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card driver columns"},r.a.createElement("div",{className:"card-content column"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:this.props.driver.image,alt:""}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},this.props.driver.name),r.a.createElement("p",{className:"subtitle is-6"},this.props.driver.social," \xa0 ",this.props.driver.phone))),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"subtitle is-6"},this.props.driver.message))),r.a.createElement("div",{className:"column"},r.a.createElement("img",{className:"car-image",src:"./images/car.png",alt:""})))}}]),t}(r.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"motor"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Motor"),r.a.createElement("p",{className:"subtitle is-6"},this.props.motor.bhp," BHP | ",this.props.motor.volt," V"),r.a.createElement("p",{className:"subtitle is-6"},"Temp: ",this.props.motor.temp," F")))}}]),t}(r.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"battery"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Battery"),r.a.createElement("p",{className:"subtitle is-6"},this.props.battery.volt," V | ",this.props.battery.amp," A"),r.a.createElement("p",{className:"subtitle is-6"},"Temp: ",this.props.battery.temp," F"),r.a.createElement("p",{className:"subtitle is-6"},"Remaining: ",this.props.battery.remaining,"%")))}}]),t}(r.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"joulemeter"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Joulemeter"),r.a.createElement("p",{className:"subtitle is-6"},this.props.joulemeter.volt," V | ",this.props.joulemeter.amp," A"),r.a.createElement("p",{className:"subtitle is-6"},"Instant Efficiency: ",this.props.joulemeter.instant," mi/kWh"),r.a.createElement("p",{className:"subtitle is-6"},"Avg Efficiency: ",this.props.joulemeter.avg," mi/kWh"),r.a.createElement("p",{className:"subtitle is-6"},"Peak Efficiency: ",this.props.joulemeter.peak," mi/kWh")))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"speed"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-2"},this.props.speed.speed," mph"),r.a.createElement("p",{className:"title speed-title is-6"},"Throttle: ",this.props.speed.throttle,"%"),r.a.createElement("p",{className:"title speed-title is-6"},this.props.speed.acceleration," m/s",r.a.createElement("sup",null,"2")),r.a.createElement("p",{className:"title speed-title is-6 is-spaced"},"Brake: ",this.props.speed.brake,"%"),r.a.createElement("p",{className:"subtitle is-6"},"Avg Speed: ",this.props.speed.avg," mph"),r.a.createElement("p",{className:"subtitle is-6"})))}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card car"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(j,{battery:this.props.battery}),r.a.createElement(N,{motor:this.props.motor}),r.a.createElement(f,{joulemeter:this.props.joulemeter})),r.a.createElement("div",{className:"column"},r.a.createElement(O,{speed:this.props.speed}))))}}]),t}(r.a.Component),y=a(54),k={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},w=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement(y.a,{data:k}))))}}]),t}(r.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"weather"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle is-6"},this.props.weather.weather),r.a.createElement("p",{className:"subtitle is-6"},this.props.weather.temp," F"),r.a.createElement("p",{className:"subtitle is-6"},"Humidity: ",this.props.weather.humidity,"%")))}}]),t}(r.a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle is-6"},"Lap: ",this.props.lap.number),r.a.createElement("p",{className:"subtitle is-6"},"Current Lap: ",this.props.lap.current),r.a.createElement("p",{className:"subtitle is-6"},"Total: ",this.props.lap.total))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle is-6"},"Time Remaining: ",this.props.lap.remaining),r.a.createElement("p",{className:"subtitle is-6"},"Slowest Lap: ",this.props.lap.slowest),r.a.createElement("p",{className:"subtitle is-6"},"Fastest Lap: ",this.props.lap.fastest)))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GPS"},r.a.createElement("div",{className:"card-content GPS"},r.a.createElement("p",{className:"subtitle is-6"},"Latitude: ",this.props.gps.lat),r.a.createElement("p",{className:"subtitle is-6"},"Longitude: ",this.props.gps.long)))}}]),t}(r.a.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card track"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},this.props.track.name),r.a.createElement("p",{className:"subtitle is-6"},"Trial Number ",this.props.track.trial," ")),r.a.createElement(S,{gps:this.props.gps})),r.a.createElement("div",{className:"column"},r.a.createElement(C,{weather:this.props.weather}))),r.a.createElement(T,{lap:this.props.lap}),r.a.createElement("div",{className:"card-image"},r.a.createElement(w,null)))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={latestTime:"",latestTrial:"",latestData:{},battery:{},driver:{},gps:{},joulemeter:{},lap:{},motor:{},speed:{},track:{},weather:{}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=h.database();t.ref("Latest Time").on("value",function(a){var s=a.val();t.ref("Latest Trial").on("value",function(a){var r=a.val();t.ref(r).child(s).on("value",function(t){var a,s=(a=t.val()).battery,r=a.driver,n=a.gps,c=a.joulemeter,i=a.lap,l=a.motor,m=a.speed,o=a.track,p=a.weather;e.setState({latestData:a,battery:s,driver:r,gps:n,joulemeter:c,lap:i,motor:l,speed:m,track:o,weather:p})}),e.setState({latestTrial:r})}),e.setState({latestTime:s})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"canvas color-dark",style:{paddingTop:"55px"}},r.a.createElement(v,null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(E,{driver:this.state.driver}))),r.a.createElement(g,{battery:this.state.battery,motor:this.state.motor,joulemeter:this.state.joulemeter,speed:this.state.speed})),r.a.createElement("div",{className:"column"},r.a.createElement(M,{gps:this.state.gps,weather:this.state.weather,lap:this.state.lap,track:this.state.track}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(165)},61:function(e,t,a){},71:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.0387b859.chunk.js.map