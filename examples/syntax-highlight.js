/* Just some example code to get you going */
let c = document.getElementById('c');

let currentAnimationTime = 0;
const centreY = 75;

animate();

function animate() {
	c.setAttribute('cy', centreY + (Math.sin(currentAnimationTime)));

	currentAnimationTime += 0.15;
	requestAnimationFrame(animate);
}


xtag.create('x-clock', class extends XTagElement {
	connectedCallback() {
		this.start();
	}
	start() {
		this.update();
		this._interval = setInterval(() => this.update(), 1000);
	}
	stop() {
		this._interval = clearInterval(this._data.interval);
	}
	update() {
		this.textContent = new Date().toLocaleTimeString();
	}
	'tap::event' () {
		if (this._interval) this.stop();
		else this.start();
	}
});