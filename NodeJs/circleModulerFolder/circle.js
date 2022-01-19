module.exports = {
    circleArea,
    circleCircumference,
}

function circleArea(radius) {
    var Result = Math.PI * radius * radius;
    console.log(Result.toFixed(2)*1);
}
function circleCircumference(radius) {
    var Result = 2 * Math.PI * radius;
    console.log(Result.toFixed(2)*1);
}