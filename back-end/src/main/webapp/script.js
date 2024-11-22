async function espTestButton(param) {
    alert("Button clicked with param: " + param);
    const res = fetch("http://192.168.1.3?param=" + param);
    console.log(res);
}