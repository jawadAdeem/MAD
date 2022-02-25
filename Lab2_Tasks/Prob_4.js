var sandwich_cal = function (bread) {
    var sandwich = bread / 2
    var a = "Sandwiches you can make from "
    var b = " breads are "
    console.log(a + bread + b + sandwich)

}
var c = 10
sandwich_cal(c)
var cheese = 1
var sandwich_cal = function (bread, cheese) {
    var sandwich = bread / 2
    if (bread % 2 == 0) {
        var a = "Sandwiches possibly made by "
        var b = " breads and "
        var d = " Cheese are "
        console.log(a + bread + b + cheese + d + cheese)
    }

}
sandwich_cal(c,2)
sandwich_cal(20)
sandwich_cal(20,5)
sandwich_cal(30,10)