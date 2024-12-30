class SketchPad{
    constructor(container, onUpdate=null, size = 400){
        this.canvas = document.createElement('canvas');
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
        background-color: white;
        box-shadow: 0px 0px 10px 0px black;
        `;
        container.appendChild(this.canvas);

        const lineBreak = document.createElement('br');
        container.appendChild(lineBreak);

        this.undoBtn = document.createElement('button');
        this.undoBtn.innerHTML = 'Undo';
        container.appendChild(this.undoBtn);

        this.ctx = this.canvas.getContext('2d');
        
        this.onUpdate = onUpdate;
        this.reset();

        this.#addEventListeners();
    }

    reset(){
        this.paths = [];
        this.isDrawing = false;
        this.#reDraw();
    }

    #addEventListeners(){
        
        this.canvas.onmousedown = (e) => {
            const mouse = this.#getMouse(e);
            this.paths.push([mouse]);
            this.isDrawing = true;
        }
        this.canvas.onmousemove = (e) => {
            if(this.isDrawing){
                const mouse = this.#getMouse(e);
                const lastPath = this.paths[this.paths.length - 1];
                lastPath.push(mouse);
                this.#reDraw();
            }
        }
        document.onmouseup =() =>{
            this.isDrawing = false;
        }
        this.canvas.ontouchstart=(e)=>{
            const loc = e.touches[0];
            this.canvas.onmousedown(loc);
        }
        this.canvas.ontouchmove=(e)=>{
            const loc = e.touches[0];
            this.canvas.onmousemove(loc);
        }
        document.ontouchend=()=>{
            document.onmouseup();
        } 
        this.undoBtn.onclick = () =>{
            this.paths.pop();
            this.#reDraw();
        }
    }

    #reDraw(){
        this.ctx.clearRect(0,0,
            this.canvas.width, this.canvas.height);
        draw.paths(this.ctx, this.paths);
        if(this.paths.length > 0){
            this.undoBtn.disabled = false;
        }
        else{
            this.undoBtn.disabled = true;
        }
        this.triggerUpdate();
    }

    triggerUpdate(){
        if(this.onUpdate){
            this.onUpdate(this.paths);
        }
    }


    #getMouse=(e)=>{
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(e.clientX - rect.left),
            Math.round(e.clientY - rect.top)
        ];
        
    }
}