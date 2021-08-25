const nhentaiInput = document.getElementById("nhentai-id-input");
let timer;

const baseUrlApi = "https://nhentai.net/api/gallery/";

const getData = async (ID) => {
    return new Promise(((resolve, reject) => {
        fetch(baseUrlApi + ID, {
            method: "GET",
            headers: {
            }
        })
            .then(res => resolve(res.json()))
            .catch(err => reject(err));
    }))
}

nhentaiInput.addEventListener("keypress", (e) => {
    window.clearTimeout(timer);
})

nhentaiInput.addEventListener("keyup", (e) => {
    window.clearTimeout();
    timer = window.setTimeout(() => {
        fetch(baseUrlApi + nhentaiInput.value)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, 3000)
});