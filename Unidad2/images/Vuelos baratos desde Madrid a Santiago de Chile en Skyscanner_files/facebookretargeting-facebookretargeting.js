(window.jsTagManagerJsonpCallback=window.jsTagManagerJsonpCallback||[]).push([[16],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"FacebookRetargeting",function(){return u});var a=n(312),r=n(4),i=n(5),o=n(25),c=n(20),u=function(){function e(){Object(r.a)(this,e),this.pixelId="561358470665569"}return Object(i.a)(e,[{key:"createRedirectDataForFlightsSkippy",value:function(e){return{event_name:"Flights_Re-direct",eventdata:{event_name:"Flights_Re-direct",arriving_into:e.destinationCityName,num_of_adults:parseInt(e.adultsV2,10),num_of_children:parseInt((e.childrenV2||[]).length,10),currency:e.currency,outbound_date:null!=e.outboundDate?e.outboundDate.split("-").join(""):void 0,return_date:null!=e.inboundDate?e.inboundDate.split("-").join(""):void 0,departing_from_code:e.originAirport,departing_from:e.originCityName,arriving_into_code:e.destinationAirport,class_of_travel:e.cabinClass}}}},{key:"createRedirectDataForCarHireSkippy",value:function(e){return{event_name:"CarHire_Re-direct",eventdata:{event_name:"CarHire_Re-direct",currency:e.currency}}}},{key:"createPurchaseDataForFlightsSkippy",value:function(e){return{event_name:"Purchase",eventdata:{content_ids:["".concat(e.market,"_").concat(e.originIata,"_").concat(e.destinationIata)],content_type:["product","flight"],currency:e.currency,value:e.redirectValue?e.redirectValue:1,origin:e.originCityName,destination:e.destinationCityName,origin_airport:e.originIata,destination_airport:e.destinationIata,departing_departure_date:null!=e.outboundDate?e.outboundDate.replace(/-/g,""):void 0,returning_departure_date:null!=e.inboundDate?e.inboundDate.replace(/-/g,""):void 0}}}},{key:"createViewContentDataForFlightsSkippy",value:function(e){return{event_name:"ViewContent",eventdata:{content_ids:["".concat(e.market,"_").concat(e.originIata,"_").concat(e.destinationIata)],content_type:"product"}}}},{key:"createRedirectDataToSend",value:function(e){var t=e.category;return"transport"===t?this.createRedirectDataForFlightsSkippy(e):"carhire"===t?this.createRedirectDataForCarHireSkippy(e):{}}},{key:"createViewContentDataToSend",value:function(e){return"transport"===e.category?this.createViewContentDataForFlightsSkippy(e):{}}},{key:"createPurchaseDataToSend",value:function(e){return"transport"===e.category?this.createPurchaseDataForFlightsSkippy(e):{}}},{key:"getOrderId",value:function(e){if(e&&"redir"===e.page&&e.redirectId)return e.redirectId;try{var t=new c.LocalStorage("auth-storage").tryGetValue("travellerContext.utid");return t||null}catch(n){}return null}},{key:"sendData",value:function(e,t,n){var a=o.a.getWindow();return a.fbq?"Purchase"===e.event_name?(e.eventdata=e.eventdata||{},e.eventdata.order_id=n,a.fbq("trackSingle","561358470665569",e.event_name,e.eventdata)):a.fbq("trackSingleCustom","561358470665569",e.event_name,e.eventdata):(t.push(["trackSingle","561358470665569",e.event_name,e.eventdata]),t)}},{key:"bootstrap",value:function(e,t,n){var a=this.getOrderId(e);return"redir"===e.page&&(this.sendData(this.createRedirectDataToSend(e),t,a),this.sendData(this.createPurchaseDataToSend(e),t,a)),"day-view"===e.page&&this.sendData(this.createViewContentDataToSend(e),t,a),t}},{key:"extractAppRedirParameters",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").slice(1).split("&").filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){var t=Object(a.a)(e,1)[0];return"client_version"===t||"advertising_id"===t}).reduce(function(e,t){var n=Object(a.a)(t,2),r=n[0],i=n[1];return e[r]=i,e},{})}},{key:"buildAppEvent",value:function(e,t,n,a){var r=e.eventdata||{},i=a||e.event_name;return r._eventName=i,delete r.event_name,"Purchase"===i&&(r.fb_order_id=t,r._valueToSum=r.value,delete r.value),r.content_ids&&(r.content_ids=JSON.stringify(r.content_ids)),r._appVersion=n,r.fb_currency=r.currency,delete r.currency,r}}]),e}(),d=function(){var e;return(e=new u).bootstrap.apply(e,arguments)};t.default=function(e,t){var n=o.a.getWindow(),a=o.a.getDocument();n.fbq?d(e,n._fbq,a.location.search):function(n,a,r,i,o,c,u){if(n.fbq)return!0;o=n.fbq=function(){var e;return o.callMethod?(e=o).callMethod.apply(e,arguments):o.queue.push(arguments)},n._fbq||(n._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],t("//connect.facebook.net/en_US/fbevents.js",function(){return d(e,n._fbq,a.location.search)})}(n,a)}},312:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})}}]);
//# sourceMappingURL=facebookretargeting-facebookretargeting.65416de7.chunk.js.map