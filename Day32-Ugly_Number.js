var isUgly = function(n) {
   

    if (n <= 0) {

        return false;

    }

    

    [2, 3, 5].forEach(prime => {

        while (n % prime === 0) {

            n /= prime;

        }

    });

    

    return n === 1;


}
