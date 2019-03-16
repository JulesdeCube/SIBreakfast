window.onload = (Envent) => {
  d = document.getElementById('cd_d_var');
  h = document.getElementById('cd_h_var');
  m = document.getElementById('cd_m_var');
  s = document.getElementById('cd_s_var');

  document.getElementById('down').onclick = () => {
    document.getElementById("table").scrollIntoView({
      behavior:'smooth',
      block:'start'
    }); 
  }

  const canvas = document.createElement('canvas')
canvas.height = 64
canvas.width = 64

const ctx = canvas.getContext('2d')
ctx.font = '64px serif'

  var icon = [
    '🍧',
    '🍨',
    '🍦',
    '🥧',
    '🍰',
    '🎂',
    '🍮',
    '🍭',
    '🍬',
    '🍫',
    '🍿',
    '🍩',
    '🍪',
    '🌰', 
    '🥜',
    '🍯',
    '🥛',
    '🍼'
  ];
  var groups = [
    '🏓 pong robot',
    '🌞 solar panel',
    '🚗 parking lot bar',
    '🧰 3D print',
    '🏂 over board'
  ]
/*   iconbalise = document.querySelectorAll('.icon'); */

  list = ''


  Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };

  console.log((new Date()).getWeekNumber());
  
  document.getElementById('groupsList').innerHTML = list;



iconcouldown = setInterval(() => {
  curent = Math.round(Math.random()*(icon.length - 1));
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.rect(0,0, 64,64);
  ctx.fillText(icon[curent], 0, 64)
  
  const favicon = document.querySelector('link[rel=icon]')
  favicon.href = canvas.toDataURL()
  
}, 666)

couldown = setInterval(() => {




/*   iconbalise.forEach(balise => {
    curent = Math.round(Math.random()*(icon.length - 1));
    balise.innerText = icon[curent]
  }); */




  var date = new Date();
  remaingTime = (6 - date.getDay()) * 86400 + (10 - date.getHours()) * 3600 + (0 - date.getMinutes())* 60 + ( 0 - date.getSeconds());
  if(remaingTime < 0) {
    remaingTime += 7 * 86400;
  }
  d.innerText = Math.floor(remaingTime / 86400);
  remaingTime -= Math.floor(remaingTime / 86400) *86400;
  h.innerText = Math.floor((remaingTime / 3600 ));
  remaingTime -= Math.floor(remaingTime / 3600) *3600;
  m.innerText = Math.floor((remaingTime / 60 ));
  remaingTime -= Math.floor(remaingTime / 60) * 60;
  s.innerText = Math.floor(remaingTime);
}, 1000)
}

