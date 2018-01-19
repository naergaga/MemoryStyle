//var c:HTMLCanvasElement = document.querySelector("#canv");
//var ct: CanvasRenderingContext2D = c.getContext("2d");
var c = document.querySelector("#canv");
var ct = c.getContext("2d");
var w = c.width = window.innerWidth;
var h = c.height;
console.log(w, h);
Snowy();
function Snowy() {
    var snow, arr = [];
    var num = 300;
    for (var i = 0; i < num; ++i) {
        snow = new Flake();
        snow.x = Math.random() * w;
        snow.y = Math.random() * (h + 50);
        snow.d = 1.3;
        arr.push(snow);
    }
    go();
    function go() {
        ct.clearRect(0, 0, w, h);
        ct.fillStyle="#777";
        ct.fillRect(0, 0, w, h);
        ct.fill();
        for (var i = 0; i < arr.length; i++) {
            f = arr[i];
            f.draw();
        }
    }
}
function Flake() {
    this.draw = function () {
        this.g = ct.createRadialGradient(this.x, this.y, this.d, this.x, this.y, this.d*2);
        this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
        this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
        ct.moveTo(this.x, this.y);
        ct.fillStyle = this.g;
        ct.beginPath();
        ct.arc(this.x, this.y, this.d*4, 0, Math.PI * 2, true);
        ct.fill();
    }
    

}