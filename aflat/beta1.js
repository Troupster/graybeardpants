(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 30,
	color: "#E6DFC3",
	webfonts: {},
	manifest: [
		{src:"sounds/boing4.mp3", id:"boing4"},
		{src:"sounds/boing1.mp3", id:"boing1"},
		{src:"sounds/boing2.mp3", id:"boing2"},
		{src:"sounds/boing3.mp3", id:"boing3"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ass = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.embly = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.face_color = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flat = function() {
	this.spriteSheet = ss["beta1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbCHIAAgSIBaAAIAAASgAh0CHIAAgSIBaAAIAAASgAAtBjIAAgSIA2AAIAAASgAh0BjIAAgSIBaAAIAAASgAAbA/IAAgSIA2AAIAAASgAhiA/IAAgSIA2AAIAAASgAhiAbIAAgTIChAAIAAATgAhigIIAAgSIChAAIAAASgAAbgsIAAgSIA2AAIAAASgAhigsIAAgSIA2AAIAAASgAAthQIAAgSIA2AAIAAASgAh0hQIAAgSIBaAAIAAASgAAbh0IAAgTIBaAAIAAATgAh0h0IAAgTIBaAAIAAATg");
	this.shape.setTransform(331,52.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsCHIAAgSIBZAAIAAASgAgsBjIAAgSIBZAAIAAASgAgaA/IAAgSIA1AAIAAASgAgaAbIAAgTIA1AAIAAATgAgagIIAAgSIA1AAIAAASgAgagsIAAgSIA1AAIAAASgAgshQIAAgSIBZAAIAAASgAgsh0IAAgTIBZAAIAAATg");
	this.shape_1.setTransform(309.2,52.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsCHIAAgSIBZAAIAAASgAg+BjIAAgSIB9AAIAAASgAAJA/IAAgSIA2AAIAAASgAg+A/IAAgSIA3AAIAAASgAAbAbIAAgTIA2AAIAAATgAhQAbIAAgTIA2AAIAAATgAAbgIIAAgSIA2AAIAAASgAhQgIIAAgSIA2AAIAAASgAAtgsIAAgSIA2AAIAAASgAhigsIAAgSIA2AAIAAASgAAthQIAAgSIA2AAIAAASgAhihQIAAgSIA2AAIAAASgAAbh0IAAgTIBaAAIAAATgAh0h0IAAgTIBaAAIAAATg");
	this.shape_2.setTransform(287.5,52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhZCHIAAgSICzAAIAAASgAhZBjIAAgSICzAAIAAASgAhHA/IAAgSIA2AAIAAASgAhHAbIAAgTICPAAIAAATgAhHgIIAAgSICPAAIAAASgAhHgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhZh0IAAgTICzAAIAAATg");
	this.shape_3.setTransform(261.2,52.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbCHIAAgSIBaAAIAAASgAh0CHIAAgSIBaAAIAAASgAAbBjIAAgSIBaAAIAAASgAh0BjIAAgSIBaAAIAAASgAAtA/IAAgSIA2AAIAAASgAhiA/IAAgSIA2AAIAAASgAhiAbIAAgTICzAAIAAATgAhigIIAAgSICzAAIAAASgAAtgsIAAgSIA2AAIAAASgAhigsIAAgSIA2AAIAAASgAh0hQIAAgSIDXAAIAAASgAh0h0IAAgTIDFAAIAAATg");
	this.shape_4.setTransform(234.9,52.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZCHIAAgSIChAAIAAASgAhZBjIAAgSICzAAIAAASgAAkA/IAAgSIA2AAIAAASgAhHA/IAAgSIA2AAIAAASgAhHAbIAAgTICPAAIAAATgAhHgIIAAgSICPAAIAAASgAAkgsIAAgSIA2AAIAAASgAhHgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhZh0IAAgTIChAAIAAATg");
	this.shape_5.setTransform(208.7,52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhZCHIAAgSIChAAIAAASgAhHBjIAAgSIChAAIAAASgAAkA/IAAgSIA2AAIAAASgAhHA/IAAgSIA2AAIAAASgAAkAbIAAgTIA2AAIAAATgAhHAbIAAgTIA2AAIAAATgAAkgIIAAgSIA2AAIAAASgAhHgIIAAgSIA2AAIAAASgAAkgsIAAgSIA2AAIAAASgAhHgsIAAgSIA2AAIAAASgAhHhQIAAgSIChAAIAAASgAhZh0IAAgTIChAAIAAATg");
	this.shape_6.setTransform(172.4,52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsCHIAAgSIBZAAIAAASgAgsBjIAAgSIBZAAIAAASgAgaA/IAAgSIA1AAIAAASgAgaAbIAAgTIA1AAIAAATgAgagIIAAgSIA1AAIAAASgAgagsIAAgSIA1AAIAAASgAgshQIAAgSIBZAAIAAASgAgsh0IAAgTIBZAAIAAATg");
	this.shape_7.setTransform(153.4,52.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsCHIAAgSIBZAAIAAASgAg+BjIAAgSIB9AAIAAASgAAJA/IAAgSIA2AAIAAASgAg+A/IAAgSIA3AAIAAASgAAbAbIAAgTIA2AAIAAATgAhQAbIAAgTIA2AAIAAATgAAbgIIAAgSIA2AAIAAASgAhQgIIAAgSIA2AAIAAASgAAtgsIAAgSIA2AAIAAASgAhigsIAAgSIA2AAIAAASgAAthQIAAgSIA2AAIAAASgAhihQIAAgSIA2AAIAAASgAAbh0IAAgTIBaAAIAAATgAh0h0IAAgTIBaAAIAAATg");
	this.shape_8.setTransform(131.6,52.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbCHIAAgSIBaAAIAAASgAh0CHIAAgSIBaAAIAAASgAAtBjIAAgSIA2AAIAAASgAhiBjIAAgSIA2AAIAAASgAhiA/IAAgSIDFAAIAAASgAhQAbIAAgTIChAAIAAATgAAbgIIAAgSIA2AAIAAASgAhQgIIAAgSIA2AAIAAASgAAJgsIAAgSIA2AAIAAASgAg+gsIAAgSIA3AAIAAASgAg+hQIAAgSIB9AAIAAASgAhQh0IAAgTIChAAIAAATg");
	this.shape_9.setTransform(102.6,52.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhZCHIAAgSIChAAIAAASgAhHBjIAAgSIChAAIAAASgAAkA/IAAgSIA2AAIAAASgAhHA/IAAgSIA2AAIAAASgAAkAbIAAgTIA2AAIAAATgAhHAbIAAgTIA2AAIAAATgAAkgIIAAgSIA2AAIAAASgAhHgIIAAgSIA2AAIAAASgAAkgsIAAgSIA2AAIAAASgAhHgsIAAgSIA2AAIAAASgAhHhQIAAgSIChAAIAAASgAhZh0IAAgTIChAAIAAATg");
	this.shape_10.setTransform(76.4,52.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsCHIAAgSIBZAAIAAASgAgsBjIAAgSIBZAAIAAASgAgaA/IAAgSIA1AAIAAASgAgsAbIAAgTIBZAAIAAATgAg+gIIAAgSIB9AAIAAASgAAbgsIAAgSIA2AAIAAASgAhQgsIAAgSIA2AAIAAASgAAbhQIAAgSIBaAAIAAASgAh0hQIAAgSIBaAAIAAASgAAbh0IAAgTIBaAAIAAATgAh0h0IAAgTIBaAAIAAATg");
	this.shape_11.setTransform(37.4,52.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhZCHIAAgSIChAAIAAASgAhZBjIAAgSICzAAIAAASgAAkA/IAAgSIA2AAIAAASgAhHA/IAAgSIA2AAIAAASgAhHAbIAAgTICPAAIAAATgAhHgIIAAgSICPAAIAAASgAAkgsIAAgSIA2AAIAAASgAhHgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhZh0IAAgTIChAAIAAATg");
	this.shape_12.setTransform(11.1,52.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAbCHIAAgSIBaAAIAAASgAh0CHIAAgSIBaAAIAAASgAAtBjIAAgSIA2AAIAAASgAhiBjIAAgSIA2AAIAAASgAhiA/IAAgSIDFAAIAAASgAhQAbIAAgTIChAAIAAATgAAbgIIAAgSIA2AAIAAASgAhQgIIAAgSIA2AAIAAASgAAJgsIAAgSIA2AAIAAASgAg+gsIAAgSIA3AAIAAASgAg+hQIAAgSIB9AAIAAASgAhQh0IAAgTIChAAIAAATg");
	this.shape_13.setTransform(310.2,15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsCHIAAgSIBZAAIAAASgAgsBjIAAgSIBZAAIAAASgAgaA/IAAgSIA1AAIAAASgAgaAbIAAgTIA1AAIAAATgAgagIIAAgSIA1AAIAAASgAgagsIAAgSIA1AAIAAASgAhihQIAAgSIDFAAIAAASgAhih0IAAgTIDFAAIAAATg");
	this.shape_14.setTransform(283,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhZCHIAAgSICzAAIAAASgAhZBjIAAgSICzAAIAAASgAhHA/IAAgSIA2AAIAAASgAhHAbIAAgTICPAAIAAATgAhHgIIAAgSICPAAIAAASgAhHgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhZh0IAAgTICzAAIAAATg");
	this.shape_15.setTransform(258.5,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhZCHIAAgSIChAAIAAASgAhZBjIAAgSICzAAIAAASgAAkA/IAAgSIA2AAIAAASgAhHA/IAAgSIA2AAIAAASgAhHAbIAAgTICPAAIAAATgAhHgIIAAgSICPAAIAAASgAAkgsIAAgSIA2AAIAAASgAhHgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhZh0IAAgTIChAAIAAATg");
	this.shape_16.setTransform(235,15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsCHIAAgSIBZAAIAAASgAgsBjIAAgSIBZAAIAAASgAgaA/IAAgSIA1AAIAAASgAgaAbIAAgTIA1AAIAAATgAgagIIAAgSIA1AAIAAASgAgagsIAAgSIA1AAIAAASgAhihQIAAgSIDFAAIAAASgAhih0IAAgTIDFAAIAAATg");
	this.shape_17.setTransform(197.8,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbCHIAAgSIBaAAIAAASgAh0CHIAAgSIBaAAIAAASgAAtBjIAAgSIA2AAIAAASgAhiBjIAAgSIA2AAIAAASgAhiA/IAAgSIDFAAIAAASgAhQAbIAAgTIChAAIAAATgAAbgIIAAgSIA2AAIAAASgAhQgIIAAgSIA2AAIAAASgAAJgsIAAgSIA2AAIAAASgAg+gsIAAgSIA3AAIAAASgAg+hQIAAgSIB9AAIAAASgAhQh0IAAgTIChAAIAAATg");
	this.shape_18.setTransform(170.6,15.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhZCHIAAgSICzAAIAAASgAhZBjIAAgSICzAAIAAASgAhHA/IAAgSIA2AAIAAASgAhHAbIAAgTIA2AAIAAATgAhHgIIAAgSIA2AAIAAASgAhHgsIAAgSIA2AAIAAASgAhZhQIAAgSIBZAAIAAASgAhZh0IAAgTIBZAAIAAATg");
	this.shape_19.setTransform(144.3,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhZCHIAAgSIBZAAIAAASgAhZBjIAAgSIBZAAIAAASgAhHA/IAAgSIA2AAIAAASgAhHAbIAAgTICPAAIAAATgAhHgIIAAgSICPAAIAAASgAhHgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhZh0IAAgTICzAAIAAATg");
	this.shape_20.setTransform(120.8,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhZCHIAAgSIChAAIAAASgAhZBjIAAgSICzAAIAAASgAAkA/IAAgSIA2AAIAAASgAgRAbIAAgTIBHAAIAAATgAg1gIIAAgSIBHAAIAAASgAhZgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhHh0IAAgTIChAAIAAATg");
	this.shape_21.setTransform(84.5,15.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhZCHIAAgSIChAAIAAASgAhZBjIAAgSICzAAIAAASgAAkA/IAAgSIA2AAIAAASgAgRAbIAAgTIBHAAIAAATgAg1gIIAAgSIBHAAIAAASgAhZgsIAAgSIA2AAIAAASgAhZhQIAAgSICzAAIAAASgAhHh0IAAgTIChAAIAAATg");
	this.shape_22.setTransform(61,15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAbCHIAAgSIBaAAIAAASgAh0CHIAAgSIBaAAIAAASgAAtBjIAAgSIA2AAIAAASgAhiBjIAAgSIA2AAIAAASgAhiA/IAAgSIDFAAIAAASgAhQAbIAAgTIChAAIAAATgAAbgIIAAgSIA2AAIAAASgAhQgIIAAgSIA2AAIAAASgAAJgsIAAgSIA2AAIAAASgAg+gsIAAgSIA3AAIAAASgAg+hQIAAgSIB9AAIAAASgAhQh0IAAgTIChAAIAAATg");
	this.shape_23.setTransform(34.7,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.3,74.9);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,6);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,10);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,10);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,73);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.embly();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,73);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.flat();
	this.instance.setTransform(-73.5,-45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-45.3,200,200);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,128);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ass();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,73);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.face_color();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(60,22.4,1,1,0,0,0,22,5);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(37.6,30.8,1,1,0,0,0,24,5);

	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(29,3,1,1,0,0,0,29,3);

	this.instance_3 = new lib.Bitmap7();
	this.instance_3.setTransform(4.4,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,73.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("boing4");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(60,22.4,1,1,0,0,0,22,5);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(37.6,30.8,1,1,0,0,0,24,5);

	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(29,3,1,1,0,0,0,29,3);

	this.instance_3 = new lib.Bitmap7();
	this.instance_3.setTransform(4.4,6.2);

	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(41,36.6,1,1,0,0,0,41,36.6);
	this.instance_4.filters = [new cjs.ColorFilter(0.72, 0.72, 0.72, 1, 6.72, 10.08, 71.4, 0)];
	this.instance_4.cache(-2,-2,86,77);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,x:4.4,y:6.2}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29,y:3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:37.6,y:30.8}},{t:this.instance,p:{regX:22,scaleX:1,scaleY:1,x:60,y:22.4}}]}).to({state:[{t:this.instance_3,p:{scaleX:1.244,scaleY:1.244,x:-4.5,y:-1.2}},{t:this.instance_2,p:{scaleX:1.244,scaleY:1.244,x:26.1,y:-5.1}},{t:this.instance_1,p:{scaleX:1.244,scaleY:1.244,x:36.8,y:29.4}},{t:this.instance,p:{regX:22.1,scaleX:1.244,scaleY:1.244,x:64.8,y:18.9}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.692,scaleY:1,x:22.1,y:6.2}},{t:this.instance_2,p:{scaleX:0.692,scaleY:1,x:39.1,y:3}},{t:this.instance_1,p:{scaleX:0.692,scaleY:1,x:45,y:30.8}},{t:this.instance,p:{regX:22,scaleX:0.692,scaleY:1,x:60.5,y:22.4}}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,73.2);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			playSound('boing' + getRandomInt(1,4));
		}
		
		function getRandomInt(min, max) {
		    min = Math.ceil(min);
		    max = Math.floor(max);
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 2
	this.instance = new lib.Symbol5();
	this.instance.setTransform(137.7,36.5,1,1,0,0,0,137.7,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:69,scaleX:0.93,x:73.7,alpha:0.929},0).wait(1).to({scaleX:0.86,x:78.5,alpha:0.857},0).wait(1).to({scaleX:0.79,x:83.2,alpha:0.786},0).wait(1).to({scaleX:0.72,x:87.9,alpha:0.714},0).wait(1).to({scaleX:0.66,x:92.7,alpha:0.643},0).wait(1).to({scaleX:0.59,x:97.4,alpha:0.571},0).wait(1).to({scaleX:0.52,x:102.2,alpha:0.5},0).wait(1).to({scaleX:0.45,x:106.9,alpha:0.429},0).wait(1).to({scaleX:0.38,x:111.6,alpha:0.357},0).wait(1).to({scaleX:0.31,x:116.4,alpha:0.286},0).wait(1).to({scaleX:0.24,x:121.1,alpha:0.214},0).wait(1).to({scaleX:0.17,x:125.9,alpha:0.143},0).wait(1).to({scaleX:0.1,x:130.6,alpha:0.071},0).wait(1).to({scaleX:0.03,x:135.3,alpha:0},0).to({_off:true},1).wait(35));

	// Layer 5
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(159.7,22.4,1,1,0,0,0,22,5);

	this.button_1 = new lib.Symbol10();
	this.button_1.setTransform(174.3,36.6,1,1,0,0,0,41,36.6);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Symbol10(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.button_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({x:160.6},0).wait(1).to({x:161.6},0).wait(1).to({x:162.6},0).wait(1).to({x:163.6},0).wait(1).to({x:164.6},0).wait(1).to({x:165.6},0).wait(1).to({x:166.6},0).wait(1).to({x:167.6},0).wait(1).to({x:168.5},0).wait(1).to({x:169.5},0).wait(1).to({x:170.5},0).wait(1).to({x:171.5},0).wait(1).to({x:172.5},0).wait(1).to({x:173.5},0).wait(1).to({x:174.5},0).wait(1).to({x:175.5},0).wait(1).to({x:176.5},0).wait(1).to({x:177.4},0).wait(1).to({x:178.4},0).wait(1).to({x:179.4},0).wait(1).to({x:180.4},0).wait(1).to({x:181.4},0).wait(1).to({x:182.4},0).wait(1).to({x:183.4},0).wait(1).to({x:184.4},0).wait(1).to({x:185.3},0).wait(1).to({x:186.3},0).wait(1).to({x:187.3},0).wait(1).to({x:188.3},0).wait(1).to({x:189.3},0).wait(1).to({x:190.3},0).wait(1).to({x:191.3},0).wait(1).to({x:192.3},0).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(161.7,30.8,1,1,0,0,0,24,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({x:161.9},0).wait(1).to({x:162.2},0).wait(1).to({x:162.5},0).wait(1).to({x:162.7},0).wait(1).to({x:163},0).wait(1).to({x:163.3},0).wait(1).to({x:163.5},0).wait(1).to({x:163.8},0).wait(1).to({x:164.1},0).wait(1).to({x:164.4},0).wait(1).to({x:164.6},0).wait(1).to({x:164.9},0).wait(1).to({x:165.2},0).wait(1).to({x:165.4},0).wait(1).to({x:165.7},0).wait(1).to({x:166},0).wait(1).to({x:166.2},0).wait(1).to({x:166.5},0).wait(1).to({x:166.8},0).wait(1).to({x:167.1},0).wait(1).to({x:167.3},0).wait(1).to({x:167.6},0).wait(1).to({x:167.9},0).wait(1).to({x:168.1},0).wait(1).to({x:168.4},0).wait(1).to({x:168.7},0).wait(1).to({x:169},0).wait(1).to({x:169.2},0).wait(1).to({x:169.5},0).wait(1).to({x:169.8},0).wait(1).to({x:170},0).wait(1).to({x:170.3},0).wait(1).to({x:170.6},0).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(166.7,3,1,1,0,0,0,29,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({x:166.5},0).wait(1).to({x:166.4},0).wait(1).to({x:166.3},0).wait(1).to({x:166.1},0).wait(1).to({x:166},0).wait(1).to({x:165.9},0).wait(1).to({x:165.7},0).wait(1).to({x:165.6},0).wait(1).to({x:165.5},0).wait(1).to({x:165.4},0).wait(1).to({x:165.2},0).wait(1).to({x:165.1},0).wait(1).to({x:165},0).wait(1).to({x:164.8},0).wait(1).to({x:164.7},0).wait(1).to({x:164.6},0).wait(1).to({x:164.4},0).wait(1).to({x:164.3},0).wait(1).to({x:164.2},0).wait(1).to({x:164.1},0).wait(1).to({x:163.9},0).wait(1).to({x:163.8},0).wait(1).to({x:163.7},0).wait(1).to({x:163.5},0).wait(1).to({x:163.4},0).wait(1).to({x:163.3},0).wait(1).to({x:163.2},0).wait(1).to({x:163},0).wait(1).to({x:162.9},0).wait(1).to({x:162.8},0).wait(1).to({x:162.6},0).wait(1).to({x:162.5},0).wait(1).to({x:162.4},0).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.Bitmap7();
	this.instance_4.setTransform(137.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.7,73);


// stage content:



(lib.beta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		_this = this;
		
		pauseFor = function(sec){
		
		    _this.stop();
		
		    setTimeout(function(){_this.play()}, sec*1000);
		
		}
		
		 
		
		pauseFor(3);
	}
	this.frame_334 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(333).call(this.frame_334).wait(1));

	// Layer 6
	this.instance = new lib.Symbol9();
	this.instance.setTransform(406.8,406.2,1,1,0,0,0,175.2,37.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205).to({_off:false},0).wait(1).to({regX:172.4,regY:33.8,x:404,y:402.5,alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(110));

	// ASS
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(264.5,329,1,1,0,0,0,196,73);

	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(327.5,329.3,1,1,90,0,0,196,73);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:98,regY:36.5,x:168.5,y:292.5},0).wait(1).to({x:170.5},0).wait(1).to({x:172.5},0).wait(1).to({x:174.6},0).wait(1).to({x:176.6},0).wait(1).to({x:178.6},0).wait(1).to({x:180.6},0).wait(1).to({x:182.6},0).wait(1).to({x:184.6},0).wait(1).to({x:186.6},0).wait(1).to({x:188.6},0).wait(1).to({x:190.7},0).wait(1).to({x:192.7},0).wait(1).to({x:194.7},0).wait(1).to({x:196.7},0).wait(1).to({x:198.7},0).wait(1).to({x:200.7},0).wait(1).to({x:202.7},0).wait(1).to({x:204.8},0).wait(1).to({x:206.8},0).wait(1).to({x:208.8},0).wait(1).to({x:210.8},0).wait(1).to({x:212.8},0).wait(1).to({x:214.8},0).wait(1).to({x:216.8},0).wait(1).to({x:218.9},0).wait(1).to({x:220.9},0).wait(1).to({x:222.9},0).wait(1).to({x:224.9},0).wait(1).to({x:226.9},0).wait(1).to({x:228.9},0).wait(1).to({x:230.9},0).wait(1).to({x:232.9},0).wait(1).to({x:235},0).wait(1).to({x:237},0).wait(1).to({x:239},0).wait(1).to({x:241},0).wait(1).to({x:243},0).wait(1).to({x:245},0).wait(1).to({x:247},0).wait(1).to({x:249.1},0).wait(1).to({x:251.1},0).wait(1).to({x:253.1},0).wait(1).to({x:255.1},0).wait(1).to({x:257.1},0).wait(1).to({x:259.1},0).wait(1).to({x:261.1},0).wait(1).to({x:263.1},0).wait(1).to({x:265.2},0).wait(1).to({x:267.2},0).wait(1).to({x:269.2},0).wait(1).to({x:271.2},0).wait(1).to({x:273.2},0).wait(1).to({x:275.2},0).wait(1).to({x:277.2},0).wait(1).to({x:279.3},0).wait(1).to({x:281.3},0).wait(1).to({x:283.3},0).wait(1).to({x:285.3},0).wait(1).to({x:287.3},0).wait(1).to({x:289.3},0).wait(1).to({x:291.3},0).wait(1).to({x:293.4},0).wait(1).to({x:295.4},0).wait(1).to({x:297.4},0).wait(1).to({x:299.4},0).wait(1).to({x:301.4},0).wait(1).to({x:303.4},0).wait(1).to({x:305.4},0).wait(1).to({x:307.4},0).wait(1).to({x:309.5},0).wait(1).to({x:311.5},0).wait(1).to({x:313.5},0).wait(1).to({x:315.5},0).wait(52).to({rotation:3,x:314.7,y:287.5},0).wait(1).to({rotation:6,x:314.1,y:282.5},0).wait(1).to({rotation:9,x:313.8,y:277.7},0).wait(1).to({rotation:12,x:313.7,y:272.9},0).wait(1).to({rotation:15,x:313.9,y:268.4},0).wait(1).to({rotation:18,x:314.4,y:264.1},0).wait(1).to({rotation:21,x:315,y:259.9},0).wait(1).to({rotation:24,x:315.9,y:255.9},0).wait(1).to({rotation:27,x:317,y:252.1},0).wait(1).to({rotation:30,x:318.2,y:248.5},0).wait(1).to({rotation:33,x:319.6,y:245.1},0).wait(1).to({rotation:36,x:321.3,y:242},0).wait(1).to({rotation:39,x:323.1,y:239.1},0).wait(1).to({rotation:42,x:325,y:236.4},0).wait(1).to({rotation:45,x:327,y:234},0).wait(1).to({rotation:48,x:329.2,y:231.9},0).wait(1).to({rotation:51,x:331.5,y:230},0).wait(1).to({rotation:54,x:333.8,y:228.5},0).wait(1).to({rotation:57,x:336.3,y:227.2},0).wait(1).to({rotation:60,x:338.8,y:226.1},0).wait(1).to({rotation:63,x:341.4,y:225.3},0).wait(1).to({rotation:66,x:343.9,y:224.9},0).wait(1).to({rotation:69,x:346.5,y:224.7},0).wait(1).to({rotation:72,x:349.2,y:224.8},0).wait(1).to({rotation:75,x:351.7,y:225.1},0).wait(1).to({rotation:78,x:354.3,y:225.8},0).wait(1).to({rotation:81,x:356.8,y:226.8},0).wait(1).to({rotation:84,x:359.3,y:228},0).wait(1).to({rotation:87,x:361.7,y:229.5},0).wait(1).to({rotation:90,x:364,y:231.3},0).to({_off:true},1).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(156).to({_off:false},0).wait(1).to({regX:112.6,regY:36.6,x:363.9,y:245.9},0).wait(178));

	// #
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(650,350.5,1,1,0,0,0,0,128);

	this.instance_4 = new lib.Symbol3copy();
	this.instance_4.setTransform(411,329.3,0.757,0.017,0,0,0,0,127.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:52.5,regY:64,x:699.5,y:286.5},0).wait(1).to({x:696.5},0).wait(1).to({x:693.5},0).wait(1).to({x:690.4},0).wait(1).to({x:687.4},0).wait(1).to({x:684.4},0).wait(1).to({x:681.4},0).wait(1).to({x:678.4},0).wait(1).to({x:675.4},0).wait(1).to({x:672.4},0).wait(1).to({x:669.4},0).wait(1).to({x:666.3},0).wait(1).to({x:663.3},0).wait(1).to({x:660.3},0).wait(1).to({x:657.3},0).wait(1).to({x:654.3},0).wait(1).to({x:651.3},0).wait(1).to({x:648.3},0).wait(1).to({x:645.2},0).wait(1).to({x:642.2},0).wait(1).to({x:639.2},0).wait(1).to({x:636.2},0).wait(1).to({x:633.2},0).wait(1).to({x:630.2},0).wait(1).to({x:627.2},0).wait(1).to({x:624.1},0).wait(1).to({x:621.1},0).wait(1).to({x:618.1},0).wait(1).to({x:615.1},0).wait(1).to({x:612.1},0).wait(1).to({x:609.1},0).wait(1).to({x:606.1},0).wait(1).to({x:603.1},0).wait(1).to({x:600},0).wait(1).to({x:597},0).wait(1).to({x:594},0).wait(1).to({x:591},0).wait(1).to({x:588},0).wait(1).to({x:585},0).wait(1).to({x:582},0).wait(1).to({x:578.9},0).wait(1).to({x:575.9},0).wait(1).to({x:572.9},0).wait(1).to({x:569.9},0).wait(1).to({x:566.9},0).wait(1).to({x:563.9},0).wait(1).to({x:560.9},0).wait(1).to({x:557.9},0).wait(1).to({x:554.8},0).wait(1).to({x:551.8},0).wait(1).to({x:548.8},0).wait(1).to({x:545.8},0).wait(1).to({x:542.8},0).wait(1).to({x:539.8},0).wait(1).to({x:536.8},0).wait(1).to({x:533.7},0).wait(1).to({x:530.7},0).wait(1).to({x:527.7},0).wait(1).to({x:524.7},0).wait(1).to({x:521.7},0).wait(1).to({x:518.7},0).wait(1).to({x:515.7},0).wait(1).to({x:512.6},0).wait(1).to({x:509.6},0).wait(1).to({x:506.6},0).wait(1).to({x:503.6},0).wait(1).to({x:500.6},0).wait(1).to({x:497.6},0).wait(1).to({x:494.6},0).wait(1).to({x:491.6},0).wait(1).to({x:488.5},0).wait(1).to({x:485.5},0).wait(1).to({x:482.5},0).wait(1).to({x:479.5},0).wait(1).to({scaleX:1,scaleY:0.98,x:479.8,y:287.2},0).wait(1).to({scaleX:1.01,scaleY:0.97,x:480,y:287.9},0).wait(1).to({scaleX:1.01,scaleY:0.95,x:480.3,y:288.6},0).wait(1).to({scaleX:1.02,scaleY:0.93,x:480.5,y:289.2},0).wait(1).to({scaleX:1.02,scaleY:0.91,x:480.8,y:289.9},0).wait(1).to({scaleX:1.03,scaleY:0.9,x:481.1,y:290.6},0).wait(1).to({scaleX:1.03,scaleY:0.88,x:481.3,y:291.3},0).wait(1).to({scaleX:1.04,scaleY:0.86,x:481.6,y:292},0).wait(1).to({scaleX:1.04,scaleY:0.84,x:481.8,y:292.7},0).wait(1).to({scaleX:1.05,scaleY:0.83,x:482.1,y:293.4},0).wait(1).to({scaleX:1.05,scaleY:0.81,x:482.3,y:294.1},0).wait(1).to({scaleX:1.06,scaleY:0.79,x:482.6,y:294.8},0).wait(1).to({scaleX:1.06,scaleY:0.78,x:482.8,y:295.5},0).wait(1).to({scaleX:1.07,scaleY:0.76,x:483.1,y:296.2},0).wait(1).to({scaleX:1.07,scaleY:0.74,x:483.3,y:296.9},0).wait(1).to({scaleX:1.08,scaleY:0.72,x:483.6,y:297.6},0).wait(1).to({scaleX:1.08,scaleY:0.71,x:483.9,y:298.2},0).wait(1).to({scaleX:1.09,scaleY:0.69,x:484.1,y:298.9},0).wait(1).to({scaleX:1.09,scaleY:0.67,x:484.4,y:299.6},0).wait(1).to({scaleX:1.1,scaleY:0.65,x:484.6,y:300.3},0).wait(1).to({scaleX:1.1,scaleY:0.64,x:484.9,y:301},0).wait(1).to({scaleX:1.11,scaleY:0.62,x:485.1,y:301.7},0).wait(1).to({scaleX:1.11,scaleY:0.6,x:485.4,y:302.4},0).wait(1).to({scaleX:1.12,scaleY:0.59,x:485.6,y:303.1},0).wait(1).to({scaleX:1.12,scaleY:0.57,x:485.9,y:303.8},0).wait(1).to({scaleX:1.13,scaleY:0.55,x:486.2,y:304.5},0).wait(1).to({scaleX:1.13,scaleY:0.53,x:486.4,y:305.2},0).wait(1).to({scaleX:1.14,scaleY:0.52,x:486.7,y:305.9},0).wait(1).to({scaleX:1.14,scaleY:0.5,x:486.9,y:306.5},0).wait(1).to({scaleX:1.15,scaleY:0.48,x:487.2,y:307.2},0).wait(1).to({scaleX:1.15,scaleY:0.46,x:487.4,y:307.9},0).wait(1).to({scaleX:1.16,scaleY:0.45,x:487.7,y:308.6},0).wait(1).to({scaleX:1.16,scaleY:0.43,x:487.9,y:309.3},0).wait(1).to({scaleX:1.17,scaleY:0.41,x:488.2,y:310},0).wait(1).to({scaleX:1.17,scaleY:0.39,x:488.4,y:310.7},0).wait(1).to({scaleX:1.18,scaleY:0.38,x:488.7,y:311.4},0).wait(1).to({scaleX:1.18,scaleY:0.36,x:489,y:312.1},0).wait(1).to({scaleX:1.19,scaleY:0.34,x:489.2,y:312.8},0).wait(1).to({scaleX:1.19,scaleY:0.33,x:489.5,y:313.5},0).wait(1).to({scaleX:1.19,scaleY:0.31,x:489.7,y:314.2},0).wait(1).to({scaleX:1.2,scaleY:0.29,x:490,y:314.9},0).wait(1).to({scaleX:1.2,scaleY:0.27,x:490.2,y:315.5},0).wait(1).to({scaleX:1.21,scaleY:0.26,x:490.5,y:316.2},0).wait(1).to({scaleX:1.21,scaleY:0.24,x:490.7,y:316.9},0).wait(1).to({scaleX:1.22,scaleY:0.22,x:491,y:317.6},0).wait(1).to({scaleX:1.22,scaleY:0.2,x:491.3,y:318.3},0).wait(1).to({scaleX:1.23,scaleY:0.19,x:491.5,y:319},0).wait(1).to({scaleX:1.23,scaleY:0.17,x:491.8,y:319.7},0).wait(1).to({scaleX:1.24,scaleY:0.15,x:492,y:320.3},0).wait(1).to({scaleX:1.24,scaleY:0.14,x:492.3,y:321},0).wait(1).to({scaleX:1.25,scaleY:0.12,x:492.5,y:321.7},0).wait(1).to({scaleY:0.11,x:492,y:322},0).wait(1).to({scaleY:0.11,x:491.4,y:322.2},0).wait(1).to({scaleY:0.11,x:490.9,y:322.4},0).wait(1).to({scaleY:0.1,x:490.4,y:322.6},0).wait(1).to({scaleY:0.1,x:489.8,y:322.8},0).wait(1).to({scaleY:0.1,x:489.3,y:323},0).wait(1).to({scaleY:0.09,x:488.8,y:323.3},0).wait(1).to({scaleY:0.09,x:488.2,y:323.5},0).wait(1).to({scaleY:0.09,x:487.7,y:323.7},0).wait(1).to({scaleY:0.08,x:487.2,y:323.9},0).wait(1).to({scaleY:0.08,x:486.6,y:324.1},0).wait(1).to({scaleY:0.08,x:486.1,y:324.3},0).wait(1).to({scaleY:0.07,x:485.6,y:324.6},0).wait(1).to({scaleY:0.07,x:485,y:324.8},0).wait(1).to({scaleY:0.07,x:484.5,y:325},0).wait(1).to({scaleY:0.06,x:484,y:325.2},0).wait(1).to({scaleY:0.06,x:483.4,y:325.4},0).wait(1).to({scaleY:0.06,x:482.9,y:325.6},0).wait(1).to({scaleY:0.05,x:482.4,y:325.9},0).wait(1).to({scaleY:0.05,x:481.8,y:326.1},0).wait(1).to({scaleY:0.05,x:481.3,y:326.3},0).wait(1).to({scaleY:0.04,x:480.8,y:326.5},0).wait(1).to({scaleY:0.04,x:480.2,y:326.7},0).wait(1).to({scaleY:0.04,x:479.7,y:326.9},0).wait(1).to({scaleY:0.03,x:479.2,y:327.2},0).wait(1).to({scaleY:0.03,x:478.6,y:327.4},0).wait(1).to({scaleY:0.03,x:478.1,y:327.6},0).wait(1).to({scaleY:0.02,x:477.6,y:327.8},0).wait(1).to({scaleY:0.02,x:477,y:328},0).wait(1).to({scaleY:0.02,x:476.5,y:328.3},0).to({_off:true},1).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(156).to({_off:false},0).wait(1).to({regX:26.5,regY:54.7,scaleY:0.03,x:431.1,y:327.1},0).wait(1).to({scaleY:0.04,y:326.2},0).wait(1).to({scaleY:0.05,y:325.3},0).wait(1).to({scaleY:0.07,y:324.4},0).wait(1).to({scaleY:0.08,y:323.5},0).wait(1).to({scaleY:0.09,y:322.6},0).wait(1).to({scaleY:0.1,y:321.7},0).wait(1).to({scaleY:0.12,y:320.8},0).wait(1).to({scaleY:0.13,y:319.9},0).wait(1).to({scaleY:0.14,y:319},0).wait(1).to({scaleY:0.15,y:318.1},0).wait(1).to({scaleY:0.17,y:317.2},0).wait(1).to({scaleY:0.18,y:316.3},0).wait(1).to({scaleY:0.19,y:315.4},0).wait(1).to({scaleY:0.2,y:314.5},0).wait(1).to({scaleY:0.22,y:313.6},0).wait(1).to({scaleY:0.23,y:312.7},0).wait(1).to({scaleY:0.24,y:311.8},0).wait(1).to({scaleY:0.25,y:310.9},0).wait(1).to({scaleY:0.27,y:310},0).wait(1).to({scaleY:0.28,y:309.1},0).wait(1).to({scaleY:0.29,y:308.2},0).wait(1).to({scaleY:0.3,y:307.3},0).wait(1).to({scaleY:0.31,y:306.4},0).wait(1).to({scaleY:0.33,y:305.5},0).wait(1).to({scaleY:0.34,y:304.6},0).wait(1).to({scaleY:0.35,y:303.7},0).wait(1).to({scaleY:0.36,y:302.8},0).wait(1).to({scaleY:0.38,y:301.9},0).wait(1).to({scaleY:0.39,y:301},0).wait(1).to({scaleY:0.4,y:300},0).wait(1).to({scaleY:0.41,y:299.2},0).wait(1).to({scaleY:0.43,y:298.3},0).wait(1).to({scaleY:0.44,y:297.4},0).wait(1).to({scaleY:0.45,y:296.5},0).wait(1).to({scaleY:0.46,y:295.6},0).wait(1).to({scaleY:0.48,y:294.7},0).wait(1).to({scaleY:0.49,y:293.7},0).wait(1).to({scaleY:0.5,y:292.9},0).wait(1).to({scaleY:0.51,y:291.9},0).wait(1).to({scaleY:0.53,y:291.1},0).wait(1).to({scaleY:0.54,y:290.1},0).wait(1).to({scaleY:0.55,y:289.2},0).wait(1).to({scaleY:0.56,y:288.4},0).wait(1).to({scaleY:0.57,y:287.4},0).wait(1).to({scaleY:0.59,y:286.6},0).wait(1).to({scaleY:0.6,y:285.6},0).wait(1).to({scaleY:0.61,y:284.8},0).wait(1).to({scaleY:0.62,y:283.8},0).wait(130));

	// EMBLY
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(457,292.5,1,1,0,0,0,180,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.797},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.689},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.608},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.446},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.392},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.365},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.23},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.203},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0},0).wait(261));

	// Face
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(400,300,1,1,0,0,0,400,300);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206).to({alpha:0.008},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.062},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.093},0).wait(1).to({alpha:0.101},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.116},0).wait(1).to({alpha:0.124},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.147},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.178},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.202},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.271},0).wait(1).to({alpha:0.279},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.295},0).wait(1).to({alpha:0.302},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.349},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.403},0).wait(1).to({alpha:0.411},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.434},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.465},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.488},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.504},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.558},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.589},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.628},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.651},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.698},0).wait(1).to({alpha:0.705},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.791},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.853},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.899},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,800,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;