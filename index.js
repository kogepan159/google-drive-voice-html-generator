const add = (x,y) => {
    if(!x || !y) return "";       
    x = parseInt(x);
    y = parseInt(y);
    if(x+y < 10){
      return "10より小さい";      
    }
    return "10より大きい"
  }

  function OnButtonClick(mozi) {
    target = document.getElementById("output");
    //googleUrlId = document.getElementById("googleUrl").nodeValue;
    target.innerHTML = mozi;
  };