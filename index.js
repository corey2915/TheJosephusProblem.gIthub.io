n = 13
k = 2
function equation(n, k) {
    if (n == 1) {
        return 1
    } else {
        return (equation(n - 1, k) + k - 1) % n + 1
    }
}
console.log("The chosen place is ", equation(n, k))
