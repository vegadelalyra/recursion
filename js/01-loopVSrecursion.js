/******************************************************
 * IN JAVASCRIPT, LOOPS PERFORM BETTER THAN RECURSION *
 *   SINCE INVOKING FUNCTIONS HAVE A TRADE-OFF COST   *
 *   IN OTHER LANGUAGES THIS IS AVOIDED SINCE THEY    *
 *       CONVERT RECURSIVE FUNCTIONS IN LOOPS,        *
 *        THIS DOES NOT HAPPEN IN JAVASCRIPT.         *
 ******************************************************/

// Any iterator function (aka function with a loop) can be recursive instead.

// iterator function
const countToTen = (num = 1) => {
    console.log('[iterator function]')
    while (num <= 10) {
        console.log(num)
        num++
    }
}

countToTen()

/************************************
 * RECURSIVE FUNCTIONS HAVE 2 PARTS *
 ************************************/
// 1) the recursive call to the function 
// 2) at least one condition to exit

console.log('\n[recursive function]')
const recurToTen = (num = 1) => {
    if (num > 10) return
    console.log(num)
    num++
    recurToTen(num)
}

recurToTen()