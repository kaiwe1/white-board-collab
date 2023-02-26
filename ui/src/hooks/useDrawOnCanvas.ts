import { Socket } from "socket.io-client";

let timer: NodeJS.Timeout | null = null

const useDrawOnCanvas = (canvas: HTMLCanvasElement, socket: Socket) => {
    // get canvas 2D context and set him correct size
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.strokeStyle = "red";
    
    // last known position
    const pos = { x: 0, y: 0 };

    resize()

    window.addEventListener('resize', resize);
    document.addEventListener('mouseenter', setPosition);
    document.addEventListener('mousemove', draw);
    document.addEventListener('mousedown', setPosition);

    // new position from mouse event
    function setPosition(e: MouseEvent) {
        pos.x = e.clientX - canvas.getBoundingClientRect().left;
        pos.y = e.clientY - canvas.getBoundingClientRect().top;

        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            const base64ImageData = canvas.toDataURL("image/png")
            socket.emit("canvas-data", base64ImageData)
        }, 1000)
    }

    // resize canvas
    function resize() {
        ctx.canvas.width = canvas.getBoundingClientRect().width;
        ctx.canvas.height = canvas.getBoundingClientRect().height;
    }

    function draw(e: MouseEvent) {
        // mouse left button must be pressed
        if (e.buttons !== 1) return;

        ctx.beginPath(); // begin

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';

        ctx.moveTo(pos.x, pos.y); // from
        setPosition(e);
        ctx.lineTo(pos.x, pos.y); // to

        ctx.stroke(); // draw it!
    }
}

export default useDrawOnCanvas