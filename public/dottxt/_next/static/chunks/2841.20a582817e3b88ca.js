"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2841],{2841:(e,t,i)=>{let a,r,n,s,o;i.r(t),i.d(t,{VideoPlayer:()=>IC});var l=i(95155),d=i(19749);let u={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},c={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},h={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},m=Object.entries(h),p=m.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),v=m.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(v).reduce((e,[t,i])=>{let a=p[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let b=Object.entries(p).reduce((e,[t,i])=>{let a=v[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),g="subtitles",E="captions",f="disabled",y="showing",k="unavailable",A="unsupported",T={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};function w(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function I(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function S(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function C(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function M(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function L(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let R=e=>new Promise(t=>setTimeout(t,e)),x=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],D=e=>{if(!M(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?x[t].singular:x[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function N(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let P={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},O=(null==(ow=globalThis.navigator)?void 0:ow.language)||"en",U=(e,t={})=>(e=>{var t,i,a;let[r]=O.split("-");return(null==(t=P[O])?void 0:t[e])||(null==(i=P[r])?void 0:i[e])||(null==(a=P.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class W{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class H extends W{}class B extends H{constructor(){super(...arguments),this.role=null}}class ${observe(){}unobserve(){}disconnect(){}}let V={createElement:function(){return new q.HTMLElement},createElementNS:function(){return new q.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},q={ResizeObserver:$,document:V,Node:H,Element:B,HTMLElement:class extends B{constructor(){super(...arguments),this.innerHTML=""}get content(){return new q.DocumentFragment}},DocumentFragment:class extends W{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},F="u"<typeof window||void 0===window.customElements,K=Object.keys(q).every(e=>e in globalThis),G=F&&!K?q:globalThis,j=F&&!K?V:globalThis.document,Y=new WeakMap,Q=e=>{let t=Y.get(e);return t||Y.set(e,t=new Set),t},z=new G.ResizeObserver(e=>{for(let t of e)for(let e of Q(t.target))e(t)});function Z(e,t){Q(e).add(t),z.observe(e)}function X(e,t){let i=Q(e);i.delete(t),i.size||z.unobserve(e)}function J(e){let t={};for(let i of e)t[i.name]=i.value;return t}function ee(e){var t;return null!=(t=et(e))?t:en(e,"media-controller")}function et(e){var t;let{MEDIA_CONTROLLER:i}=c,a=e.getAttribute(i);if(a)return null==(t=eo(e))?void 0:t.getElementById(a)}let ei=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},ea=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},er=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||er(e,t.getRootNode().host)),en=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||en(e.getRootNode().host,t)};function es(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=es(i.shadowRoot))?t:i:null}function eo(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function el(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function ed(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||eu(e,t)}function eu(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function ec(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function eh(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}ec(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function em(e,t){return e.hasAttribute(t)}function ep(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}em(e,t)!=i&&e.toggleAttribute(t,i)}function ev(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function eb(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;ev(e,t,void 0)!==a&&e.setAttribute(t,a)}var eg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eE=(e,t,i)=>(eg(e,t,"read from private field"),i?i.call(e):t.get(e)),ef=(e,t,i,a)=>(eg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ey extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,oI,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[c.MEDIA_CONTROLLER,p.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===c.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=eE(this,oI))?void 0:a.unassociateElement)||r.call(a,this),ef(this,oI,null)),i&&this.isConnected&&(ef(this,oI,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=eE(this,oI))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a,r,n;let s;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ef(this,oI,(r=this,(s=r.getAttribute(c.MEDIA_CONTROLLER))?null==(n=r.getRootNode())?void 0:n.getElementById(s):en(r,"media-controller"))),this.getAttribute(c.MEDIA_CONTROLLER)&&(null==(t=null==(e=eE(this,oI))?void 0:e.associateElement)||t.call(e,this)),null==(i=eE(this,oI))||i.addEventListener("pointerdown",this),null==(a=eE(this,oI))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(c.MEDIA_CONTROLLER)&&(null==(t=null==(e=eE(this,oI))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=eE(this,oI))||i.removeEventListener("pointerdown",this),null==(a=eE(this,oI))||a.removeEventListener("click",this),ef(this,oI,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,"touch"===d)return void this.handleTap(e);if("mouse"===d)return void this.handleMouseClick(e)}}}get mediaPaused(){return em(this,p.MEDIA_PAUSED)}set mediaPaused(e){ep(this,p.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?u.MEDIA_PLAY_REQUEST:u.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(t,{composed:!0,bubbles:!0}))}}oI=new WeakMap,ey.shadowRootOptions={mode:"open"},ey.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},G.customElements.get("media-gesture-receiver")||G.customElements.define("media-gesture-receiver",ey);var e_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ek=(e,t,i)=>(e_(e,t,"read from private field"),i?i.call(e):t.get(e)),eA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eT=(e,t,i,a)=>(e_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ew=(e,t,i)=>(e_(e,t,"access private method"),i);let eI="audio",eS="autohide",eC="breakpoints",eM="gesturesdisabled",eL="keyboardcontrol",eR="noautohide",ex="userinactive",eD="autohideovercontrols",eN=Object.values(p);function eP(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(eC))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(v.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(v.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class eO extends G.HTMLElement{constructor(){if(super(),eA(this,ox),eA(this,oO),eA(this,oW),eA(this,oB),eA(this,oV),eA(this,oF),eA(this,oS,0),eA(this,oC,null),eA(this,oM,null),eA(this,oL,void 0),this.breakpointsComputed=!1,eA(this,oR,new MutationObserver(ew(this,ox,oD).bind(this))),eA(this,oN,!1),eA(this,oP,e=>{ek(this,oN)||(setTimeout(()=>{eP(e.target,e.contentRect.width),eT(this,oN,!1)},0),eT(this,oN,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){ek(this,oC)&&this.mediaUnsetCallback(ek(this,oC));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[eS,eM].concat(eN).filter(e=>![p.MEDIA_RENDITION_LIST,p.MEDIA_AUDIO_TRACK_LIST,p.MEDIA_CHAPTERS_CUES,p.MEDIA_WIDTH,p.MEDIA_HEIGHT,p.MEDIA_ERROR,p.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==eS&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(eT(this,oC,e),e.localName.includes("-")&&await G.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ek(this,oR).observe(this,{childList:!0,subtree:!0}),Z(this,ek(this,oP));let t=null!=this.getAttribute(eI)?U("audio player"):U("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(ex,""),eP(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=G.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;ek(this,oR).disconnect(),X(this,ek(this,oP)),this.media&&this.mediaUnsetCallback(this.media),null==(e=G.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){eT(this,oC,null)}handleEvent(e){switch(e.type){case"pointerdown":eT(this,oS,e.timeStamp);break;case"pointermove":ew(this,oO,oU).call(this,e);break;case"pointerup":ew(this,oW,oH).call(this,e);break;case"mouseleave":ew(this,oB,o$).call(this);break;case"mouseup":this.removeAttribute(eL);break;case"keyup":ew(this,oF,oK).call(this),this.setAttribute(eL,"")}}set autohide(e){let t=Number(e);eT(this,oL,isNaN(t)?0:t)}get autohide(){return(void 0===ek(this,oL)?2:ek(this,oL)).toString()}get breakpoints(){return ev(this,eC)}set breakpoints(e){eb(this,eC,e)}get audio(){return em(this,eI)}set audio(e){ep(this,eI,e)}get gesturesDisabled(){return em(this,eM)}set gesturesDisabled(e){ep(this,eM,e)}get keyboardControl(){return em(this,eL)}set keyboardControl(e){ep(this,eL,e)}get noAutohide(){return em(this,eR)}set noAutohide(e){ep(this,eR,e)}get autohideOverControls(){return em(this,eD)}set autohideOverControls(e){ep(this,eD,e)}get userInteractive(){return em(this,ex)}set userInteractive(e){ep(this,ex,e)}}oS=new WeakMap,oC=new WeakMap,oM=new WeakMap,oL=new WeakMap,oR=new WeakMap,ox=new WeakSet,oD=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},oN=new WeakMap,oP=new WeakMap,oO=new WeakSet,oU=function(e){if("mouse"!==e.pointerType&&e.timeStamp-ek(this,oS)<250)return;ew(this,oV,oq).call(this),clearTimeout(ek(this,oM));let t=this.hasAttribute(eD);([this,this.media].includes(e.target)||t)&&ew(this,oF,oK).call(this)},oW=new WeakSet,oH=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(ex);[this,this.media].includes(e.target)&&t?ew(this,oB,o$).call(this):ew(this,oF,oK).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&ew(this,oF,oK).call(this)},oB=new WeakSet,o$=function(){if(0>ek(this,oL)||this.hasAttribute(ex))return;this.setAttribute(ex,"");let e=new G.CustomEvent(v.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},oV=new WeakSet,oq=function(){if(!this.hasAttribute(ex))return;this.removeAttribute(ex);let e=new G.CustomEvent(v.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},oF=new WeakSet,oK=function(){ew(this,oV,oq).call(this),clearTimeout(ek(this,oM));let e=parseInt(this.autohide);e<0||eT(this,oM,setTimeout(()=>{ew(this,oB,o$).call(this)},1e3*e))},eO.shadowRootOptions={mode:"open"},eO.getTemplateHTML=function(e){return`
    <style>
      
      :host([${p.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${eI}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${eI}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${eI}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${eI}])[${eM}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${eI}])[${eM}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${eI}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${eI}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${eI}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${eI}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${eR}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${ex}]:not([${p.MEDIA_PAUSED}]):not([${p.MEDIA_IS_AIRPLAYING}]):not([${p.MEDIA_IS_CASTING}]):not([${eI}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${eR}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${ex}]:not([${eR}]):not([${p.MEDIA_PAUSED}]):not([${p.MEDIA_IS_CASTING}]):not([${eI}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${ex}][${eD}]:not([${eR}]):not([${p.MEDIA_PAUSED}]):not([${p.MEDIA_IS_CASTING}]):not([${eI}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${eI}])[${p.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${ey.shadowRootOptions.mode}">
          ${ey.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},G.customElements.get("media-container")||G.customElements.define("media-container",eO);var eU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eW=(e,t,i)=>(eU(e,t,"read from private field"),i?i.call(e):t.get(e)),eH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eB=(e,t,i,a)=>(eU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class e${constructor(e,t,{defaultValue:i}={defaultValue:void 0}){eH(this,oz),eH(this,oG,void 0),eH(this,oj,void 0),eH(this,oY,void 0),eH(this,oQ,new Set),eB(this,oG,e),eB(this,oj,t),eB(this,oY,new Set(i))}[Symbol.iterator](){return eW(this,oz,oZ).values()}get length(){return eW(this,oz,oZ).size}get value(){var e;return null!=(e=[...eW(this,oz,oZ)].join(" "))?e:""}set value(e){var t;e!==this.value&&(eB(this,oQ,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...eW(this,oz,oZ)][e]}values(){return eW(this,oz,oZ).values()}forEach(e,t){eW(this,oz,oZ).forEach(e,t)}add(...e){var t,i;e.forEach(e=>eW(this,oQ).add(e)),(""!==this.value||(null==(t=eW(this,oG))?void 0:t.hasAttribute(`${eW(this,oj)}`)))&&(null==(i=eW(this,oG))||i.setAttribute(`${eW(this,oj)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>eW(this,oQ).delete(e)),null==(t=eW(this,oG))||t.setAttribute(`${eW(this,oj)}`,`${this.value}`)}contains(e){return eW(this,oz,oZ).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}oG=new WeakMap,oj=new WeakMap,oY=new WeakMap,oQ=new WeakMap,oz=new WeakSet,oZ=function(){return eW(this,oQ).size?eW(this,oQ):eW(this,oY)};let eV=(e="")=>{let[t,i,a]=e.split(":");return{kind:"cc"===t?E:g,language:i,label:a?decodeURIComponent(a):void 0}},eq=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=eV(e);return{...t,...i}}),eF=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?eV(e):e):"string"==typeof e?eq(e):[e]:[],eK=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,eG=(e=[])=>Array.prototype.map.call(e,eK).join(" "),ej=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},eY=(e,t=[],i=[])=>{let a=eF(i).map(ej);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eQ=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:ej(t);return Array.from(e.textTracks).filter(i)},ez=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(p.MEDIA_SUBTITLES_SHOWING)},eZ="exitFullscreen"in j?"exitFullscreen":"webkitExitFullscreen"in j?"webkitExitFullscreen":"webkitCancelFullScreen"in j?"webkitCancelFullScreen":void 0,eX="fullscreenElement"in j?"fullscreenElement":"webkitFullscreenElement"in j?"webkitFullscreenElement":void 0,eJ="fullscreenEnabled"in j?"fullscreenEnabled":"webkitFullscreenEnabled"in j?"webkitFullscreenEnabled":void 0,e0=()=>{var e;return a||(a=null==(e=null==j?void 0:j.createElement)?void 0:e.call(j,"video"))},e1=async(e=e0())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([e2(e,i.signal),e3(e,t)]);return i.abort(),a},e2=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),e3=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await R(10)}return e.volume!==t},e4=/.*Version\/.*Safari\/.*/.test(G.navigator.userAgent),e5=(e=e0())=>(!G.matchMedia("(display-mode: standalone)").matches||!e4)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),e9=(e=e0())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[eJ])||i&&"webkitSupportsFullscreen"in i})({documentElement:j,media:e}),e8=e9(),e7=e5(),e6=!!G.WebKitPlaybackTargetAvailabilityEvent,te=!!G.chrome,tt=e=>eQ(e.media,e=>[g,E].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),ti=e=>eQ(e.media,e=>e.mode===y&&[g,E].includes(e.kind)),ta=(e,t)=>{let i=tt(e),a=ti(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)eY(f,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;eY(f,i,a),eY(y,i,[{language:n,label:s,kind:o}])}}},tr=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?tn(e,t):Object.entries(e).every(([e,i])=>e in t&&tr(i,t[e])))),tn=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>tr(e,t[i])))},ts=Object.values(T),to=e1().then(e=>r=e),tl=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof G.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=G.customElements.get(t);i&&e instanceof i||(await G.customElements.whenDefined(t),G.customElements.upgrade(e))}))},td=new G.DOMParser,tu={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{G.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===G.localStorage.getItem("media-chrome-pref-muted");tu.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?G.localStorage.removeItem("media-chrome-pref-volume"):G.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=G.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;tu.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&M(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[T.LIVE,T.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(ts.includes(r))return r===T.UNKNOWN?a:r;let n=t.duration;return n===1/0?T.LIVE:Number.isFinite(n)?T.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=tu.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===T.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(tu.mediaStreamType.get(e)!==T.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>tt(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>ti(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![E,g].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||ta(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=eQ(i,{kind:"chapters"});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&td.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&er(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!j.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else j.pictureInPictureElement&&j.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[eX];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&"fullscreen"===i.webkitPresentationMode?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(eX in e))return er(n,r);for(;null==e?void 0:e[eX];){if(e[eX]===r)return!0;e=null==(t=e[eX])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(eZ){let e=null==(t=null==i?void 0:i[eZ])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&G.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!e8||!e9(t))return A}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!e7||!e5(t))return A}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return A},stateOwnersUpdateHandlers:[e=>{null==r&&to.then(t=>e(t?void 0:A))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return te&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?k:void 0:A},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>e6?(null==t?void 0:t.availability)==="not-available"?k:void 0:A,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:k:A},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?k:void 0:A},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},tc={[u.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=eQ(l,{kind:"metadata",label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[u.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[u.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===T.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[u.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[u.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[u.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[u.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[u.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[u.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[u.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=tt(t),s=eF(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&G.localStorage.setItem("media-chrome-pref-subtitles-lang",o),eY(y,n,s)},[u.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){eY(f,tt(t),null!=i?i:[])},[u.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){ta(t,i)},[u.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[u.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[u.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[u.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[u.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[u.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[u.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[u.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[u.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var th=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tm=(e,t,i)=>(th(e,t,"read from private field"),i?i.call(e):t.get(e)),tp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tv=(e,t,i,a)=>(th(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tb=(e,t,i)=>(th(e,t,"access private method"),i);let tg=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],tE="defaultsubtitles",tf="defaultstreamtype",ty="defaultduration",t_="fullscreenelement",tk="hotkeys",tA="keysused",tT="liveedgeoffset",tw="seektoliveoffset",tI="noautoseektolive",tS="nohotkeys",tC="novolumepref",tM="nosubtitleslangpref",tL="nodefaultstore",tR="keyboardforwardseekoffset",tx="keyboardbackwardseekoffset",tD="lang";class tN extends eO{constructor(){super(),tp(this,o4),tp(this,o9),tp(this,o7),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,tp(this,oX,new e$(this,tk)),tp(this,oJ,void 0),tp(this,o0,void 0),tp(this,o1,void 0),tp(this,o2,void 0),tp(this,o3,e=>{var t;null==(t=tm(this,o0))||t.dispatch(e)}),this.associateElement(this);let e={};tv(this,o1,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new G.CustomEvent(b[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(tS,tk,tf,tE,ty,tD)}get mediaStore(){return tm(this,o0)}set mediaStore(e){var t,i;(tm(this,o0)&&(null==(t=tm(this,o2))||t.call(this),tv(this,o2,void 0)),tv(this,o0,e),tm(this,o0)||this.hasAttribute(tL))?tv(this,o2,null==(i=tm(this,o0))?void 0:i.subscribe(tm(this,o1))):tb(this,o4,o5).call(this)}get fullscreenElement(){var e;return null!=(e=tm(this,oJ))?e:this}set fullscreenElement(e){var t;this.hasAttribute(t_)&&this.removeAttribute(t_),tv(this,oJ,e),null==(t=tm(this,o0))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return em(this,tE)}set defaultSubtitles(e){ep(this,tE,e)}get defaultStreamType(){return ev(this,tf)}set defaultStreamType(e){eb(this,tf,e)}get defaultDuration(){return ec(this,ty)}set defaultDuration(e){eh(this,ty,e)}get noHotkeys(){return em(this,tS)}set noHotkeys(e){ep(this,tS,e)}get keysUsed(){return ev(this,tA)}set keysUsed(e){eb(this,tA,e)}get liveEdgeOffset(){return ec(this,tT)}set liveEdgeOffset(e){eh(this,tT,e)}get noAutoSeekToLive(){return em(this,tI)}set noAutoSeekToLive(e){ep(this,tI,e)}get noVolumePref(){return em(this,tC)}set noVolumePref(e){ep(this,tC,e)}get noSubtitlesLangPref(){return em(this,tM)}set noSubtitlesLangPref(e){ep(this,tM,e)}get noDefaultStore(){return em(this,tL)}set noDefaultStore(e){ep(this,tL,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u;if(super.attributeChangedCallback(e,t,i),e===tS)i!==t&&""===i?(this.hasAttribute(tk)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===tk)tm(this,oX).value=i;else if(e===tE&&i!==t)null==(a=tm(this,o0))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(tE)}});else if(e===tf)null==(n=tm(this,o0))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(tf))?r:void 0}});else if(e===tT)null==(s=tm(this,o0))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(tT)?+this.getAttribute(tT):void 0,seekToLiveOffset:this.hasAttribute(tw)?void 0:+this.getAttribute(tT)}});else if(e===tw)null==(o=tm(this,o0))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(tw)?+this.getAttribute(tw):void 0}});else if(e===tI)null==(l=tm(this,o0))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(tI)}});else if(e===t_){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;tv(this,oJ,e),null==(u=tm(this,o0))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===tD&&i!==t&&(O=i)}connectedCallback(){var e,t;tm(this,o0)||this.hasAttribute(tL)||tb(this,o4,o5).call(this),null==(e=tm(this,o0))||e.dispatch({type:"documentelementchangerequest",detail:j}),super.connectedCallback(),tm(this,o0)&&!tm(this,o2)&&tv(this,o2,null==(t=tm(this,o0))?void 0:t.subscribe(tm(this,o1))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),tm(this,o0)&&(null==(t=tm(this,o0))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=tm(this,o0))||i.dispatch({type:u.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),tm(this,o2)&&(null==(a=tm(this,o2))||a.call(this),tv(this,o2,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=tm(this,o0))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=tm(this,o0))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){tq(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=tF(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(u).forEach(t=>{e.addEventListener(t,tm(this,o3))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(u).forEach(t=>{e.removeEventListener(t,tm(this,o3))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),tm(this,o0)&&Object.entries(tm(this,o0).getState()).forEach(([t,i])=>{tq([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",tb(this,o7,o6))}disableHotkeys(){this.removeEventListener("keydown",tb(this,o7,o6)),this.removeEventListener("keyup",tb(this,o9,o8))}get hotkeys(){return ev(this,tk)}set hotkeys(e){eb(this,tk,e)}keyboardShortcutHandler(e){var t,i,a,r,n;let s,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(tA))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||tm(this,oX).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&tm(this,oX).contains("nospace")))switch(e.key){case" ":case"k":s=tm(this,o0).getState().mediaPaused?u.MEDIA_PLAY_REQUEST:u.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new G.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"m":s="off"===this.mediaStore.getState().mediaVolumeLevel?u.MEDIA_UNMUTE_REQUEST:u.MEDIA_MUTE_REQUEST,this.dispatchEvent(new G.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"f":s=this.mediaStore.getState().mediaIsFullscreen?u.MEDIA_EXIT_FULLSCREEN_REQUEST:u.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new G.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new G.CustomEvent(u.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(tx)?+this.getAttribute(tx):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new G.CustomEvent(u.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(tR)?+this.getAttribute(tR):10;o=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),l=new G.CustomEvent(u.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}oX=new WeakMap,oJ=new WeakMap,o0=new WeakMap,o1=new WeakMap,o2=new WeakMap,o3=new WeakMap,o4=new WeakSet,o5=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=tu,requestMap:r=tc,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||tr(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,g,E,f,y,k,A,T,w,I;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await tl(...Object.values(e));let C=l.length>0&&0===t&&s,M=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),R=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),x=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),D=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),N=d.documentElement!==o.documentElement,P=!!d.media&&(M||C),O=!!(null==(E=d.media)?void 0:E.textTracks)&&(L||C),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(R||C),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(x||C),H=!!(null==(k=d.media)?void 0:k.remote)&&(D||C),B=!!d.documentElement&&(N||C),$=P||O||U||W||H||B,V=0===l.length&&1===t&&s,q=!!o.media&&(M||V),F=!!(null==(A=o.media)?void 0:A.textTracks)&&(L||V),K=!!(null==(T=o.media)?void 0:T.videoRenditions)&&(R||V),G=!!(null==(w=o.media)?void 0:w.audioTracks)&&(x||V),j=!!(null==(I=o.media)?void 0:I.remote)&&(D||V),Y=!!o.documentElement&&(N||V),Q=q||F||K||G||j||Y;if(!($||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&P&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),G&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&B&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&$&&v(),Q&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(tE),defaultDuration:this.hasAttribute(ty)?+this.getAttribute(ty):void 0,defaultStreamType:null!=(e=this.getAttribute(tf))?e:void 0,liveEdgeOffset:this.hasAttribute(tT)?+this.getAttribute(tT):void 0,seekToLiveOffset:this.hasAttribute(tw)?+this.getAttribute(tw):this.hasAttribute(tT)?+this.getAttribute(tT):void 0,noAutoSeekToLive:this.hasAttribute(tI),noVolumePref:this.hasAttribute(tC),noSubtitlesLangPref:this.hasAttribute(tM)}})},o9=new WeakSet,o8=function(e){let{key:t}=e;tg.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",tb(this,o9,o8))},o7=new WeakSet,o6=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!tg.includes(a)?this.removeEventListener("keyup",tb(this,o9,o8)):([" ","ArrowLeft","ArrowRight"].includes(a)&&!(tm(this,oX).contains(`no${a.toLowerCase()}`)||" "===a&&tm(this,oX).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",tb(this,o9,o8),{once:!0}))};let tP=Object.values(p),tO=Object.values(h),tU=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(G.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,c.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>tP.includes(e)):[]},tW=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&G.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof G.customElements.get(e.nodeName.toLowerCase()))&&G.customElements.upgrade(e),tO.some(t=>t in e)||!!tU(e).length},tH=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},tB={[p.MEDIA_SUBTITLES_LIST]:eG,[p.MEDIA_SUBTITLES_SHOWING]:eG,[p.MEDIA_SEEKABLE]:tH,[p.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(tH).join(" "),[p.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[p.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(w).join(" ")},[p.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(S).join(" ")}},t$=async(e,t,i)=>{var a,r;if(e.isConnected||await R(0),"boolean"==typeof i||null==i)return ep(e,t,i);if("number"==typeof i)return eh(e,t,i);if("string"==typeof i)return eb(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=tB[t])?void 0:a.call(tB,i))?r:i;return e.setAttribute(t,n)},tV=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;tW(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>tV(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!tW(e)?G.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},tq=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=tU(e),r=t.toLowerCase();a.includes(r)&&t$(e,r,i)})},tF=(e,t,i)=>{tV(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(u.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(u.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>tV(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>tV(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>tV(e,t)),Array.prototype.forEach.call(r,e=>tV(e,i))):"attributes"===n&&o===c.MEDIA_CHROME_ATTRIBUTES&&(tW(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{tV(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(u.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(u.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};G.customElements.get("media-controller")||G.customElements.define("media-controller",tN);let tK="placement",tG="bounds";class tj extends G.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!el(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=en(this,"#"+this.bounds))?e:ee(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[tK,tG]}get placement(){return ev(this,tK)}set placement(e){eb(this,tK,e)}get bounds(){return ev(this,tG)}set bounds(e){eb(this,tG,e)}}tj.shadowRootOptions={mode:"open"},tj.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},G.customElements.get("media-tooltip")||G.customElements.define("media-tooltip",tj);var tY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tQ=(e,t,i)=>(tY(e,t,"read from private field"),i?i.call(e):t.get(e)),tz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tZ=(e,t,i,a)=>(tY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tX="tooltipplacement",tJ="disabled",t0="notooltip";class t1 extends G.HTMLElement{constructor(){if(super(),tz(this,ln),tz(this,le,void 0),this.preventClick=!1,this.tooltipEl=null,tz(this,lt,e=>{this.preventClick||this.handleClick(e),setTimeout(tQ(this,li),0)}),tz(this,li,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),tz(this,la,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",tQ(this,la))}),tz(this,lr,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",tQ(this,la)):this.addEventListener("keyup",tQ(this,la),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",tX,c.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",tQ(this,lt)),this.addEventListener("keydown",tQ(this,lr)),this.tabIndex=0}disable(){this.removeEventListener("click",tQ(this,lt)),this.removeEventListener("keydown",tQ(this,lr)),this.removeEventListener("keyup",tQ(this,la)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===c.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tQ(this,le))?void 0:a.unassociateElement)||r.call(a,this),tZ(this,le,null)),i&&this.isConnected&&(tZ(this,le,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=tQ(this,le))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===tX&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),tQ(this,li).call(this)}connectedCallback(){var e,t,i;let{style:a}=ed(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(c.MEDIA_CONTROLLER);r&&(tZ(this,le,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=tQ(this,le))?void 0:t.associateElement)||i.call(t,this)),G.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=ln,t=ls,tY(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=tQ(this,le))?void 0:e.unassociateElement)||t.call(e,this),tZ(this,le,null),this.removeEventListener("mouseenter",tQ(this,li)),this.removeEventListener("focus",tQ(this,li)),this.removeEventListener("click",tQ(this,lt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ev(this,tX)}set tooltipPlacement(e){eb(this,tX,e)}get mediaController(){return ev(this,c.MEDIA_CONTROLLER)}set mediaController(e){eb(this,c.MEDIA_CONTROLLER,e)}get disabled(){return em(this,tJ)}set disabled(e){ep(this,tJ,e)}get noTooltip(){return em(this,t0)}set noTooltip(e){ep(this,t0,e)}handleClick(e){}}le=new WeakMap,lt=new WeakMap,li=new WeakMap,la=new WeakMap,lr=new WeakMap,ln=new WeakSet,ls=function(){this.addEventListener("mouseenter",tQ(this,li)),this.addEventListener("focus",tQ(this,li)),this.addEventListener("click",tQ(this,lt));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},t1.shadowRootOptions={mode:"open"},t1.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${tj.shadowRootOptions.mode}">
          ${tj.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},t1.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},t1.getTooltipContentHTML=function(){return""},G.customElements.get("media-chrome-button")||G.customElements.define("media-chrome-button",t1);let t2=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,t3=e=>{let t=e.mediaIsAirplaying?U("stop airplay"):U("start airplay");e.setAttribute("aria-label",t)};class t4 extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_IS_AIRPLAYING,p.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),t3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_IS_AIRPLAYING&&t3(this)}get mediaIsAirplaying(){return em(this,p.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){ep(this,p.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ev(this,p.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){eb(this,p.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new G.CustomEvent(u.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}t4.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${p.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${p.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${p.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${p.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${t2}</slot>
      <slot name="exit">${t2}</slot>
    </slot>
  `},t4.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${U("start airplay")}</slot>
    <slot name="tooltip-exit">${U("stop airplay")}</slot>
  `},G.customElements.get("media-airplay-button")||G.customElements.define("media-airplay-button",t4);let t5=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,t9=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,t8=e=>{e.setAttribute("aria-checked",ez(e).toString())};class t7 extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_SUBTITLES_LIST,p.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",U("closed captions")),t8(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_SUBTITLES_SHOWING&&t8(this)}get mediaSubtitlesList(){return t6(this,p.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ie(this,p.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return t6(this,p.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ie(this,p.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new G.CustomEvent(u.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}t7.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${t5}</slot>
      <slot name="off">${t9}</slot>
    </slot>
  `},t7.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${U("Enable captions")}</slot>
    <slot name="tooltip-disable">${U("Disable captions")}</slot>
  `};let t6=(e,t)=>{let i=e.getAttribute(t);return i?eq(i):[]},ie=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=eG(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-button")||G.customElements.define("media-captions-button",t7);let it=e=>{let t=e.mediaIsCasting?U("stop casting"):U("start casting");e.setAttribute("aria-label",t)};class ii extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_IS_CASTING,p.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),it(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_IS_CASTING&&it(this)}get mediaIsCasting(){return em(this,p.MEDIA_IS_CASTING)}set mediaIsCasting(e){ep(this,p.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ev(this,p.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){eb(this,p.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?u.MEDIA_EXIT_CAST_REQUEST:u.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}ii.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${p.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${p.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${p.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${p.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},ii.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${U("Start casting")}</slot>
    <slot name="tooltip-exit">${U("Stop casting")}</slot>
  `},G.customElements.get("media-cast-button")||G.customElements.define("media-cast-button",ii);var ia=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ir=(e,t,i)=>(ia(e,t,"read from private field"),i?i.call(e):t.get(e)),is=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},io=(e,t,i,a)=>(ia(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),il=(e,t,i)=>(ia(e,t,"access private method"),i);let id="open";class iu extends G.HTMLElement{constructor(){super(),is(this,lu),is(this,lh),is(this,lp),is(this,lb),is(this,lE),is(this,ly),is(this,lo,!1),is(this,ll,null),is(this,ld,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[id,"anchor"]}get open(){return em(this,id)}set open(e){ep(this,id,e)}handleEvent(e){switch(e.type){case"invoke":il(this,lb,lg).call(this,e);break;case"focusout":il(this,lE,lf).call(this,e);break;case"keydown":il(this,ly,l_).call(this,e)}}connectedCallback(){il(this,lu,lc).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){il(this,lu,lc).call(this),e===id&&i!==t&&(this.open?il(this,lh,lm).call(this):il(this,lp,lv).call(this))}focus(){io(this,ll,es());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}lo=new WeakMap,ll=new WeakMap,ld=new WeakMap,lu=new WeakSet,lc=function(){if(!ir(this,lo)&&(io(this,lo,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=ed(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},lh=new WeakSet,lm=function(){var e;null==(e=ir(this,ld))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},lp=new WeakSet,lv=function(){var e;null==(e=ir(this,ld))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},lb=new WeakSet,lg=function(e){io(this,ld,e.relatedTarget),er(this,e.relatedTarget)||(this.open=!this.open)},lE=new WeakSet,lf=function(e){var t;!er(this,e.relatedTarget)&&(null==(t=ir(this,ll))||t.focus(),ir(this,ld)&&ir(this,ld)!==e.relatedTarget&&this.open&&(this.open=!1))},ly=new WeakSet,l_=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=ir(this,ll))||n.focus(),this.open=!1))},iu.shadowRootOptions={mode:"open"},iu.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},iu.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},G.customElements.get("media-chrome-dialog")||G.customElements.define("media-chrome-dialog",iu);var ic=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ih=(e,t,i)=>(ic(e,t,"read from private field"),i?i.call(e):t.get(e)),im=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ip=(e,t,i,a)=>(ic(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iv=(e,t,i)=>(ic(e,t,"access private method"),i);class ib extends G.HTMLElement{constructor(){if(super(),im(this,lR),im(this,lD),im(this,lP),im(this,lU),im(this,lH),im(this,l$),im(this,lq),im(this,lK),im(this,lk,void 0),im(this,lA,void 0),im(this,lT,void 0),im(this,lw,void 0),im(this,lI,{}),im(this,lS,[]),im(this,lC,()=>{if(this.range.matches(":focus-visible")){let{style:e}=ed(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),im(this,lM,()=>{let{style:e}=ed(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),im(this,lL,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),ip(this,lT,this.shadowRoot.querySelector("#startpoint")),ip(this,lw,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",c.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===c.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ih(this,lk))?void 0:a.unassociateElement)||r.call(a,this),ip(this,lk,null)),i&&this.isConnected&&(ip(this,lk,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ih(this,lk))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),iv(this,lD,lN).call(this)):(this.range.setAttribute(e,i),iv(this,lP,lO).call(this)))}connectedCallback(){var e,t,i;let{style:a}=ed(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ih(this,lI).pointer=ed(this.shadowRoot,"#pointer"),ih(this,lI).progress=ed(this.shadowRoot,"#progress"),ih(this,lI).thumb=ed(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ih(this,lI).activeSegment=ed(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(c.MEDIA_CONTROLLER);r&&(ip(this,lk,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ih(this,lk))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ih(this,lC)),this.shadowRoot.addEventListener("focusout",ih(this,lM)),iv(this,lD,lN).call(this),Z(this.container,ih(this,lL))}disconnectedCallback(){var e,t;iv(this,lP,lO).call(this),null==(t=null==(e=ih(this,lk))?void 0:e.unassociateElement)||t.call(e,this),ip(this,lk,null),this.shadowRoot.removeEventListener("focusin",ih(this,lC)),this.shadowRoot.removeEventListener("focusout",ih(this,lM)),X(this.container,ih(this,lL))}updatePointerBar(e){var t;null==(t=ih(this,lI).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ih(this,lI).progress)||e.style.setProperty("width",`${i}%`),null==(t=ih(this,lI).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];ip(this,lS,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=j.createElementNS("http://www.w3.org/2000/svg","rect"),c=ed(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=ih(this,lT).getBoundingClientRect(),n=(r=ih(this,lw).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":iv(this,lK,lG).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":iv(this,lH,lB).call(this,e);break;case"pointerdown":iv(this,lU,lW).call(this,e);break;case"pointerup":iv(this,l$,lV).call(this);break;case"pointerleave":iv(this,lq,lF).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}lk=new WeakMap,lA=new WeakMap,lT=new WeakMap,lw=new WeakMap,lI=new WeakMap,lS=new WeakMap,lC=new WeakMap,lM=new WeakMap,lL=new WeakMap,lR=new WeakSet,lx=function(e){let t=ih(this,lI).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ih(this,lS).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},lD=new WeakSet,lN=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},lP=new WeakSet,lO=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=G.window)||e.removeEventListener("pointerup",this),null==(t=G.window)||t.removeEventListener("pointermove",this)},lU=new WeakSet,lW=function(e){var t;ip(this,lA,e.composedPath().includes(this.range)),null==(t=G.window)||t.addEventListener("pointerup",this)},lH=new WeakSet,lB=function(e){var t;"mouse"!==e.pointerType&&iv(this,lU,lW).call(this,e),this.addEventListener("pointerleave",this),null==(t=G.window)||t.addEventListener("pointermove",this)},l$=new WeakSet,lV=function(){var e;null==(e=G.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},lq=new WeakSet,lF=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=G.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ih(this,lI).activeSegment)||t.style.removeProperty("transform")},lK=new WeakSet,lG=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),iv(this,lR,lx).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ih(this,lA))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},ib.shadowRootOptions={mode:"open"},ib.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},G.customElements.get("media-chrome-range")||G.customElements.define("media-chrome-range",ib);var ig=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iE=(e,t,i)=>(ig(e,t,"read from private field"),i?i.call(e):t.get(e)),iy=(e,t,i,a)=>(ig(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class i_ extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lj,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[c.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===c.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iE(this,lj))?void 0:a.unassociateElement)||r.call(a,this),iy(this,lj,null)),i&&this.isConnected&&(iy(this,lj,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iE(this,lj))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(c.MEDIA_CONTROLLER);a&&(iy(this,lj,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iE(this,lj))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iE(this,lj))?void 0:e.unassociateElement)||t.call(e,this),iy(this,lj,null)}}lj=new WeakMap,i_.shadowRootOptions={mode:"open"},i_.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},G.customElements.get("media-control-bar")||G.customElements.define("media-control-bar",i_);var ik=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iA=(e,t,i)=>(ik(e,t,"read from private field"),i?i.call(e):t.get(e)),iT=(e,t,i,a)=>(ik(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iw extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lY,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[c.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===c.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iA(this,lY))?void 0:a.unassociateElement)||r.call(a,this),iT(this,lY,null)),i&&this.isConnected&&(iT(this,lY,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iA(this,lY))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=ed(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(c.MEDIA_CONTROLLER);r&&(iT(this,lY,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iA(this,lY))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iA(this,lY))?void 0:e.unassociateElement)||t.call(e,this),iT(this,lY,null)}}lY=new WeakMap,iw.shadowRootOptions={mode:"open"},iw.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},iw.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},G.customElements.get("media-text-display")||G.customElements.define("media-text-display",iw);var iI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iS=(e,t,i)=>(iI(e,t,"read from private field"),i?i.call(e):t.get(e));class iC extends iw{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lQ,void 0),((e,t,i,a)=>(iI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lQ,this.shadowRoot.querySelector("slot")),iS(this,lQ).textContent=N(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===p.MEDIA_DURATION&&(iS(this,lQ).textContent=N(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return ec(this,p.MEDIA_DURATION)}set mediaDuration(e){eh(this,p.MEDIA_DURATION,e)}}lQ=new WeakMap,iC.getSlotTemplateHTML=function(e,t){return`
    <slot>${N(t.mediaDuration)}</slot>
  `},G.customElements.get("media-duration-display")||G.customElements.define("media-duration-display",iC);let iM={2:U("Network Error"),3:U("Decode Error"),4:U("Source Not Supported"),5:U("Encryption Error")},iL={2:U("A network error caused the media download to fail."),3:U("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:U("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:U("The media is encrypted and there are no keys to decrypt it.")},iR=e=>{var t,i;return 1===e.code?null:{title:null!=(t=iM[e.code])?t:`Error ${e.code}`,message:null!=(i=iL[e.code])?i:e.message}};var ix=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function iD(e){var t;let{title:i,message:a}=null!=(t=iR(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let iN=[p.MEDIA_ERROR_CODE,p.MEDIA_ERROR_MESSAGE];class iP extends iu{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lz,null)}static get observedAttributes(){return[...super.observedAttributes,...iN]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!iN.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==iR(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return ix(this,e=lz,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;ix(this,t=lz,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return ec(this,"mediaerrorcode")}set mediaErrorCode(e){eh(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ev(this,"mediaerrormessage")}set mediaErrorMessage(e){eb(this,"mediaerrormessage",e)}}lz=new WeakMap,iP.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${iD({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},iP.formatErrorMessage=iD,G.customElements.get("media-error-dialog")||G.customElements.define("media-error-dialog",iP);let iO=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,iU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,iW=e=>{let t=e.mediaIsFullscreen?U("exit fullscreen mode"):U("enter fullscreen mode");e.setAttribute("aria-label",t)};class iH extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_IS_FULLSCREEN,p.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iW(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_IS_FULLSCREEN&&iW(this)}get mediaFullscreenUnavailable(){return ev(this,p.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){eb(this,p.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return em(this,p.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){ep(this,p.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?u.MEDIA_EXIT_FULLSCREEN_REQUEST:u.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}iH.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${p.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${p.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${p.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${p.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iO}</slot>
      <slot name="exit">${iU}</slot>
    </slot>
  `},iH.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${U("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${U("Exit fullscreen mode")}</slot>
  `},G.customElements.get("media-fullscreen-button")||G.customElements.define("media-fullscreen-button",iH);let{MEDIA_TIME_IS_LIVE:iB,MEDIA_PAUSED:i$}=p,{MEDIA_SEEK_TO_LIVE_REQUEST:iV,MEDIA_PLAY_REQUEST:iq}=u,iF=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?U("seek to live"):U("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class iK extends t1{static get observedAttributes(){return[...super.observedAttributes,iB,i$]}connectedCallback(){super.connectedCallback(),iF(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),iF(this)}get mediaPaused(){return em(this,p.MEDIA_PAUSED)}set mediaPaused(e){ep(this,p.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return em(this,p.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){ep(this,p.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new G.CustomEvent(iV,{composed:!0,bubbles:!0})),this.hasAttribute(i$)&&this.dispatchEvent(new G.CustomEvent(iq,{composed:!0,bubbles:!0})))}}iK.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${iB}]:not([${i$}])) slot[name=indicator] > *,
      :host([${iB}]:not([${i$}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${iB}]:not([${i$}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${U("live")}</slot>
  `},G.customElements.get("media-live-button")||G.customElements.define("media-live-button",iK);var iG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ij=(e,t,i)=>(iG(e,t,"read from private field"),i?i.call(e):t.get(e)),iY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iQ=(e,t,i,a)=>(iG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iz="loadingdelay",iZ="noautohide",iX=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class iJ extends G.HTMLElement{constructor(){if(super(),iY(this,lZ,void 0),iY(this,lX,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[c.MEDIA_CONTROLLER,p.MEDIA_PAUSED,p.MEDIA_LOADING,iz]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iz&&t!==i?this.loadingDelay=Number(i):e===c.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ij(this,lZ))?void 0:a.unassociateElement)||r.call(a,this),iQ(this,lZ,null)),i&&this.isConnected&&(iQ(this,lZ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ij(this,lZ))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(c.MEDIA_CONTROLLER);a&&(iQ(this,lZ,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ij(this,lZ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ij(this,lZ))?void 0:e.unassociateElement)||t.call(e,this),iQ(this,lZ,null)}get loadingDelay(){return ij(this,lX)}set loadingDelay(e){iQ(this,lX,e);let{style:t}=ed(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return em(this,p.MEDIA_PAUSED)}set mediaPaused(e){ep(this,p.MEDIA_PAUSED,e)}get mediaLoading(){return em(this,p.MEDIA_LOADING)}set mediaLoading(e){ep(this,p.MEDIA_LOADING,e)}get mediaController(){return ev(this,c.MEDIA_CONTROLLER)}set mediaController(e){eb(this,c.MEDIA_CONTROLLER,e)}get noAutohide(){return em(this,iZ)}set noAutohide(e){ep(this,iZ,e)}}lZ=new WeakMap,lX=new WeakMap,iJ.shadowRootOptions={mode:"open"},iJ.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${p.MEDIA_LOADING}]:not([${p.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${p.MEDIA_LOADING}]:not([${p.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${p.MEDIA_LOADING}]:not([${p.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${iX}</slot>
    <div id="status" role="status" aria-live="polite">${U("media loading")}</div>
  `},G.customElements.get("media-loading-indicator")||G.customElements.define("media-loading-indicator",iJ);let i0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,i1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,i2=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,i3=e=>{let t="off"===e.mediaVolumeLevel?U("unmute"):U("mute");e.setAttribute("aria-label",t)};class i4 extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),i3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_VOLUME_LEVEL&&i3(this)}get mediaVolumeLevel(){return ev(this,p.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){eb(this,p.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?u.MEDIA_UNMUTE_REQUEST:u.MEDIA_MUTE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}i4.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${p.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${p.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${p.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${p.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${p.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${p.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${p.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${i0}</slot>
      <slot name="low">${i1}</slot>
      <slot name="medium">${i1}</slot>
      <slot name="high">${i2}</slot>
    </slot>
  `},i4.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${U("Mute")}</slot>
    <slot name="tooltip-unmute">${U("Unmute")}</slot>
  `},G.customElements.get("media-mute-button")||G.customElements.define("media-mute-button",i4);let i5=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,i9=e=>{let t=e.mediaIsPip?U("exit picture in picture mode"):U("enter picture in picture mode");e.setAttribute("aria-label",t)};class i8 extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_IS_PIP,p.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),i9(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_IS_PIP&&i9(this)}get mediaPipUnavailable(){return ev(this,p.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){eb(this,p.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return em(this,p.MEDIA_IS_PIP)}set mediaIsPip(e){ep(this,p.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?u.MEDIA_EXIT_PIP_REQUEST:u.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}i8.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${p.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${p.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${p.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${p.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${i5}</slot>
      <slot name="exit">${i5}</slot>
    </slot>
  `},i8.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${U("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${U("Exit picture in picture mode")}</slot>
  `},G.customElements.get("media-pip-button")||G.customElements.define("media-pip-button",i8);var i7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let i6="rates",ae=[1,1.2,1.5,1.7,2];class at extends t1{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lJ,new e$(this,i6,{defaultValue:ae})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_PLAYBACK_RATE,i6]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i6&&(i7(this,lJ).value=i),e===p.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",U("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return i7(this,lJ)}set rates(e){e?Array.isArray(e)?i7(this,lJ).value=e.join(" "):"string"==typeof e&&(i7(this,lJ).value=e):i7(this,lJ).value=""}get mediaPlaybackRate(){return ec(this,p.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eh(this,p.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(i7(this,lJ).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new G.CustomEvent(u.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}lJ=new WeakMap,at.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},at.getTooltipContentHTML=function(){return U("Playback rate")},G.customElements.get("media-playback-rate-button")||G.customElements.define("media-playback-rate-button",at);let ai=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,aa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ar=e=>{let t=e.mediaPaused?U("play"):U("pause");e.setAttribute("aria-label",t)};class an extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_PAUSED,p.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),ar(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_PAUSED&&ar(this)}get mediaPaused(){return em(this,p.MEDIA_PAUSED)}set mediaPaused(e){ep(this,p.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?u.MEDIA_PLAY_REQUEST:u.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}an.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${p.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${p.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${p.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${p.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ai}</slot>
      <slot name="pause">${aa}</slot>
    </slot>
  `},an.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${U("Play")}</slot>
    <slot name="tooltip-pause">${U("Pause")}</slot>
  `},G.customElements.get("media-play-button")||G.customElements.define("media-play-button",an);let as="placeholdersrc";class ao extends G.HTMLElement{static get observedAttributes(){return[as,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===as)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return ev(this,as)}set placeholderSrc(e){eb(this,"src",e)}get src(){return ev(this,"src")}set src(e){eb(this,"src",e)}}ao.shadowRootOptions={mode:"open"},ao.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},G.customElements.get("media-poster-image")||G.customElements.define("media-poster-image",ao);var al=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class ad extends iw{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,l0,void 0),((e,t,i,a)=>(al(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,l0,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===p.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i){var a,r;(al(this,a=l0,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return ev(this,p.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){eb(this,p.MEDIA_PREVIEW_CHAPTER,e)}}l0=new WeakMap,G.customElements.get("media-preview-chapter-display")||G.customElements.define("media-preview-chapter-display",ad);var au=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ac=(e,t,i)=>(au(e,t,"read from private field"),i?i.call(e):t.get(e)),ah=(e,t,i,a)=>(au(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class am extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,l1,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[c.MEDIA_CONTROLLER,p.MEDIA_PREVIEW_IMAGE,p.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(c.MEDIA_CONTROLLER);a&&(ah(this,l1,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ac(this,l1))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ac(this,l1))?void 0:e.unassociateElement)||t.call(e,this),ah(this,l1,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[p.MEDIA_PREVIEW_IMAGE,p.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===c.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ac(this,l1))?void 0:a.unassociateElement)||r.call(a,this),ah(this,l1,null)),i&&this.isConnected&&(ah(this,l1,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ac(this,l1))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return ev(this,p.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eb(this,p.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(p.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(p.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(p.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:v}=ed(this.shadowRoot,":host"),b=ed(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),E=m?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let f=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==s&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,f()},g.src=s,f()),f(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}l1=new WeakMap,am.shadowRootOptions={mode:"open"},am.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},G.customElements.get("media-preview-thumbnail")||G.customElements.define("media-preview-thumbnail",am);var ap=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},av=(e,t,i)=>(ap(e,t,"read from private field"),i?i.call(e):t.get(e));class ab extends iw{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,l2,void 0),((e,t,i,a)=>(ap(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,l2,this.shadowRoot.querySelector("slot")),av(this,l2).textContent=N(0)}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_PREVIEW_TIME&&null!=i&&(av(this,l2).textContent=N(parseFloat(i)))}get mediaPreviewTime(){return ec(this,p.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){eh(this,p.MEDIA_PREVIEW_TIME,e)}}l2=new WeakMap,G.customElements.get("media-preview-time-display")||G.customElements.define("media-preview-time-display",ab);let ag="seekoffset";class aE extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_CURRENT_TIME,ag]}connectedCallback(){super.connectedCallback(),this.seekOffset=ec(this,ag,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ag&&(this.seekOffset=ec(this,ag,30))}get seekOffset(){return ec(this,ag,30)}set seekOffset(e){eh(this,ag,e),this.setAttribute("aria-label",U("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),ei(ea(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ec(this,p.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){eh(this,p.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new G.CustomEvent(u.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aE.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},aE.getTooltipContentHTML=function(){return U("Seek backward")},G.customElements.get("media-seek-backward-button")||G.customElements.define("media-seek-backward-button",aE);let af="seekoffset";class ay extends t1{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_CURRENT_TIME,af]}connectedCallback(){super.connectedCallback(),this.seekOffset=ec(this,af,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===af&&(this.seekOffset=ec(this,af,30))}get seekOffset(){return ec(this,af,30)}set seekOffset(e){eh(this,af,e),this.setAttribute("aria-label",U("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),ei(ea(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ec(this,p.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){eh(this,p.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new G.CustomEvent(u.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}ay.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},ay.getTooltipContentHTML=function(){return U("Seek forward")},G.customElements.get("media-seek-forward-button")||G.customElements.define("media-seek-forward-button",ay);var a_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ak=(e,t,i)=>(a_(e,t,"read from private field"),i?i.call(e):t.get(e));let aA={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},aT=[...Object.values(aA),p.MEDIA_CURRENT_TIME,p.MEDIA_DURATION,p.MEDIA_SEEKABLE],aw=["Enter"," "],aI="&nbsp;/&nbsp;",aS=(e,{timesSep:t=aI}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?N(0-(s-r)):N(r);return e.showDuration?`${o}${t}${N(s)}`:o};class aC extends iw{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,l3,void 0),((e,t,i,a)=>(a_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,l3,this.shadowRoot.querySelector("slot")),ak(this,l3).innerHTML=`${aS(this)}`}static get observedAttributes(){return[...super.observedAttributes,...aT,"disabled"]}connectedCallback(){let{style:e}=ed(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",U("playback time"));let t=e=>{let{key:i}=e;aw.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;i||a||!aw.includes(r)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){aT.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return em(this,aA.REMAINING)}set remaining(e){ep(this,aA.REMAINING,e)}get showDuration(){return em(this,aA.SHOW_DURATION)}set showDuration(e){ep(this,aA.SHOW_DURATION,e)}get noToggle(){return em(this,aA.NO_TOGGLE)}set noToggle(e){ep(this,aA.NO_TOGGLE,e)}get mediaDuration(){return ec(this,p.MEDIA_DURATION)}set mediaDuration(e){eh(this,p.MEDIA_DURATION,e)}get mediaCurrentTime(){return ec(this,p.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){eh(this,p.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(p.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(p.MEDIA_SEEKABLE):this.setAttribute(p.MEDIA_SEEKABLE,e.join(":"))}update(){let e=aS(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let n=e.remaining?D(0-(r-i)):D(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",n);let s=D(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)})(this),e!==ak(this,l3).innerHTML&&(ak(this,l3).innerHTML=e)}}l3=new WeakMap,aC.getSlotTemplateHTML=function(e,t){return`
    <slot>${aS(t)}</slot>
  `},G.customElements.get("media-time-display")||G.customElements.define("media-time-display",aC);var aM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aL=(e,t,i)=>(aM(e,t,"read from private field"),i?i.call(e):t.get(e)),aR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ax=(e,t,i,a)=>(aM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aD{constructor(e,t,i){aR(this,l4,void 0),aR(this,l5,void 0),aR(this,l9,void 0),aR(this,l8,void 0),aR(this,l7,void 0),aR(this,l6,void 0),aR(this,de,void 0),aR(this,dt,void 0),aR(this,di,0),aR(this,da,(e=performance.now())=>{ax(this,di,requestAnimationFrame(aL(this,da))),ax(this,l8,performance.now()-aL(this,l9));let t=1e3/this.fps;if(aL(this,l8)>t){let i,a,r,n;ax(this,l9,e-aL(this,l8)%t);let s=1e3/((e-aL(this,l5))/++(i=this,a=l7,{set _(value){ax(i,a,value,r)},get _(){return aL(i,a,n)}})._),o=(e-aL(this,l6))/1e3/this.duration,l=aL(this,de)+o*this.playbackRate;l-aL(this,l4).valueAsNumber>0?ax(this,dt,this.playbackRate/this.duration/s):(ax(this,dt,.995*aL(this,dt)),l=aL(this,l4).valueAsNumber+aL(this,dt)),this.callback(l)}}),ax(this,l4,e),this.callback=t,this.fps=i}start(){0===aL(this,di)&&(ax(this,l9,performance.now()),ax(this,l5,aL(this,l9)),ax(this,l7,0),aL(this,da).call(this))}stop(){0!==aL(this,di)&&(cancelAnimationFrame(aL(this,di)),ax(this,di,0))}update({start:e,duration:t,playbackRate:i}){let a=e-aL(this,l4).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),ax(this,de,e),ax(this,l6,performance.now()),this.duration=t,this.playbackRate=i}}l4=new WeakMap,l5=new WeakMap,l9=new WeakMap,l8=new WeakMap,l7=new WeakMap,l6=new WeakMap,de=new WeakMap,dt=new WeakMap,di=new WeakMap,da=new WeakMap;var aN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aP=(e,t,i)=>(aN(e,t,"read from private field"),i?i.call(e):t.get(e)),aO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aU=(e,t,i,a)=>(aN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aW=(e,t,i)=>(aN(e,t,"access private method"),i);let aH=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},aB=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class a$ extends ib{constructor(){super(),aO(this,dp),aO(this,db),aO(this,df),aO(this,d_),aO(this,dA),aO(this,dw),aO(this,dS),aO(this,dM),aO(this,dr,void 0),aO(this,dn,void 0),aO(this,ds,void 0),aO(this,dl,void 0),aO(this,dd,void 0),aO(this,du,void 0),aO(this,dc,void 0),aO(this,dh,void 0),aO(this,dm,void 0),aO(this,dE,e=>{this.dragging||(M(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),aU(this,ds,this.shadowRoot.querySelectorAll('[part~="box"]')),aU(this,dd,this.shadowRoot.querySelector('[part~="preview-box"]')),aU(this,du,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);aU(this,dc,parseInt(e.getPropertyValue("--media-box-padding-left"))),aU(this,dh,parseInt(e.getPropertyValue("--media-box-padding-right"))),aU(this,dn,new aD(this.range,aP(this,dE),60))}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_PAUSED,p.MEDIA_DURATION,p.MEDIA_SEEKABLE,p.MEDIA_CURRENT_TIME,p.MEDIA_PREVIEW_IMAGE,p.MEDIA_PREVIEW_TIME,p.MEDIA_PREVIEW_CHAPTER,p.MEDIA_BUFFERED,p.MEDIA_PLAYBACK_RATE,p.MEDIA_LOADING,p.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",U("seek")),aW(this,dp,dv).call(this),aU(this,dr,this.getRootNode()),null==(e=aP(this,dr))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),aW(this,dp,dv).call(this),null==(e=aP(this,dr))||e.removeEventListener("transitionstart",this),aU(this,dr,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===p.MEDIA_CURRENT_TIME||e===p.MEDIA_PAUSED||e===p.MEDIA_ENDED||e===p.MEDIA_LOADING||e===p.MEDIA_DURATION||e===p.MEDIA_SEEKABLE){let e,t,i,a;aP(this,dn).update({start:aH(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),aW(this,dp,dv).call(this),e=this.range,t=D(+aB(this)),i=D(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===p.MEDIA_BUFFERED&&this.updateBufferedBar();(e===p.MEDIA_DURATION||e===p.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=aP(this,dm),this.updateBar())}}get mediaChaptersCues(){return aP(this,dm)}set mediaChaptersCues(e){var t;aU(this,dm,e),this.updateSegments(null==(t=aP(this,dm))?void 0:t.map(e=>({start:aH(this,e.startTime),end:aH(this,e.endTime)})))}get mediaPaused(){return em(this,p.MEDIA_PAUSED)}set mediaPaused(e){ep(this,p.MEDIA_PAUSED,e)}get mediaLoading(){return em(this,p.MEDIA_LOADING)}set mediaLoading(e){ep(this,p.MEDIA_LOADING,e)}get mediaDuration(){return ec(this,p.MEDIA_DURATION)}set mediaDuration(e){eh(this,p.MEDIA_DURATION,e)}get mediaCurrentTime(){return ec(this,p.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){eh(this,p.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ec(this,p.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eh(this,p.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(p.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(p.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(p.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(p.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(p.MEDIA_SEEKABLE):this.setAttribute(p.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return ev(this,p.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eb(this,p.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ec(this,p.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){eh(this,p.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return em(this,p.MEDIA_ENDED)}set mediaEnded(e){ep(this,p.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=aH(this,r)}let{style:a}=ed(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=ed(this.shadowRoot,"#current-rail"),t=ed(this.shadowRoot,'[part~="current-box"]'),i=aW(this,df,dy).call(this,aP(this,du)),a=aW(this,d_,dk).call(this,i,this.range.valueAsNumber),r=aW(this,dA,dT).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":aW(this,dM,dL).call(this);break;case"pointermove":aW(this,dw,dI).call(this,e);break;case"pointerup":case"pointerleave":aW(this,dS,dC).call(this,null);break;case"transitionstart":er(e.target,this)&&setTimeout(()=>aW(this,dp,dv).call(this),0)}}}dr=new WeakMap,dn=new WeakMap,ds=new WeakMap,dl=new WeakMap,dd=new WeakMap,du=new WeakMap,dc=new WeakMap,dh=new WeakMap,dm=new WeakMap,dp=new WeakSet,dv=function(){aW(this,db,dg).call(this)?aP(this,dn).start():aP(this,dn).stop()},db=new WeakSet,dg=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&el(this)},dE=new WeakMap,df=new WeakSet,dy=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?en(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},d_=new WeakSet,dk=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},dA=new WeakSet,dT=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+aP(this,dc)){let t=e.range.left-e.bounds.left-aP(this,dc);return`${n-i/2+t}px`}if(n>r-aP(this,dh)){let t=e.bounds.right-e.range.right-aP(this,dh);return`${n+i/2-t-e.range.width}px`}return 0},dw=new WeakSet,dI=function(e){let t=[...aP(this,ds)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void aW(this,dS,dC).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=ed(this.shadowRoot,"#preview-rail"),r=ed(this.shadowRoot,'[part~="preview-box"]'),n=aW(this,df,dy).call(this,aP(this,dd)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=aW(this,d_,dk).call(this,n,s),l=aW(this,dA,dT).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(aP(this,dl))-Math.round(s*i))&&s>.01&&s<.99||(aU(this,dl,s*i),aW(this,dS,dC).call(this,aP(this,dl)))},dS=new WeakSet,dC=function(e){this.dispatchEvent(new G.CustomEvent(u.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dM=new WeakSet,dL=function(){aP(this,dn).stop();let e=aB(this);this.dispatchEvent(new G.CustomEvent(u.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},a$.shadowRootOptions={mode:"open"},a$.getTemplateHTML=function(e){return`
    ${ib.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${p.MEDIA_PREVIEW_IMAGE}], [${p.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${p.MEDIA_PREVIEW_IMAGE}], [${p.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${p.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${p.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${p.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${p.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${p.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${p.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${p.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${p.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${p.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${p.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${p.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${p.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${am.shadowRootOptions.mode}">
            ${am.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},G.customElements.get("media-time-range")||G.customElements.define("media-time-range",a$);class aV extends ib{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_VOLUME,p.MEDIA_MUTED,p.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new G.CustomEvent(u.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",U("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===p.MEDIA_VOLUME||e===p.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return ec(this,p.MEDIA_VOLUME,1)}set mediaVolume(e){eh(this,p.MEDIA_VOLUME,e)}get mediaMuted(){return em(this,p.MEDIA_MUTED)}set mediaMuted(e){ep(this,p.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ev(this,p.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){eb(this,p.MEDIA_VOLUME_UNAVAILABLE,e)}}G.customElements.get("media-volume-range")||G.customElements.define("media-volume-range",aV);var aq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aF=(e,t,i)=>(aq(e,t,"read from private field"),i?i.call(e):t.get(e)),aK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aG=(e,t,i,a)=>(aq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aj={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof a1&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof a1?a.element[a.attributeName]=t:a.value=t}}}};class aY extends G.DocumentFragment{constructor(e,t,i=aj){var a;super(),aK(this,dR,void 0),aK(this,dx,void 0),this.append(e.content.cloneNode(!0)),aG(this,dR,aQ(this)),aG(this,dx,i),null==(a=i.createCallback)||a.call(i,this,aF(this,dR),t),i.processCallback(this,aF(this,dR),t)}update(e){aF(this,dx).processCallback(this,aF(this,dR),e)}}dR=new WeakMap,dx=new WeakMap;let aQ=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new a0;for([i,a]of aZ(r.value))if(i){let i=new a1(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of aZ(n))if(i){let i=new a2(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new a3(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else aQ(r,t);return t},az={},aZ=e=>{let t="",i=0,a=az[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),az[e]=a};class aX{get value(){return""}set value(e){}toString(){return this.value}}let aJ=new WeakMap;class a0{constructor(){aK(this,dD,[])}[Symbol.iterator](){return aF(this,dD).values()}get length(){return aF(this,dD).length}item(e){return aF(this,dD)[e]}append(...e){for(let t of e)t instanceof a1&&aJ.set(t,this),aF(this,dD).push(t)}toString(){return aF(this,dD).join("")}}dD=new WeakMap;class a1 extends aX{constructor(e,t,i){super(),aK(this,dW),aK(this,dN,""),aK(this,dP,void 0),aK(this,dO,void 0),aK(this,dU,void 0),aG(this,dP,e),aG(this,dO,t),aG(this,dU,i)}get attributeName(){return aF(this,dO)}get attributeNamespace(){return aF(this,dU)}get element(){return aF(this,dP)}get value(){return aF(this,dN)}set value(e){aF(this,dN)!==e&&(aG(this,dN,e),aF(this,dW,dH)&&1!==aF(this,dW,dH).length?aF(this,dP).setAttributeNS(aF(this,dU),aF(this,dO),aF(this,dW,dH).toString()):null==e?aF(this,dP).removeAttributeNS(aF(this,dU),aF(this,dO)):aF(this,dP).setAttributeNS(aF(this,dU),aF(this,dO),e))}get booleanValue(){return aF(this,dP).hasAttributeNS(aF(this,dU),aF(this,dO))}set booleanValue(e){if(aF(this,dW,dH)&&1!==aF(this,dW,dH).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}dN=new WeakMap,dP=new WeakMap,dO=new WeakMap,dU=new WeakMap,dW=new WeakSet,dH=function(){return aJ.get(this)};class a2 extends aX{constructor(e,t){super(),aK(this,dB,void 0),aK(this,d$,void 0),aG(this,dB,e),aG(this,d$,t?[...t]:[new Text])}get replacementNodes(){return aF(this,d$)}get parentNode(){return aF(this,dB)}get nextSibling(){return aF(this,d$)[aF(this,d$).length-1].nextSibling}get previousSibling(){return aF(this,d$)[0].previousSibling}get value(){return aF(this,d$).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),aG(this,d$,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(aF(this,d$)[0].parentNode,aF(this,d$),t,this.nextSibling))}}dB=new WeakMap,d$=new WeakMap;class a3 extends a2{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let a4={string:e=>String(e)};class a5{constructor(e){this.template=e,this.state=void 0}}let a9=new WeakMap,a8=new WeakMap,a7={partial:(e,t)=>{t[e.expression]=new a5(e.template)},if:(e,t)=>{var i;if(ri(e.expression,t))if(a9.get(e)!==e.template){a9.set(e,e.template);let i=new aY(e.template,t,re);e.replace(i),a8.set(e,i)}else null==(i=a8.get(e))||i.update(t);else e.replace(""),a9.delete(e),a8.delete(e)}},a6=Object.keys(a7),re={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof a3){if(!n.directive){let e=a6.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=a7[n.directive])||a.call(a7,n,i);continue}let t=ri(e,i);if(t instanceof a5){a9.get(n)!==t.template?(a9.set(n,t.template),n.value=t=new aY(t.template,t.state,re),a8.set(n,t)):null==(r=a8.get(n))||r.update(t.state);continue}t?(n instanceof a1&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof a1?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,a9.delete(n),a8.delete(n))):n instanceof a1?n.value=void 0:(n.value=void 0,a9.delete(n),a8.delete(n))}}},rt={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=a4[t])?void 0:i.call(a4,e)}};function ri(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return ra(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return ra(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=rn(d,t))}return i}if(1===d.length)return rr(d[0])?rn(d[0].token,t):ra(e);if(2===d.length){let i=rt[null==(o=d[0])?void 0:o.token];return i&&rr(d[1])?i(rn(d[1].token,t)):ra(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=rt[i];if(!a||!rr(d[0])||!rr(d[2]))return ra(e);let r=rn(d[0].token,t);return a(r,"|"===i?d[2].token:rn(d[2].token,t))}}function ra(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function rr({type:e}){return["number","boolean","string","param"].includes(e)}function rn(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):L(e)?parseFloat(e):t[e]}var rs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ro=(e,t,i)=>(rs(e,t,"read from private field"),i?i.call(e):t.get(e)),rl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rd=(e,t,i,a)=>(rs(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ru=(e,t,i)=>(rs(e,t,"access private method"),i);let rc={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},rh=j.createElement("template");rh.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class rm extends G.HTMLElement{constructor(){super(),rl(this,dK),rl(this,dj),rl(this,dV,void 0),rl(this,dq,void 0),rl(this,dF,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(rc[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(v.BREAKPOINTS_COMPUTED,this.render),ru(this,dK,dG).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=ro(this,dV))?e:this.constructor.template}set template(e){rd(this,dF,null),rd(this,dV,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>rc[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=rc[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(L(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&ru(this,dj,dY).call(this)}connectedCallback(){ru(this,dj,dY).call(this)}createRenderer(){this.template&&this.template!==ro(this,dq)&&(rd(this,dq,this.template),this.renderer=new aY(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(rh.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function rp(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function rv(e){return e.split("-")[0]}dV=new WeakMap,dq=new WeakMap,dF=new WeakMap,dK=new WeakSet,dG=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},dj=new WeakSet,dY=function(){var e;let t=this.getAttribute("template");if(!t||t===ro(this,dF))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){rd(this,dF,t),rd(this,dV,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(rd(this,dF,t),rp(t).then(e=>{let t=j.createElement("template");t.innerHTML=e,rd(this,dV,t),this.createRenderer()}).catch(console.error))},rm.observedAttributes=["template"],rm.processor=re,G.customElements.get("media-theme")||G.customElements.define("media-theme",rm);class rb extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class rg extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var rE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rf=(e,t,i)=>(rE(e,t,"read from private field"),i?i.call(e):t.get(e)),ry=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r_=(e,t,i,a)=>(rE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rk=(e,t,i)=>(rE(e,t,"access private method"),i);function rA({type:e,text:t,value:i,checked:a}){let r=j.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=j.createElement("span");return n.textContent=t,r.append(n),r}function rT(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let rw="style",rI="hidden",rS="disabled";class rC extends G.HTMLElement{constructor(){if(super(),ry(this,d2),ry(this,d5),ry(this,d8),ry(this,d6),ry(this,ut),ry(this,un),ry(this,uo),ry(this,ud),ry(this,uc),ry(this,um),ry(this,uv),ry(this,ug),ry(this,uf),ry(this,u_),ry(this,uA),ry(this,uw),ry(this,uS),ry(this,dQ,null),ry(this,dz,null),ry(this,dZ,null),ry(this,dX,new Set),ry(this,dJ,void 0),ry(this,d0,!1),ry(this,d1,null),ry(this,d4,()=>{let e=rf(this,dX),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));r_(this,dX,t)}),ry(this,ua,()=>{rk(this,un,us).call(this),rk(this,uo,ul).call(this,!1)}),ry(this,ur,()=>{rk(this,un,us).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),r_(this,dJ,new MutationObserver(rf(this,d4))),rf(this,dJ).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[rS,rI,rw,"anchor",c.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":rk(this,d2,d3).call(this,e);break;case"invoke":rk(this,d8,d7).call(this,e);break;case"click":rk(this,ud,uu).call(this,e);break;case"toggle":rk(this,um,up).call(this,e);break;case"focusout":rk(this,ug,uE).call(this,e);break;case"keydown":rk(this,uf,uy).call(this,e)}}connectedCallback(){var e,t;r_(this,d1,eu(this.shadowRoot,":host")),rk(this,d5,d9).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),r_(this,dQ,et(this)),null==(t=null==(e=rf(this,dQ))?void 0:e.associateElement)||t.call(e,this),this.hidden||(Z(rL(this),rf(this,ua)),Z(this,rf(this,ur)))}disconnectedCallback(){var e,t;X(rL(this),rf(this,ua)),X(this,rf(this,ur)),this.disable(),null==(t=null==(e=rf(this,dQ))?void 0:e.unassociateElement)||t.call(e,this),r_(this,dQ,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===rI&&i!==t?(rf(this,d0)||r_(this,d0,!0),this.hidden?rk(this,ut,ui).call(this):rk(this,d6,ue).call(this),this.dispatchEvent(new rg({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===c.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rf(this,dQ))?void 0:a.unassociateElement)||r.call(a,this),r_(this,dQ,null)),i&&this.isConnected&&(r_(this,dQ,et(this)),null==(s=null==(n=rf(this,dQ))?void 0:n.associateElement)||s.call(n,this))):e===rS&&i!==t?null==i?this.enable():this.disable():e===rw&&i!==t&&rk(this,d5,d9).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=eo(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(rM)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&rk(this,uS,uC).call(this,t)}focus(){if(r_(this,dz,es()),this.items.length){rk(this,uw,uI).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=rk(this,u_,uk).call(this,e);i&&(rk(this,uS,uC).call(this,i,"checkbox"===i.type),rf(this,dZ)&&!this.hidden&&(null==(t=rf(this,dz))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=rk(this,u_,uk).call(this,e))?t:rk(this,uA,uT).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),rk(this,uw,uI).call(this,r[s]),r[s].focus()}}function rM(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function rL(e){var t;return null!=(t=e.getAttribute("bounds")?en(e,`#${e.getAttribute("bounds")}`):ee(e)||e.parentElement)?t:e}dQ=new WeakMap,dz=new WeakMap,dZ=new WeakMap,dX=new WeakMap,dJ=new WeakMap,d0=new WeakMap,d1=new WeakMap,d2=new WeakSet,d3=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||rf(this,d4).call(this)},d4=new WeakMap,d5=new WeakSet,d9=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},d8=new WeakSet,d7=function(e){r_(this,dZ,e.relatedTarget),er(this,e.relatedTarget)||(this.hidden=!this.hidden)},d6=new WeakSet,ue=function(){var e;null==(e=rf(this,dZ))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Z(rL(this),rf(this,ua)),Z(this,rf(this,ur))},ut=new WeakSet,ui=function(){var e;null==(e=rf(this,dZ))||e.setAttribute("aria-expanded","false"),X(rL(this),rf(this,ua)),X(this,rf(this,ur))},ua=new WeakMap,ur=new WeakMap,un=new WeakSet,us=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(rv(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=rv(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=rL(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=rf(this,d1);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},uo=new WeakSet,ul=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=rf(this,d1);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),rk(this,un,us).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),rk(this,un,us).call(this);a.removeProperty("--media-menu-transition-in")},ud=new WeakSet,uu=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(rf(this,uc,uh))){null==(t=rf(this,dz))||t.focus(),this.hidden=!0;return}let i=rk(this,u_,uk).call(this,e);!i||i.hasAttribute("disabled")||(rk(this,uw,uI).call(this,i),this.handleSelect(e))},uc=new WeakSet,uh=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},um=new WeakSet,up=function(e){if(e.target===this)return;rk(this,uv,ub).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new rb({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);rk(this,uo,ul).call(this,!0)},uv=new WeakSet,ub=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},ug=new WeakSet,uE=function(e){var t;er(this,e.relatedTarget)||(rf(this,d0)&&(null==(t=rf(this,dz))||t.focus()),rf(this,dZ)&&rf(this,dZ)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},uf=new WeakSet,uy=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(rf(this,d0)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=rf(this,dz))||n.focus(),rf(this,d0)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},u_=new WeakSet,uk=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},uA=new WeakSet,uT=function(){return this.items.find(e=>0===e.tabIndex)},uw=new WeakSet,uI=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},uS=new WeakSet,uC=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},rC.shadowRootOptions={mode:"open"},rC.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},G.customElements.get("media-chrome-menu")||G.customElements.define("media-chrome-menu",rC);var rR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rx=(e,t,i)=>(rR(e,t,"read from private field"),i?i.call(e):t.get(e)),rD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rN=(e,t,i,a)=>(rR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rP=(e,t,i)=>(rR(e,t,"access private method"),i);let rO="type",rU="value",rW="checked",rH="disabled";class rB extends G.HTMLElement{constructor(){if(super(),rD(this,uR),rD(this,uD),rD(this,uP),rD(this,uW),rD(this,uB),rD(this,uV),rD(this,uM,!1),rD(this,uL,void 0),rD(this,uU,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=j.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=J(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[rO,rH,rW,rU]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),r$(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":rP(this,uR,ux).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":rP(this,uB,u$).call(this,e);break;case"keyup":rP(this,uW,uH).call(this,e)}}attributeChangedCallback(e,t,i){e===rW&&r$(this)&&!rx(this,uM)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===rO&&i!==t?this.role="menuitem"+i:e===rH&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(rH)||this.enable(),this.role="menuitem"+this.type,rN(this,uL,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),rP(this,uV,uq).call(this)}disconnectedCallback(){this.disable(),rP(this,uV,uq).call(this),rN(this,uL,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=eo(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(rO))?e:""}set type(e){this.setAttribute(rO,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(rU))?e:this.text}set value(e){this.setAttribute(rU,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(r$(this))return"true"===this.getAttribute("aria-checked")}set checked(e){r$(this)&&(rN(this,uM,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!r$(this)&&this.invokeTargetElement&&er(this,e.target)&&this.invokeTargetElement.dispatchEvent(new rb({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function r$(e){return"radio"===e.type||"checkbox"===e.type}uM=new WeakMap,uL=new WeakMap,uR=new WeakSet,ux=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?rP(this,uD,uN).call(this):rP(this,uP,uO).call(this))},uD=new WeakSet,uN=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",rx(this,uU)),this.submenuElement.addEventListener("addmenuitem",rx(this,uU)),this.submenuElement.addEventListener("removemenuitem",rx(this,uU)),rx(this,uU).call(this)},uP=new WeakSet,uO=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",rx(this,uU)),this.submenuElement.removeEventListener("addmenuitem",rx(this,uU)),this.submenuElement.removeEventListener("removemenuitem",rx(this,uU)),rx(this,uU).call(this)},uU=new WeakMap,uW=new WeakSet,uH=function(e){let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",rP(this,uW,uH))},uB=new WeakSet,u$=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rP(this,uW,uH)):this.addEventListener("keyup",rP(this,uW,uH),{once:!0})},uV=new WeakSet,uq=function(){var e;let t=null==(e=rx(this,uL))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},rB.shadowRootOptions={mode:"open"},rB.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},rB.getSuffixSlotInnerHTML=function(e){return""},G.customElements.get("media-chrome-menu-item")||G.customElements.define("media-chrome-menu-item",rB);class rV extends rC{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ee(this).querySelector("media-settings-menu-button")}}rV.getTemplateHTML=function(e){return`
    ${rC.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},G.customElements.get("media-settings-menu")||G.customElements.define("media-settings-menu",rV);class rq extends rB{}rq.shadowRootOptions={mode:"open"},rq.getTemplateHTML=function(e){return`
    ${rB.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},rq.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},G.customElements.get("media-settings-menu-item")||G.customElements.define("media-settings-menu-item",rq);class rF extends t1{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=eo(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new rb({relatedTarget:this}))}}G.customElements.get("media-chrome-menu-button")||G.customElements.define("media-chrome-menu-button",rF);class rK extends rF{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",U("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:ee(this).querySelector("media-settings-menu")}}rK.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},rK.getTooltipContentHTML=function(){return U("Settings")},G.customElements.get("media-settings-menu-button")||G.customElements.define("media-settings-menu-button",rK);var rG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rj=(e,t,i)=>(rG(e,t,"read from private field"),i?i.call(e):t.get(e)),rY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rQ=(e,t,i,a)=>(rG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rz=(e,t,i)=>(rG(e,t,"access private method"),i);class rZ extends rC{constructor(){super(...arguments),rY(this,uG),rY(this,uY),rY(this,uF,[]),rY(this,uK,void 0)}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_AUDIO_TRACK_LIST,p.MEDIA_AUDIO_TRACK_ENABLED,p.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===p.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===p.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;rQ(this,uF,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(C)),rz(this,uG,uj).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",rz(this,uY,uQ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",rz(this,uY,uQ))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=ee(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return rj(this,uF)}set mediaAudioTrackList(e){rQ(this,uF,e),rz(this,uG,uj).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=ev(this,p.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eb(this,p.MEDIA_AUDIO_TRACK_ENABLED,e)}}uF=new WeakMap,uK=new WeakMap,uG=new WeakSet,uj=function(){if(rj(this,uK)===JSON.stringify(this.mediaAudioTrackList))return;rQ(this,uK,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=rA({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(rT(this,"checked-indicator")),this.defaultSlot.append(e)}},uY=new WeakSet,uQ=function(){if(null==this.value)return;let e=new G.CustomEvent(u.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-audio-track-menu")||G.customElements.define("media-audio-track-menu",rZ);let rX=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class rJ extends rF{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_AUDIO_TRACK_ENABLED,p.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",U("Audio"))}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=ee(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=ev(this,p.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eb(this,p.MEDIA_AUDIO_TRACK_ENABLED,e)}}rJ.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${rX}</slot>
  `},rJ.getTooltipContentHTML=function(){return U("Audio")},G.customElements.get("media-audio-track-menu-button")||G.customElements.define("media-audio-track-menu-button",rJ);var r0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r2=(e,t,i)=>(r0(e,t,"access private method"),i);let r3=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class r4 extends rC{constructor(){super(...arguments),r1(this,uZ),r1(this,uJ),r1(this,uz,void 0)}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_SUBTITLES_LIST,p.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_SUBTITLES_LIST&&t!==i?r2(this,uZ,uX).call(this):e===p.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",r2(this,uJ,u0))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",r2(this,uJ,u0))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ee(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return r5(this,p.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){r9(this,p.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return r5(this,p.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){r9(this,p.MEDIA_SUBTITLES_SHOWING,e)}}uz=new WeakMap,uZ=new WeakSet,uX=function(){var e,t,i,a,r,n;if(r0(this,t=uz,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=uz,r=JSON.stringify(this.mediaSubtitlesList),r0(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let s=!this.value,o=rA({type:"radio",text:this.formatMenuItemText(U("Off")),value:"off",checked:s});for(let t of(o.prepend(rT(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=rA({type:"radio",text:this.formatMenuItemText(t.label,t),value:eK(t),checked:this.value==eK(t)});i.prepend(rT(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(rT(this,"captions-indicator")),this.defaultSlot.append(i)}},uJ=new WeakSet,u0=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(p.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new G.CustomEvent(u.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new G.CustomEvent(u.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},r4.getTemplateHTML=function(e){return`
    ${rC.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${r3}</slot>
  `};let r5=(e,t)=>{let i=e.getAttribute(t);return i?eq(i):[]},r9=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=eG(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-menu")||G.customElements.define("media-captions-menu",r4);let r8=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,r7=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,r6=e=>{e.setAttribute("aria-checked",ez(e).toString())};class ne extends rF{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_SUBTITLES_LIST,p.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",U("closed captions")),r6(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_SUBTITLES_SHOWING&&r6(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=ee(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return nt(this,p.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ni(this,p.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nt(this,p.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ni(this,p.MEDIA_SUBTITLES_SHOWING,e)}}ne.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${r8}</slot>
      <slot name="off">${r7}</slot>
    </slot>
  `},ne.getTooltipContentHTML=function(){return U("Captions")};let nt=(e,t)=>{let i=e.getAttribute(t);return i?eq(i):[]},ni=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=eG(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-menu-button")||G.customElements.define("media-captions-menu-button",ne);var na=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nr=(e,t,i)=>(na(e,t,"read from private field"),i?i.call(e):t.get(e)),nn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ns=(e,t,i)=>(na(e,t,"access private method"),i);let no="rates";class nl extends rC{constructor(){super(),nn(this,u2),nn(this,u4),nn(this,u1,new e$(this,no,{defaultValue:ae})),ns(this,u2,u3).call(this)}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_PLAYBACK_RATE,no]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===p.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===no&&t!=i&&(nr(this,u1).value=i,ns(this,u2,u3).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ns(this,u4,u5))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ns(this,u4,u5))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ee(this).querySelector("media-playback-rate-menu-button")}get rates(){return nr(this,u1)}set rates(e){e?Array.isArray(e)?nr(this,u1).value=e.join(" "):"string"==typeof e&&(nr(this,u1).value=e):nr(this,u1).value="",ns(this,u2,u3).call(this)}get mediaPlaybackRate(){return ec(this,p.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eh(this,p.MEDIA_PLAYBACK_RATE,e)}}u1=new WeakMap,u2=new WeakSet,u3=function(){for(let e of(this.defaultSlot.textContent="",nr(this,u1))){let t=rA({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(rT(this,"checked-indicator")),this.defaultSlot.append(t)}},u4=new WeakSet,u5=function(){if(!this.value)return;let e=new G.CustomEvent(u.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-playback-rate-menu")||G.customElements.define("media-playback-rate-menu",nl);class nd extends rF{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===p.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",U("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:ee(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ec(this,p.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eh(this,p.MEDIA_PLAYBACK_RATE,e)}}nd.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},nd.getTooltipContentHTML=function(){return U("Playback rate")},G.customElements.get("media-playback-rate-menu-button")||G.customElements.define("media-playback-rate-menu-button",nd);var nu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nc=(e,t,i)=>(nu(e,t,"read from private field"),i?i.call(e):t.get(e)),nh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nm=(e,t,i,a)=>(nu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),np=(e,t,i)=>(nu(e,t,"access private method"),i);class nv extends rC{constructor(){super(...arguments),nh(this,u7),nh(this,ce),nh(this,u9,[]),nh(this,u8,{})}static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_RENDITION_LIST,p.MEDIA_RENDITION_SELECTED,p.MEDIA_RENDITION_UNAVAILABLE,p.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===p.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",np(this,u7,u6).call(this);else if(e===p.MEDIA_RENDITION_LIST&&t!==i)nm(this,u9,null==i?void 0:i.split(/\s+/).map(I)),np(this,u7,u6).call(this);else e===p.MEDIA_HEIGHT&&t!==i&&np(this,u7,u6).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",np(this,ce,ct))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",np(this,ce,ct))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ee(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return nc(this,u9)}set mediaRenditionList(e){nm(this,u9,e),np(this,u7,u6).call(this)}get mediaRenditionSelected(){return ev(this,p.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eb(this,p.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ec(this,p.MEDIA_HEIGHT)}set mediaHeight(e){eh(this,p.MEDIA_HEIGHT,e)}}u9=new WeakMap,u8=new WeakMap,u7=new WeakSet,u6=function(){if(nc(this,u8).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&nc(this,u8).mediaHeight===this.mediaHeight)return;nc(this,u8).mediaRenditionList=JSON.stringify(this.mediaRenditionList),nc(this,u8).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=rA({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(rT(this,"checked-indicator")),this.defaultSlot.append(e)}let i=rA({type:"radio",text:t?this.formatMenuItemText(`${U("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(U("Auto")),value:"auto",checked:t}),a=this.mediaHeight>0?`${U("Auto")} (${this.mediaHeight}p)`:U("Auto");i.dataset.description=a,i.prepend(rT(this,"checked-indicator")),this.defaultSlot.append(i)},ce=new WeakSet,ct=function(){if(null==this.value)return;let e=new G.CustomEvent(u.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-rendition-menu")||G.customElements.define("media-rendition-menu",nv);let nb=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class ng extends rF{static get observedAttributes(){return[...super.observedAttributes,p.MEDIA_RENDITION_SELECTED,p.MEDIA_RENDITION_UNAVAILABLE,p.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",U("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:ee(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ev(this,p.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eb(this,p.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ec(this,p.MEDIA_HEIGHT)}set mediaHeight(e){eh(this,p.MEDIA_HEIGHT,e)}}ng.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${nb}</slot>
  `},ng.getTooltipContentHTML=function(){return U("Quality")},G.customElements.get("media-rendition-menu-button")||G.customElements.define("media-rendition-menu-button",ng);let nE=G.document?.createElement?.("template");nE&&(nE.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class nf extends rm{static template=nE}G.customElements&&!G.customElements.get("media-theme-sutro")&&G.customElements.define("media-theme-sutro",nf);var ny=i(12115),n_=Object.create,nk=Object.defineProperty,nA=Object.getOwnPropertyDescriptor,nT=Object.getOwnPropertyNames,nw=Object.getPrototypeOf,nI=Object.prototype.hasOwnProperty,nS=function(e,t){return function(){return e&&(t=e(e=0)),t}},nC=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},nM=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=nT(t),s=0,o=n.length;s<o;s++)r=n[s],nI.call(e,r)||r===i||nk(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=nA(t,r))||a.enumerable});return e},nL=function(e,t,i){return i=null!=e?n_(nw(e)):{},nM(!t&&e&&e.__esModule?i:nk(i,"default",{value:e,enumerable:!0}),e)},nR=nC(function(e,t){t.exports="u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{}});function nx(e,t){return null!=t&&"u">typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):nx(e,t)}var nD=nS(function(){nD()});function nN(e){return e&&"u">typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var nP=nS(function(){}),nO=nC(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),nU=nC(function(e,t){function i(e,t){if(!nx(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}nD(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),nW=nC(function(e,t){function i(e,t){if(!nx(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}nD(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),nH=nC(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),nB=nC(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),n$=nC(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),nV=nC(function(e,t){nP(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=nN(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),nq=nC(function(e,t){nD();var i=nO(),a=nH(),r=nB(),n=n$(),s=nV(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!nx(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),nF=nC(function(e,t){nD();var i=nq();function a(e){if(!nx(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),nK=nC(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),nG=nC(function(e,t){nD();var i=nO(),a=nU(),r=nW(),n=nq(),s=nF(),o=nK(),l=nH(),d=nB(),u=n$();function c(){if(!nx(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),nj=nC(function(e,t){t.exports=new(nG())}),nY=nC(function(e,t){var i,a="u">typeof global?global:"u">typeof window?window:{},r=nj();"u">typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function nQ(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function nz(e,t){if(e){if("string"==typeof e)return nQ(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return nQ(e,t)}}function nZ(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||nz(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var nX=nL(nR()),nJ=nL(nR()),n0=nL(nR()),n1=function(){var e=n0.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},n2=function(){if("function"==typeof(null==(e=nJ.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),nJ.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=n1(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},n3=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},n4=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=n3()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},n5=function(e){e&&void 0!==e.nodeName?e=n4(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function n9(e){return function(e){if(Array.isArray(e))return nQ(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||nz(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n8=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,n9(o)),d=(i=console.info).bind.apply(i,n9(o)),u=(a=console.debug).bind.apply(a,n9(o)),c=(r=console.warn).bind.apply(r,n9(o)),h=(n=console.error).bind.apply(n,n9(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,n9(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,n9(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,n9(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,n9(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,n9(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),n7=nL(nR());function n6(){return"1"===(n7.default.doNotTrack||n7.default.navigator&&n7.default.navigator.doNotTrack)}function se(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function st(e,t){if(!nx(e,t))throw TypeError("Cannot call a class as a function")}function si(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function sa(e,t,i){return t&&si(e.prototype,t),i&&si(e,i),e}function sr(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function sn(e){return(sn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ss(e,t,i){return(ss="u">typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=sn(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function so(e,t){return(so=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}nD(),nP();var sl=function(e){return sd(e)[0]},sd=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},su=nL(nR()),sc=function(){var e=su.default.performance;return void 0!==(e&&e.timing)},sh=function(){var e=su.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},sm=function(){var e=su.default.performance,t=e&&e.timing;return t&&t.navigationStart};function sp(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function sv(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){sr(e,t,i[t])})}return e}function sb(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var sg=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],sE=["x-cdn","content-type"].concat(sg);function sf(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(sE.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function sy(e){if(e){var t=sg.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var s_=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},sk=function(e){if(!e)return{};var t=sm(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},sA=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return sf(e.getAllResponseHeaders())},sT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!sc())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=sk(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",sb(sv({},s_(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:sl(r),request_response_headers:sA(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=sk(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:sl(i.url),request_response_headers:sA(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=sk(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:sl(i.url),request_response_headers:sA(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=sk(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?sA(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?sl(r.responseURL):void 0,request_id:h?sy(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?sA(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:sl(c),request_id:h?sy(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:sl(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},sw=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},sI=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=sl(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=sf(u[u.length-1]._responseHeaders||""));var c=i?sy(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},sS=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},sC=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},sM=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},sL=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=sM(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:sl(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=sI(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:g,request_id:c.requestId,request_url:E,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=sI(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,E=u.requestUrl,f=u.requestId,y=sS(d,i),k=y.currentLevel,A=y.renditionWidth,T=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:g,request_id:f,request_url:E,request_media_start_time:l,request_media_duration:b,request_current_level:k,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:T})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:sC(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=sb(sv({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:sl(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:sl(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},sR=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},sx=0,sD=function(){function e(){st(this,e),sr(this,"_listeners",void 0)}return sa(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++sx,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++sx;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),sN=nL(nR()),sP=function(){function e(t){var i=this;st(this,e),sr(this,"_playbackHeartbeatInterval",void 0),sr(this,"_playheadShouldBeProgressing",void 0),sr(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(sN.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return sa(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=sN.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(sN.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),sO=function e(t){var i=this;st(this,e),sr(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},sU=function(){function e(t){st(this,e),sr(this,"_watchTimeTrackerLastCheckedTime",void 0),sr(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return sa(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),sp(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),sW=function(){function e(t){var i=this;st(this,e),sr(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),sr(this,"_lastTime",void 0),sr(this,"_isAdPlaying",void 0),sr(this,"_callbackUpdatePlaybackTime",void 0),sr(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=n1(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=n1(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return sa(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=n1(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=n1(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&sp(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&sp(this.pm.data,"ad_playing_time_ms_cumulative",i),sp(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),sH=function(){function e(t){st(this,e),sr(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return sa(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),sB=function e(t){if(st(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;sp(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(sp(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},s$=function(){function e(t){var i=this;st(this,e),sr(this,"_lastCheckedTime",void 0),sr(this,"_lastPlayheadTime",void 0),sr(this,"_lastPlayheadTimeUpdatedTime",void 0),sr(this,"_rebuffering",void 0),sr(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:n1()})}))}return sa(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),sV=function(){function e(t){var i=this;st(this,e),sr(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||n1(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||n1(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return sa(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),sq=function e(t){var i=this;st(this,e),sr(this,"_lastPlayerHeight",void 0),sr(this,"_lastPlayerWidth",void 0),sr(this,"_lastPlayheadPosition",void 0),sr(this,"_lastSourceHeight",void 0),sr(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),sp(t.data,"view_total_content_playback_time",e),sp(t.data,"view_total_upscaling",r*e),sp(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},sF=function e(t){var i=this;st(this,e),sr(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=n1(),r=(t.data.viewer_time||e)-(a||e);sp(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,sp(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},sK=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},sG=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],sj=function(){function e(t){var i=this;st(this,e),sr(this,"_adHasPlayed",void 0),sr(this,"_adRequests",void 0),sr(this,"_adResponses",void 0),sr(this,"_currentAdRequestNumber",void 0),sr(this,"_currentAdResponseNumber",void 0),sr(this,"_prerollPlayTime",void 0),sr(this,"_wouldBeNewAdPlay",void 0),sr(this,"isAdBreak",void 0),sr(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),sG.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),sK(i._adRequests,a),sp(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||sp(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),sK(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&sp(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,sp(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||sp(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||sp(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return sa(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=nZ(sd(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=nZ(sd(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),sY=function e(t){var i=this;st(this,e),sr(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=n1(),t.on("before*",r)},r=function(e){var a=n1(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},sQ=nL(nR()),sz=(oT=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("u">typeof document){if(arguments.length>1){if("number"==typeof(r=oT({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=e+"="+a+(r.expires?"; expires="+r.expires.toUTCString():"")+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":"")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",oT(t,{expires:-1}))},i.withConverter=e,i}(function(){})),sZ="muxData",sX=function(){var e;try{e=(sz.get(sZ)||"").split("&").reduce(function(e,t){var i=nZ(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},sJ=function(e){try{sz.set(sZ,Object.entries(e).map(function(e){var t=nZ(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},s0=function(){var e=sX();return e.mux_viewer_id=e.mux_viewer_id||n2(),e.msn=e.msn||Math.random(),sJ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},s1=function(){var e=sX(),t=n1();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=n2(),e.sst=t),e.sex=t+15e5,sJ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},s2=s4({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),s3=s4({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function s4(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function s5(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=s2[s];o||(n8.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),s3[e]?o+=s3[e]:Number.isInteger(Number(e))?o+=e:(n8.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var s9=nL(nR()),s8=nL(nY()),s7={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},s6=["hb","requestcompleted","requestfailed","requestcanceled"],oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},s7,t)};oe.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},oe.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},oe.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),s9.default.clearTimeout(this._sendTimeout)},oe.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],s5({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);oi(this._beaconUrl,i,!0,function(){})},oe.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=n1();oi(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,n8.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=n1()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},oe.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},oe.prototype._startBeaconSending=function(){var e=this;s9.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=s9.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},oe.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(n1())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(n8.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===s6.indexOf(e.e)}),s()),o()||(n8.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var ot="function"==typeof s8.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},oi=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(s9.default.fetch)return void s9.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:ot(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(s9.default.XMLHttpRequest){var r=new s9.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},oa=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],or=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],on=["ad_id","ad_creative_id","ad_universal_id"],os=["viewstart","error","ended","viewend"],oo=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,g,E,f,y,k,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};st(this,e),sr(this,"mux",void 0),sr(this,"envKey",void 0),sr(this,"options",void 0),sr(this,"eventQueue",void 0),sr(this,"sampleRate",void 0),sr(this,"disableCookies",void 0),sr(this,"respectDoNotTrack",void 0),sr(this,"previousBeaconData",void 0),sr(this,"lastEventTime",void 0),sr(this,"rateLimited",void 0),sr(this,"pageLevelData",void 0),sr(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new oe((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(f=this.options.sampleRate)?f:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(k=this.options.respectDoNotTrack)&&k,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(g=this.options.platform)||null==(b=g.os)?void 0:b.version,page_url:null===sQ.default||void 0===sQ.default||null==(E=sQ.default.location)?void 0:E.href},this.viewerData=this.disableCookies?{}:s0()}return sa(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&n6())return n8.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return n8.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:s1(),a=sb(sv({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=s5(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return n8.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||n8.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if(n8.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(os.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=s5(a),this.eventQueue.queueEvent(a.event,s),n8.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=sv({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=nZ(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||oa.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||on.includes(t)&&or.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),ol=function e(t){st(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},od=function e(t){var i=this;st(this,e),sr(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=n1(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,sr({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function ou(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var oc=function e(t){st(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!ou(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(ou(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},oh=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},om=function e(t){var i=this;st(this,e),sr(this,"_emittingAutomaticEvent",!1),sr(this,"_hasInitialized",!1),sr(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?oh(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},op=function(){function e(t){st(this,e),sr(this,"pm",void 0),sr(this,"_currentRangeStart",void 0),sr(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return sa(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),ov=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),ob=function(e){if(!e)return ov.UNKNOWN;switch(e){case"cellular":case"wimax":return ov.CELLULAR;case"wifi":return ov.WIFI;case"ethernet":return ov.WIRED;case"none":return ov.NO_CONNECTION;case"bluetooth":case"other":default:return ov.OTHER;case"unknown":return ov.UNKNOWN}},og=nL(nR()),oE=function(){function e(t){var i=this;st(this,e),sr(this,"pm",void 0),sr(this,"lastType",void 0),sr(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),og.default.addEventListener("online",a),og.default.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),og.default.removeEventListener("online",a),og.default.removeEventListener("offline",a)})})}return sa(e,[{key:"type",get:function(){var t,i;return(null==(t=og.default.navigator)?void 0:t.onLine)===!1?ov.NO_CONNECTION:null!=(i=e.connection)&&i.type?ob(e.connection.type):ov.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",sv({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=og.default.navigator)&&"connection"in e&&"object"==typeof e.connection?og.default.navigator.connection:null}}]),e}(),of=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],oy=new Set(["requestcompleted","requestfailed","requestcanceled"]),o_=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&so(a,e);var t,i=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=sn(a);return e=t?Reflect.construct(i,arguments,sn(this).constructor):i.apply(this,arguments),e&&("object"===nN(e)||"function"==typeof e)?e:se(this)});function a(e,t,r){st(this,a),sr(se(n=i.call(this)),"pageLoadEndTime",void 0),sr(se(n),"pageLoadInitTime",void 0),sr(se(n),"_destroyed",void 0),sr(se(n),"_heartBeatTimeout",void 0),sr(se(n),"adTracker",void 0),sr(se(n),"dashjs",void 0),sr(se(n),"data",void 0),sr(se(n),"disablePlayheadRebufferTracking",void 0),sr(se(n),"disableRebufferTracking",void 0),sr(se(n),"disableAdPlaybackRangeFiltering",void 0),sr(se(n),"errorTracker",void 0),sr(se(n),"errorTranslator",void 0),sr(se(n),"emitTranslator",void 0),sr(se(n),"getAdData",void 0),sr(se(n),"getPlayheadTime",void 0),sr(se(n),"getStateData",void 0),sr(se(n),"stateDataTranslator",void 0),sr(se(n),"hlsjs",void 0),sr(se(n),"id",void 0),sr(se(n),"longResumeTracker",void 0),sr(se(n),"minimumRebufferDuration",void 0),sr(se(n),"mux",void 0),sr(se(n),"playbackEventDispatcher",void 0),sr(se(n),"playbackHeartbeat",void 0),sr(se(n),"playbackHeartbeatTime",void 0),sr(se(n),"playheadTime",void 0),sr(se(n),"seekingTracker",void 0),sr(se(n),"sustainedRebufferThreshold",void 0),sr(se(n),"watchTimeTracker",void 0),sr(se(n),"currentFragmentPDT",void 0),sr(se(n),"currentFragmentStart",void 0),n.pageLoadInitTime=sm(),n.pageLoadEndTime=sh(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),n8.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new oo(e,r.data.env_key,r),n.data={player_instance_id:n2(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(se(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"u">typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),of.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new od(se(n)),n.errorTracker=new sO(se(n)),new sY(se(n)),n.seekingTracker=new sF(se(n)),n.playheadTime=new sH(se(n)),n.playbackHeartbeat=new sP(se(n)),new sq(se(n)),n.watchTimeTracker=new sU(se(n)),new sW(se(n)),new op(se(n)),n.adTracker=new sj(se(n)),new s$(se(n)),new sB(se(n)),new sV(se(n)),new ol(se(n)),new oc(se(n)),new om(se(n)),new oE(se(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return sa(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=ss(sn(a.prototype),"emit",this)).call.apply(i,[this].concat(n9(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=nZ(sd(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,oy.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=n2(),i=function(){t===e.data.view_id&&sp(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,sT(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(sw(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,sL(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(sR(this.dashjs),this.dashjs=void 0)}}]),a}(sD),ok=nL(nY());function oA(){return ok.default&&!!(ok.default.fullscreenElement||ok.default.webkitFullscreenElement||ok.default.mozFullScreenElement||ok.default.msFullscreenElement)}var oT,ow,oI,oS,oC,oM,oL,oR,ox,oD,oN,oP,oO,oU,oW,oH,oB,o$,oV,oq,oF,oK,oG,oj,oY,oQ,oz,oZ,oX,oJ,o0,o1,o2,o3,o4,o5,o9,o8,o7,o6,le,lt,li,la,lr,ln,ls,lo,ll,ld,lu,lc,lh,lm,lp,lv,lb,lg,lE,lf,ly,l_,lk,lA,lT,lw,lI,lS,lC,lM,lL,lR,lx,lD,lN,lP,lO,lU,lW,lH,lB,l$,lV,lq,lF,lK,lG,lj,lY,lQ,lz,lZ,lX,lJ,l0,l1,l2,l3,l4,l5,l9,l8,l7,l6,de,dt,di,da,dr,dn,ds,dl,dd,du,dc,dh,dm,dp,dv,db,dg,dE,df,dy,d_,dk,dA,dT,dw,dI,dS,dC,dM,dL,dR,dx,dD,dN,dP,dO,dU,dW,dH,dB,d$,dV,dq,dF,dK,dG,dj,dY,dQ,dz,dZ,dX,dJ,d0,d1,d2,d3,d4,d5,d9,d8,d7,d6,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,ub,ug,uE,uf,uy,u_,uk,uA,uT,uw,uI,uS,uC,uM,uL,uR,ux,uD,uN,uP,uO,uU,uW,uH,uB,u$,uV,uq,uF,uK,uG,uj,uY,uQ,uz,uZ,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u7,u6,ce,ct,ci,ca=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],cr={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},cn=nL(nR());cn.default&&cn.default.WeakMap&&(ci=new WeakMap);var cs=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};cs.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},cs.prototype.processLine=function(e){var t=e.indexOf(":"),i=cm(e,t),a=i[0],r=2===i.length?cd(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":co(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":co(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":co(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var s=s_(cp(i[1]));Object.assign(this.manifest.sessionData,s)}},cs.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var co=function(e,t){var i,a=cl(t[0].replace("#EXT-X-",""));ch(t[1])?(i={},i=Object.assign(cc(t[1]),i)):i=cd(t[1]),e[a]=i},cl=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},cd=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},cu=function(e){var t={},i=e.split("=");return i.length>1&&(t[cl(i[0])]=cd(i[1])),t},cc=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(cu(t[a]),i);return i},ch=function(e){return e.indexOf("=")>-1},cm=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},cp=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},cv={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){n8.info("safeCall error",e)}return r},safeIncrement:sp,getComputedStyle:function(e,t){var i;return e&&t&&cn.default&&"function"==typeof cn.default.getComputedStyle?(ci&&ci.has(e)&&(i=ci.get(e)),i||(i=cn.default.getComputedStyle(e,null),ci&&ci.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:sf,cdnHeadersToRequestId:sy,extractHostnameAndDomain:sd,extractHostname:sl,manifestParser:cs,generateShortID:n3,generateUUID:n2,now:n1,findMediaElement:n5},cb={},cg=function(e){var t=arguments;"string"==typeof e?cg.hasOwnProperty(e)?nX.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),cg[e].apply(null,t)},0):n8.warn("`"+e+"` is an unknown task"):"function"==typeof e?nX.default.setTimeout(function(){e(cg)},0):n8.warn("`"+e+"` is invalid.")},cE={loaded:n1(),NAME:"mux-embed",VERSION:"5.18.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=nZ(n5(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:oA(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=nZ(n5(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},ca.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=cr[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=oA()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=oA(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(cg,e,t)},destroyMonitor:function(e){var t=nZ(n5(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():n8.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=n4(e);cb[i]?cb[i].addHLSJS(t):n8.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=n4(e);cb[i]?cb[i].addDashJS(t):n8.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=n4(e);cb[t]?cb[t].removeHLSJS():n8.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=n4(e);cb[t]?cb[t].removeDashJS():n8.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){n6()&&t&&t.respectDoNotTrack&&n8.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=n4(e);cb[i]=new o_(cg,i,t)},emit:function(e,t,i){var a=n4(e);cb[a]?(cb[a].emit(t,i),"destroy"===t&&delete cb[a]):n8.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=n4(e);cb[i]?cb[i].emit("hb",t):n8.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=n4(e);cb[i]?cb[i].emitTranslator=t:n8.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=n4(e);cb[i]?cb[i].stateDataTranslator=t:n8.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=n4(e);cb[i]?cb[i].getPlayheadTime=t:n8.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:n6,log:n8,utils:cv,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(cg,cE),void 0!==nX.default&&"function"==typeof nX.default.addEventListener&&nX.default.addEventListener("pagehide",function(e){e.persisted||(cg.WINDOW_UNLOADING=!0)},!1);var cf=i(38309),cy=cf.Ay,c_="video",ck=e=>e===c_?"playback":e,cA=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};cA.MEDIA_ERR_ABORTED=1,cA.MEDIA_ERR_NETWORK=2,cA.MEDIA_ERR_DECODE=3,cA.MEDIA_ERR_SRC_NOT_SUPPORTED=4,cA.MEDIA_ERR_ENCRYPTED=5,cA.MEDIA_ERR_CUSTOM=100,cA.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var cT=(e,t)=>null!=t&&e in t,cw={ANY:"any",MUTED:"muted"},cI="on-demand",cS="live",cC="unknown",cM="native",cL={HEADER:"header",QUERY:"query",NONE:"none"},cR=Object.values(cL),cx={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},cD={HLS:cx.M3U8};Object.keys(cD),[...Object.values(cx)];var cN={code:"en"},cP=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},cO=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},cU=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return cT(e,cD)?cD[e]:t}return cB(e)},cW=e=>"VOD"===e?cI:cS,cH=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,cB=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=cV(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return cF(e)?cx.M3U8:"";let r=i.slice(a+1).toUpperCase();return cT(r,cx)?cx[r]:""},c$=e=>{try{return new URL(e),!1}catch{return!0}},cV=(e,t)=>{var i;if(!c$(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&c$(t.toString())&&(r=new URL(t,a)),new URL(e,r)},cq="mux.com",cF=({src:e,customDomain:t=cq})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},cK=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function cG(e,t=!0){var i;return new cj(t&&null!=(i=null==cN?void 0:cN[e])?i:e,t?cN.code:"en")}var cj=class{constructor(e,t=(e=>null!=(e=cN)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},cY=Object.values(cw),cQ=e=>"boolean"==typeof e||"string"==typeof e&&cY.includes(e),cz=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case cw.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case cw.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},cZ=e=>"time"in e?e.time:e.startTime;function cX(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function cJ(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function c0(e,t,i,a){let r=cJ(e,i,a);return r||((r=cX(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>cZ(t)-cZ(e)).forEach(t=>{var i,n;let s=t.value,o=cZ(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var c1="cuepoints",c2=Object.freeze({label:c1});async function c3(e,t,i=c2){return c0(e,t,i.label,"metadata")}var c4=e=>({time:e.startTime,value:JSON.parse(e.text)});function c5(e,t={label:c1}){var i,a;let r=cJ(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return c4(r.activeCues[0]);let{currentTime:n}=e;return c4(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function c9(e,t=c2){return new Promise(i=>{cP(e,"loadstart",async()=>{let a=await c3(e,[],t);cP(e,"cuechange",()=>{let t=c5(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var c8="chapters",c7=Object.freeze({label:c8}),c6=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function he(e,t,i=c7){return c0(e,t,i.label,"chapters")}function ht(e,t={label:c8}){var i,a;let r=cJ(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return c6(r.activeCues[0]);let{currentTime:n}=e;return c6(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function hi(e,t=c7){return new Promise(i=>{cP(e,"loadstart",async()=>{let a=await he(e,[],t);cP(e,"cuechange",()=>{let t=ht(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ha=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l,d;let u,c;if(n){let i=cG("Your device appears to be offline",r),a=cA.MEDIA_ERR_NETWORK,n=new cA(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let h="status"in e?e.status:e.code,m=Date.now(),p=cA.MEDIA_ERR_NETWORK;if(200===h)return;let v=ck(t),b=(u=ck(t),c=`${u}Token`,null!=(l=i.tokens)&&l[u]?null==(d=i.tokens)?void 0:d[u]:cT(c,i)?i[c]:void 0),g=t===c_?"v":"drm"===t?"d":void 0,[E]=cO(null!=(s=i.playbackId)?s:"");if(!h||!E)return;let f=cK(b);if(b&&!f){let i=new cA(cG("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:v}),p,!0,cG("Compact JWT string: {token}",r).format({token:b}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(h>=500){let e=new cA("",p,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===h)if(f){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(f,m)){let i={timeStyle:"medium",dateStyle:"medium"},a=new cA(cG("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:v}),p,!0,cG("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=f.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(m)}));return a.errorCategory=t,a.muxCode=2403210,a.data=e,a}if((({sub:e},t)=>e!==t)(f,E)){let i=new cA(cG("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v}),p,!0,cG("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:v,playbackId:E,tokenPlaybackId:f.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e},t)=>!e)(f,0)){let i=new cA(cG("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,cG("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(f,g)){let i=new cA(cG("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,cG("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g,aud:f.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new cA(cG("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v,category:t}),p,null==a||a,cG("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===h){let n=new cA(cG("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),p,null==a||a,cG("Specified playback ID: {playbackId}",r).format({playbackId:E}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===cS?"live":i.streamType===cI?"on-demand":"unknown",n.data=e,n}if(404===h){let i=new cA(cG("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),p,null==a||a,cG("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===h){let i=new cA(cG("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),p,null==a||a,cG("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let y=new cA("",p,null==a||a);return y.errorCategory=t,y.muxCode=2e6,y.data=e,y},hr=cy.DefaultConfig.capLevelController,hn={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},hs=class e extends hr{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=hn[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:hr.getMaxLevelByMediaSize(a,16/9*n,n)}};hs.minMaxResolution=720,hs.maxAutoResolution=new WeakMap;var ho,hl,hd,hu,hc,hh,hm=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),hp="fairplay",hv=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,hb=async(e,t)=>{if(t===cx.MP4)return{streamType:cI,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===cx.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await ((e,t)=>{let i,a=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(c$(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=cV(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())})(i,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(hv)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=cW(n),o=cH(n),l;if(s===cS){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},hg=async(e,t,i=cU({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await hb(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&hE(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=hk.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=hk.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=hk.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},hE=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=hk.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},hf=null!=(hl=null==(ho=null==globalThis?void 0:globalThis.navigator)?void 0:ho.userAgent)?hl:"",hy=null!=(hc=null==(hu=null==(hd=null==globalThis?void 0:globalThis.navigator)?void 0:hd.userAgentData)?void 0:hu.platform)?hc:"",h_=hf.toLowerCase().includes("android")||["x11","android"].some(e=>hy.toLowerCase().includes(e)),hk=new WeakMap,hA="mux.com",hT=null==(hh=cy.isSupported)?void 0:hh.call(cy),hw=()=>{if("u">typeof window)return cg.utils.now()},hI=cg.utils.generateUUID,hS=({playbackId:e,customDomain:t=hA,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=cO(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},hC=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},hM=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},hL=e=>{var t;return null==(t=hk.get(e))?void 0:t.error},hR=e=>{var t,i;return null!=(i=null==(t=hk.get(e))?void 0:t.streamType)?i:cC},hx=e=>{var t,i;return null!=(i=null==(t=hk.get(e))?void 0:t.seekable)?i:e.seekable},hD=.034,hN=(e,t,i=hD)=>e>t||((e,t,i=hD)=>Math.abs(e-t)<=i)(e,t,i),hP=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},hO=(e,t)=>e.ended||e.loop?e.ended:!!(t&&hP(e,t))||((e,t=hD)=>e.paused&&hN(e.currentTime,e.duration,t))(e),hU=(e,t,i)=>{var a,r,n;hW(t,i,e);let{metadata:s={}}=e,{view_session_id:o=hI()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:hj(e)&&null!=(n=null!=(r=hC(e.playbackId))?r:hM(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=hk.get(t))?void 0:i.coreReference;hU(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},hk.set(t,{retryCount:0});let d=hB(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return cP(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?cy:void 0}):hQ(e,t,d),hz(e,t,d),c9(t),hi(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=cQ(a)?a:!!a,o=()=>{r||cP(t,"playing",()=>{r=!0},{once:!0})};if(o(),cP(t,"loadstart",()=>{r=!1,o(),cz(t,s)},{once:!0}),cP(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==cC?e.streamType===cS:!Number.isFinite(t.duration)),cz(t,s)},{once:!0}),i&&i.once(cy.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==cC?e.streamType===cS:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&cP(t,"play",()=>{"metadata"===t.preload?i.once(cy.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||cz(t,s=cQ(e)?e:!!e)}})(e,t,d);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,cP(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(cy.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(cy.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,d),((e,t,i)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!i)return;let r=0;i.on(cy.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate)})})(e,0,d);let h={engine:d,setAutoplay:c,setPreload:u},m=hk.get(t);return m&&(m.coreReference=h),h},hW=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",hX),e.removeEventListener("error",h0),e.removeEventListener("durationchange",hZ),hk.delete(e),e.dispatchEvent(new Event("teardown")))};function hH(e,t){var i;let a=cU(e);if(a!==cx.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=hT&&("mse"===n||h_||!(/^((?!chrome|android).)*safari/i.test(hf)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===cM||!s)}var hB=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=cU(e)===cx.M3U8,c=hH(e,t);if(u&&!c&&hT){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=h$(a),h=hV(e),m=[cL.QUERY,cL.HEADER].includes(s)?{useHeaders:s===cL.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=hY(e,o),v=new cy({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(s&&s!==cL.QUERY)return;let r=cV(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===hs&&void 0!==l&&hs.setMaxAutoResolution(v,l),v.on(cy.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&hE(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),v}},h$=e=>e===cS?{backBufferLength:8}:{},hV=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=hC(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:hK(e,"fairplay"),serverCertificateUrl:hG(e,"fairplay")},"com.widevine.alpha":{licenseUrl:hK(e,"widevine")},"com.microsoft.playready":{licenseUrl:hK(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?hp:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},hq=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},hF=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},hK=({playbackId:e,tokens:{drm:t}={},customDomain:i=hA},a)=>{let r=hC(e);return`https://license.${i.toLocaleLowerCase().endsWith(hA)?i:hA}/license/${a}/${r}?token=${t}`},hG=({playbackId:e,tokens:{drm:t}={},customDomain:i=hA},a)=>{let r=hC(e);return`https://license.${i.toLocaleLowerCase().endsWith(hA)?i:hA}/appcert/${a}/${r}?token=${t}`},hj=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(hA)||!!i&&a.includes(i.toLocaleLowerCase())},hY=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=hs,i.capLevelToPlayerSize=!0):i.capLevelController=cf.Rx,i},hQ=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=cg,muxDataSDKOptions:o={}}=e,l=hj(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?cy:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},hz=(e,t,i)=>{var a,r,n;let s=hH(e,t),{src:o,customDomain:l=hA}=e,d=()=>{t.ended||e.disablePseudoEnded||!hO(t,i)||(hP(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,c,h=()=>{let e=hx(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(c!==a||u!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=i,c=a};if(cP(t,"durationchange",h),t&&s){let i=cU(e);if("string"==typeof o){if(o.endsWith(".mp4")&&o.includes(l)){let e=hM(o);hE(new URL(`https://stream.${l}/${e}/metadata.json`).toString(),t)}let n=()=>{if(hR(t)!==cS||Number.isFinite(t.duration))return;let e=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),cP(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},s=async()=>hg(o,t,i).then(n).catch(i=>{if(i instanceof Response){let a=ha(i,c_,e);if(a)return void hJ(t,a)}});if("none"===t.preload){let e=()=>{s(),t.removeEventListener("loadedmetadata",i)},i=()=>{s(),t.removeEventListener("play",e)};cP(t,"play",e,{once:!0}),cP(t,"loadedmetadata",i,{once:!0})}else s();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>hq(hG(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=ha(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>hF(t,hK(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=ha(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:hJ,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,hp)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new cA(cG("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),cA.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var i,r;let a,s,o,u,c,h,m,p;e.webkitKeys||l();let v=await n;if(null===t.initData||null==v)return;let b=(i=t.initData,r=v,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(hm(i)),s=new Uint8Array(i),o=new Uint8Array(a),u=new Uint8Array(r),c=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),i=e.byteLength;t.setUint32(h,i,!0),h+=4,m(e)},m(s),p(o),p(u),c);d(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new cA("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",cA.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new cA(cG("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),cA.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new cA(cG("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),cA.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=cG("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new cA(e,cA.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new cA(cG("Failed to update DRM license. This may be an issue with the player or your protected content."),cA.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new cA(cG("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),cA.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((i=new cA(cG("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),cA.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006),i&&a(e,i)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new cA(cG("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),cA.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):cP(t,"encrypted",()=>{let e=new cA(cG("Attempting to play DRM-protected content without providing a DRM token."),cA.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,hJ(t,e)},{once:!0}),t.setAttribute("src",o),e.startTime&&((null!=(r=hk.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",hZ,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",hX),t.addEventListener("error",h0),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),cP(t,"pause",d),cP(t,"seeked",d),cP(t,"play",()=>{t.ended||hN(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else if(i&&o){let a,r;i.once(cy.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,c;let h,m,p,v,b,{streamType:g,targetLiveWindow:E,liveEdgeStartOffset:f,lowLatency:y}=(m=cW(h=e.type),p=cH(h),b=!!(null!=(c=e.partList)&&c.length),m===cS&&(v=b?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:v,lowLatency:b});if(g===cS){y?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=hk.get(t))?o:{}).seekable=e}(null!=(l=hk.get(t))?l:{}).liveEdgeStartOffset=f,(null!=(d=hk.get(t))?d:{}).targetLiveWindow=E,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=hk.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),h(),hR(t)!==cS||Number.isFinite(t.duration)||(i.on(cy.Events.LEVEL_UPDATED,h),cP(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(cy.Events.LEVELS_UPDATED,h)}))});let s=null!=(n=e.maxReconnectRetries)?n:0,l=s>0?(({hls:e,mediaEl:t,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,u=!1,c=!1,h=()=>{null!=o&&(clearTimeout(o),o=void 0)},m=e=>(null==e?void 0:e.muxCode)===2000003,p=()=>{!c&&i?e.loadSource(i):e.startLoad(t.currentTime)},v=()=>{let e=a.get(t);!(null!=e&&e.networkError)||u||!t.paused&&t.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let e=a.get(t);if(m(null==e?void 0:e.error))return;let i=new cA(cG("Attempting to reconnect..."),cA.MEDIA_ERR_NETWORK,!1);i.errorCategory=c_,i.muxCode=2000003,e&&(e.error=i),t.dispatchEvent(new CustomEvent("error",{detail:i}))})(),(()=>{if(null==o&&!d){if(l>=n){let e;return d=!1,u=!0,h(),(e=new cA(cG("Network error, try reloading."),cA.MEDIA_ERR_NETWORK,!0)).errorCategory=c_,e.reload=!0,r(t,e)}d=!0,o=setTimeout(()=>{o=void 0,l+=1,p()},Math.min(1e3*2**l,3e4))}})())},b=()=>{let e=a.get(t);null!=e&&e.networkError&&(l=0,u=!1,h(),d=!0,p())};return null==(s=globalThis.addEventListener)||s.call(globalThis,"online",b),e.on(cy.Events.FRAG_BUFFERED,()=>{let e=a.get(t);e&&(e.networkError||m(e.error))&&(e.networkError=!1,d=!1,l=0,u=!1,h(),e.error&&(e.error=null,t.dispatchEvent(new Event("emptied"))))}),cP(t,"playing",()=>{let e=a.get(t);null!=e&&e.networkError&&(d=!1,l=0,u=!1,h(),e.error&&(e.error=null))}),cP(t,"waiting",v),t.addEventListener("teardown",()=>{var e;null==(e=globalThis.removeEventListener)||e.call(globalThis,"online",b),h()},{once:!0}),{handleHlsError:(e,i)=>{var r,n;let s;if(e.type!==cy.ErrorTypes.NETWORK_ERROR)return!1;let o=null!=(n=null==(r=e.response)?void 0:r.code)?n:0;return(2000002===i.muxCode||0===o||o>=500)&&!!e.fatal&&((s=a.get(t))&&(s.networkError=!0),d=!1,v(),!0)},onManifestLoaded:()=>{c=!0,d=!1,h()}}})({hls:i,mediaEl:t,src:o,muxMediaState:hk,saveAndDispatchError:hJ,maxRetries:s}):void 0;i.on(cy.Events.ERROR,(a,r)=>{var n,s;let o=h1(r,e);if(2412e3===o.muxCode){let e=null!=(n=hk.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new cA(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),hJ(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new cA("Network error, try reloading.",o.code,o.fatal);Object.assign(i,o),i.reload=!0,hJ(t,i);return}}null!=l&&l.handleHlsError(r,o)||hJ(t,o)}),i.on(cy.Events.MANIFEST_LOADED,()=>{null==l||l.onManifestLoaded();let e=hk.get(t);null!=e&&e.networkError||e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",h0),cP(t,"waiting",d),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(cy.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(cy.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(cy.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(cy.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(cy.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;cX(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(cy.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(cy.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i,a;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let r=t.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(cy.Events.MANIFEST_LOADED,r),i.once(cy.Events.MEDIA_ATTACHED,r),i.attachMedia(t)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function hZ(e){var t;let i=e.target,a=null==(t=hk.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function hX(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new cA(i,a);if(t.src&&a===cA.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=hL(t))?e:t.error;(null==i?void 0:i.code)===cA.MEDIA_ERR_SRC_NOT_SUPPORTED&&hJ(t,r)},500);if(t.src&&(a!==cA.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}hJ(t,r)}function hJ(e,t){var i;t.fatal&&((null!=(i=hk.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function h0(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof cA))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=hk.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var h1=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[cy.ErrorTypes.NETWORK_ERROR]:cA.MEDIA_ERR_NETWORK,[cy.ErrorTypes.MEDIA_ERROR]:cA.MEDIA_ERR_DECODE,[cy.ErrorTypes.KEY_SYSTEM_ERROR]:cA.MEDIA_ERR_ENCRYPTED},s,o=[cy.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,cy.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?cA.MEDIA_ERR_NETWORK:n[e.type];if(o===cA.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===cy.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===cy.ErrorTypes.NETWORK_ERROR?c_:void 0)?i:c_;s=null!=(a=ha(e.response,r,t,e.fatal))?a:new cA("",o,e.fatal)}else o===cA.MEDIA_ERR_ENCRYPTED?e.details===cy.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new cA(cG("Attempting to play DRM-protected content without providing a DRM token."),cA.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===cy.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new cA(cG("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),cA.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===cy.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new cA(cG("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),cA.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===cy.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new cA(cG("Failed to update DRM license. This may be an issue with the player or your protected content."),cA.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===cy.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new cA(cG("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),cA.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===cy.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new cA(cG("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),cA.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===cy.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new cA(cG("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),cA.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new cA(e.error.message,cA.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new cA("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s};let h2=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],h3=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function h4(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${h8(e)}></audio>
    </slot>
    <slot></slot>
  `}function h5(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${h8(e)}></video>
    </slot>
    <slot></slot>
  `}function h9(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?h4:h5;static shadowRootOptions={mode:"open"};static Events=h2;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...h3]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();e.has(a)?!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i):this.set?this.set(t,i):this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function h8(e){let t="";for(let i in e){if(!h3.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let h7=h9(globalThis.HTMLElement??class{},{tag:"video"});h9(globalThis.HTMLElement??class{},{tag:"audio"});var h6,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm=e=>{throw TypeError(e)},mp=(e,t,i)=>t.has(e)||mm("Cannot "+i),mv=(e,t,i)=>(mp(e,t,"read from private field"),i?i.call(e):t.get(e)),mb=(e,t,i)=>t.has(e)?mm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),mg=(e,t,i,a)=>(mp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),mE=(e,t,i)=>(mp(e,t,"access private method"),i),mf=(()=>{try{return"0.31.2"}catch{}return"UNKNOWN"})(),my=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,m_={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},mk=Object.values(m_),mA="mux-video",mT=class extends h7{constructor(){super(),mb(this,md),mb(this,h6),mb(this,me),mb(this,mt,{}),mb(this,mi,{}),mb(this,ma),mb(this,mr),mb(this,mn),mb(this,ms),mb(this,mo,""),mb(this,ml,e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=hk.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(mg(this,mo,"default"),this.updateLogo())}),mb(this,mc),mg(this,me,hw())}static get NAME(){return mA}static get VERSION(){return mf}static get observedAttributes(){var e;return[...mk,...null!=(e=h7.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?my:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${h7.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[m_.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(m_.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?cR.includes(e)?this.setAttribute(m_.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${cR.join()}`):this.removeAttribute(m_.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(m_.PLAYER_INIT_TIME)?+this.getAttribute(m_.PLAYER_INIT_TIME):mv(this,me)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(m_.PLAYER_INIT_TIME):this.setAttribute(m_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=mv(this,mn))?e:mA}set playerSoftwareName(e){mg(this,mn,e)}get playerSoftwareVersion(){var e;return null!=(e=mv(this,mr))?e:mf}set playerSoftwareVersion(e){mg(this,mr,e)}get _hls(){var e;return null==(e=mv(this,md,mu))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=hL(this.nativeEl))?e:null}get errorTranslator(){return mv(this,ms)}set errorTranslator(e){mg(this,ms,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(m_.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(m_.TYPE,e):this.removeAttribute(m_.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(m_.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(m_.DEBUG,""):this.removeAttribute(m_.DEBUG))}get disableTracking(){return this.hasAttribute(m_.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(m_.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(m_.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(m_.DISABLE_COOKIES,""):this.removeAttribute(m_.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(m_.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(m_.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(m_.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(m_.MAX_RECONNECT_RETRIES);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(null==e?this.removeAttribute(m_.MAX_RECONNECT_RETRIES):this.setAttribute(m_.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(m_.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(m_.START_TIME):this.setAttribute(m_.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(m_.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(m_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(m_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(m_.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(m_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(m_.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(m_.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(m_.MIN_PRELOAD_SEGMENTS):this.setAttribute(m_.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(m_.PLAYBACK_ID)?this.getAttribute(m_.PLAYBACK_ID):null!=(e=hM(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(m_.PLAYBACK_ID,e):this.removeAttribute(m_.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(m_.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(m_.MAX_RESOLUTION,e):this.removeAttribute(m_.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(m_.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(m_.MIN_RESOLUTION,e):this.removeAttribute(m_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(m_.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(m_.MAX_AUTO_RESOLUTION):this.setAttribute(m_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(m_.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(m_.RENDITION_ORDER,e):this.removeAttribute(m_.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(m_.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(m_.PROGRAM_START_TIME):this.setAttribute(m_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(m_.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(m_.PROGRAM_END_TIME):this.setAttribute(m_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(m_.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(m_.ASSET_START_TIME):this.setAttribute(m_.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(m_.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(m_.ASSET_END_TIME):this.setAttribute(m_.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(m_.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(m_.CUSTOM_DOMAIN,e):this.removeAttribute(m_.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:mv(this,mc)}set capRenditionToPlayerSize(e){mg(this,mc,e)}get drmToken(){var e;return null!=(e=this.getAttribute(m_.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(m_.DRM_TOKEN,e):this.removeAttribute(m_.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(m_.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(m_.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(m_.PLAYBACK_ID)){let[,e]=cO(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(m_.PLAYBACK_TOKEN,e):this.removeAttribute(m_.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(m_.PLAYBACK_TOKEN),t=this.getAttribute(m_.DRM_TOKEN);return{...mv(this,mi),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){mg(this,mi,null!=e?e:{})}get ended(){return hO(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(m_.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(m_.ENV_KEY,e):this.removeAttribute(m_.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(m_.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(m_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(m_.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(m_.STREAM_TYPE))?e:hR(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(m_.STREAM_TYPE,e):this.removeAttribute(m_.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(m_.TARGET_LIVE_WINDOW)?+this.getAttribute(m_.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=hk.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(m_.TARGET_LIVE_WINDOW):this.setAttribute(m_.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(m_.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=hk.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=hx(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(m_.LIVE_EDGE_OFFSET))return+this.getAttribute(m_.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(m_.LIVE_EDGE_OFFSET):this.setAttribute(m_.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return hx(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),c3(this.nativeEl,e)}get activeCuePoint(){return c5(this.nativeEl)}get cuePoints(){return function(e,t={label:c1}){let i=cJ(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>c4(e)):[]}(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),he(this.nativeEl,e)}get activeChapter(){return ht(this.nativeEl)}get chapters(){return function(e,t={label:c8}){var i;let a=cJ(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>c6(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(m_.PREFER_PLAYBACK);if("mse"===e||e===cM)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===cM?this.setAttribute(m_.PREFER_PLAYBACK,e):this.removeAttribute(m_.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![m_.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...mv(this,mt)}}set metadata(e){mg(this,mt,null!=e?e:{}),this.mux&&this.mux.emit("hb",mv(this,mt))}get _hlsConfig(){return mv(this,ma)}set _hlsConfig(e){mg(this,ma,e)}get logo(){var e;return null!=(e=this.getAttribute(m_.LOGO))?e:mv(this,mo)}set logo(e){e?this.setAttribute(m_.LOGO,e):this.removeAttribute(m_.LOGO)}load(){hU(this,this.nativeEl,mv(this,md,mu))}unload(){hW(this.nativeEl,mv(this,md,mu),this)}attributeChangedCallback(e,t,i){var a,r;switch(h7.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case m_.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case m_.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?mE(this,md,mh).call(this):e&&!a?this.unload():e&&a&&(this.unload(),mE(this,md,mh).call(this));break}case"autoplay":if(i===t)break;null==(a=mv(this,md,mu))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=mv(this,md,mu))||r.setPreload(i);break;case m_.PLAYBACK_ID:case m_.CUSTOM_DOMAIN:case m_.MAX_RESOLUTION:case m_.MIN_RESOLUTION:case m_.RENDITION_ORDER:case m_.PROGRAM_START_TIME:case m_.PROGRAM_END_TIME:case m_.ASSET_START_TIME:case m_.ASSET_END_TIME:case m_.PLAYBACK_TOKEN:this.src=hS(this);break;case m_.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case m_.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case m_.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case m_.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case m_.LOGO:(null==i||i!==t)&&this.updateLogo();break;case m_.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),mE(this,md,mh).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case m_.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case m_.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(mv(this,mo)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",mv(this,ml)),this.nativeEl&&this.src&&!mv(this,md,mu)&&mE(this,md,mh).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",mv(this,ml)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};h6=new WeakMap,me=new WeakMap,mt=new WeakMap,mi=new WeakMap,ma=new WeakMap,mr=new WeakMap,mn=new WeakMap,ms=new WeakMap,mo=new WeakMap,ml=new WeakMap,md=new WeakSet,mu=function(){var e,t;return e=this.nativeEl,null==(t=hk.get(e))?void 0:t.coreReference},mc=new WeakMap,mh=async function(){mv(this,h6)||(await mg(this,h6,Promise.resolve()),mg(this,h6,null),this.load())};let mw=new WeakMap;class mI extends Error{}class mS extends Error{}let mC=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function mM(){return globalThis.cast?.framework?.CastContext.getInstance()}function mL(){return mM()?.getCurrentSession()}function mR(){return mL()?.getSessionObj().media[0]}function mx(e){return mM().setOptions({...mD(),...e})}function mD(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function mN(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function mP(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function mO(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return mC.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function mU(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=mP(i),n=mN(r),s=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),o=n;if(s)try{let t=new URL(s,e).toString(),i=await (await fetch(t)).text(),a=mP(i);o=mN(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let mW=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),mH=new WeakSet;po=()=>{globalThis.chrome?.cast?.isAvailable?n||(n=cast.framework,mM().addEventListener(n.CastContextEventType.CAST_STATE_CHANGED,e=>{mW.forEach(t=>mw.get(t).onCastStateChanged?.(e))}),mM().addEventListener(n.CastContextEventType.SESSION_STATE_CHANGED,e=>{mW.forEach(t=>mw.get(t).onSessionStateChanged?.(e))}),mW.forEach(e=>mw.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?po():customElements.whenDefined("google-cast-button").then(po):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(po)};let mB=0;class m$ extends EventTarget{#p;#a;#v;#b;#g="disconnected";#E=!1;#f=new Set;#y=new WeakMap;#_=()=>this.#k();constructor(e){super(),this.#p=e,mW.add(this),mw.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#A(),onSessionStateChanged:()=>this.#T(),getCastPlayer:()=>this.#w}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#_),this.#b&&this.#v?.controller&&Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&mH.delete(this.#p),this.#a=!1}get #w(){if(mH.has(this.#p))return this.#v}get state(){return this.#g}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new mI("disableRemotePlayback attribute is present.");return this.#y.set(e,++mB),this.#f.add(e),queueMicrotask(()=>e(this.#I())),mB}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new mI("disableRemotePlayback attribute is present.");e?this.#f.delete(e):this.#f.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new mI("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new mS("The RemotePlayback API is disabled on this platform.");let e=mH.has(this.#p);mH.add(this.#p),mx(this.#p.castOptions),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await mM().requestSession()}catch(t){if(e||mH.delete(this.#p),"cancel"===t)return;throw Error(t)}mw.get(this.#p)?.loadOnPrompt?.()}#S(){mH.has(this.#p)&&(Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),mH.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#I(){let e=mM()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#A(){let e=mM().getCastState();if(mH.has(this.#p)&&"CONNECTING"===e&&(this.#g="connecting",this.dispatchEvent(new Event("connecting"))),!this.#E&&e?.includes("CONNECT"))for(let e of(this.#E=!0,this.#f))e(!0);else if(this.#E&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#E=!1,this.#f))e(!1)}async #T(){let{SESSION_RESUMED:e}=n.SessionState;if(mM().getSessionState()===e&&this.#p.castSrc===mR()?.media.contentId){mH.add(this.#p),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{mR().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#b[n.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#b[n.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){n&&!this.#a&&(this.#a=!0,mx(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#_),this.#A(),this.#v=new n.RemotePlayer,new n.RemotePlayerController(this.#v),this.#b={[n.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#g="connected",this.dispatchEvent(new Event("connect"))):(this.#S(),this.#g="disconnected",this.dispatchEvent(new Event("disconnect")))},[n.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[n.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[n.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[n.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#w?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[n.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[n.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[n.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#w?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#w?.playerState]))},[n.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#w?.isMediaLoaded&&(await Promise.resolve(),this.#C())}})}#C(){this.#k()}async #k(){let e;if(!this.#w)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=mL()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{mR().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let mV=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#M={paused:!1};#L=mD();#R;#x;get remote(){if(this.#x)return this.#x;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),mw.set(this,{loadOnPrompt:()=>this.#D()}),this.#x=new m$(this)}return super.remote}get #w(){return mw.get(this.#x)?.getCastPlayer?.()}disconnectedCallback(){this.#x?.destroy(),this.#x=null,mw.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#L.receiverApplicationId=i;return}if(this.#w)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #D(){this.#M.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#w)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await mO(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await mU(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#M.paused,r.activeTrackIds=i,await mL()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#w){this.#w.isPaused&&this.#w.controller?.playOrPause();return}return super.play()}pause(){if(this.#w){this.#w.isPaused||this.#w.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#L}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#R}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#R=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#w)switch(this.#w.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#w?this.#w.isPaused:super.paused}get muted(){return this.#w?this.#w?.isMuted:super.muted}set muted(e){if(this.#w){(e&&!this.#w.isMuted||!e&&this.#w.isMuted)&&this.#w.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#w?this.#w?.volumeLevel??1:super.volume}set volume(e){if(this.#w){this.#w.volumeLevel=+e,this.#w.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.duration??NaN:super.duration}get currentTime(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.currentTime??0:super.currentTime}set currentTime(e){if(this.#w){this.#w.currentTime=e,this.#w.controller?.seek();return}super.currentTime=e}};class mq extends Event{track;constructor(e,t){super(e),this.track=t.track}}let mF=new WeakMap;function mK(e){var t,i;let a;return mF.get(e)??(t=e,i={},(a=mF.get(t))||mF.set(t,a={}),Object.assign(a,i))}function mG(e,t){let i=e.videoTracks;mK(t).media=new WeakRef(e),mK(t).renditionSet||(mK(t).renditionSet=new Set);let a=mK(i).trackSet;a.add(t);let r=a.size-1;r in mY.prototype||Object.defineProperty(mY.prototype,r,{get(){return[...mK(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new mq("addtrack",{track:t}))})}function mj(e){let t=mK(e).media?.deref()?.videoTracks;t&&(mK(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new mq("removetrack",{track:e}))}))}class mY extends EventTarget{#N;#P;#O;constructor(){super(),mK(this).trackSet=new Set}get #U(){return mK(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#N}set onaddtrack(e){this.#N&&(this.removeEventListener("addtrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#P}set onremovetrack(e){this.#P&&(this.removeEventListener("removetrack",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removetrack",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class mQ extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function mz(e){let t=mK(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...mK(e).renditionSet]):[]}class mZ extends EventTarget{#W;#H;#O;[Symbol.iterator](){return mz(this).values()}get length(){return mz(this).length}getRenditionById(e){return mz(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return mz(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of mz(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#H}set onremoverendition(e){this.#H&&(this.removeEventListener("removerendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("removerendition",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class mX{src;id;width;height;bitrate;frameRate;codec;#B=!1;get selected(){return this.#B}set selected(e){if(this.#B!==e){var t;let i;this.#B=e,t=this,(i=mK(t).media?.deref()?.videoRenditions)&&!mK(i).changeRequested&&(mK(i).changeRequested=!0,queueMicrotask(()=>{delete mK(i).changeRequested,mK(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class mJ{id;kind;label="";language="";sourceBuffer;#B=!1;addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new mX;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=mK(s).media?.deref()?.videoRenditions,mK(u).media=mK(s).media,mK(u).track=s,(l=mK(s).renditionSet).add(u),(d=l.size-1)in mZ.prototype||Object.defineProperty(mZ.prototype,d,{get(){return mz(this)[d]}}),queueMicrotask(()=>{o&&s.selected&&o.dispatchEvent(new mQ("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=mK(e).media?.deref()?.videoRenditions,i=mK(e).track,mK(i).renditionSet.delete(e),queueMicrotask(()=>{let i=mK(e).track;t&&i.selected&&t.dispatchEvent(new mQ("removerendition",{rendition:e}))})}get selected(){return this.#B}set selected(e){this.#B===e||(this.#B=e,!0===e&&function(e){let t=mK(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(mK(t).changeRequested)return;mK(t).changeRequested=!0,queueMicrotask(()=>{delete mK(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function m0(e){let t=mK(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...mK(e).renditionSet]):[]}class m1 extends EventTarget{#W;#H;#O;[Symbol.iterator](){return m0(this).values()}get length(){return m0(this).length}getRenditionById(e){return m0(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return m0(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of m0(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#H}set onremoverendition(e){this.#H&&(this.removeEventListener("removerendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("removerendition",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class m2{src;id;bitrate;codec;#B=!1;get selected(){return this.#B}set selected(e){if(this.#B!==e){var t;let i;this.#B=e,t=this,(i=mK(t).media?.deref()?.audioRenditions)&&!mK(i).changeRequested&&(mK(i).changeRequested=!0,queueMicrotask(()=>{delete mK(i).changeRequested,mK(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function m3(e,t){let i=e.audioTracks;mK(t).media=new WeakRef(e),mK(t).renditionSet||(mK(t).renditionSet=new Set);let a=mK(i).trackSet;a.add(t);let r=a.size-1;r in m5.prototype||Object.defineProperty(m5.prototype,r,{get(){return[...mK(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new mq("addtrack",{track:t}))})}function m4(e){let t=mK(e).media?.deref()?.audioTracks;t&&(mK(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new mq("removetrack",{track:e}))}))}class m5 extends EventTarget{#N;#P;#O;constructor(){super(),mK(this).trackSet=new Set}get #U(){return mK(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#N}set onaddtrack(e){this.#N&&(this.removeEventListener("addtrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#P}set onremovetrack(e){this.#P&&(this.removeEventListener("removetrack",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removetrack",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class m9{id;kind;label="";language="";sourceBuffer;#$=!1;addRendition(e,t,i){var a;let r,n,s,o=new m2;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=mK(a).media?.deref()?.audioRenditions,mK(o).media=mK(a).media,mK(o).track=a,(n=mK(a).renditionSet).add(o),(s=n.size-1)in m1.prototype||Object.defineProperty(m1.prototype,s,{get(){return m0(this)[s]}}),queueMicrotask(()=>{r&&a.enabled&&r.dispatchEvent(new mQ("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=mK(e).media?.deref()?.audioRenditions,i=mK(e).track,mK(i).renditionSet.delete(e),queueMicrotask(()=>{let i=mK(e).track;t&&i.enabled&&t.dispatchEvent(new mQ("removerendition",{rendition:e}))})}get enabled(){return this.#$}set enabled(e){if(this.#$!==e){let t;this.#$=e,(t=mK(this).media?.deref()?.audioTracks)&&!mK(t).changeRequested&&(mK(t).changeRequested=!0,queueMicrotask(()=>{delete mK(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let m8=pe(globalThis.HTMLMediaElement,"video"),m7=pe(globalThis.HTMLMediaElement,"audio");function m6(e){if(!e?.prototype)return e;let t=pe(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=mK(e).videoTracks;if(!t&&(t=new mY,mK(e).videoTracks=t,m8)){let i=m8.call(e.nativeEl??e);for(let t of i)mG(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof mJ)){for(let e of i)mj(e);return}mG(e,a.track)}),i.addEventListener("removetrack",e=>{mj(e.track)})}return t}});let i=pe(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=mK(e).audioTracks;if(!t&&(t=new m5,mK(e).audioTracks=t,m7)){let i=m7.call(e.nativeEl??e);for(let t of i)m3(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof m9)){for(let e of i)m4(e);return}m3(e,a.track)}),i.addEventListener("removetrack",e=>{m4(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new mJ;return a.kind=e,a.label=t,a.language=i,mG(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=mj),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new m9;return a.kind=e,a.label=t,a.language=i,m3(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=m4),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=mK(e).videoRenditions;return t||(mK(t=new mZ).media=new WeakRef(e),mK(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=mK(e).audioRenditions;return t||(mK(t=new m1).media=new WeakRef(e),mK(e).audioRenditions=t),t};return e}function pe(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var pt=e=>{throw TypeError(e)},pi=(e,t,i)=>t.has(e)||pt("Cannot "+i),pa=(e,t,i)=>(pi(e,t,"read from private field"),i?i.call(e):t.get(e)),pr=(e,t,i)=>t.has(e)?pt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),pn=(e,t,i,a)=>(pi(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ps=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends ps{}globalThis.DocumentFragment=e}var po,pl,pd=class extends ps{},pu=class{constructor(e,t={}){pr(this,pl),pn(this,pl,null==t?void 0:t.detail)}get detail(){return pa(this,pl)}initCustomEvent(){}};pl=new WeakMap;var pc={document:{createElement:function(e,t){return new pd}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(pd)},CustomEvent:pu,EventTarget:ps,HTMLElement:pd,HTMLVideoElement:class extends ps{}},ph="u"<typeof window||void 0===globalThis.customElements,pm=ph?pc:globalThis;ph&&pc.document;var pp,pv=class extends mV(m6(mT)){constructor(){super(...arguments),pr(this,pp)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=pa(this,pp))?e:this.muxCastCustomData}set castCustomData(e){pn(this,pp,e)}};pp=new WeakMap,pm.customElements.get("mux-video")||(pm.customElements.define("mux-video",pv),pm.MuxVideoElement=pv);let pb={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},pg={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},pE={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},pf=Object.entries(pE),py=pf.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),p_=pf.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(p_).reduce((e,[t,i])=>{let a=py[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let pk=Object.entries(py).reduce((e,[t,i])=>{let a=p_[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),pA="subtitles",pT="captions",pw="disabled",pI="showing",pS="unavailable",pC="unsupported",pM={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};function pL(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function pR(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function px(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function pD(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function pN(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function pP(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let pO=e=>new Promise(t=>setTimeout(t,e)),pU={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},pW=(null==(y$=globalThis.navigator)?void 0:y$.language)||"en",pH=(e,t={})=>(e=>{var t,i,a;let[r]=pW.split("-");return(null==(t=pU[pW])?void 0:t[e])||(null==(i=pU[r])?void 0:i[e])||(null==(a=pU.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),pB=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],p$=e=>{if(!pN(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?pH(pB[t].singular):pH(pB[t].plural),`${e} ${i}`)}).filter(e=>e).join(", ");return i?pH("{time} remaining",{time:r}):r};function pV(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class pq{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class pF extends pq{}class pK extends pF{constructor(){super(...arguments),this.role=null}}class pG{observe(){}unobserve(){}disconnect(){}}let pj={createElement:function(){return new pY.HTMLElement},createElementNS:function(){return new pY.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},pY={ResizeObserver:pG,document:pj,Node:pF,Element:pK,HTMLElement:class extends pK{constructor(){super(...arguments),this.innerHTML=""}get content(){return new pY.DocumentFragment}},DocumentFragment:class extends pq{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},pQ="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,pz=Object.keys(pY).every(e=>e in globalThis),pZ=pQ&&!pz?pY:globalThis,pX=pQ&&!pz?pj:globalThis.document,pJ=new WeakMap,p0=e=>{let t=pJ.get(e);return t||pJ.set(e,t=new Set),t},p1=new pZ.ResizeObserver(e=>{for(let t of e)for(let e of p0(t.target))e(t)});function p2(e,t){p0(e).add(t),p1.observe(e)}function p3(e,t){let i=p0(e);i.delete(t),i.size||p1.unobserve(e)}function p4(e){let t={};for(let i of e)t[i.name]=i.value;return t}function p5(e){var t;return null!=(t=p9(e))?t:ve(e,"media-controller")}function p9(e){var t;let{MEDIA_CONTROLLER:i}=pg,a=e.getAttribute(i);if(a)return null==(t=vi(e))?void 0:t.getElementById(a)}let p8=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},p7=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},p6=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||p6(e,t.getRootNode().host)),ve=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||ve(e.getRootNode().host,t)};function vt(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=vt(i.shadowRoot))?t:i:null}function vi(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function va(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function vr(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||vn(e,t)}function vn(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function vs(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function vo(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}vs(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function vl(e,t){return e.hasAttribute(t)}function vd(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}vl(e,t)!=i&&e.toggleAttribute(t,i)}function vu(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function vc(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;vu(e,t,void 0)!==a&&e.setAttribute(t,a)}var vh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},vm=(e,t,i)=>(vh(e,t,"read from private field"),i?i.call(e):t.get(e)),vp=(e,t,i,a)=>(vh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class vv extends pZ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,yV,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[pg.MEDIA_CONTROLLER,py.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===pg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=vm(this,yV))?void 0:a.unassociateElement)||r.call(a,this),vp(this,yV,null)),i&&this.isConnected&&(vp(this,yV,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=vm(this,yV))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),vp(this,yV,(i=this,(r=i.getAttribute(pg.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(r):ve(i,"media-controller"))),this.getAttribute(pg.MEDIA_CONTROLLER)&&(null==(t=null==(e=vm(this,yV))?void 0:e.associateElement)||t.call(e,this)),vm(this,yV)&&(vm(this,yV).addEventListener("pointerdown",this),vm(this,yV).addEventListener("click",this),vm(this,yV).hasAttribute("tabindex")||(vm(this,yV).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(pg.MEDIA_CONTROLLER)&&(null==(t=null==(e=vm(this,yV))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=vm(this,yV))||i.removeEventListener("pointerdown",this),null==(a=vm(this,yV))||a.removeEventListener("click",this),vp(this,yV,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,"touch"===d)return void this.handleTap(e);if("mouse"===d||"pen"===d)return void this.handleMouseClick(e)}}}get mediaPaused(){return vl(this,py.MEDIA_PAUSED)}set mediaPaused(e){vd(this,py.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?pb.MEDIA_PLAY_REQUEST:pb.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new pZ.CustomEvent(t,{composed:!0,bubbles:!0}))}}yV=new WeakMap,vv.shadowRootOptions={mode:"open"},vv.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},pZ.customElements.get("media-gesture-receiver")||pZ.customElements.define("media-gesture-receiver",vv);var vb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},vg=(e,t,i)=>(vb(e,t,"read from private field"),i?i.call(e):t.get(e)),vE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},vf=(e,t,i,a)=>(vb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),vy=(e,t,i)=>(vb(e,t,"access private method"),i);let v_="audio",vk="autohide",vA="breakpoints",vT="gesturesdisabled",vw="keyboardcontrol",vI="noautohide",vS="userinactive",vC="autohideovercontrols",vM=Object.values(py);function vL(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(vA))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(p_.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(p_.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class vR extends pZ.HTMLElement{constructor(){if(super(),vE(this,yZ),vE(this,yJ),vE(this,y1),vE(this,y3),vE(this,y5),vE(this,yq,void 0),vE(this,yF,0),vE(this,yK,null),vE(this,yG,null),vE(this,yj,void 0),this.breakpointsComputed=!1,vE(this,yY,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),vE(this,yQ,!1),vE(this,yz,e=>{vg(this,yQ)||(setTimeout(()=>{vL(e.target,e.contentRect.width),vf(this,yQ,!1)},0),vf(this,yQ,!0))}),vE(this,y8,void 0),vE(this,y7,()=>{if(!vg(this,y8).assignedElements({flatten:!0}).length){vg(this,yK)&&this.mediaUnsetCallback(vg(this,yK));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}vf(this,yq,new MutationObserver(vg(this,yY)))}static get observedAttributes(){return[vk,vT].concat(vM).filter(e=>![py.MEDIA_RENDITION_LIST,py.MEDIA_AUDIO_TRACK_LIST,py.MEDIA_CHAPTERS_CUES,py.MEDIA_WIDTH,py.MEDIA_HEIGHT,py.MEDIA_ERROR,py.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==vk&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(vf(this,yK,e),e.localName.includes("-")&&await pZ.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;vg(this,yq).observe(this,{childList:!0,subtree:!0}),p2(this,vg(this,yz));let t=null!=this.getAttribute(v_)?pH("audio player"):pH("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(vS,""),vL(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(vf(this,y8,i),vg(this,y8).addEventListener("slotchange",vg(this,y7))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=pZ.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;p3(this,vg(this,yz)),clearTimeout(vg(this,yG)),vg(this,yq).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=pZ.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),vg(this,y8)&&(vg(this,y8).removeEventListener("slotchange",vg(this,y7)),vf(this,y8,null)),vf(this,yQ,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){vf(this,yK,null)}handleEvent(e){switch(e.type){case"pointerdown":vf(this,yF,e.timeStamp);break;case"pointermove":vy(this,yZ,yX).call(this,e);break;case"pointerup":vy(this,yJ,y0).call(this,e);break;case"mouseleave":vy(this,y1,y2).call(this);break;case"mouseup":this.removeAttribute(vw);break;case"keyup":vy(this,y5,y9).call(this),this.setAttribute(vw,"")}}set autohide(e){let t=Number(e);vf(this,yj,isNaN(t)?0:t)}get autohide(){return(void 0===vg(this,yj)?2:vg(this,yj)).toString()}get breakpoints(){return vu(this,vA)}set breakpoints(e){vc(this,vA,e)}get audio(){return vl(this,v_)}set audio(e){vd(this,v_,e)}get gesturesDisabled(){return vl(this,vT)}set gesturesDisabled(e){vd(this,vT,e)}get keyboardControl(){return vl(this,vw)}set keyboardControl(e){vd(this,vw,e)}get noAutohide(){return vl(this,vI)}set noAutohide(e){vd(this,vI,e)}get autohideOverControls(){return vl(this,vC)}set autohideOverControls(e){vd(this,vC,e)}get userInteractive(){return vl(this,vS)}set userInteractive(e){vd(this,vS,e)}}yq=new WeakMap,yF=new WeakMap,yK=new WeakMap,yG=new WeakMap,yj=new WeakMap,yY=new WeakMap,yQ=new WeakMap,yz=new WeakMap,yZ=new WeakSet,yX=function(e){if("mouse"!==e.pointerType&&e.timeStamp-vg(this,yF)<250)return;vy(this,y3,y4).call(this),clearTimeout(vg(this,yG));let t=this.hasAttribute(vC);([this,this.media].includes(e.target)||t)&&vy(this,y5,y9).call(this)},yJ=new WeakSet,y0=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(vS);[this,this.media].includes(e.target)&&t?vy(this,y1,y2).call(this):vy(this,y5,y9).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&vy(this,y5,y9).call(this)},y1=new WeakSet,y2=function(){if(0>vg(this,yj)||this.hasAttribute(vS))return;this.setAttribute(vS,"");let e=new pZ.CustomEvent(p_.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},y3=new WeakSet,y4=function(){if(!this.hasAttribute(vS))return;this.removeAttribute(vS);let e=new pZ.CustomEvent(p_.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},y5=new WeakSet,y9=function(){vy(this,y3,y4).call(this),clearTimeout(vg(this,yG));let e=parseInt(this.autohide);e<0||vf(this,yG,setTimeout(()=>{vy(this,y1,y2).call(this)},1e3*e))},y8=new WeakMap,y7=new WeakMap,vR.shadowRootOptions={mode:"open"},vR.getTemplateHTML=function(e){return`
    <style>
      
      :host([${py.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${v_}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${v_}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${v_}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${v_}])[${vT}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${v_}])[${vT}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${v_}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${v_}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${v_}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${v_}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${vI}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${vS}]:not([${py.MEDIA_PAUSED}]):not([${py.MEDIA_IS_AIRPLAYING}]):not([${py.MEDIA_IS_CASTING}]):not([${v_}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${vI}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${vS}]:not([${vI}]):not([${py.MEDIA_PAUSED}]):not([${py.MEDIA_IS_CASTING}]):not([${v_}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${vS}][${vC}]:not([${vI}]):not([${py.MEDIA_PAUSED}]):not([${py.MEDIA_IS_CASTING}]):not([${v_}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${v_}])[${py.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${vv.shadowRootOptions.mode}">
          ${vv.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},pZ.customElements.get("media-container")||pZ.customElements.define("media-container",vR);var vx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},vD=(e,t,i)=>(vx(e,t,"read from private field"),i?i.call(e):t.get(e)),vN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},vP=(e,t,i,a)=>(vx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class vO{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){vN(this,_a),vN(this,y6,void 0),vN(this,_e,void 0),vN(this,_t,void 0),vN(this,_i,new Set),vP(this,y6,e),vP(this,_e,t),vP(this,_t,new Set(i))}[Symbol.iterator](){return vD(this,_a,_r).values()}get length(){return vD(this,_a,_r).size}get value(){var e;return null!=(e=[...vD(this,_a,_r)].join(" "))?e:""}set value(e){var t;e!==this.value&&(vP(this,_i,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...vD(this,_a,_r)][e]}values(){return vD(this,_a,_r).values()}forEach(e,t){vD(this,_a,_r).forEach(e,t)}add(...e){var t,i;e.forEach(e=>vD(this,_i).add(e)),(""!==this.value||(null==(t=vD(this,y6))?void 0:t.hasAttribute(`${vD(this,_e)}`)))&&(null==(i=vD(this,y6))||i.setAttribute(`${vD(this,_e)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>vD(this,_i).delete(e)),null==(t=vD(this,y6))||t.setAttribute(`${vD(this,_e)}`,`${this.value}`)}contains(e){return vD(this,_a,_r).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}y6=new WeakMap,_e=new WeakMap,_t=new WeakMap,_i=new WeakMap,_a=new WeakSet,_r=function(){return vD(this,_i).size?vD(this,_i):vD(this,_t)};let vU=(e="")=>{let[t,i,a]=e.split(":");return{kind:"cc"===t?pT:pA,language:i,label:a?decodeURIComponent(a):void 0}},vW=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=vU(e);return{...t,...i}}),vH=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?vU(e):e):"string"==typeof e?vW(e):[e]:[],vB=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,v$=(e=[])=>Array.prototype.map.call(e,vB).join(" "),vV=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},vq=(e,t=[],i=[])=>{let a=vH(i).map(vV);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},vF=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:vV(t);return Array.from(e.textTracks).filter(i)},vK=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(py.MEDIA_SUBTITLES_SHOWING)},vG="exitFullscreen"in pX?"exitFullscreen":"webkitExitFullscreen"in pX?"webkitExitFullscreen":"webkitCancelFullScreen"in pX?"webkitCancelFullScreen":void 0,vj="fullscreenElement"in pX?"fullscreenElement":"webkitFullscreenElement"in pX?"webkitFullscreenElement":void 0,vY="fullscreenEnabled"in pX?"fullscreenEnabled":"webkitFullscreenEnabled"in pX?"webkitFullscreenEnabled":void 0,vQ=()=>{var e;return s||(s=null==(e=null==pX?void 0:pX.createElement)?void 0:e.call(pX,"video"))},vz=async(e=vQ())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([vZ(e,i.signal),vX(e,t)]);return i.abort(),a},vZ=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),vX=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await pO(10)}return e.volume!==t},vJ=/.*Version\/.*Safari\/.*/.test(pZ.navigator.userAgent),v0=(e=vQ())=>(!pZ.matchMedia("(display-mode: standalone)").matches||!vJ)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),v1=(e=vQ())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[vY])||i&&"webkitSupportsFullscreen"in i})({documentElement:pX,media:e}),v2=v1(),v3=v0(),v4=!!pZ.WebKitPlaybackTargetAvailabilityEvent,v5=!!pZ.chrome,v9=e=>vF(e.media,e=>[pA,pT].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),v8=e=>vF(e.media,e=>e.mode===pI&&[pA,pT].includes(e.kind)),v7=(e,t)=>{let i=v9(e),a=v8(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)vq(pw,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=pZ.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...pZ.navigator.languages]:pZ.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;vq(pw,i,a),vq(pI,i,[{language:n,label:s,kind:o}])}}},v6=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?be(e,t):Object.entries(e).every(([e,i])=>e in t&&v6(i,t[e])))),be=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>v6(e,t[i])))},bt=Object.values(pM),bi=vz().then(e=>o=e),ba=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof pZ.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=pZ.customElements.get(t);i&&e instanceof i||(await pZ.customElements.whenDefined(t),pZ.customElements.upgrade(e))}))},br=new pZ.DOMParser,bn={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==pZ.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&pZ.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;pZ.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===pZ.localStorage.getItem("media-chrome-pref-muted");bn.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?pZ.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||pZ.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=pZ.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;bn.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&pN(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[pM.LIVE,pM.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(bt.includes(r))return r===pM.UNKNOWN?a:r;let n=t.duration;return n===1/0?pM.LIVE:Number.isFinite(n)?pM.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=bn.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===pM.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(bn.mediaStreamType.get(e)!==pM.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>v9(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>v8(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![pT,pA].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||v7(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=vF(i,{kind:"chapters"});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&br.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&p6(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!pX.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else pX.pictureInPictureElement&&pX.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[vj];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&"fullscreen"===i.webkitPresentationMode?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(vj in e))return p6(n,r);for(;null==e?void 0:e[vj];){if(e[vj]===r)return!0;e=null==(t=e[vj])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(vG){let e=null==(t=null==i?void 0:i[vG])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&"connected"===i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&pZ.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!v2||!v1(t))return pC}},mediaPipUnavailable:{get(e){let{media:t}=e;return v3&&v0(t)?(null==t?void 0:t.disablePictureInPicture)?pS:void 0:pC}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===o||(null==t?void 0:t.volume)==void 0)return pC},stateOwnersUpdateHandlers:[e=>{null==o&&bi.then(t=>e(t?void 0:pC))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return v5&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?pS:void 0:pC},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>v4?(null==t?void 0:t.availability)==="not-available"?pS:void 0:pC,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:pS:pC},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?pS:void 0:pC},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},bs={[pb.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=vF(l,{kind:"metadata",label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[pb.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[pb.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===pM.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[pb.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[pb.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[pb.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[pb.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[pb.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[pb.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[pb.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[pb.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=v9(t),s=vH(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&pZ.localStorage.setItem("media-chrome-pref-subtitles-lang",o),vq(pI,n,s)},[pb.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){vq(pw,v9(t),null!=i?i:[])},[pb.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){v7(t,i)},[pb.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[pb.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[pb.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[pb.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[pb.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[pb.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[pb.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[pb.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[pb.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var bo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bl=(e,t,i)=>(bo(e,t,"read from private field"),i?i.call(e):t.get(e)),bd=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bu=(e,t,i,a)=>(bo(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bc=(e,t,i)=>(bo(e,t,"access private method"),i);let bh=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],bm="defaultsubtitles",bp="defaultstreamtype",bv="defaultduration",bb="fullscreenelement",bg="hotkeys",bE="keyboardbackwardseekoffset",bf="keyboardforwardseekoffset",by="keyboarddownvolumestep",b_="keyboardupvolumestep",bk="keysused",bA="lang",bT="loop",bw="liveedgeoffset",bI="noautoseektolive",bS="nodefaultstore",bC="nohotkeys",bM="nomutedpref",bL="nosubtitleslangpref",bR="novolumepref",bx="seektoliveoffset";class bD extends vR{constructor(){super(),bd(this,_m),bd(this,_b),bd(this,_E),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,bd(this,_n,new vO(this,bg)),bd(this,_s,void 0),bd(this,_o,void 0),bd(this,_l,null),bd(this,_d,void 0),bd(this,_u,void 0),bd(this,_c,e=>{var t;null==(t=bl(this,_o))||t.dispatch(e)}),bd(this,_h,void 0),bd(this,_v,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||bh.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",bl(this,_v))}),this.associateElement(this);let e={};bu(this,_d,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new pZ.CustomEvent(pk[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(bC,bg,bp,bm,bv,bM,bR,bA,bT,bw,bx,bI)}get mediaStore(){return bl(this,_o)}set mediaStore(e){var t,i;(bl(this,_o)&&(null==(t=bl(this,_u))||t.call(this),bu(this,_u,void 0)),bu(this,_o,e),bl(this,_o)||this.hasAttribute(bS))?bu(this,_u,null==(i=bl(this,_o))?void 0:i.subscribe(bl(this,_d))):bc(this,_m,_p).call(this)}get fullscreenElement(){var e;return null!=(e=bl(this,_s))?e:this}set fullscreenElement(e){var t;this.hasAttribute(bb)&&this.removeAttribute(bb),bu(this,_s,e),null==(t=bl(this,_o))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return vl(this,bm)}set defaultSubtitles(e){vd(this,bm,e)}get defaultStreamType(){return vu(this,bp)}set defaultStreamType(e){vc(this,bp,e)}get defaultDuration(){return vs(this,bv)}set defaultDuration(e){vo(this,bv,e)}get noHotkeys(){return vl(this,bC)}set noHotkeys(e){vd(this,bC,e)}get keysUsed(){return vu(this,bk)}set keysUsed(e){vc(this,bk,e)}get liveEdgeOffset(){return vs(this,bw)}set liveEdgeOffset(e){vo(this,bw,e)}get noAutoSeekToLive(){return vl(this,bI)}set noAutoSeekToLive(e){vd(this,bI,e)}get noVolumePref(){return vl(this,bR)}set noVolumePref(e){vd(this,bR,e)}get noMutedPref(){return vl(this,bM)}set noMutedPref(e){vd(this,bM,e)}get noSubtitlesLangPref(){return vl(this,bL)}set noSubtitlesLangPref(e){vd(this,bL,e)}get noDefaultStore(){return vl(this,bS)}set noDefaultStore(e){vd(this,bS,e)}get resolvedLang(){return(()=>{let[e]=pW.split("-");return pU[pW]?pW:pU[e]?e:"en"})()}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===bC)i!==t&&""===i?(this.hasAttribute(bg)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===bg)bl(this,_n).value=i;else if(e===bm&&i!==t)null==(a=bl(this,_o))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(bm)}});else if(e===bp)null==(n=bl(this,_o))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(bp))?r:void 0}});else if(e===bw&&i!==t)null==(s=bl(this,_o))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(bw)?+this.getAttribute(bw):void 0,seekToLiveOffset:this.hasAttribute(bx)?+this.getAttribute(bx):this.hasAttribute(bw)?+this.getAttribute(bw):void 0}});else if(e===bx&&i!==t)null==(o=bl(this,_o))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(bx)?+this.getAttribute(bx):this.hasAttribute(bw)?+this.getAttribute(bw):void 0}});else if(e===bI)null==(l=bl(this,_o))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(bI)}});else if(e===bb){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;bu(this,_s,e),null==(u=bl(this,_o))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===bA&&i!==t?(pW=i,null==(c=bl(this,_o))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===bT&&i!==t?null==(h=bl(this,_o))||h.dispatch({type:pb.MEDIA_LOOP_REQUEST,detail:null!=i}):e===bR&&i!==t?null==(m=bl(this,_o))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(bR)}}):e===bM&&i!==t&&(null==(p=bl(this,_o))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(bM)}}))}connectedCallback(){var e,t,i;this.associateElement(this),bl(this,_o)||this.hasAttribute(bS)||bc(this,_m,_p).call(this),null==(e=bl(this,_o))||e.dispatch({type:"documentelementchangerequest",detail:pX}),null==(t=bl(this,_o))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),bl(this,_o)&&!bl(this,_u)&&bu(this,_u,null==(i=bl(this,_o))?void 0:i.subscribe(bl(this,_d))),void 0!==bl(this,_h)&&bl(this,_o)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=bl(this,_o))||i.dispatch({type:pb.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:bl(this,_h)}))},0),this.hasAttribute(bC)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),bl(this,_o)){let e=bl(this,_o).getState();bu(this,_h,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=bl(this,_o))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=bl(this,_o))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=bl(this,_o))||r.dispatch({type:pb.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}bl(this,_u)&&(null==(n=bl(this,_u))||n.call(this),bu(this,_u,void 0)),this.unassociateElement(this),bl(this,_l)&&(bl(this,_l).remove(),bu(this,_l,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=bl(this,_o))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=bl(this,_o))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){bV(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=bq(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(pb).forEach(t=>{e.addEventListener(t,bl(this,_c))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(pb).forEach(t=>{e.removeEventListener(t,bl(this,_c))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),bl(this,_o)&&Object.entries(bl(this,_o).getState()).forEach(([t,i])=>{bV([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",bc(this,_b,_g))}disableHotkeys(){this.removeEventListener("keydown",bc(this,_b,_g)),this.removeEventListener("keyup",bl(this,_v))}get hotkeys(){return bl(this,_n)}set hotkeys(e){vc(this,bg,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(bk))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||bl(this,_n).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&bl(this,_n).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&bl(this,_n).contains("noshift+/")))switch(e.key){case" ":case"k":u=bl(this,_o).getState().mediaPaused?pb.MEDIA_PLAY_REQUEST:pb.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new pZ.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?pb.MEDIA_UNMUTE_REQUEST:pb.MEDIA_MUTE_REQUEST,this.dispatchEvent(new pZ.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?pb.MEDIA_EXIT_FULLSCREEN_REQUEST:pb.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new pZ.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new pZ.CustomEvent(pb.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(bE)?+this.getAttribute(bE):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new pZ.CustomEvent(pb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(bf)?+this.getAttribute(bf):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new pZ.CustomEvent(pb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(b_)?+this.getAttribute(b_):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new pZ.CustomEvent(pb.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(by)?+this.getAttribute(by):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new pZ.CustomEvent(pb.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new pZ.CustomEvent(pb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new pZ.CustomEvent(pb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&bc(this,_E,_f).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?pb.MEDIA_EXIT_PIP_REQUEST:pb.MEDIA_ENTER_PIP_REQUEST,h=new pZ.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}_n=new WeakMap,_s=new WeakMap,_o=new WeakMap,_l=new WeakMap,_d=new WeakMap,_u=new WeakMap,_c=new WeakMap,_h=new WeakMap,_m=new WeakSet,_p=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=bn,requestMap:r=bs,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||v6(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,g,E,f,y,k,A,T,w,I;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await ba(...Object.values(e));let C=l.length>0&&0===t&&s,M=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),R=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),x=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),D=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),N=d.documentElement!==o.documentElement,P=!!d.media&&(M||C),O=!!(null==(E=d.media)?void 0:E.textTracks)&&(L||C),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(R||C),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(x||C),H=!!(null==(k=d.media)?void 0:k.remote)&&(D||C),B=!!d.documentElement&&(N||C),$=P||O||U||W||H||B,V=0===l.length&&1===t&&s,q=!!o.media&&(M||V),F=!!(null==(A=o.media)?void 0:A.textTracks)&&(L||V),K=!!(null==(T=o.media)?void 0:T.videoRenditions)&&(R||V),G=!!(null==(w=o.media)?void 0:w.audioTracks)&&(x||V),j=!!(null==(I=o.media)?void 0:I.remote)&&(D||V),Y=!!o.documentElement&&(N||V),Q=q||F||K||G||j||Y;if(!($||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&P&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),G&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&B&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&$&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else $&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(bm),defaultDuration:this.hasAttribute(bv)?+this.getAttribute(bv):void 0,defaultStreamType:null!=(e=this.getAttribute(bp))?e:void 0,liveEdgeOffset:this.hasAttribute(bw)?+this.getAttribute(bw):void 0,seekToLiveOffset:this.hasAttribute(bx)?+this.getAttribute(bx):this.hasAttribute(bw)?+this.getAttribute(bw):void 0,noAutoSeekToLive:this.hasAttribute(bI),noVolumePref:this.hasAttribute(bR),noMutedPref:this.hasAttribute(bM),noSubtitlesLangPref:this.hasAttribute(bL)}})},_v=new WeakMap,_b=new WeakSet,_g=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=bl(this,_l))?void 0:t.open)||i||a||!s&&!bh.includes(r))return void this.removeEventListener("keyup",bl(this,_v));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||bl(this,_n).contains(`no${r.toLowerCase()}`)||" "===r&&bl(this,_n).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",bl(this,_v),{once:!0})},_E=new WeakSet,_f=function(){bl(this,_l)||(bu(this,_l,pX.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(bl(this,_l))),bl(this,_l).open=!0};let bN=Object.values(py),bP=Object.values(pE),bO=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(pZ.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,pg.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>bN.includes(e)):[]},bU=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&pZ.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof pZ.customElements.get(e.nodeName.toLowerCase()))&&pZ.customElements.upgrade(e),bP.some(t=>t in e)||!!bO(e).length},bW=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},bH={[py.MEDIA_SUBTITLES_LIST]:v$,[py.MEDIA_SUBTITLES_SHOWING]:v$,[py.MEDIA_SEEKABLE]:bW,[py.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(bW).join(" "),[py.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[py.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(pL).join(" ")},[py.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(px).join(" ")}},bB=async(e,t,i)=>{var a,r;if(e.isConnected||await pO(0),"boolean"==typeof i||null==i)return vd(e,t,i);if("number"==typeof i)return vo(e,t,i);if("string"==typeof i)return vc(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=bH[t])?void 0:a.call(bH,i))?r:i;return e.setAttribute(t,n)},b$=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;bU(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>b$(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!bU(e)?pZ.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},bV=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=bO(e),r=t.toLowerCase();a.includes(r)&&bB(e,r,i)})},bq=(e,t,i)=>{b$(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(pb.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(pb.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>b$(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>b$(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>b$(e,t)),Array.prototype.forEach.call(r,e=>b$(e,i))):"attributes"===n&&o===pg.MEDIA_CHROME_ATTRIBUTES&&(bU(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{b$(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(pb.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(pb.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};pZ.customElements.get("media-controller")||pZ.customElements.define("media-controller",bD);let bF="placement",bK="bounds";class bG extends pZ.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!va(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=ve(this,"#"+this.bounds))?e:p5(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[bF,bK]}get placement(){return vu(this,bF)}set placement(e){vc(this,bF,e)}get bounds(){return vu(this,bK)}set bounds(e){vc(this,bK,e)}}bG.shadowRootOptions={mode:"open"},bG.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},pZ.customElements.get("media-tooltip")||pZ.customElements.define("media-tooltip",bG);var bj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bY=(e,t,i)=>(bj(e,t,"read from private field"),i?i.call(e):t.get(e)),bQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bz=(e,t,i,a)=>(bj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let bZ="tooltipplacement",bX="disabled",bJ="notooltip";class b0 extends pZ.HTMLElement{constructor(){if(super(),bQ(this,_w),bQ(this,_y,void 0),this.preventClick=!1,this.tooltipEl=null,bQ(this,__,e=>{this.preventClick||this.handleClick(e),setTimeout(bY(this,_k),0)}),bQ(this,_k,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),bQ(this,_A,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",bY(this,_A))}),bQ(this,_T,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",bY(this,_A)):this.addEventListener("keyup",bY(this,_A),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",bZ,pg.MEDIA_CONTROLLER,py.MEDIA_LANG]}enable(){this.addEventListener("click",bY(this,__)),this.addEventListener("keydown",bY(this,_T)),this.tabIndex=0}disable(){this.removeEventListener("click",bY(this,__)),this.removeEventListener("keydown",bY(this,_T)),this.removeEventListener("keyup",bY(this,_A)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===pg.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=bY(this,_y))?void 0:a.unassociateElement)||r.call(a,this),bz(this,_y,null)),i&&this.isConnected&&(bz(this,_y,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=bY(this,_y))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===bZ&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===py.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),bY(this,_k).call(this)}connectedCallback(){var e,t,i;let{style:a}=vr(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(pg.MEDIA_CONTROLLER);r&&(bz(this,_y,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=bY(this,_y))?void 0:t.associateElement)||i.call(t,this)),pZ.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=_w,t=_I,bj(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=bY(this,_y))?void 0:e.unassociateElement)||t.call(e,this),bz(this,_y,null),this.removeEventListener("mouseenter",bY(this,_k)),this.removeEventListener("focus",bY(this,_k)),this.removeEventListener("click",bY(this,__))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return vu(this,bZ)}set tooltipPlacement(e){vc(this,bZ,e)}get mediaController(){return vu(this,pg.MEDIA_CONTROLLER)}set mediaController(e){vc(this,pg.MEDIA_CONTROLLER,e)}get disabled(){return vl(this,bX)}set disabled(e){vd(this,bX,e)}get noTooltip(){return vl(this,bJ)}set noTooltip(e){vd(this,bJ,e)}handleClick(e){}}_y=new WeakMap,__=new WeakMap,_k=new WeakMap,_A=new WeakMap,_T=new WeakMap,_w=new WeakSet,_I=function(){this.addEventListener("mouseenter",bY(this,_k)),this.addEventListener("focus",bY(this,_k)),this.addEventListener("click",bY(this,__));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},b0.shadowRootOptions={mode:"open"},b0.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${bG.shadowRootOptions.mode}">
          ${bG.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},b0.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},b0.getTooltipContentHTML=function(){return""},pZ.customElements.get("media-chrome-button")||pZ.customElements.define("media-chrome-button",b0);let b1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,b2=e=>{let t=e.mediaIsAirplaying?pH("stop airplay"):pH("start airplay");e.setAttribute("aria-label",t)};class b3 extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_IS_AIRPLAYING,py.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),b2(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_IS_AIRPLAYING&&b2(this)}get mediaIsAirplaying(){return vl(this,py.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){vd(this,py.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return vu(this,py.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){vc(this,py.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new pZ.CustomEvent(pb.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}b3.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${py.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${py.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${py.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${py.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${b1}</slot>
      <slot name="exit">${b1}</slot>
    </slot>
  `},b3.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pH("start airplay")}</slot>
    <slot name="tooltip-exit">${pH("stop airplay")}</slot>
  `},pZ.customElements.get("media-airplay-button")||pZ.customElements.define("media-airplay-button",b3);let b4=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,b5=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,b9=e=>{e.setAttribute("aria-checked",vK(e).toString())};class b8 extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_SUBTITLES_LIST,py.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",pH("closed captions")),b9(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_SUBTITLES_SHOWING&&b9(this)}get mediaSubtitlesList(){return b7(this,py.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){b6(this,py.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return b7(this,py.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){b6(this,py.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new pZ.CustomEvent(pb.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}b8.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${b4}</slot>
      <slot name="off">${b5}</slot>
    </slot>
  `},b8.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${pH("Enable captions")}</slot>
    <slot name="tooltip-disable">${pH("Disable captions")}</slot>
  `};let b7=(e,t)=>{let i=e.getAttribute(t);return i?vW(i):[]},b6=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=v$(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};pZ.customElements.get("media-captions-button")||pZ.customElements.define("media-captions-button",b8);let ge=e=>{let t=e.mediaIsCasting?pH("stop casting"):pH("start casting");e.setAttribute("aria-label",t)};class gt extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_IS_CASTING,py.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ge(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_IS_CASTING&&ge(this)}get mediaIsCasting(){return vl(this,py.MEDIA_IS_CASTING)}set mediaIsCasting(e){vd(this,py.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return vu(this,py.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){vc(this,py.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?pb.MEDIA_EXIT_CAST_REQUEST:pb.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new pZ.CustomEvent(e,{composed:!0,bubbles:!0}))}}gt.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${py.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${py.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${py.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${py.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},gt.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pH("Start casting")}</slot>
    <slot name="tooltip-exit">${pH("Stop casting")}</slot>
  `},pZ.customElements.get("media-cast-button")||pZ.customElements.define("media-cast-button",gt);var gi=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ga=(e,t,i)=>(gi(e,t,"read from private field"),i?i.call(e):t.get(e)),gr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},gn=(e,t,i,a)=>(gi(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),gs=(e,t,i)=>(gi(e,t,"access private method"),i);let go="open";class gl extends pZ.HTMLElement{constructor(){super(),gr(this,_L),gr(this,_x),gr(this,_N),gr(this,_O),gr(this,_W),gr(this,_B),gr(this,_S,!1),gr(this,_C,null),gr(this,_M,null)}static get observedAttributes(){return[go,"anchor"]}get open(){return vl(this,go)}set open(e){vd(this,go,e)}handleEvent(e){switch(e.type){case"invoke":gs(this,_O,_U).call(this,e);break;case"focusout":gs(this,_W,_H).call(this,e);break;case"keydown":gs(this,_B,_$).call(this,e)}}connectedCallback(){gs(this,_L,_R).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){gs(this,_L,_R).call(this),e===go&&i!==t&&(this.open?gs(this,_x,_D).call(this):gs(this,_N,_P).call(this))}focus(){gn(this,_C,vt());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}_S=new WeakMap,_C=new WeakMap,_M=new WeakMap,_L=new WeakSet,_R=function(){if(!ga(this,_S)&&(gn(this,_S,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=vr(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},_x=new WeakSet,_D=function(){var e;null==(e=ga(this,_M))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},_N=new WeakSet,_P=function(){var e;null==(e=ga(this,_M))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},_O=new WeakSet,_U=function(e){gn(this,_M,e.relatedTarget),p6(this,e.relatedTarget)||(this.open=!this.open)},_W=new WeakSet,_H=function(e){var t;!p6(this,e.relatedTarget)&&(null==(t=ga(this,_C))||t.focus(),ga(this,_M)&&ga(this,_M)!==e.relatedTarget&&this.open&&(this.open=!1))},_B=new WeakSet,_$=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=ga(this,_C))||n.focus(),this.open=!1))},gl.shadowRootOptions={mode:"open"},gl.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},gl.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},pZ.customElements.get("media-chrome-dialog")||pZ.customElements.define("media-chrome-dialog",gl);var gd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gu=(e,t,i)=>(gd(e,t,"read from private field"),i?i.call(e):t.get(e)),gc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},gh=(e,t,i,a)=>(gd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),gm=(e,t,i)=>(gd(e,t,"access private method"),i);class gp extends pZ.HTMLElement{constructor(){if(super(),gc(this,_Z),gc(this,_J),gc(this,_1),gc(this,_3),gc(this,_5),gc(this,_8),gc(this,_6),gc(this,kt),gc(this,_V,void 0),gc(this,_q,void 0),gc(this,_F,void 0),gc(this,_K,void 0),gc(this,_G,{}),gc(this,_j,[]),gc(this,_Y,()=>{if(this.range.matches(":focus-visible")){let{style:e}=vr(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),gc(this,_Q,()=>{let{style:e}=vr(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),gc(this,_z,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),gh(this,_F,this.shadowRoot.querySelector("#startpoint")),gh(this,_K,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",pg.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===pg.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=gu(this,_V))?void 0:a.unassociateElement)||r.call(a,this),gh(this,_V,null)),i&&this.isConnected&&(gh(this,_V,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=gu(this,_V))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),gm(this,_J,_0).call(this)):(this.range.setAttribute(e,i),gm(this,_1,_2).call(this)))}connectedCallback(){var e,t,i;let{style:a}=vr(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),gu(this,_G).pointer=vr(this.shadowRoot,"#pointer"),gu(this,_G).progress=vr(this.shadowRoot,"#progress"),gu(this,_G).thumb=vr(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),gu(this,_G).activeSegment=vr(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(pg.MEDIA_CONTROLLER);r&&(gh(this,_V,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=gu(this,_V))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",gu(this,_Y)),this.shadowRoot.addEventListener("focusout",gu(this,_Q)),gm(this,_J,_0).call(this),p2(this.container,gu(this,_z))}disconnectedCallback(){var e,t;gm(this,_1,_2).call(this),null==(t=null==(e=gu(this,_V))?void 0:e.unassociateElement)||t.call(e,this),gh(this,_V,null),this.shadowRoot.removeEventListener("focusin",gu(this,_Y)),this.shadowRoot.removeEventListener("focusout",gu(this,_Q)),p3(this.container,gu(this,_z))}updatePointerBar(e){var t;null==(t=gu(this,_G).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=gu(this,_G).progress)||e.style.setProperty("width",`${i}%`),null==(t=gu(this,_G).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];gh(this,_j,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=pX.createElementNS("http://www.w3.org/2000/svg","rect"),c=vn(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=gu(this,_F).getBoundingClientRect(),n=(r=gu(this,_K).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":gm(this,kt,ki).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":gm(this,_5,_9).call(this,e);break;case"pointerdown":gm(this,_3,_4).call(this,e);break;case"pointerup":gm(this,_8,_7).call(this);break;case"pointerleave":gm(this,_6,ke).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}_V=new WeakMap,_q=new WeakMap,_F=new WeakMap,_K=new WeakMap,_G=new WeakMap,_j=new WeakMap,_Y=new WeakMap,_Q=new WeakMap,_z=new WeakMap,_Z=new WeakSet,_X=function(e){let t=gu(this,_G).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=gu(this,_j).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},_J=new WeakSet,_0=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},_1=new WeakSet,_2=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=pZ.window)||e.removeEventListener("pointerup",this),null==(t=pZ.window)||t.removeEventListener("pointermove",this)},_3=new WeakSet,_4=function(e){var t;gh(this,_q,e.composedPath().includes(this.range)),null==(t=pZ.window)||t.addEventListener("pointerup",this,{once:!0})},_5=new WeakSet,_9=function(e){var t;"mouse"!==e.pointerType&&gm(this,_3,_4).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=pZ.window)||t.addEventListener("pointermove",this)},_8=new WeakSet,_7=function(){var e;null==(e=pZ.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},_6=new WeakSet,ke=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=pZ.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=gu(this,_G).activeSegment)||t.style.removeProperty("transform")},kt=new WeakSet,ki=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),gm(this,_Z,_X).call(this,e),this.dragging&&("mouse"!==e.pointerType||!gu(this,_q))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},gp.shadowRootOptions={mode:"open"},gp.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},gp.getContainerTemplateHTML=function(e){return""},pZ.customElements.get("media-chrome-range")||pZ.customElements.define("media-chrome-range",gp);var gv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gb=(e,t,i)=>(gv(e,t,"read from private field"),i?i.call(e):t.get(e)),gg=(e,t,i,a)=>(gv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class gE extends pZ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ka,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[pg.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===pg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=gb(this,ka))?void 0:a.unassociateElement)||r.call(a,this),gg(this,ka,null)),i&&this.isConnected&&(gg(this,ka,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=gb(this,ka))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(pg.MEDIA_CONTROLLER);a&&(gg(this,ka,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=gb(this,ka))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=gb(this,ka))?void 0:e.unassociateElement)||t.call(e,this),gg(this,ka,null)}}ka=new WeakMap,gE.shadowRootOptions={mode:"open"},gE.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},pZ.customElements.get("media-control-bar")||pZ.customElements.define("media-control-bar",gE);var gf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gy=(e,t,i)=>(gf(e,t,"read from private field"),i?i.call(e):t.get(e)),g_=(e,t,i,a)=>(gf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class gk extends pZ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,kr,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[pg.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===pg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=gy(this,kr))?void 0:a.unassociateElement)||r.call(a,this),g_(this,kr,null)),i&&this.isConnected&&(g_(this,kr,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=gy(this,kr))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=vr(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(pg.MEDIA_CONTROLLER);r&&(g_(this,kr,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=gy(this,kr))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=gy(this,kr))?void 0:e.unassociateElement)||t.call(e,this),g_(this,kr,null)}}kr=new WeakMap,gk.shadowRootOptions={mode:"open"},gk.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},gk.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},pZ.customElements.get("media-text-display")||pZ.customElements.define("media-text-display",gk);var gA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gT=(e,t,i)=>(gA(e,t,"read from private field"),i?i.call(e):t.get(e));class gw extends gk{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,kn,void 0),((e,t,i,a)=>(gA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,kn,this.shadowRoot.querySelector("slot")),gT(this,kn).textContent=pV(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===py.MEDIA_DURATION&&(gT(this,kn).textContent=pV(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return vs(this,py.MEDIA_DURATION)}set mediaDuration(e){vo(this,py.MEDIA_DURATION,e)}}kn=new WeakMap,gw.getSlotTemplateHTML=function(e,t){return`
    <slot>${pV(t.mediaDuration)}</slot>
  `},pZ.customElements.get("media-duration-display")||pZ.customElements.define("media-duration-display",gw);let gI={2:pH("Network Error"),3:pH("Decode Error"),4:pH("Source Not Supported"),5:pH("Encryption Error")},gS={2:pH("A network error caused the media download to fail."),3:pH("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:pH("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:pH("The media is encrypted and there are no keys to decrypt it.")},gC=e=>{var t,i;return 1===e.code?null:{title:null!=(t=gI[e.code])?t:`Error ${e.code}`,message:null!=(i=gS[e.code])?i:e.message}};var gM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function gL(e){var t;let{title:i,message:a}=null!=(t=gC(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let gR=[py.MEDIA_ERROR_CODE,py.MEDIA_ERROR_MESSAGE];class gx extends gl{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ks,null)}static get observedAttributes(){return[...super.observedAttributes,...gR]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!gR.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==gC(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=gC(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return gM(this,e=ks,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;gM(this,t=ks,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return vs(this,"mediaerrorcode")}set mediaErrorCode(e){vo(this,"mediaerrorcode",e)}get mediaErrorMessage(){return vu(this,"mediaerrormessage")}set mediaErrorMessage(e){vc(this,"mediaerrormessage",e)}}ks=new WeakMap,gx.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${gL({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},gx.formatErrorMessage=gL,pZ.customElements.get("media-error-dialog")||pZ.customElements.define("media-error-dialog",gx);var gD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},gN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class gP extends gl{constructor(){super(...arguments),gN(this,ko,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),gN(this,kl,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",gD(this,ko)),document.addEventListener("keydown",gD(this,kl)))}disconnectedCallback(){this.removeEventListener("click",gD(this,ko)),document.removeEventListener("keydown",gD(this,kl))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",gD(this,ko)),document.addEventListener("keydown",gD(this,kl))):(this.removeEventListener("click",gD(this,ko)),document.removeEventListener("keydown",gD(this,kl))))}}ko=new WeakMap,kl=new WeakMap,gP.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},pZ.customElements.get("media-keyboard-shortcuts-dialog")||pZ.customElements.define("media-keyboard-shortcuts-dialog",gP);var gO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let gU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,gW=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,gH=e=>{let t=e.mediaIsFullscreen?pH("exit fullscreen mode"):pH("enter fullscreen mode");e.setAttribute("aria-label",t)};class gB extends b0{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,kd,null)}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_IS_FULLSCREEN,py.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gH(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_IS_FULLSCREEN&&gH(this)}get mediaFullscreenUnavailable(){return vu(this,py.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){vc(this,py.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return vl(this,py.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){vd(this,py.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;gO(this,t=kd,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(gO(this,a=kd,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),s=this.mediaIsFullscreen?new pZ.CustomEvent(pb.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new pZ.CustomEvent(pb.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(s)}}kd=new WeakMap,gB.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${py.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${py.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${py.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${py.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gU}</slot>
      <slot name="exit">${gW}</slot>
    </slot>
  `},gB.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pH("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${pH("Exit fullscreen mode")}</slot>
  `},pZ.customElements.get("media-fullscreen-button")||pZ.customElements.define("media-fullscreen-button",gB);let{MEDIA_TIME_IS_LIVE:g$,MEDIA_PAUSED:gV}=py,{MEDIA_SEEK_TO_LIVE_REQUEST:gq,MEDIA_PLAY_REQUEST:gF}=pb,gK=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?pH("seek to live"):pH("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=pH("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class gG extends b0{static get observedAttributes(){return[...super.observedAttributes,g$,gV]}connectedCallback(){super.connectedCallback(),gK(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),gK(this)}get mediaPaused(){return vl(this,py.MEDIA_PAUSED)}set mediaPaused(e){vd(this,py.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return vl(this,py.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){vd(this,py.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new pZ.CustomEvent(gq,{composed:!0,bubbles:!0})),this.hasAttribute(gV)&&this.dispatchEvent(new pZ.CustomEvent(gF,{composed:!0,bubbles:!0})))}}gG.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${g$}]:not([${gV}])) slot[name=indicator] > *,
      :host([${g$}]:not([${gV}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${g$}]:not([${gV}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${pH("live")}</slot>
  `},pZ.customElements.get("media-live-button")||pZ.customElements.define("media-live-button",gG);var gj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gY=(e,t,i)=>(gj(e,t,"read from private field"),i?i.call(e):t.get(e)),gQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},gz=(e,t,i,a)=>(gj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let gZ="loadingdelay",gX="noautohide",gJ=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class g0 extends pZ.HTMLElement{constructor(){if(super(),gQ(this,ku,void 0),gQ(this,kc,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[pg.MEDIA_CONTROLLER,py.MEDIA_PAUSED,py.MEDIA_LOADING,gZ]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===gZ&&t!==i?this.loadingDelay=Number(i):e===pg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=gY(this,ku))?void 0:a.unassociateElement)||r.call(a,this),gz(this,ku,null)),i&&this.isConnected&&(gz(this,ku,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=gY(this,ku))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(pg.MEDIA_CONTROLLER);a&&(gz(this,ku,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=gY(this,ku))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=gY(this,ku))?void 0:e.unassociateElement)||t.call(e,this),gz(this,ku,null)}get loadingDelay(){return gY(this,kc)}set loadingDelay(e){gz(this,kc,e);let{style:t}=vr(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return vl(this,py.MEDIA_PAUSED)}set mediaPaused(e){vd(this,py.MEDIA_PAUSED,e)}get mediaLoading(){return vl(this,py.MEDIA_LOADING)}set mediaLoading(e){vd(this,py.MEDIA_LOADING,e)}get mediaController(){return vu(this,pg.MEDIA_CONTROLLER)}set mediaController(e){vc(this,pg.MEDIA_CONTROLLER,e)}get noAutohide(){return vl(this,gX)}set noAutohide(e){vd(this,gX,e)}}ku=new WeakMap,kc=new WeakMap,g0.shadowRootOptions={mode:"open"},g0.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${py.MEDIA_LOADING}]:not([${py.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${py.MEDIA_LOADING}]:not([${py.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${py.MEDIA_LOADING}]:not([${py.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${gJ}</slot>
    <div id="status" role="status" aria-live="polite">${pH("media loading")}</div>
  `},pZ.customElements.get("media-loading-indicator")||pZ.customElements.define("media-loading-indicator",g0);let g1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,g2=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,g3=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,g4=e=>{let t="off"===e.mediaVolumeLevel?pH("unmute"):pH("mute");e.setAttribute("aria-label",t)};class g5 extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),g4(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_VOLUME_LEVEL&&g4(this)}get mediaVolumeLevel(){return vu(this,py.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){vc(this,py.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?pb.MEDIA_UNMUTE_REQUEST:pb.MEDIA_MUTE_REQUEST;this.dispatchEvent(new pZ.CustomEvent(e,{composed:!0,bubbles:!0}))}}g5.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${py.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${py.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${py.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${py.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${py.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${py.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${py.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${g1}</slot>
      <slot name="low">${g2}</slot>
      <slot name="medium">${g2}</slot>
      <slot name="high">${g3}</slot>
    </slot>
  `},g5.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${pH("Mute")}</slot>
    <slot name="tooltip-unmute">${pH("Unmute")}</slot>
  `},pZ.customElements.get("media-mute-button")||pZ.customElements.define("media-mute-button",g5);let g9=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,g8=e=>{let t=e.mediaIsPip?pH("exit picture in picture mode"):pH("enter picture in picture mode");e.setAttribute("aria-label",t)};class g7 extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_IS_PIP,py.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),g8(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_IS_PIP&&g8(this)}get mediaPipUnavailable(){return vu(this,py.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){vc(this,py.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return vl(this,py.MEDIA_IS_PIP)}set mediaIsPip(e){vd(this,py.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?pb.MEDIA_EXIT_PIP_REQUEST:pb.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new pZ.CustomEvent(e,{composed:!0,bubbles:!0}))}}g7.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${py.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${py.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${py.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${py.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${g9}</slot>
      <slot name="exit">${g9}</slot>
    </slot>
  `},g7.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pH("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${pH("Exit picture in picture mode")}</slot>
  `},pZ.customElements.get("media-pip-button")||pZ.customElements.define("media-pip-button",g7);var g6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let Ee="rates",Et=[1,1.2,1.5,1.7,2];function Ei(e){return Math.round(100*e)/100}class Ea extends b0{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,kh,new vO(this,Ee,{defaultValue:Et})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Ei(null!=(e=this.mediaPlaybackRate)?e:1)}x`}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_PLAYBACK_RATE,Ee]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===Ee&&(g6(this,kh).value=i),e===py.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Ei(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",pH("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return g6(this,kh)}set rates(e){e?Array.isArray(e)?g6(this,kh).value=e.join(" "):"string"==typeof e&&(g6(this,kh).value=e):g6(this,kh).value=""}get mediaPlaybackRate(){return vs(this,py.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){vo(this,py.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(g6(this,kh).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new pZ.CustomEvent(pb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}kh=new WeakMap,Ea.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?Ei(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},Ea.getTooltipContentHTML=function(){return pH("Playback rate")},pZ.customElements.get("media-playback-rate-button")||pZ.customElements.define("media-playback-rate-button",Ea);let Er=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,En=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,Es=e=>{let t=e.mediaPaused?pH("play"):pH("pause");e.setAttribute("aria-label",t)};class Eo extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_PAUSED,py.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Es(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===py.MEDIA_PAUSED||e===py.MEDIA_LANG)&&Es(this)}get mediaPaused(){return vl(this,py.MEDIA_PAUSED)}set mediaPaused(e){vd(this,py.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?pb.MEDIA_PLAY_REQUEST:pb.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new pZ.CustomEvent(e,{composed:!0,bubbles:!0}))}}Eo.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${py.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${py.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${py.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${py.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Er}</slot>
      <slot name="pause">${En}</slot>
    </slot>
  `},Eo.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${pH("Play")}</slot>
    <slot name="tooltip-pause">${pH("Pause")}</slot>
  `},pZ.customElements.get("media-play-button")||pZ.customElements.define("media-play-button",Eo);let El="placeholdersrc";class Ed extends pZ.HTMLElement{static get observedAttributes(){return[El,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===El)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return vu(this,El)}set placeholderSrc(e){vc(this,"src",e)}get src(){return vu(this,"src")}set src(e){vc(this,"src",e)}}Ed.shadowRootOptions={mode:"open"},Ed.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},pZ.customElements.get("media-poster-image")||pZ.customElements.define("media-poster-image",Ed);var Eu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class Ec extends gk{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,km,void 0),((e,t,i,a)=>(Eu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,km,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_PREVIEW_CHAPTER,py.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===py.MEDIA_PREVIEW_CHAPTER||e===py.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((Eu(this,a=km,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=pH("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return vu(this,py.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){vc(this,py.MEDIA_PREVIEW_CHAPTER,e)}}km=new WeakMap,pZ.customElements.get("media-preview-chapter-display")||pZ.customElements.define("media-preview-chapter-display",Ec);var Eh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Em=(e,t,i)=>(Eh(e,t,"read from private field"),i?i.call(e):t.get(e)),Ep=(e,t,i,a)=>(Eh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class Ev extends pZ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,kp,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[pg.MEDIA_CONTROLLER,py.MEDIA_PREVIEW_IMAGE,py.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(pg.MEDIA_CONTROLLER);a&&(Ep(this,kp,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=Em(this,kp))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=Em(this,kp))?void 0:e.unassociateElement)||t.call(e,this),Ep(this,kp,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[py.MEDIA_PREVIEW_IMAGE,py.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===pg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=Em(this,kp))?void 0:a.unassociateElement)||r.call(a,this),Ep(this,kp,null)),i&&this.isConnected&&(Ep(this,kp,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=Em(this,kp))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return vu(this,py.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){vc(this,py.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(py.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(py.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(py.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=vr(this.shadowRoot,":host"),v=vr(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=1>Math.min(e,t)?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let E=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};b.src!==l&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,E(),b.onload=null},b.src=l,E()),E(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}kp=new WeakMap,Ev.shadowRootOptions={mode:"open"},Ev.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},pZ.customElements.get("media-preview-thumbnail")||pZ.customElements.define("media-preview-thumbnail",Ev);var Eb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Eg=(e,t,i)=>(Eb(e,t,"read from private field"),i?i.call(e):t.get(e));class EE extends gk{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,kv,void 0),((e,t,i,a)=>(Eb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,kv,this.shadowRoot.querySelector("slot")),Eg(this,kv).textContent=pV(0)}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_PREVIEW_TIME&&null!=i&&(Eg(this,kv).textContent=pV(parseFloat(i)))}get mediaPreviewTime(){return vs(this,py.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){vo(this,py.MEDIA_PREVIEW_TIME,e)}}kv=new WeakMap,pZ.customElements.get("media-preview-time-display")||pZ.customElements.define("media-preview-time-display",EE);let Ef="seekoffset";class Ey extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_CURRENT_TIME,Ef]}connectedCallback(){super.connectedCallback(),this.seekOffset=vs(this,Ef,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",pH("seek back {seekOffset} seconds",{seekOffset:a})),e===Ef&&(this.seekOffset=vs(this,Ef,30))}get seekOffset(){return vs(this,Ef,30)}set seekOffset(e){vo(this,Ef,e),this.setAttribute("aria-label",pH("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),p8(p7(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return vs(this,py.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){vo(this,py.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new pZ.CustomEvent(pb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}Ey.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},Ey.getTooltipContentHTML=function(){return pH("Seek backward")},pZ.customElements.get("media-seek-backward-button")||pZ.customElements.define("media-seek-backward-button",Ey);let E_="seekoffset";class Ek extends b0{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_CURRENT_TIME,E_]}connectedCallback(){super.connectedCallback(),this.seekOffset=vs(this,E_,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",pH("seek forward {seekOffset} seconds",{seekOffset:a})),e===E_&&(this.seekOffset=vs(this,E_,30))}get seekOffset(){return vs(this,E_,30)}set seekOffset(e){vo(this,E_,e),this.setAttribute("aria-label",pH("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),p8(p7(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return vs(this,py.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){vo(this,py.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new pZ.CustomEvent(pb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}Ek.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},Ek.getTooltipContentHTML=function(){return pH("Seek forward")},pZ.customElements.get("media-seek-forward-button")||pZ.customElements.define("media-seek-forward-button",Ek);var EA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ET=(e,t,i)=>(EA(e,t,"read from private field"),i?i.call(e):t.get(e)),Ew=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},EI=(e,t,i,a)=>(EA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ES=(e,t,i)=>(EA(e,t,"access private method"),i);let EC={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},EM=[...Object.values(EC),py.MEDIA_CURRENT_TIME,py.MEDIA_DURATION,py.MEDIA_SEEKABLE],EL=["Enter"," "],ER="&nbsp;/&nbsp;",Ex=(e,{timesSep:t=ER}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?pV(0-(s-r)):pV(r);return e.showDuration?`${o}${t}${pV(s)}`:o};class ED extends gk{constructor(){super(),Ew(this,kf),Ew(this,k_),Ew(this,kA),Ew(this,kw),Ew(this,kb,void 0),Ew(this,kg,null),Ew(this,kE,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!EL.includes(a)?this.removeEventListener("keyup",ET(this,kg)):this.addEventListener("keyup",ET(this,kg))}),EI(this,kb,this.shadowRoot.querySelector("slot")),ET(this,kb).innerHTML=`${Ex(this)}`}static get observedAttributes(){return[...super.observedAttributes,...EM,"disabled"]}connectedCallback(){let{style:e}=vr(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",pH("playback time")),ES(this,kA,kT).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),ES(this,k_,kk).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",pH("playback time")),EM.includes(e)?this.update():"disabled"===e&&i!==t?null==i?ES(this,kA,kT).call(this):ES(this,kw,kI).call(this):e===EC.NO_TOGGLE&&i!==t&&(this.noToggle?ES(this,kw,kI).call(this):ES(this,kA,kT).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return vl(this,EC.REMAINING)}set remaining(e){vd(this,EC.REMAINING,e)}get showDuration(){return vl(this,EC.SHOW_DURATION)}set showDuration(e){vd(this,EC.SHOW_DURATION,e)}get noToggle(){return vl(this,EC.NO_TOGGLE)}set noToggle(e){vd(this,EC.NO_TOGGLE,e)}get mediaDuration(){return vs(this,py.MEDIA_DURATION)}set mediaDuration(e){vo(this,py.MEDIA_DURATION,e)}get mediaCurrentTime(){return vs(this,py.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){vo(this,py.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(py.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(py.MEDIA_SEEKABLE):this.setAttribute(py.MEDIA_SEEKABLE,e.join(":"))}update(){let e=Ex(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",pH("video not loaded, unknown time."));let n=e.remaining?p$(0-(r-i)):p$(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=pH("{currentTime} of {totalTime}",{currentTime:n,totalTime:p$(r)});e.setAttribute("aria-description",s)})(this),e!==ET(this,kb).innerHTML&&(ET(this,kb).innerHTML=e)}}kb=new WeakMap,kg=new WeakMap,kE=new WeakMap,kf=new WeakSet,ky=function(){ET(this,kg)||(EI(this,kg,e=>{let{key:t}=e;EL.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",ET(this,kg))}),this.addEventListener("keydown",ET(this,kE)),this.addEventListener("click",this.toggleTimeDisplay))},k_=new WeakSet,kk=function(){ET(this,kg)&&(this.removeEventListener("keyup",ET(this,kg)),this.removeEventListener("keydown",ET(this,kE)),this.removeEventListener("click",this.toggleTimeDisplay),EI(this,kg,null))},kA=new WeakSet,kT=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),ES(this,kf,ky).call(this))},kw=new WeakSet,kI=function(){this.removeAttribute("role"),this.disable(),ES(this,k_,kk).call(this)},ED.getSlotTemplateHTML=function(e,t){return`
    <slot>${Ex(t)}</slot>
  `},pZ.customElements.get("media-time-display")||pZ.customElements.define("media-time-display",ED);var EN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},EP=(e,t,i)=>(EN(e,t,"read from private field"),i?i.call(e):t.get(e)),EO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},EU=(e,t,i,a)=>(EN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class EW{constructor(e,t,i){EO(this,kS,void 0),EO(this,kC,void 0),EO(this,kM,void 0),EO(this,kL,void 0),EO(this,kR,void 0),EO(this,kx,void 0),EO(this,kD,void 0),EO(this,kN,void 0),EO(this,kP,0),EO(this,kO,(e=performance.now())=>{EU(this,kP,requestAnimationFrame(EP(this,kO))),EU(this,kL,performance.now()-EP(this,kM));let t=1e3/this.fps;if(EP(this,kL)>t){let i,a,r,n;EU(this,kM,e-EP(this,kL)%t);let s=1e3/((e-EP(this,kC))/++(i=this,a=kR,{set _(value){EU(i,a,value,r)},get _(){return EP(i,a,n)}})._),o=(e-EP(this,kx))/1e3/this.duration,l=EP(this,kD)+o*this.playbackRate;l-EP(this,kS).valueAsNumber>0?EU(this,kN,this.playbackRate/this.duration/s):(EU(this,kN,.995*EP(this,kN)),l=EP(this,kS).valueAsNumber+EP(this,kN)),this.callback(l)}}),EU(this,kS,e),this.callback=t,this.fps=i}start(){0===EP(this,kP)&&(EU(this,kM,performance.now()),EU(this,kC,EP(this,kM)),EU(this,kR,0),EP(this,kO).call(this))}stop(){0!==EP(this,kP)&&(cancelAnimationFrame(EP(this,kP)),EU(this,kP,0))}update({start:e,duration:t,playbackRate:i}){let a=e-EP(this,kS).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),EU(this,kD,e),EU(this,kx,performance.now()),this.duration=t,this.playbackRate=i}}kS=new WeakMap,kC=new WeakMap,kM=new WeakMap,kL=new WeakMap,kR=new WeakMap,kx=new WeakMap,kD=new WeakMap,kN=new WeakMap,kP=new WeakMap,kO=new WeakMap;var EH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},EB=(e,t,i)=>(EH(e,t,"read from private field"),i?i.call(e):t.get(e)),E$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},EV=(e,t,i,a)=>(EH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Eq=(e,t,i)=>(EH(e,t,"access private method"),i);let EF=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},EK=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class EG extends gp{constructor(){super(),E$(this,kY),E$(this,kZ),E$(this,kJ),E$(this,k1),E$(this,k3),E$(this,k5),E$(this,k8),E$(this,kU,null),E$(this,kW,void 0),E$(this,kH,void 0),E$(this,kB,void 0),E$(this,k$,void 0),E$(this,kV,void 0),E$(this,kq,void 0),E$(this,kF,void 0),E$(this,kK,void 0),E$(this,kG,void 0),E$(this,kj,()=>{Eq(this,kY,kQ).call(this)?EB(this,kW).start():EB(this,kW).stop()}),E$(this,kz,e=>{!this.dragging&&(pN(e)&&(this.range.valueAsNumber=e),EB(this,kG)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),EV(this,kH,this.shadowRoot.querySelectorAll('[part~="box"]')),EV(this,k$,this.shadowRoot.querySelector('[part~="preview-box"]')),EV(this,kV,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);EV(this,kq,parseInt(e.getPropertyValue("--media-box-padding-left"))),EV(this,kF,parseInt(e.getPropertyValue("--media-box-padding-right"))),EV(this,kW,new EW(this.range,EB(this,kz),60))}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_PAUSED,py.MEDIA_DURATION,py.MEDIA_SEEKABLE,py.MEDIA_CURRENT_TIME,py.MEDIA_PREVIEW_IMAGE,py.MEDIA_PREVIEW_TIME,py.MEDIA_PREVIEW_CHAPTER,py.MEDIA_BUFFERED,py.MEDIA_PLAYBACK_RATE,py.MEDIA_LOADING,py.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",pH("seek")),EB(this,kj).call(this),EV(this,kU,this.getRootNode()),null==(e=EB(this,kU))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),EB(this,kW).stop(),null==(e=EB(this,kU))||e.removeEventListener("transitionstart",this),EV(this,kU,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===py.MEDIA_CURRENT_TIME||e===py.MEDIA_PAUSED||e===py.MEDIA_ENDED||e===py.MEDIA_LOADING||e===py.MEDIA_DURATION||e===py.MEDIA_SEEKABLE){let e,t,i,a;EB(this,kW).update({start:EF(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),EB(this,kj).call(this),e=this.range,t=p$(+EK(this)),i=p$(+this.mediaSeekableEnd),a=t&&i?pH("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):pH("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===py.MEDIA_BUFFERED&&this.updateBufferedBar();(e===py.MEDIA_DURATION||e===py.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=EB(this,kK),this.updateBar())}}get mediaChaptersCues(){return EB(this,kK)}set mediaChaptersCues(e){var t;EV(this,kK,e),this.updateSegments(null==(t=EB(this,kK))?void 0:t.map(e=>({start:EF(this,e.startTime),end:EF(this,e.endTime)})))}get mediaPaused(){return vl(this,py.MEDIA_PAUSED)}set mediaPaused(e){vd(this,py.MEDIA_PAUSED,e)}get mediaLoading(){return vl(this,py.MEDIA_LOADING)}set mediaLoading(e){vd(this,py.MEDIA_LOADING,e)}get mediaDuration(){return vs(this,py.MEDIA_DURATION)}set mediaDuration(e){vo(this,py.MEDIA_DURATION,e)}get mediaCurrentTime(){return vs(this,py.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){vo(this,py.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return vs(this,py.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){vo(this,py.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(py.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(py.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(py.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(py.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(py.MEDIA_SEEKABLE):this.setAttribute(py.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return vu(this,py.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){vc(this,py.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return vs(this,py.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){vo(this,py.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return vl(this,py.MEDIA_ENDED)}set mediaEnded(e){vd(this,py.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=EF(this,r)}let{style:a}=vr(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=vr(this.shadowRoot,"#current-rail"),t=vr(this.shadowRoot,'[part~="current-box"]'),i=Eq(this,kZ,kX).call(this,EB(this,kV)),a=Eq(this,kJ,k0).call(this,i,this.range.valueAsNumber),r=Eq(this,k1,k2).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":Eq(this,k8,k7).call(this);break;case"pointermove":Eq(this,k3,k4).call(this,e);break;case"pointerup":EB(this,kG)&&EV(this,kG,!1);break;case"pointerdown":EV(this,kG,!0);break;case"pointerleave":Eq(this,k5,k9).call(this,null);break;case"transitionstart":p6(e.target,this)&&setTimeout(()=>EB(this,kj).call(this),0)}}}kU=new WeakMap,kW=new WeakMap,kH=new WeakMap,kB=new WeakMap,k$=new WeakMap,kV=new WeakMap,kq=new WeakMap,kF=new WeakMap,kK=new WeakMap,kG=new WeakMap,kj=new WeakMap,kY=new WeakSet,kQ=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&va(this)},kz=new WeakMap,kZ=new WeakSet,kX=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?ve(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},kJ=new WeakSet,k0=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},k1=new WeakSet,k2=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+EB(this,kq)){let t=e.range.left-e.bounds.left-EB(this,kq);return`${n-i/2+t}px`}if(n>r-EB(this,kF)){let t=e.bounds.right-e.range.right-EB(this,kF);return`${n+i/2-t-e.range.width}px`}return 0},k3=new WeakSet,k4=function(e){let t=[...EB(this,kH)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void Eq(this,k5,k9).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=vr(this.shadowRoot,"#preview-rail"),r=vr(this.shadowRoot,'[part~="preview-box"]'),n=Eq(this,kZ,kX).call(this,EB(this,k$)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=Eq(this,kJ,k0).call(this,n,s),l=Eq(this,k1,k2).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(EB(this,kB))-Math.round(s*i))&&s>.01&&s<.99||(EV(this,kB,s*i),Eq(this,k5,k9).call(this,EB(this,kB)))},k5=new WeakSet,k9=function(e){this.dispatchEvent(new pZ.CustomEvent(pb.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},k8=new WeakSet,k7=function(){EB(this,kW).stop();let e=EK(this);this.dispatchEvent(new pZ.CustomEvent(pb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},EG.shadowRootOptions={mode:"open"},EG.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${py.MEDIA_PREVIEW_IMAGE}], [${py.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${py.MEDIA_PREVIEW_IMAGE}], [${py.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${py.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${py.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${py.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${py.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${py.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${py.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${py.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${py.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${py.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${py.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${py.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${py.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Ev.shadowRootOptions.mode}">
            ${Ev.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},pZ.customElements.get("media-time-range")||pZ.customElements.define("media-time-range",EG);var Ej=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class EY extends gp{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,k6,()=>{let e=this.range.value,t=new pZ.CustomEvent(pb.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_VOLUME,py.MEDIA_MUTED,py.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",pH("volume")),this.range.addEventListener("input",Ej(this,k6))}disconnectedCallback(){this.range.removeEventListener("input",Ej(this,k6)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===py.MEDIA_VOLUME||e===py.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return vs(this,py.MEDIA_VOLUME,1)}set mediaVolume(e){vo(this,py.MEDIA_VOLUME,e)}get mediaMuted(){return vl(this,py.MEDIA_MUTED)}set mediaMuted(e){vd(this,py.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return vu(this,py.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){vc(this,py.MEDIA_VOLUME_UNAVAILABLE,e)}}k6=new WeakMap,pZ.customElements.get("media-volume-range")||pZ.customElements.define("media-volume-range",EY);class EQ extends b0{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=pH("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return vl(this,py.MEDIA_LOOP)}set mediaLoop(e){vd(this,py.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new pZ.CustomEvent(pb.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}EQ.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${py.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},EQ.getTooltipContentHTML=function(){return pH("Loop")},pZ.customElements.get("media-loop-button")||pZ.customElements.define("media-loop-button",EQ);var Ez=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},EZ=(e,t,i)=>(Ez(e,t,"read from private field"),i?i.call(e):t.get(e)),EX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},EJ=(e,t,i,a)=>(Ez(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let E0={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof E7&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof E7?a.element[a.attributeName]=t:a.value=t}}}};class E1 extends pZ.DocumentFragment{constructor(e,t,i=E0){var a;super(),EX(this,Ae,void 0),EX(this,At,void 0),this.append(e.content.cloneNode(!0)),EJ(this,Ae,E2(this)),EJ(this,At,i),null==(a=i.createCallback)||a.call(i,this,EZ(this,Ae),t),i.processCallback(this,EZ(this,Ae),t)}update(e){EZ(this,At).processCallback(this,EZ(this,Ae),e)}}Ae=new WeakMap,At=new WeakMap;let E2=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new E8;for([i,a]of E4(r.value))if(i){let i=new E7(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of E4(n))if(i){let i=new E6(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new fe(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else E2(r,t);return t},E3={},E4=e=>{let t="",i=0,a=E3[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),E3[e]=a};class E5{get value(){return""}set value(e){}toString(){return this.value}}let E9=new WeakMap;class E8{constructor(){EX(this,Ai,[])}[Symbol.iterator](){return EZ(this,Ai).values()}get length(){return EZ(this,Ai).length}item(e){return EZ(this,Ai)[e]}append(...e){for(let t of e)t instanceof E7&&E9.set(t,this),EZ(this,Ai).push(t)}toString(){return EZ(this,Ai).join("")}}Ai=new WeakMap;class E7 extends E5{constructor(e,t,i){super(),EX(this,Ao),EX(this,Aa,""),EX(this,Ar,void 0),EX(this,An,void 0),EX(this,As,void 0),EJ(this,Ar,e),EJ(this,An,t),EJ(this,As,i)}get attributeName(){return EZ(this,An)}get attributeNamespace(){return EZ(this,As)}get element(){return EZ(this,Ar)}get value(){return EZ(this,Aa)}set value(e){EZ(this,Aa)!==e&&(EJ(this,Aa,e),EZ(this,Ao,Al)&&1!==EZ(this,Ao,Al).length?EZ(this,Ar).setAttributeNS(EZ(this,As),EZ(this,An),EZ(this,Ao,Al).toString()):null==e?EZ(this,Ar).removeAttributeNS(EZ(this,As),EZ(this,An)):EZ(this,Ar).setAttributeNS(EZ(this,As),EZ(this,An),e))}get booleanValue(){return EZ(this,Ar).hasAttributeNS(EZ(this,As),EZ(this,An))}set booleanValue(e){if(EZ(this,Ao,Al)&&1!==EZ(this,Ao,Al).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}Aa=new WeakMap,Ar=new WeakMap,An=new WeakMap,As=new WeakMap,Ao=new WeakSet,Al=function(){return E9.get(this)};class E6 extends E5{constructor(e,t){super(),EX(this,Ad,void 0),EX(this,Au,void 0),EJ(this,Ad,e),EJ(this,Au,t?[...t]:[new Text])}get replacementNodes(){return EZ(this,Au)}get parentNode(){return EZ(this,Ad)}get nextSibling(){return EZ(this,Au)[EZ(this,Au).length-1].nextSibling}get previousSibling(){return EZ(this,Au)[0].previousSibling}get value(){return EZ(this,Au).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),EJ(this,Au,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(EZ(this,Au)[0].parentNode,EZ(this,Au),t,this.nextSibling))}}Ad=new WeakMap,Au=new WeakMap;class fe extends E6{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let ft={string:e=>String(e)};class fi{constructor(e){this.template=e,this.state=void 0}}let fa=new WeakMap,fr=new WeakMap,fn={partial:(e,t)=>{t[e.expression]=new fi(e.template)},if:(e,t)=>{var i;if(fd(e.expression,t))if(fa.get(e)!==e.template){fa.set(e,e.template);let i=new E1(e.template,t,fo);e.replace(i),fr.set(e,i)}else null==(i=fr.get(e))||i.update(t);else e.replace(""),fa.delete(e),fr.delete(e)}},fs=Object.keys(fn),fo={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof fe){if(!n.directive){let e=fs.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=fn[n.directive])||a.call(fn,n,i);continue}let t=fd(e,i);if(t instanceof fi){fa.get(n)!==t.template?(fa.set(n,t.template),n.value=t=new E1(t.template,t.state,fo),fr.set(n,t)):null==(r=fr.get(n))||r.update(t.state);continue}t?(n instanceof E7&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof E7?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,fa.delete(n),fr.delete(n))):n instanceof E7?n.value=void 0:(n.value=void 0,fa.delete(n),fr.delete(n))}}},fl={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=ft[t])?void 0:i.call(ft,e)}};function fd(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return fu(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return fu(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=fh(d,t))}return i}if(1===d.length)return fc(d[0])?fh(d[0].token,t):fu(e);if(2===d.length){let i=fl[null==(o=d[0])?void 0:o.token];return i&&fc(d[1])?i(fh(d[1].token,t)):fu(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=fl[i];if(!a||!fc(d[0])||!fc(d[2]))return fu(e);let r=fh(d[0].token,t);return a(r,"|"===i?d[2].token:fh(d[2].token,t))}}function fu(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function fc({type:e}){return["number","boolean","string","param"].includes(e)}function fh(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):pP(e)?parseFloat(e):t[e]}var fm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fp=(e,t,i)=>(fm(e,t,"read from private field"),i?i.call(e):t.get(e)),fv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fb=(e,t,i,a)=>(fm(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),fg=(e,t,i)=>(fm(e,t,"access private method"),i);let fE={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},ff=pX.createElement("template");ff.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class fy extends pZ.HTMLElement{constructor(){super(),fv(this,Av),fv(this,Ag),fv(this,Ac,void 0),fv(this,Ah,void 0),fv(this,Am,void 0),fv(this,Ap,void 0),fv(this,Af,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),fb(this,Ap,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(fE[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),fb(this,Af,this.render.bind(this)),fg(this,Av,Ab).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=fp(this,Ac))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(fb(this,Ac,e),fb(this,Am,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>fE[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=fE[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(pP(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&fg(this,Ag,AE).call(this)}connectedCallback(){this.addEventListener(p_.BREAKPOINTS_COMPUTED,fp(this,Af)),fp(this,Ap).observe(this,{attributes:!0}),fp(this,Ap).observe(this.renderRoot,{attributes:!0,subtree:!0}),fg(this,Ag,AE).call(this)}disconnectedCallback(){this.removeEventListener(p_.BREAKPOINTS_COMPUTED,fp(this,Af)),fp(this,Ap).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==fp(this,Ah)&&(fb(this,Ah,this.template),this.renderer=new E1(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(ff.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function f_(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function fk(e){return e.split("-")[0]}Ac=new WeakMap,Ah=new WeakMap,Am=new WeakMap,Ap=new WeakMap,Av=new WeakSet,Ab=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},Ag=new WeakSet,AE=function(){var e;let t=this.getAttribute("template");if(!t||t===fp(this,Am))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){fb(this,Am,t),fb(this,Ac,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(fb(this,Am,t),f_(t).then(e=>{let t=pX.createElement("template");t.innerHTML=e,fb(this,Ac,t),this.createRenderer()}).catch(console.error))},Af=new WeakMap,fy.observedAttributes=["template"],fy.processor=fo,pZ.customElements.get("media-theme")||pZ.customElements.define("media-theme",fy);class fA extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class fT extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var fw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fI=(e,t,i)=>(fw(e,t,"read from private field"),i?i.call(e):t.get(e)),fS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fC=(e,t,i,a)=>(fw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),fM=(e,t,i)=>(fw(e,t,"access private method"),i);function fL({type:e,text:t,value:i,checked:a}){let r=pX.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=pX.createElement("span");return n.textContent=t,r.append(n),r}function fR(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let fx="style",fD="hidden",fN="disabled";class fP extends pZ.HTMLElement{constructor(){if(super(),fS(this,AS),fS(this,AM),fS(this,Ax),fS(this,AN),fS(this,AO),fS(this,AW),fS(this,AV),fS(this,AF),fS(this,AG),fS(this,AY),fS(this,Az),fS(this,AX),fS(this,A0),fS(this,A2),fS(this,A4),fS(this,A9),fS(this,A7),fS(this,Te),fS(this,Ay,null),fS(this,A_,null),fS(this,Ak,null),fS(this,AA,new Set),fS(this,AT,void 0),fS(this,Aw,!1),fS(this,AI,null),fS(this,AR,()=>{let e=fI(this,AA),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));fC(this,AA,t)}),fS(this,AB,()=>{fM(this,AV,Aq).call(this),fM(this,AF,AK).call(this,!1)}),fS(this,A$,()=>{fM(this,AV,Aq).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),fC(this,AT,new MutationObserver(fI(this,AR)))}static get observedAttributes(){return[fN,fD,fx,"anchor",pg.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":fM(this,AS,AC).call(this,e);break;case"invoke":fM(this,AN,AP).call(this,e);break;case"click":fM(this,AG,Aj).call(this,e);break;case"toggle":fM(this,Az,AZ).call(this,e);break;case"focusout":fM(this,A0,A1).call(this,e);break;case"keydown":fM(this,A2,A3).call(this,e)}}connectedCallback(){var e,t;fI(this,AT).observe(this.defaultSlot,{childList:!0}),fC(this,AI,vn(this.shadowRoot,":host")),fM(this,Ax,AD).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),fC(this,Ay,p9(this)),null==(t=null==(e=fI(this,Ay))?void 0:e.associateElement)||t.call(e,this),this.hidden||(p2(fU(this),fI(this,AB)),p2(this,fI(this,A$))),fM(this,AM,AL).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;fI(this,AT).disconnect(),p3(fU(this),fI(this,AB)),p3(this,fI(this,A$)),this.disable(),null==(t=null==(e=fI(this,Ay))?void 0:e.unassociateElement)||t.call(e,this),fC(this,Ay,null),fC(this,A_,null),fC(this,Ak,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===fD&&i!==t?(fI(this,Aw)||fC(this,Aw,!0),this.hidden?fM(this,AW,AH).call(this):fM(this,AO,AU).call(this),this.dispatchEvent(new fT({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===pg.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=fI(this,Ay))?void 0:a.unassociateElement)||r.call(a,this),fC(this,Ay,null)),i&&this.isConnected&&(fC(this,Ay,p9(this)),null==(s=null==(n=fI(this,Ay))?void 0:n.associateElement)||s.call(n,this))):e===fN&&i!==t?null==i?this.enable():this.disable():e===fx&&i!==t&&fM(this,Ax,AD).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=vi(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(fO)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&fM(this,Te,Tt).call(this,t)}focus(){if(fC(this,A_,vt()),this.items.length){fM(this,A7,A6).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=fM(this,A4,A5).call(this,e);i&&(fM(this,Te,Tt).call(this,i,"checkbox"===i.type),fI(this,Ak)&&!this.hidden&&(null==(t=fI(this,A_))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=fM(this,A4,A5).call(this,e))?t:fM(this,A9,A8).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),fM(this,A7,A6).call(this,r[s]),r[s].focus()}}function fO(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function fU(e){var t;return null!=(t=e.getAttribute("bounds")?ve(e,`#${e.getAttribute("bounds")}`):p5(e)||e.parentElement)?t:e}Ay=new WeakMap,A_=new WeakMap,Ak=new WeakMap,AA=new WeakMap,AT=new WeakMap,Aw=new WeakMap,AI=new WeakMap,AS=new WeakSet,AC=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&fM(this,AM,AL).call(this),t.name||fI(this,AR).call(this)},AM=new WeakSet,AL=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},AR=new WeakMap,Ax=new WeakSet,AD=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},AN=new WeakSet,AP=function(e){fC(this,Ak,e.relatedTarget),p6(this,e.relatedTarget)||(this.hidden=!this.hidden)},AO=new WeakSet,AU=function(){var e;null==(e=fI(this,Ak))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),p2(fU(this),fI(this,AB)),p2(this,fI(this,A$))},AW=new WeakSet,AH=function(){var e;null==(e=fI(this,Ak))||e.setAttribute("aria-expanded","false"),p3(fU(this),fI(this,AB)),p3(this,fI(this,A$))},AB=new WeakMap,A$=new WeakMap,AV=new WeakSet,Aq=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(fk(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=fk(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=fU(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=fI(this,AI);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},AF=new WeakSet,AK=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=fI(this,AI);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),fM(this,AV,Aq).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),fM(this,AV,Aq).call(this);a.removeProperty("--media-menu-transition-in")},AG=new WeakSet,Aj=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(fI(this,AY,AQ))){null==(t=fI(this,A_))||t.focus(),this.hidden=!0;return}let i=fM(this,A4,A5).call(this,e);!i||i.hasAttribute("disabled")||(fM(this,A7,A6).call(this,i),this.handleSelect(e))},AY=new WeakSet,AQ=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},Az=new WeakSet,AZ=function(e){if(e.target===this)return;fM(this,AX,AJ).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new fA({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);fM(this,AF,AK).call(this,!0)},AX=new WeakSet,AJ=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},A0=new WeakSet,A1=function(e){var t;p6(this,e.relatedTarget)||(fI(this,Aw)&&(null==(t=fI(this,A_))||t.focus()),fI(this,Ak)&&fI(this,Ak)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},A2=new WeakSet,A3=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(fI(this,Aw)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=fI(this,A_))||n.focus(),fI(this,Aw)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},A4=new WeakSet,A5=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},A9=new WeakSet,A8=function(){return this.items.find(e=>0===e.tabIndex)},A7=new WeakSet,A6=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},Te=new WeakSet,Tt=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},fP.shadowRootOptions={mode:"open"},fP.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},pZ.customElements.get("media-chrome-menu")||pZ.customElements.define("media-chrome-menu",fP);var fW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fH=(e,t,i)=>(fW(e,t,"read from private field"),i?i.call(e):t.get(e)),fB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},f$=(e,t,i,a)=>(fW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),fV=(e,t,i)=>(fW(e,t,"access private method"),i);let fq="type",fF="value",fK="checked",fG="disabled";class fj extends pZ.HTMLElement{constructor(){if(super(),fB(this,Tr),fB(this,Ts),fB(this,Tl),fB(this,Tm),fB(this,Ti,!1),fB(this,Ta,void 0),fB(this,Tu,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=pX.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),fB(this,Tc,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",fH(this,Tc))}),fB(this,Th,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",fH(this,Tc)):this.addEventListener("keyup",fH(this,Tc),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=p4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[fq,fG,fK,fF]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),fY(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":fV(this,Tr,Tn).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":fH(this,Th).call(this,e);break;case"keyup":fH(this,Tc).call(this,e)}}attributeChangedCallback(e,t,i){e===fK&&fY(this)&&!fH(this,Ti)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===fq&&i!==t?this.role="menuitem"+i:e===fG&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(fG)||this.enable(),this.role="menuitem"+this.type,f$(this,Ta,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),fV(this,Tm,Tp).call(this),this.submenuElement&&fV(this,Ts,To).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),fV(this,Tm,Tp).call(this),f$(this,Ta,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=vi(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(fq))?e:""}set type(e){this.setAttribute(fq,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(fF))?e:this.text}set value(e){this.setAttribute(fF,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(fY(this))return"true"===this.getAttribute("aria-checked")}set checked(e){fY(this)&&(f$(this,Ti,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!fY(this)&&this.invokeTargetElement&&p6(this,e.target)&&this.invokeTargetElement.dispatchEvent(new fA({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function fY(e){return"radio"===e.type||"checkbox"===e.type}Ti=new WeakMap,Ta=new WeakMap,Tr=new WeakSet,Tn=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?fV(this,Ts,To).call(this):fV(this,Tl,Td).call(this))},Ts=new WeakSet,To=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",fH(this,Tu)),this.submenuElement.addEventListener("addmenuitem",fH(this,Tu)),this.submenuElement.addEventListener("removemenuitem",fH(this,Tu)),fH(this,Tu).call(this)},Tl=new WeakSet,Td=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",fH(this,Tu)),this.submenuElement.removeEventListener("addmenuitem",fH(this,Tu)),this.submenuElement.removeEventListener("removemenuitem",fH(this,Tu)),fH(this,Tu).call(this)},Tu=new WeakMap,Tc=new WeakMap,Th=new WeakMap,Tm=new WeakSet,Tp=function(){var e;let t=null==(e=fH(this,Ta))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},fj.shadowRootOptions={mode:"open"},fj.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},fj.getSuffixSlotInnerHTML=function(e){return""},pZ.customElements.get("media-chrome-menu-item")||pZ.customElements.define("media-chrome-menu-item",fj);class fQ extends fP{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:p5(this).querySelector("media-settings-menu-button")}}fQ.getTemplateHTML=function(e){return`
    ${fP.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},pZ.customElements.get("media-settings-menu")||pZ.customElements.define("media-settings-menu",fQ);class fz extends fj{}fz.shadowRootOptions={mode:"open"},fz.getTemplateHTML=function(e){return`
    ${fj.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},fz.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},pZ.customElements.get("media-settings-menu-item")||pZ.customElements.define("media-settings-menu-item",fz);class fZ extends b0{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=vi(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new fA({relatedTarget:this}))}}pZ.customElements.get("media-chrome-menu-button")||pZ.customElements.define("media-chrome-menu-button",fZ);class fX extends fZ{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",pH("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:p5(this).querySelector("media-settings-menu")}}fX.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},fX.getTooltipContentHTML=function(){return pH("Settings")},pZ.customElements.get("media-settings-menu-button")||pZ.customElements.define("media-settings-menu-button",fX);var fJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},f0=(e,t,i)=>(fJ(e,t,"read from private field"),i?i.call(e):t.get(e)),f1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},f2=(e,t,i,a)=>(fJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),f3=(e,t,i)=>(fJ(e,t,"access private method"),i);class f4 extends fP{constructor(){super(...arguments),f1(this,Tg),f1(this,Tf),f1(this,Tv,[]),f1(this,Tb,void 0)}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_AUDIO_TRACK_LIST,py.MEDIA_AUDIO_TRACK_ENABLED,py.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===py.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===py.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;f2(this,Tv,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(pD)),f3(this,Tg,TE).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",f3(this,Tf,Ty))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",f3(this,Tf,Ty))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=p5(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return f0(this,Tv)}set mediaAudioTrackList(e){f2(this,Tv,e),f3(this,Tg,TE).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=vu(this,py.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){vc(this,py.MEDIA_AUDIO_TRACK_ENABLED,e)}}Tv=new WeakMap,Tb=new WeakMap,Tg=new WeakSet,TE=function(){if(f0(this,Tb)===JSON.stringify(this.mediaAudioTrackList))return;f2(this,Tb,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=fL({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(fR(this,"checked-indicator")),this.defaultSlot.append(e)}},Tf=new WeakSet,Ty=function(){if(null==this.value)return;let e=new pZ.CustomEvent(pb.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},pZ.customElements.get("media-audio-track-menu")||pZ.customElements.define("media-audio-track-menu",f4);let f5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,f9=e=>{let t=pH("Audio");e.setAttribute("aria-label",t)};class f8 extends fZ{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_AUDIO_TRACK_ENABLED,py.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),f9(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_LANG&&f9(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=p5(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=vu(this,py.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){vc(this,py.MEDIA_AUDIO_TRACK_ENABLED,e)}}f8.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${f5}</slot>
  `},f8.getTooltipContentHTML=function(){return pH("Audio")},pZ.customElements.get("media-audio-track-menu-button")||pZ.customElements.define("media-audio-track-menu-button",f8);var f7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},f6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ye=(e,t,i)=>(f7(e,t,"access private method"),i);let yt=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class yi extends fP{constructor(){super(...arguments),f6(this,Tk),f6(this,TT),f6(this,T_,void 0)}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_SUBTITLES_LIST,py.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_SUBTITLES_LIST&&t!==i?ye(this,Tk,TA).call(this):e===py.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",ye(this,Tk,TA).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ye(this,TT,Tw))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ye(this,TT,Tw))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:p5(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return ya(this,py.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){yr(this,py.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ya(this,py.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){yr(this,py.MEDIA_SUBTITLES_SHOWING,e)}}T_=new WeakMap,Tk=new WeakSet,TA=function(){var e,t,i,a,r,n;let s=(f7(this,t=T_,"read from private field"),(i?i.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),o=this.value!==this.getAttribute(py.MEDIA_SUBTITLES_SHOWING);if(!s&&!o)return;a=T_,r=JSON.stringify(this.mediaSubtitlesList),f7(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=fL({type:"radio",text:this.formatMenuItemText(pH("Off")),value:"off",checked:l});for(let t of(d.prepend(fR(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let i=fL({type:"radio",text:this.formatMenuItemText(t.label,t),value:vB(t),checked:this.value==vB(t)});i.prepend(fR(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(fR(this,"captions-indicator")),this.defaultSlot.append(i)}},TT=new WeakSet,Tw=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(py.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new pZ.CustomEvent(pb.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new pZ.CustomEvent(pb.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},yi.getTemplateHTML=function(e){return`
    ${fP.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${yt}</slot>
  `};let ya=(e,t)=>{let i=e.getAttribute(t);return i?vW(i):[]},yr=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=v$(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};pZ.customElements.get("media-captions-menu")||pZ.customElements.define("media-captions-menu",yi);let yn=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ys=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,yo=e=>{e.setAttribute("data-captions-enabled",vK(e).toString())},yl=e=>{e.setAttribute("aria-label",pH("closed captions"))};class yd extends fZ{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_SUBTITLES_LIST,py.MEDIA_SUBTITLES_SHOWING,py.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),yl(this),yo(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_SUBTITLES_SHOWING?yo(this):e===py.MEDIA_LANG&&yl(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=p5(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return yu(this,py.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){yc(this,py.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return yu(this,py.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){yc(this,py.MEDIA_SUBTITLES_SHOWING,e)}}yd.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${yn}</slot>
      <slot name="off">${ys}</slot>
    </slot>
  `},yd.getTooltipContentHTML=function(){return pH("Captions")};let yu=(e,t)=>{let i=e.getAttribute(t);return i?vW(i):[]},yc=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=v$(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};pZ.customElements.get("media-captions-menu-button")||pZ.customElements.define("media-captions-menu-button",yd);var yh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ym=(e,t,i)=>(yh(e,t,"read from private field"),i?i.call(e):t.get(e)),yp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},yv=(e,t,i)=>(yh(e,t,"access private method"),i);let yb="rates";class yg extends fP{constructor(){super(),yp(this,TS),yp(this,TM),yp(this,TI,new vO(this,yb,{defaultValue:Et})),yv(this,TS,TC).call(this)}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_PLAYBACK_RATE,yb]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===py.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,yv(this,TS,TC).call(this)):e===yb&&t!=i&&(ym(this,TI).value=i,yv(this,TS,TC).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",yv(this,TM,TL))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",yv(this,TM,TL))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:p5(this).querySelector("media-playback-rate-menu-button")}get rates(){return ym(this,TI)}set rates(e){e?Array.isArray(e)?ym(this,TI).value=e.join(" "):"string"==typeof e&&(ym(this,TI).value=e):ym(this,TI).value="",yv(this,TS,TC).call(this)}get mediaPlaybackRate(){return vs(this,py.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){vo(this,py.MEDIA_PLAYBACK_RATE,e)}}TI=new WeakMap,TS=new WeakSet,TC=function(){this.defaultSlot.textContent="";let e=Ei(this.mediaPlaybackRate),t=new Set(Array.from(ym(this,TI)).map(e=>Ei(Number(e))));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=fL({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(fR(this,"checked-indicator")),this.defaultSlot.append(t)}},TM=new WeakSet,TL=function(){if(!this.value)return;let e=new pZ.CustomEvent(pb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},pZ.customElements.get("media-playback-rate-menu")||pZ.customElements.define("media-playback-rate-menu",yg);class yE extends fZ{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Ei(null!=(e=this.mediaPlaybackRate)?e:1)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===py.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Ei(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",pH("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:p5(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return vs(this,py.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){vo(this,py.MEDIA_PLAYBACK_RATE,e)}}yE.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?Ei(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},yE.getTooltipContentHTML=function(){return pH("Playback rate")},pZ.customElements.get("media-playback-rate-menu-button")||pZ.customElements.define("media-playback-rate-menu-button",yE);var yf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},yy=(e,t,i)=>(yf(e,t,"read from private field"),i?i.call(e):t.get(e)),y_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},yk=(e,t,i,a)=>(yf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),yA=(e,t,i)=>(yf(e,t,"access private method"),i);class yT extends fP{constructor(){super(...arguments),y_(this,TD),y_(this,TP),y_(this,TR,[]),y_(this,Tx,{})}static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_RENDITION_LIST,py.MEDIA_RENDITION_SELECTED,py.MEDIA_RENDITION_UNAVAILABLE,py.MEDIA_HEIGHT,py.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case py.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",yA(this,TD,TN).call(this);break;case py.MEDIA_RENDITION_LIST:yk(this,TR,null==i?void 0:i.split(/\s+/).map(pR)),yA(this,TD,TN).call(this);break;case py.MEDIA_HEIGHT:case py.MEDIA_WIDTH:yA(this,TD,TN).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",yA(this,TP,TO))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",yA(this,TP,TO))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:p5(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return yy(this,TR)}set mediaRenditionList(e){yk(this,TR,e),yA(this,TD,TN).call(this)}get mediaRenditionSelected(){return vu(this,py.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){vc(this,py.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return vs(this,py.MEDIA_HEIGHT)}set mediaHeight(e){vo(this,py.MEDIA_HEIGHT,e)}get mediaWidth(){return vs(this,py.MEDIA_WIDTH)}set mediaWidth(e){vo(this,py.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}TR=new WeakMap,Tx=new WeakMap,TD=new WeakSet,TN=function(){let e,t=!this.mediaRenditionSelected;if(yy(this,Tx).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&yy(this,Tx).mediaHeight===this.mediaHeight&&yy(this,Tx).mediaWidth===this.mediaWidth&&yy(this,Tx).isAuto===t)return;yy(this,Tx).mediaRenditionList=JSON.stringify(this.mediaRenditionList),yy(this,Tx).mediaHeight=this.mediaHeight,yy(this,Tx).mediaWidth=this.mediaWidth,yy(this,Tx).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=fL({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(fR(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${pH("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${pH("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(pH("Auto")));let n=fL({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(fR(this,"checked-indicator")),this.defaultSlot.append(n)},TP=new WeakSet,TO=function(){if(null==this.value)return;let e=new pZ.CustomEvent(pb.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},pZ.customElements.get("media-rendition-menu")||pZ.customElements.define("media-rendition-menu",yT);let yw=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class yI extends fZ{static get observedAttributes(){return[...super.observedAttributes,py.MEDIA_RENDITION_SELECTED,py.MEDIA_RENDITION_UNAVAILABLE,py.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",pH("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:p5(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return vu(this,py.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){vc(this,py.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return vs(this,py.MEDIA_HEIGHT)}set mediaHeight(e){vo(this,py.MEDIA_HEIGHT,e)}}yI.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${yw}</slot>
  `},yI.getTooltipContentHTML=function(){return pH("Quality")},pZ.customElements.get("media-rendition-menu-button")||pZ.customElements.define("media-rendition-menu-button",yI);var yS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},yC=(e,t,i)=>(yS(e,t,"read from private field"),i?i.call(e):t.get(e)),yM=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},yL=(e,t,i,a)=>(yS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),yR=(e,t,i)=>(yS(e,t,"access private method"),i);class yx extends fP{constructor(){super(),yM(this,TW),yM(this,TB),yM(this,TV),yM(this,TF),yM(this,Tj),yM(this,TU,!1),yM(this,TG,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=yR(this,TF,TK).call(this,t);(i||a)&&(yC(this,TU)?yR(this,TB,T$).call(this):yR(this,Tj,TY).call(this,e))}),yM(this,TQ,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=yR(this,TF,TK).call(this,t);i||a&&(r||n)||yR(this,TB,T$).call(this)}),yM(this,Tz,e=>{"Escape"===e.key&&yR(this,TB,T$).call(this)}),yM(this,TZ,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}yR(this,TB,T$).call(this)}),this.setAttribute("noautohide",""),yR(this,TW,TH).call(this)}connectedCallback(){super.connectedCallback(),p5(this).addEventListener("contextmenu",yC(this,TG)),this.addEventListener("click",yC(this,TZ))}disconnectedCallback(){super.disconnectedCallback(),p5(this).removeEventListener("contextmenu",yC(this,TG)),this.removeEventListener("click",yC(this,TZ)),document.removeEventListener("mousedown",yC(this,TQ)),document.removeEventListener("keydown",yC(this,Tz))}}TU=new WeakMap,TW=new WeakSet,TH=function(){this.hidden=!yC(this,TU)},TB=new WeakSet,T$=function(){yL(this,TU,!1),yR(this,TW,TH).call(this)},TV=new WeakSet,Tq=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&yR(e,TB,T$).call(e)})},TF=new WeakSet,TK=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},TG=new WeakMap,Tj=new WeakSet,TY=function(e){e.preventDefault(),yR(this,TV,Tq).call(this),yL(this,TU,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,yR(this,TW,TH).call(this),document.addEventListener("mousedown",yC(this,TQ),{once:!0}),document.addEventListener("keydown",yC(this,Tz),{once:!0})},TQ=new WeakMap,Tz=new WeakMap,TZ=new WeakMap,yx.getTemplateHTML=function(e){return`
      ${fP.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},pZ.customElements.get("media-context-menu")||pZ.customElements.define("media-context-menu",yx);class yD extends fj{}yD.shadowRootOptions={mode:"open"},yD.getTemplateHTML=function(e){return`
    ${fj.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},pZ.customElements.get("media-context-menu-item")||pZ.customElements.define("media-context-menu-item",yD);var yN=e=>{throw TypeError(e)},yP=(e,t,i)=>t.has(e)||yN("Cannot "+i),yO=(e,t,i)=>(yP(e,t,"read from private field"),i?i.call(e):t.get(e)),yU=(e,t,i)=>t.has(e)?yN("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),yW=(e,t,i,a)=>(yP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),yH=(e,t,i)=>(yP(e,t,"access private method"),i),yB=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends yB{}globalThis.DocumentFragment=e}var y$,yV,yq,yF,yK,yG,yj,yY,yQ,yz,yZ,yX,yJ,y0,y1,y2,y3,y4,y5,y9,y8,y7,y6,_e,_t,_i,_a,_r,_n,_s,_o,_l,_d,_u,_c,_h,_m,_p,_v,_b,_g,_E,_f,_y,__,_k,_A,_T,_w,_I,_S,_C,_M,_L,_R,_x,_D,_N,_P,_O,_U,_W,_H,_B,_$,_V,_q,_F,_K,_G,_j,_Y,_Q,_z,_Z,_X,_J,_0,_1,_2,_3,_4,_5,_9,_8,_7,_6,ke,kt,ki,ka,kr,kn,ks,ko,kl,kd,ku,kc,kh,km,kp,kv,kb,kg,kE,kf,ky,k_,kk,kA,kT,kw,kI,kS,kC,kM,kL,kR,kx,kD,kN,kP,kO,kU,kW,kH,kB,k$,kV,kq,kF,kK,kG,kj,kY,kQ,kz,kZ,kX,kJ,k0,k1,k2,k3,k4,k5,k9,k8,k7,k6,Ae,At,Ai,Aa,Ar,An,As,Ao,Al,Ad,Au,Ac,Ah,Am,Ap,Av,Ab,Ag,AE,Af,Ay,A_,Ak,AA,AT,Aw,AI,AS,AC,AM,AL,AR,Ax,AD,AN,AP,AO,AU,AW,AH,AB,A$,AV,Aq,AF,AK,AG,Aj,AY,AQ,Az,AZ,AX,AJ,A0,A1,A2,A3,A4,A5,A9,A8,A7,A6,Te,Tt,Ti,Ta,Tr,Tn,Ts,To,Tl,Td,Tu,Tc,Th,Tm,Tp,Tv,Tb,Tg,TE,Tf,Ty,T_,Tk,TA,TT,Tw,TI,TS,TC,TM,TL,TR,Tx,TD,TN,TP,TO,TU,TW,TH,TB,T$,TV,Tq,TF,TK,TG,Tj,TY,TQ,Tz,TZ,TX,TJ=class extends yB{},T0=class{constructor(e,t={}){yU(this,TX),yW(this,TX,null==t?void 0:t.detail)}get detail(){return yO(this,TX)}initCustomEvent(){}};TX=new WeakMap;var T1={document:{createElement:function(e,t){return new TJ}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(TJ)},CustomEvent:T0,EventTarget:yB,HTMLElement:TJ,HTMLVideoElement:class extends yB{}},T2="u"<typeof window||void 0===globalThis.customElements,T3=T2?T1:globalThis,T4=T2?T1.document:globalThis.document;function T5(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function T9(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function T8(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function T7(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var T6,we,wt,wi=(e,t)=>!!e&&!!t&&(!!e.contains(t)||wi(e,t.getRootNode().host)),wa="mux.com",wr=(()=>{try{return"3.13.2"}catch{}return"UNKNOWN"})(),wn=e=>{if(e){if([cS,cI].includes(e))return e;if(null!=e&&e.includes("live"))return cS}},ws={crossorigin:"crossOrigin",playsinline:"playsInline"},wo=class{constructor(e,t){yU(this,T6),yU(this,we),yU(this,wt,[]),yW(this,T6,e),yW(this,we,t)}[Symbol.iterator](){return yO(this,wt).values()}get length(){return yO(this,wt).length}get value(){var e;return null!=(e=yO(this,wt).join(" "))?e:""}set value(e){var t;e!==this.value&&(yW(this,wt,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return yO(this,wt)[e]}values(){return yO(this,wt).values()}keys(){return yO(this,wt).keys()}forEach(e){yO(this,wt).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||yO(this,wt).push(e)}),(""!==this.value||null!=(t=yO(this,T6))&&t.hasAttribute(`${yO(this,we)}`))&&null!=(i=yO(this,T6))&&i.setAttribute(`${yO(this,we)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{yO(this,wt).splice(yO(this,wt).indexOf(e),1)}),null==(t=yO(this,T6))||t.setAttribute(`${yO(this,we)}`,`${this.value}`)}contains(e){return yO(this,wt).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};T6=new WeakMap,we=new WeakMap,wt=new WeakMap;var wl=`[mux-player ${wr}]`;function wd(...e){console.warn(wl,...e)}function wu(...e){console.error(wl,...e)}function wc(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${cG("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),wd(i)}var wh={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},wm={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},wp=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),wv=[...Object.values(wh).filter(e=>wh.PLAYSINLINE!==e),...Object.values(wm)];function wb(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var wg=class extends T3.HTMLElement{static get observedAttributes(){return wv}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case wm.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case wm.VOLUME:{let e=null!=(a=T8(i))?a:1;this.media&&(this.media.volume=e);return}case wm.PLAYBACKRATE:{let e=null!=(r=T8(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:wp}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:wp}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=T8(this.getAttribute(wm.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(wm.PLAYBACKRATE,`${e}`):this.removeAttribute(wm.PLAYBACKRATE)}get crossOrigin(){return wb(this,wh.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(wh.CROSSORIGIN,`${e}`)}get autoplay(){return null!=wb(this,wh.AUTOPLAY)}set autoplay(e){e?this.setAttribute(wh.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(wh.AUTOPLAY)}get loop(){return null!=wb(this,wh.LOOP)}set loop(e){e?this.setAttribute(wh.LOOP,""):this.removeAttribute(wh.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=wb(this,wh.MUTED)}set defaultMuted(e){e?this.setAttribute(wh.MUTED,""):this.removeAttribute(wh.MUTED)}get playsInline(){return null!=wb(this,wh.PLAYSINLINE)}set playsInline(e){wu("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(wh.PRELOAD,e):this.removeAttribute(wh.PRELOAD)}},wE=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,wf=new WeakMap,wy=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=wf.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=wf.get(this.element);e&&e.delete(this.type)}}static for(t){wf.has(t.element)||wf.set(t.element,new Map);let i=t.attributeName.slice(2),a=wf.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},w_=new Map,wk=new WeakMap,wA=new WeakMap,wT=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(w_.has(this.stringsKey))return w_.get(this.stringsKey);{let e=T4.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),w_.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(wk.get(e)!==i){wk.set(e,i);let t=new E1(i,this.values,this.processor);wA.set(e,t),e instanceof E6?e.replace(...t.children):e.appendChild(t);return}let a=wA.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},ww={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof E7&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof E7){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof E7&&e.attributeName.startsWith("on")&&(wy.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof E6&&(e.replace(""),1)||t instanceof wT&&e instanceof E6&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof E6&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof E7){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function wI(e,...t){return new wT(e,t,ww)}var wS=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),wC=e=>e.charAt(0).toUpperCase()+e.slice(1),wM=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===cA.MEDIA_ERR_NETWORK)return"";if(e.code===cA.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===cA.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},wL=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,wR=T4.createElement("template");"innerHTML"in wR&&(wR.innerHTML=wL);var wx,wD,wN=class extends fy{};wN.template=null==(wD=null==(wx=wR.content)?void 0:wx.children)?void 0:wD[0],T3.customElements.get("media-theme-gerwig")||T3.customElements.define("media-theme-gerwig",wN);var wP={SRC:"src",POSTER:"poster"},wO={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},wU=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],wW=gx.formatErrorMessage;function wH(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}gx.formatErrorMessage=e=>{var t,i;if(e instanceof cA){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=wC(null!=(i=e.errorCategory)?i:"video"),n=ck(null!=(a=e.errorCategory)?a:c_);if(2000002===e.muxCode)return cG("Your device appears to be offline",t);if(2000003===e.muxCode)return cG("Reconnecting...",t);if(2403210===e.muxCode)return cG("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return cG("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return cG("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return cG("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return cG("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===cA.MEDIA_ERR_NETWORK)return cG("Network Error",t);if(e.code===cA.MEDIA_ERR_DECODE)return cG("Media Error",t);if(e.code===cA.MEDIA_ERR_SRC_NOT_SUPPORTED)return cG("Source Not Supported",t)}return cG("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(e.muxCode){let r=wC(null!=(i=e.errorCategory)?i:"video"),n=ck(null!=(a=e.errorCategory)?a:c_);return 2000002===e.muxCode?cG("Check your internet connection and try reloading this video.",t):2000003===e.muxCode?cG("Your connection was interrupted. Attempting to resume playback...",t):2403210===e.muxCode?cG("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?cG("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?cG("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?cG("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?cG("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===cA.MEDIA_ERR_NETWORK||e.code===cA.MEDIA_ERR_DECODE||e.code===cA.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${cG("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return wW(e)};var wB,w$,wV,wq,wF,wK,wG,wj,wY,wQ,wz,wZ,wX,wJ,w0,w1,w2,w3,w4,w5,w9,w8,w7,w6,Ie=Object.values(m_),It=Object.values(wP),Ii=Object.values(wO),Ia="mux-player",Ir={isDialogOpen:!1},In={redundant_streams:!0},Is=class extends wg{constructor(){super(),yU(this,w1),yU(this,wB),yU(this,w$,!1),yU(this,wV,{}),yU(this,wq,!0),yU(this,wF,new wo(this,"hotkeys")),yU(this,wK),yU(this,wG,()=>yH(this,w1,w5).call(this)),yU(this,wj,()=>yH(this,w1,w5).call(this)),yU(this,wY,()=>yH(this,w1,w5).call(this)),yU(this,wQ,e=>{e.composedPath().find(e=>{var t;return null==(t=null==e?void 0:e.hasAttribute)?void 0:t.call(e,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),yU(this,wz,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&yH(this,w1,w4).call(this,{isDialogOpen:!1})}),yU(this,wZ,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(wi(this,T4.activeElement)||e.preventDefault())}),yU(this,wX),yU(this,wJ,{...Ir}),yU(this,w0,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof cA)){let{message:e,code:t}=null!=i?i:{};i=new cA(e,t)}if(!(null!=i&&i.fatal)){wd(i),i.data&&wd(`${i.name} data:`,i.data);return}let a=wM(i,!1);a.message&&wc(a),wu(i),i.data&&wu(`${i.name} data:`,i.data),yH(this,w1,w4).call(this,{isDialogOpen:!0})}),yW(this,wB,hw()),this.attachShadow({mode:"open"}),yH(this,w1,w3).call(this),this.isConnected&&yH(this,w1,w2).call(this)}static get NAME(){return Ia}static get VERSION(){return wr}static get observedAttributes(){var e;return[...null!=(e=wg.observedAttributes)?e:[],...It,...Ie,...Ii]}setAttribute(e,t){super.setAttribute(e,t),e.startsWith("metadata-")&&this.media&&(this.media.metadata=wH(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=wH(this))}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){yH(this,w1,w2).call(this);let e=this.media;e&&(e.metadata=wH(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o,l,d;null==(e=yO(this,wK))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",yO(this,wG)),null==(i=this.media)||i.removeEventListener("loadstart",yO(this,wj)),this.removeEventListener("error",yO(this,w0)),this.removeEventListener("click",yO(this,wQ)),null==(a=this.mediaTheme)||a.removeEventListener("close",yO(this,wz)),null==(r=this.mediaTheme)||r.removeEventListener("focusin",yO(this,wZ)),this.media&&(this.media.errorTranslator=void 0),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("addtrack",yO(this,wY)),null==(l=null==(o=this.media)?void 0:o.textTracks)||l.removeEventListener("removetrack",yO(this,wY)),null==(d=yO(this,wX))||d.call(this),yW(this,wX,void 0),yW(this,w$,!1)}attributeChangedCallback(e,t,i){var a;switch(yH(this,w1,w2).call(this),super.attributeChangedCallback(e,t,i),e){case wO.HOTKEYS:yO(this,wF).value=i;break;case wO.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&wd(cG("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case wO.THUMBNAIL_TOKEN:if(i){let e=cK(i);if(e){let{aud:t}=e;"t"!==t&&wd(cG("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case wO.STORYBOARD_TOKEN:if(i){let e=cK(i);if(e){let{aud:t}=e;"s"!==t&&wd(cG("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case wO.DRM_TOKEN:if(i){let e=cK(i);if(e){let{aud:t}=e;"d"!==t&&wd(cG("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case m_.PLAYBACK_ID:null!=i&&i.includes("?token")&&wu(cG("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case m_.STREAM_TYPE:i&&![cS,cI,cC].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:wc({file:"invalid-stream-type.md",message:cG("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===cS?null==this.getAttribute(wO.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case wO.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=T4.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case m_.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0);break;case m_.MAX_RECONNECT_RETRIES:(null==i||i!==t)&&(this.maxReconnectRetries=Number(i))}[m_.PLAYBACK_ID,wP.SRC,wO.PLAYBACK_TOKEN].includes(e)&&t!==i&&yW(this,wJ,{...yO(this,wJ),...Ir}),yH(this,w1,w5).call(this,{[null!=(a=ws[e])?a:T9(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(py.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new T3.CustomEvent(pb.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(p_.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(py.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new T3.CustomEvent(pb.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(p_.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(m_.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?cR.includes(e)?this.setAttribute(m_.PREFER_CMCD,e):wd(`Invalid value for preferCmcd. Must be one of ${cR.join()}`):this.removeAttribute(m_.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(py.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(py.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(wO.THEME))?e:"gerwig"}set theme(e){this.setAttribute(wO.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(wU.includes(i))continue;let a=e.getAttribute(i);t[T9(i)]=""===a||a}return t}set themeProps(e){var t,i;yH(this,w1,w2).call(this);let a={...this.themeProps,...e};for(let r in a){if(wU.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(T5(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(T5(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(m_.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(m_.PLAYBACK_ID,e):this.removeAttribute(m_.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=Io(this,wP.SRC))?e:void 0:null!=(t=this.getAttribute(wP.SRC))?t:void 0}set src(e){e?this.setAttribute(wP.SRC,e):this.removeAttribute(wP.SRC)}get poster(){var e;let t=this.getAttribute(wP.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void wd("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=wa,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=cK(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${T7({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(wP.POSTER,e):this.removeAttribute(wP.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(wO.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(wO.STORYBOARD_SRC,e):this.removeAttribute(wO.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[cS,cC].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=wa,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=cK(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${T7({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(wO.AUDIO)}set audio(e){e?this.setAttribute(wO.AUDIO,""):this.removeAttribute(wO.AUDIO)}get hotkeys(){return yO(this,wF)}get nohotkeys(){return this.hasAttribute(wO.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(wO.NOHOTKEYS,""):this.removeAttribute(wO.NOHOTKEYS)}get thumbnailTime(){return T8(this.getAttribute(wO.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(wO.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(wO.VIDEO_TITLE))?e:this.getAttribute(wO.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(wO.VIDEO_TITLE,e):this.removeAttribute(wO.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=Io(this,wO.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(wO.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(wO.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=T3.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(wO.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(wO.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=T3.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(wO.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(wO.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=T3.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(wO.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(wO.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(wO.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(wO.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(wO.PLAYBACK_RATES))return this.getAttribute(wO.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(wO.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(wO.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=T8(this.getAttribute(wO.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(wO.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=T8(this.getAttribute(wO.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(wO.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(wO.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(wO.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(wO.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return T8(this.getAttribute(wO.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(wO.DEFAULT_DURATION):this.setAttribute(wO.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(m_.PLAYER_INIT_TIME)?T8(this.getAttribute(m_.PLAYER_INIT_TIME)):yO(this,wB)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(m_.PLAYER_INIT_TIME):this.setAttribute(m_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(m_.PLAYER_SOFTWARE_NAME))?e:Ia}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(m_.PLAYER_SOFTWARE_VERSION))?e:wr}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(m_.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(m_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(m_.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(m_.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(m_.MAX_RESOLUTION,e):this.removeAttribute(m_.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(m_.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(m_.MIN_RESOLUTION,e):this.removeAttribute(m_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(m_.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(m_.MAX_AUTO_RESOLUTION):this.setAttribute(m_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(m_.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(m_.RENDITION_ORDER,e):this.removeAttribute(m_.RENDITION_ORDER))}get programStartTime(){return T8(this.getAttribute(m_.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(m_.PROGRAM_START_TIME):this.setAttribute(m_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return T8(this.getAttribute(m_.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(m_.PROGRAM_END_TIME):this.setAttribute(m_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return T8(this.getAttribute(m_.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(m_.ASSET_START_TIME):this.setAttribute(m_.ASSET_START_TIME,`${e}`)}get assetEndTime(){return T8(this.getAttribute(m_.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(m_.ASSET_END_TIME):this.setAttribute(m_.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(wO.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(wO.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):In}set extraSourceParams(e){null==e?this.removeAttribute(wO.EXTRA_SOURCE_PARAMS):this.setAttribute(wO.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(m_.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(m_.CUSTOM_DOMAIN,e):this.removeAttribute(m_.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=Io(this,m_.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(m_.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(wO.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(wO.NO_VOLUME_PREF,""):this.removeAttribute(wO.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(wO.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(wO.NO_MUTED_PREF,""):this.removeAttribute(wO.NO_MUTED_PREF)}get debug(){return null!=Io(this,m_.DEBUG)}set debug(e){e?this.setAttribute(m_.DEBUG,""):this.removeAttribute(m_.DEBUG)}get disableTracking(){return null!=Io(this,m_.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(m_.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=Io(this,m_.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(m_.DISABLE_COOKIES,""):this.removeAttribute(m_.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(m_.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:cC}set streamType(e){this.setAttribute(m_.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(wO.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(wO.DEFAULT_STREAM_TYPE))?i:cI}set defaultStreamType(e){e?this.setAttribute(wO.DEFAULT_STREAM_TYPE,e):this.removeAttribute(wO.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(wO.TARGET_LIVE_WINDOW)?+this.getAttribute(wO.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(wO.TARGET_LIVE_WINDOW):this.setAttribute(wO.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return T8(Io(this,m_.START_TIME))}set startTime(e){this.setAttribute(m_.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return T8(Io(this,m_.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(m_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(m_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return T8(Io(this,m_.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(m_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(m_.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return T8(Io(this,m_.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(m_.MIN_PRELOAD_SEGMENTS):this.setAttribute(m_.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(m_.PREFER_PLAYBACK);if("mse"===e||e===cM)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===cM?this.setAttribute(m_.PREFER_PLAYBACK,e):this.removeAttribute(m_.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(yH(this,w1,w2).call(this),this.media)?this.media.metadata={...wH(this),...e}:wu("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(yH(this,w1,w2).call(this),this.media)?this.media._hlsConfig=e:wu("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(yH(this,w1,w2).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void wu("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(yH(this,w1,w2).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void wu("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(wO.PLAYBACK_TOKEN),t=this.getAttribute(wO.DRM_TOKEN),i=this.getAttribute(wO.THUMBNAIL_TOKEN),a=this.getAttribute(wO.STORYBOARD_TOKEN);return{...yO(this,wV),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){yW(this,wV,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(wO.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(wO.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(wO.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(wO.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(wO.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(wO.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(wO.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(wO.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return cX(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(wO.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(wO.CAST_RECEIVER,e):this.removeAttribute(wO.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:wu("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(wO.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(wO.NO_TOOLTIPS,""):this.removeAttribute(wO.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(wO.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(wO.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(wO.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:wu("underlying media element missing when trying to set capRenditionToPlayerSize")}get maxReconnectRetries(){var e;return null==(e=this.media)?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){this.media?this.media.maxReconnectRetries=e:wu("underlying media element missing when trying to set maxReconnectRetries")}};function Io(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}wB=new WeakMap,w$=new WeakMap,wV=new WeakMap,wq=new WeakMap,wF=new WeakMap,wK=new WeakMap,wG=new WeakMap,wj=new WeakMap,wY=new WeakMap,wQ=new WeakMap,wz=new WeakMap,wZ=new WeakMap,wX=new WeakMap,wJ=new WeakMap,w0=new WeakMap,w1=new WeakSet,w2=function(){var e,t,i,a;if(!yO(this,w$)){yW(this,w$,!0),yH(this,w1,w5).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof T3.HTMLElement))throw""}catch{wu("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{wu("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof bD))throw""}catch{wu("<media-controller> failed to upgrade!")}yH(this,w1,w9).call(this),yH(this,w1,w8).call(this),yH(this,w1,w7).call(this),yW(this,wq,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(vS))||t),yH(this,w1,w6).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",yO(this,wG)),null==(a=this.media)||a.addEventListener("loadstart",yO(this,wj)),this.media&&(this.media.metadata=wH(this))}},w3=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},w4=function(e){Object.assign(yO(this,wJ),e),yH(this,w1,w5).call(this)},w5=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,g,E,f,y,k,A,T,w,I,S,C,M,L,R,x,D,N,P,O,U,W,H,B,$,V,q,F,K,G,j,Y,Q,z,Z,X;let J,ee,et,ei;t={...yO(this,wJ),...e},J={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(wO.STORYBOARD_SRC),fullscreenElement:this.getAttribute(wO.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=T3.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(wO.NOHOTKEYS),hotKeys:this.getAttribute(wO.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(m_.TARGET_LIVE_WINDOW),streamType:wn(this.getAttribute(m_.STREAM_TYPE)),primaryColor:this.getAttribute(wO.PRIMARY_COLOR),secondaryColor:this.getAttribute(wO.SECONDARY_COLOR),accentColor:this.getAttribute(wO.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(ee=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(ee).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(wO.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(m_.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(wO.TITLE),videoTitle:null!=(r=this.getAttribute(wO.VIDEO_TITLE))?r:this.getAttribute(wO.TITLE),novolumepref:this.hasAttribute(wO.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(wO.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(wO.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(wO.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=wI`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(J)}
    ${wE}
  </style>
  ${l=J,wI`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${et=l.hotKeys?`${l.hotKeys}`:"","live"===wn(l.streamType)&&(et+=" noarrowleft noarrowright"),et||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(cS))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(X={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},ei="",Object.entries(X).forEach(([e,t])=>{null!=t&&(ei+=`${T5(e)}: ${t}; `)}),h=ei?ei.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(v=l.playbackRates)&&v}"
    defaultshowremainingtime="${null!=(b=l.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(E=l.hideDuration)&&E}"
    title="${null!=(f=l.title)&&f}"
    videotitle="${null!=(y=l.videoTitle)&&y}"
    proudlydisplaymuxbadge="${null!=(k=l.proudlyDisplayMuxBadge)&&k}"
    exportparts="${wS}"
  >
    <mux-video
      slot="media"
      inert="${null!=(A=l.noHotKeys)&&A}"
      target-live-window="${null!=(T=l.targetLiveWindow)&&T}"
      stream-type="${null!=(w=wn(l.streamType))&&w}"
      crossorigin="${null!=(I=l.crossOrigin)?I:""}"
      playsinline
      autoplay="${null!=(S=l.autoplay)&&S}"
      muted="${null!=(C=l.muted)&&C}"
      loop="${null!=(M=l.loop)&&M}"
      preload="${null!=(L=l.preload)&&L}"
      debug="${null!=(R=l.debug)&&R}"
      prefer-cmcd="${null!=(x=l.preferCmcd)&&x}"
      disable-tracking="${null!=(D=l.disableTracking)&&D}"
      disable-cookies="${null!=(N=l.disableCookies)&&N}"
      prefer-playback="${null!=(P=l.preferPlayback)&&P}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(O=l.beaconCollectionDomain)&&O}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(W=l.playerSoftwareName)&&W}"
      player-software-version="${null!=(H=l.playerSoftwareVersion)&&H}"
      env-key="${null!=(B=l.envKey)&&B}"
      custom-domain="${null!=($=l.customDomain)&&$}"
      src="${l.src?l.src:!!l.playbackId&&hS(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&hS(l)}"
      cast-receiver="${null!=(V=l.castReceiver)&&V}"
      drm-token="${null!=(F=null==(q=l.tokens)?void 0:q.drm)&&F}"
      playback-token="${null!=(G=null==(K=l.tokens)?void 0:K.playback)&&G}"
      exportparts="video"
      disable-pseudo-ended="${null!=(j=l.disablePseudoEnded)&&j}"
      max-reconnect-retries="${null!=(Y=l.maxReconnectRetries)&&Y}"
      max-auto-resolution="${null!=(Q=l.maxAutoResolution)&&Q}"
      cap-rendition-to-player-size="${null!=(z=l.capRenditionToPlayerSize)&&z}"
    >
      ${l.storyboard?wI`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:wI``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(Z=l.placeholder)&&Z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},w9=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(wU.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};yW(this,wK,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),yO(this,wK).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},w8=function(){var e,t;this.addEventListener("error",yO(this,w0)),this.addEventListener("click",yO(this,wQ)),null==(e=this.mediaTheme)||e.addEventListener("close",yO(this,wz)),null==(t=this.mediaTheme)||t.addEventListener("focusin",yO(this,wZ)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof cA))return e;let r=wM(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},w7=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",yO(this,wY)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",yO(this,wY))},w6=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===cS&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===cS&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(vS))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,yO(this,wq))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(vS))||t;yO(this,wq)!==a&&(yW(this,wq,a),n(i,yO(this,wq)))};this.addEventListener("userinactivechange",l),yW(this,wX,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};var Il=e=>{throw TypeError(e)},Id=(e,t,i)=>t.has(e)||Il("Cannot "+i),Iu=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends Iu{}globalThis.DocumentFragment=e}var Ic,Ih=class extends Iu{},Im=class{constructor(e,t={}){((e,t,i)=>t.has(e)?Il("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,Ic),((e,t,i,a)=>(Id(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,Ic,null==t?void 0:t.detail)}get detail(){let e,t;return Id(this,e=Ic,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};Ic=new WeakMap;var Ip={document:{createElement:function(e,t){return new Ih}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(Ih)},CustomEvent:Im,EventTarget:Iu,HTMLElement:Ih,HTMLVideoElement:class extends Iu{}},Iv="u"<typeof window||void 0===globalThis.customElements,Ib=Iv?Ip:globalThis;Iv&&Ip.document,Ib.customElements.get("mux-player")||(Ib.customElements.define("mux-player",Is),Ib.MuxPlayerElement=Is);var Ig=parseInt(ny.version)>=19,IE={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function If(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var Iy=Object.prototype.hasOwnProperty,I_=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!Iy.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),Ik=(e,t,i)=>{e[i]=t},IA=(e,t,i,a=Ik,r=I_)=>(0,ny.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),IT=(()=>{try{return"3.13.2"}catch{}return"UNKNOWN"})(),Iw=(e,t,i)=>(0,ny.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),II=ny.forwardRef(({children:e,...t},i)=>ny.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!Ig&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=IE)&&i in a)return IE[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=Ig||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),IS=ny.forwardRef((e,t)=>{var i;let a=(0,ny.useRef)(null),r=function(...e){return ny.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=If(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():If(e[t],null)}}}}(...e),e)}(a,t),[n]=((e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:g,onPause:E,onSeeking:f,onSeeked:y,onStalled:k,onSuspend:A,onEnded:T,onError:w,onCuePointChange:I,onChapterChange:S,metadata:C,tokens:M,paused:L,playbackId:R,playbackRates:x,currentTime:D,themeProps:N,extraSourceParams:P,castCustomData:O,_hlsConfig:U,...W}=t;return IA("tokens",M,e),IA("playbackId",R,e),IA("playbackRates",x,e),IA("metadata",C,e),IA("extraSourceParams",P,e),IA("_hlsConfig",U,e),IA("themeProps",N,e),IA("castCustomData",O,e),IA("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&I_(e,t,i)),IA("currentTime",D,e,(e,t)=>{null!=t&&(e.currentTime=t)}),Iw("abort",e,i),Iw("canplay",e,a),Iw("canplaythrough",e,r),Iw("emptied",e,n),Iw("loadstart",e,s),Iw("loadeddata",e,o),Iw("loadedmetadata",e,l),Iw("progress",e,d),Iw("durationchange",e,u),Iw("volumechange",e,c),Iw("ratechange",e,h),Iw("resize",e,m),Iw("waiting",e,p),Iw("play",e,v),Iw("playing",e,b),Iw("timeupdate",e,g),Iw("pause",e,E),Iw("seeking",e,f),Iw("seeked",e,y),Iw("stalled",e,k),Iw("suspend",e,A),Iw("ended",e,T),Iw("error",e,w),Iw("cuepointchange",e,I),Iw("chapterchange",e,S),[W]})(a,e),[s]=(0,ny.useState)(null!=(i=e.playerInitTime)?i:hw());return ny.createElement(II,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:IT,playerInitTime:s,...n})});function IC(e){let t,i,a=(0,d.c)(5),{customDomain:r,playbackId:n,tokens:s}=e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"absolute",inset:0},a[0]=t):t=a[0],a[1]!==r||a[2]!==n||a[3]!==s?(i=(0,l.jsx)(IS,{customDomain:r,theme:"sutro",playbackId:n,tokens:s,autoPlay:!1,loop:!1,style:t}),a[1]=r,a[2]=n,a[3]=s,a[4]=i):i=a[4],i}}}]);