function generate(text, repeat, callback) {
    var val = "";
    const gen = new Promise((resolve, reject) => {
        for (let i = 0; i < repeat; i++) {
            val += text + "\n";
        }

        resolve("done");
    });

    setTimeout(function () {
        gen.then(res => {
            callback(val);
        });
    }, 800);
}

export default generate;
