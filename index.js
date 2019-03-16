window.onload = (Envent) => {
  d = document.getElementById('cd_d_var');
  h = document.getElementById('cd_h_var');
  m = document.getElementById('cd_m_var');
  s = document.getElementById('cd_s_var');


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

iconcouldown = setInterval(() => {
  curent = Math.round(Math.random()*(icon.length - 1));
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.rect(0,0, 64,64);
  ctx.fillText(icon[curent], 0, 64)

  const favicon = document.querySelector('link[rel=icon]')
  favicon.href = canvas.toDataURL()
  
}, 500)

couldown = setInterval(() => {
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

