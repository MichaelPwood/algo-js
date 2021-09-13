let res;
for (let i = 0; i <= 100; i++) {
    res = i % 2;
    if (res == 0) {
        console.log(i / 2);
    } else if (res == 1) {
        console.log(i * 3);
    }
}