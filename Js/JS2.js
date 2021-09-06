function start(){	
	var pos, $id=function(d){ return document.getElementById(d);};	
	var tierra = new PhiloGL.O3D.Sphere(
		{	
			nlat:30,
			nlong:30,
			radius:3,
			//textures: 'https://lizgar.github.io/A3D/js/earth.jpg'
		}
	);
PhiloGL('glCanvas',
		{
	camera: {
		position: {
			x:0, y:0, z:-10
		}
	},
	/*
	textures:{
		
		src: ['https://lizgar.github.io/A3D/js/earth.jpg'],
		parameters: [{
			name: 'TEXTURE_MAG_FILTER',
			value: 'LINEAR'
		},{		
			name: 'TEXTURE_MIN_FILTER',
			value: 'LINEAR_MIPMAP_NEAREST',
			generateMipmap: true
		}		
		]
	},	
	*/
	
	
	
	
	
	events: {
        onDragStart: function(e) {
          this.pos = {
            x: e.x,
            y: e.y
          };
        },
        onDragMove: function(e) {
          var z = this.camera.position.z,
              sign = Math.abs(z) / z,
              pos = this.pos;

          surface.rotation.y += -(pos.x - e.x) / 100;
          surface.rotation.x += sign * (pos.y - e.y) / 100;
          surface.update();
          pos.x = e.x;
          pos.y = e.y;
        },
        onTouchStart: function(e) {
          e.stop();
          this.pos = {
            x: e.x,
            y: e.y
          };
        },
        onTouchMove: function(e) {
          e.stop();
          var z = this.camera.position.z,
              sign = Math.abs(z) / z,
              pos = this.pos;

          surface.rotation.y += -(pos.x - e.x) / 100;
          surface.rotation.x += sign * (pos.y - e.y) / 100;
          surface.update();
          pos.x = e.x;
          pos.y = e.y;
        },
        onMouseWheel: function(e) {
          e.stop();
          var camera = this.camera;
          camera.position.z += e.wheel;
          camera.update();
        }
      },
	  
	  
      onError: function(e) {
        alert("There was an error while creating the WebGL application " + String(e));
      },
	  
	  
	  
	  
	  
	  
	
	onLoad: function(app){
		var gl= app.gl,
			program = app.program,
			scene = app.scene,
			canvas = app.canvas,
			camera = app.camera;

		gl.clearColor(0.5, 0.8, 0.9, 1.0);
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.viewport(0,0, +canvas.width, +canvas.height);
	
		tierra.update();
		scene.add(tierra);
		draw();
		
		function draw(){
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPHT_BUFFER_BIT);
			scene.render();
			PhiloGL.Fx.requestAnimationFrame(draw);
		}
	}
} );
}