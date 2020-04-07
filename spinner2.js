const sentence = ['\r|  ','\r/  ','\r-  ','\r\\  ','\r|  ','\r/  ','\r-  ','\r\\  ', '\r|  ','\n'];
let x = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (x = x + 200)) // <= 1s delay to make it noticeable. Can dial it down later.
}