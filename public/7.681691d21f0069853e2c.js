(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{V1Zt:function(e,t,i){"use strict";i.r(t),i.d(t,"ArcadeModule",function(){return ae});var a=i("ofXK"),s=i("tyNb"),n=i("mrSG"),r=i("qzk7"),o=i("fXoL"),c=i("XNiG"),h=i("2Vo4"),l=i("LRne"),d=i("HDdC"),y=i("DH7j"),u=i("n6bG"),p=i("lJxs");function b(e,t,i){return i?b(e,t).pipe(Object(p.a)(e=>Object(y.a)(e)?i(...e):i(e))):new d.a(i=>{const a=(...e)=>i.next(1===e.length?e[0]:e);let s;try{s=e(a)}catch(n){return void i.error(n)}if(Object(u.a)(t))return()=>t(a,s)})}var g=i("itXk"),_=i("mCNh"),f=i("VRyK"),v=i("IzEk"),m=i("JX91"),w=i("vkgz"),S=i("zx2A");function P(e){return t=>t.lift(new k(e))}class k{constructor(e){this.notifier=e}call(e,t){const i=new C(e),a=Object(S.c)(this.notifier,new S.a(i));return a&&!i.seenValue?(i.add(a),t.subscribe(i)):i}}class C extends S.b{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var j=i("oB13"),O=i("eIep"),V=i("5+tZ"),x=i("l7GE"),I=i("ZUHj");function R(...e){return t=>{let i;return"function"==typeof e[e.length-1]&&(i=e.pop()),t.lift(new L(e,i))}}class L{constructor(e,t){this.observables=e,this.project=t}call(e,t){return t.subscribe(new E(e,this.observables,this.project))}}class E extends x.a{constructor(e,t,i){super(e),this.observables=t,this.project=i,this.toRespond=[];const a=t.length;this.values=new Array(a);for(let s=0;s<a;s++)this.toRespond.push(s);for(let s=0;s<a;s++){let e=t[s];this.add(Object(I.a)(this,e,void 0,s))}}notifyNext(e,t,i){this.values[i]=t;const a=this.toRespond;if(a.length>0){const e=a.indexOf(i);-1!==e&&a.splice(e,1)}}notifyComplete(){}_next(e){if(0===this.toRespond.length){const t=[e,...this.values];this.project?this._tryProject(t):this.destination.next(t)}}_tryProject(e){let t;try{t=this.project.apply(this,e)}catch(i){return void this.destination.error(i)}this.destination.next(t)}}var D=i("Kqap"),M=i("7o/Q");class A{constructor(e,t){this.compare=e,this.keySelector=t}call(e,t){return t.subscribe(new Q(e,this.compare,this.keySelector))}}class Q extends M.a{constructor(e,t,i){super(e),this.keySelector=i,this.hasKey=!1,"function"==typeof t&&(this.compare=t)}compare(e,t){return e===t}_next(e){let t;try{const{keySelector:i}=this;t=i?i(e):e}catch(a){return this.destination.error(a)}let i=!1;if(this.hasKey)try{const{compare:e}=this;i=e(this.key,t)}catch(a){return this.destination.error(a)}else this.hasKey=!0;i||(this.key=t,this.destination.next(e))}}var T=i("Cfvw");class F{constructor(e){this.predicate=e}call(e,t){return t.subscribe(new z(e,this.predicate))}}class z extends M.a{constructor(e,t){super(e),this.predicate=t,this.skipping=!0,this.index=0}_next(e){const t=this.destination;this.skipping&&this.tryCallPredicate(e),this.skipping||t.next(e)}tryCallPredicate(e){try{const t=this.predicate(e,this.index++);this.skipping=Boolean(t)}catch(t){this.destination.error(t)}}}var K=i("pLZG");const Z=["youtubeContainer"];let Y=(()=>{class e{constructor(e,t){this._ngZone=e,this._youtubeContainer=new c.a,this._destroyed=new c.a,this._playerChanges=new h.a(void 0),this._videoId=new h.a(void 0),this._height=new h.a(390),this._width=new h.a(640),this._startSeconds=new h.a(void 0),this._endSeconds=new h.a(void 0),this._suggestedQuality=new h.a(void 0),this._playerVars=new h.a(void 0),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=Object(a.n)(t)}get videoId(){return this._videoId.value}set videoId(e){this._videoId.next(e)}get height(){return this._height.value}set height(e){this._height.next(e||390)}get width(){return this._width.value}set width(e){this._width.next(e||640)}set startSeconds(e){this._startSeconds.next(e)}set endSeconds(e){this._endSeconds.next(e)}set suggestedQuality(e){this._suggestedQuality.next(e)}get playerVars(){return this._playerVars.value}set playerVars(e){this._playerVars.next(e)}ngOnInit(){if(!this._isBrowser)return;let e=Object(l.a)(!0);if(!window.YT||!window.YT.Player){const t=new c.a;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>t.next(!0))},e=t.pipe(Object(v.a)(1),Object(m.a)(!1))}const t=function(e,t,i,a,s,n,r){const o=Object(g.b)([t,n]).pipe(R(Object(g.b)([a,s])),Object(p.a)(([e,t])=>{const[i,a]=e,[s,n]=t;return i?{videoId:i,playerVars:a,width:s,height:n}:void 0}));return Object(g.b)([e,o,Object(l.a)(r)]).pipe((c=i,Object(_.a)(function(...e){let t=null;return"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&Object(y.a)(e[0])&&(e=e[0].slice()),i=>i.lift.call(Object(T.a)([i,...e]),new g.a(t))}(c),(h=([e,t])=>!t,e=>e.lift(new F(h))),Object(p.a)(([e])=>e))),Object(D.a)(B,void 0),e=>e.lift(new A(void 0,void 0)));var c,h}(this._youtubeContainer,this._videoId,e,this._width,this._height,this._playerVars,this._ngZone).pipe(Object(w.a)(e=>{this._playerChanges.next(e)}),(i=e=>{G(e)||e.destroy()},Object(V.a)(e=>e?G(e)?Object(l.a)(e):new d.a(t=>{let a=!1,s=!1;const n=e=>{s=!0,a||(e.target.removeEventListener("onReady",n),t.next(e.target))};return e.addEventListener("onReady",n),()=>{a=!0,s||i(e)}}).pipe(Object(v.a)(1),Object(m.a)(void 0)):Object(l.a)(void 0))),P(this._destroyed),Object(j.a)(new c.a));var i;t.subscribe(e=>{this._player=e,e&&this._pendingPlayerState&&this._initializePlayer(e,this._pendingPlayerState),this._pendingPlayerState=void 0}),function(e,t,i){Object(g.b)([e,t,i]).subscribe(([e,t,i])=>e&&e.setSize(t,i))}(t,this._width,this._height),function(e,t){Object(g.b)([e,t]).subscribe(([e,t])=>e&&t&&e.setPlaybackQuality(t))}(t,this._suggestedQuality),function(e,t,i,a,s,n){const r=Object(g.b)([i,a]).pipe(Object(p.a)(([e,t])=>({startSeconds:e,endSeconds:t}))),o=r.pipe(N(e,e=>!!e&&!function(e){const t=e.getPlayerState();return-1!==t&&5!==t}(e))),c=t.pipe(N(e,(e,t)=>!!e&&e.videoId!==t)),h=e.pipe(N(Object(g.b)([t,r]),([e,t],i)=>!(!i||e==i.videoId&&!t.startSeconds&&!t.endSeconds)));Object(f.a)(h,c,o).pipe(R(Object(g.b)([e,t,r,s])),Object(p.a)(([e,t])=>t),P(n)).subscribe(([e,t,i,a])=>{t&&e&&(e.videoId=t,e.cueVideoById(Object.assign({videoId:t,suggestedQuality:a},i)))})}(t,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),t.connect()}createEventsBoundInZone(){return{}}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=1}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=2}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=5}seekTo(e,t){this._player?this._player.seekTo(e,t):this._getPendingState().seek={seconds:e,allowSeekAhead:t}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:-1}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(e,t){const{playbackState:i,playbackRate:a,volume:s,muted:n,seek:r}=t;switch(i){case 1:e.playVideo();break;case 2:e.pauseVideo();break;case 5:e.stopVideo()}null!=a&&e.setPlaybackRate(a),null!=s&&e.setVolume(s),null!=n&&(n?e.mute():e.unMute()),null!=r&&e.seekTo(r.seconds,r.allowSeekAhead)}_getLazyEmitter(e){return this._playerChanges.pipe(Object(O.a)(t=>t?b(i=>{t.addEventListener(e,i)},i=>{try{t.removeEventListener&&t.removeEventListener(e,i)}catch(a){}}):Object(l.a)()),e=>new d.a(t=>e.subscribe({next:e=>this._ngZone.run(()=>t.next(e)),error:e=>t.error(e),complete:()=>t.complete()})),P(this._destroyed))}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(o.z),o.Ib(o.B))},e.\u0275cmp=o.Cb({type:e,selectors:[["youtube-player"]],viewQuery:function(e,t){if(1&e&&o.hc(Z,!0),2&e){let e;o.Zb(e=o.Tb())&&(t.youtubeContainer=e.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,t){1&e&&o.Jb(0,"div",null,0)},encapsulation:2,changeDetection:0}),e})();function B(e,[t,i,a]){if(e&&i&&e.playerVars!==i.playerVars)e.destroy();else{if(!i)return void(e&&e.destroy());if(e)return e}const s=a.runOutsideAngular(()=>new YT.Player(t,i));return s.videoId=i.videoId,s.playerVars=i.playerVars,s}function G(e){return"getPlayerStatus"in e}function N(e,t){return Object(_.a)(R(e),Object(K.a)(([e,i])=>t(i,e)),Object(p.a)(([e])=>e))}let U=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)}}),e})();var J=i("Xa2L");const X=["video"],H=["canvas"],q=["youtube"];function W(e,t){1&e&&o.Jb(0,"mat-spinner")}function $(e,t){1&e&&(o.Lb(0,"h1"),o.fc(1,"Hai perso, hai sorriso!"),o.Kb())}let ee=!1;const te=[{path:"",component:(()=>{class e{constructor(e){this.cdr=e,this.faceMissingDetection=0,this.faceDetected=!1,this.faceHappy=!1,this.loseMatch=!1,this.happy=0,this.playerVars={autoplay:0,controls:0,showinfo:0,modestbranding:1,rel:0},this.loading=!1}ngOnInit(){if(!ee){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e),ee=!0}}ngOnDestroy(){this.stream&&this.stream.getTracks().forEach(e=>e.stop())}ngAfterViewInit(){}onStateChange(e){console.log("onStateChange",e)}onReady(e){console.log("onReady",e),this.run()}run(){return Object(n.a)(this,void 0,void 0,function*(){const e=(document.getElementsByTagName("base")[0]||{}).href;let t="/assets/weights/";e&&(t=e+t.substring(1)),this.loading=!0,this.cdr.detectChanges(),yield Promise.all([r.e.tinyFaceDetector.loadFromUri(t),r.e.faceRecognitionNet.loadFromUri(t),r.e.faceExpressionNet.loadFromUri(t)]),this.loading=!1,this.cdr.detectChanges(),this.stream=yield navigator.mediaDevices.getUserMedia({video:{}}),this.video.nativeElement.srcObject=this.stream})}onPlay(){return Object(n.a)(this,void 0,void 0,function*(){const e=this.video.nativeElement,t=this.canvas.nativeElement;if(this.manageDetectionState(),e.paused||e.ended||!r.e.tinyFaceDetector.params)return this.faceMissingDetection++,requestAnimationFrame(()=>this.onPlay());const i=yield r.b(e,new r.a).withFaceExpressions();if(i){t.style.display="block";const a=r.d(t,e,!0),s=r.f(i,a),n=.05;if(r.c.drawDetections(t,s),r.c.drawFaceExpressions(t,s,n),this.faceMissingDetection=0,this.happy=i.expressions.happy,this.happy>.8)return void this.loseGame()}else t.style.display="none",this.faceMissingDetection++,this.happy=0;requestAnimationFrame(()=>this.onPlay())})}manageDetectionState(){const e=this.faceMissingDetection<50;this.faceDetected!==e&&(this.faceDetected=e,this.faceDetected?this.youtube.playVideo():this.youtube.pauseVideo(),this.cdr.markForCheck())}loseGame(){this.loseMatch&&(this.loseMatch=!0,this.video.nativeElement.pause(),this.youtube.pauseVideo(),this.cdr.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(o.h))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-arcade"]],viewQuery:function(e,t){if(1&e&&(o.hc(X,!0),o.hc(H,!0),o.hc(q,!0)),2&e){let e;o.Zb(e=o.Tb())&&(t.video=e.first),o.Zb(e=o.Tb())&&(t.canvas=e.first),o.Zb(e=o.Tb())&&(t.youtube=e.first)}},decls:17,vars:8,consts:[[4,"ngIf"],[3,"hidden"],["videoId","FFLTU9eIijw",3,"playerVars","ready","stateChange"],["youtube",""],[1,"video-container",3,"hidden"],["autoplay","","muted","","playsinline","",3,"loadedmetadata"],["video",""],["canvas",""]],template:function(e,t){1&e&&(o.ec(0,W,1,0,"mat-spinner",0),o.ec(1,$,2,0,"h1",0),o.Lb(2,"ul"),o.Lb(3,"li"),o.fc(4),o.Kb(),o.Lb(5,"li"),o.fc(6),o.Kb(),o.Lb(7,"li"),o.fc(8),o.Kb(),o.Kb(),o.Lb(9,"div",1),o.Lb(10,"youtube-player",2,3),o.Sb("ready",function(e){return t.onReady(e)})("stateChange",function(e){return t.onStateChange(e)}),o.Kb(),o.Kb(),o.Lb(12,"div",4),o.Lb(13,"video",5,6),o.Sb("loadedmetadata",function(){return t.onPlay()}),o.Kb(),o.Jb(15,"canvas",null,7),o.Kb()),2&e&&(o.Yb("ngIf",t.loading),o.yb(1),o.Yb("ngIf",t.loseMatch),o.yb(3),o.gc("faceDetected: ",t.faceDetected,""),o.yb(2),o.gc("loseMatch: ",t.loseMatch,""),o.yb(2),o.gc("happy: ",t.happy,""),o.yb(1),o.Yb("hidden",!t.faceDetected||t.loseMatch),o.yb(1),o.Yb("playerVars",t.playerVars),o.yb(2),o.Yb("hidden",t.faceDetected&&!t.loseMatch))},directives:[a.h,Y,J.c],styles:[".video-container[_ngcontent-%COMP%]{position:relative}.video-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{position:absolute;top:0;left:0}"]}),e})()}];let ie=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[s.b.forChild(te)],s.b]}),e})(),ae=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[a.b,ie,J.b,U]]}),e})()}}]);