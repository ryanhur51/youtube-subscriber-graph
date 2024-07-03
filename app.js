const APIkey = "AIzaSyCQ5B5A-0hsSeLokdC-BTiDaKKeK6fZJP4";

const mrbeastID = "UCX6OQ3DkcsbYNE6H8uQQuVA";
const tseriesID = "UCq-Fj5jknLsUf-MWSy4_brA";

const viewCount = document.getElementById("sub-count");

function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${mrbeastID}&key=${APIkey}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const rawNumber = data.items[0].statistics.viewCount;
        viewCount.innerHTML =  formatNumber(rawNumber);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

getSubscribers();

