/**
 * Convert object into an encoded URL parameters string.
 *
 * From
 *   https://stackoverflow.com/questions/7045065/how-do-i-turn-a-javascript-dictionary-into-an-encoded-url-string
 *
 * @param {Obejct} obj
 */
function serialize(obj) {
    var pairs = [];

    for (const [ k, v ] of Object.entries(obj)) {
        pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
    }

    return pairs.join('&');
}

function test() {
    var testParams = {
        title: 'My title',
        subtitle: 'My subtitle',
        bg_img: 'Background',
        main_mg: 'Main image'
    };
    // Convert to str.
    var paramsString = serialize(testParams);
    console.log(paramsString);

    // Convert to object.
    var searchParams = new URLSearchParams(paramsString);
    console.log(searchParams);
}

test();
