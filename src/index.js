module.exports = function toReadable(number) {
    const string = number.toString();
    let word;

    /* Is number zero? */
    if (number === 0) {
        return "zero";
    }

    /* Array of units as words */
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    /* Array of tens as words */
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    /* Split user arguemnt into 3 digit chunks from right to left */
    let start = string.length;
    let chunks = [];
    while (start > 0) {
        let end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    const chunksLen = chunks.length;

    /* Stringify each integer in each chunk */
    let words = [];
    for (let i = 0; i < chunksLen; i++) {
        const chunk = parseInt(chunks[i]);

        if (chunk) {
            /* Split chunk into array of individual integers */
            const ints = chunks[i].split("").reverse().map(parseFloat);

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                words.push(word + " hundred");
            }
        }
    }

    return words.reverse().join(" ");
};
