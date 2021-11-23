const setup = (s) => () => {
    s.createCanvas(400, 400)
    s.background(0)
}

function cycle(x, within) {
    return x%within
}

let i = 0;
const draw = (s) => () => {
    s.fill(100);
    s.rect(cycle(i,400), cycle( i,400), 20, 20);
    i += 1;
}


let sketch = (s) => {
    s.setup = setup(s)
    s.draw = draw(s)
}

const sketchInstance = new p5(sketch);