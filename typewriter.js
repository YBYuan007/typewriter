const sentence = "hello there from lighthouse labs";

// for (let i = 0 ; i < sentence.length; i++) {
//   setTimeout(()=>{
//     process.stdout.write(sentence[i]);
//   },1000*(i+1))
// }

for (let i = 0 ; i < sentence.length; i++) {
  setTimeout(()=>{
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log("\n");
    }
  },50*(i+1))
}



