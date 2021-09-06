function start(){
	const canvas=
	document.querySelector("#glcanvas");
	const gl=canvas.getContext("webgl");
	if(!gl){
		alert("El navegador no es compatible con WEBGL")
		return;
	}
	gl.clearColor(0.5,0.8,0.9,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}