/*
 * react-hex
 *
 * Credits : https://github.com/airtoxin/react-hex
 */

/* eslint-disable no-mixed-operators,consistent-return */

const THETAS = [0, 1, 2, 3, 4, 5].map(i => Math.PI / 3 * i);
const RANGE6 = [0, 60, 120, 180, 240, 300];

const getDiff = () => {
    return Math.PI / 6;
};
export const range = n => Array.from(Array(n).keys());
const product = (p, q) => {
    const l = [];
    range(p).forEach((i) => {
        range(q).forEach((j) => {
            l.push([i, j]);
        });
    });
    return l;
};

export const corners = (x, y, size) => {
    const diff = getDiff();
    return THETAS
        .map(theta => theta + diff)
        .map(theta => [x + size * Math.cos(theta), y + size * Math.sin(theta)]);
};

export const hexCorners = (x, y, size) => {
    const diff = 30;
    return RANGE6.map((baseDeg) => {
        const rad = Math.PI / 180 * (baseDeg + diff);
        return [x + size * Math.cos(rad), y + size * Math.sin(rad)];
    });
};

export const gridPoint = (oX, oY, size, gridX, gridY) => {
    /* eslint-disable no-else-return */
    /* reason: it seems buggy */
    const height = size;
    const width = size * 0.85;
    const diffXFromY = gridY * width / 2;
    const gridPointX = gridX * width + diffXFromY;
    const gridPointY = gridY * height * 0.75;

    const x = gridPointX + oX;
    const y = gridPointY + oY;

    return {
        props: {
            x,
            y,
            size,
        },
        gridX,
        gridY,
        corners: hexCorners(x, y, size),
    };
    /* eslint-enable no-else-return */
};

export const gridPoints = (oX, oY, size, gridWidth, gridHeight) =>
    product(gridHeight, gridWidth).map(([gridY, gridX]) =>
        gridPoint(oX, oY, size, gridX, gridY));
