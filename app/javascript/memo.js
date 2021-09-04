function post (){
  const submit = document.getElementById("submit")
  submit.addEventListener("click", (e) => {
    e.preventDefault();
  submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
          // ↑変数に格納している ← // ↑FormDataオブジェクト
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts",true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);