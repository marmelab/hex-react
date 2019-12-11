// range function
//
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
function* range(start, end) {
    yield start;
    if (start === end) return;
    yield* range(start + 1, end);
}
