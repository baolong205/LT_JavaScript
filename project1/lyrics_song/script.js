const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL= 'https://api.lyrics.ovh';


//tìm kiếm tên bài hát hoặc tác giả
async function searchSongs(term){

    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    showData(data);
}
// hiển thị lời bài hát 
function showData(data){
    result.innerHTML = `
    <ul class="songs">
        ${data.data
            .map(
                song => ` <li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class= "btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`)
    .join('')}
    </ul>  
    `;
// nút chuyển tiếp hoặc lùi
    if(data.prev || data.next) {
        more.innerHTML = `
        ${
            data.prev 
            ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>` : ''
        }
        ${
            data.next
             ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>` : ''
        }
        `;
    } else {
        more.innerHTML = '';
    }
}
//hiển thị nhiều bài hát hơn
async function getMoreSongs(url) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await res.json();
    
    showData(data);
}
//lấy lời bài hát từ API
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);

    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');


    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;

    more.innerHTML = '';
}


form.addEventListener('submit' , e => {
    e.preventDefault(); // ngăn chặn người dùng trả về nhiều lần
    
    const searchTerm = search.value.trim();

    if(!searchTerm) {
        alert('please type in a search term')
    } else{
        searchSongs(searchTerm)
    }
});


// trả về lời bài hát hoặc tên tác giả khi nhấn vào
result.addEventListener('click' , e=> {
    const clickedEl = e.target;


    if(clickedEl.tagName === 'BUTTON'){
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');
        

        getLyrics(artist,songTitle);
    }

});