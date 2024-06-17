const shape = require('./shapes.js');

describe('Triangle', () => {
    const newShape = new Triangle();
    shape.setColor('red');
    it('should render the triangle shape', () => {
        expect(newShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill = "red" />');
    })
});

describe('Square', () => {
    const newShape = new Square();
    shape.setColor('blue');
    it('should render the triangle shape', () => {
        expect(newShape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill = "blue"/>');
    })
});

describe('Circle', () => {
    const newShape = new Cirlce();
    shape.setColor('yellow');
    it('should render the triangle shape', () => {
        expect(newShape.render()).toEqual('<circle cx="25" cy="75" r="20" fill = "yellow"/>');
    })
})
