function encode(shortUrl, start, end) {
    let result = 0;
    if (shortUrl) {
        for (var i = start; i <= end; i++) {
            let charToInt = shortUrl.charCodeAt(i);
            result += charToInt;
        }
    }

    return result;
}

function isValidUrl(url) {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    return regex.test(url);
}

function shortURLtoID(shortUrl) {
    let id = ""; // Initialize result
    if (!isValidUrl(shortUrl)) {
        return id;
    }
    // Map to store 62 possible characters
    let map = "abcdefghijklmnopqrstuvwxyzABCDEF"
    "GHIJKLMNOPQRSTUVWXYZ0123456789";
    const mapLength = map.length;
    const urlLength = shortUrl.length;
    let currPointer = 0;
    const offset = 9;
  
    // A simple base conversion logic
    while (currPointer < urlLength) {
        if (currPointer + offset >= urlLength) { // last in the loop
            id += map[encode(shortUrl, currPointer, urlLength - 1) % mapLength];
        } else {
            id += map[encode(shortUrl, currPointer, currPointer + offset - 1) % mapLength];
        }
        currPointer += offset;
    }
    return id;
}

exports.shortURLtoID = shortURLtoID;
// Sample url
exports.shortenUrl = function (req, res) {
    const shortenedUrl = shortURLtoID(req.body.originalUrl)
    res.json({
        shortenedUrl: shortenedUrl ? `http://localhost:5001/${shortenedUrl}` : 'Url is invalid!'
    });
};
