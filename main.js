const WIDTH = 800
const HEIGHT = 600


const setup = (s) => () => {
    s.createCanvas(WIDTH, HEIGHT)
    s.background(0)
}

function cycle(x, within) {
    let result=Math.abs(x%within)
    return result
}

let i = 0;
const draw = (s) => () => {
    // s.background(0)
    s.noStroke()
    s.fill(1, cycle(i, 255) , 255);
    s.rect(cycle(i,WIDTH), cycle( i,HEIGHT), 50, 50, cycle(i*5, 99), cycle(i*5, 99));
    s.fill(255, 1, 100)
    s.rect(WIDTH-cycle(i,WIDTH), cycle( i,HEIGHT), 50, 50, cycle(i*5, 99), cycle(i*5, 99));
    i += 1;
}


let sketch = (s) => {
    s.setup = setup(s)
    s.draw = draw(s)
}

const sketchInstance = new p5(sketch);