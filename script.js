const btnClose = document.getElementById('btn_close');
const text = document.getElementById('text');
const icon = document.getElementById('icon');


btnClose.addEventListener('click', ()=>{
    text.style.display = 'none';
})

icon.addEventListener('click', ()=>{
    text.style.display = 'flex';
});
