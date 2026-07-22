function nerdify(txt){
  // Make your strings more nerdy:
  //Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1.
  // "Fundamentals" --> "Fund4m3nt41s"
  
  txt = txt.split("").map(letter => {
      if (letter === "a" || letter === "A") return "4";
      if (letter === "e" || letter === "E") return "3";
      if (letter === "l") return "1";
      return letter;
    })
  return txt.join("");
}