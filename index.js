window.onload = (Envent) => {

  var audio = new Audio('Its_Breakfast_Time.mp3');

  breakfastTime = document.getElementById('breakfast-time');
  rootB = document.getElementById('root');
  d = document.getElementById('cd_d_var');
  h = document.getElementById('cd_h_var');
  m = document.getElementById('cd_m_var');
  s = document.getElementById('cd_s_var');
  
  nextGroupB = document.getElementById('next_group');
  table = document.getElementById('groupsList');
  
    breakfastTime.style.display = 'none';

  document.getElementById('down').onclick = () => {
    document.getElementById("table").scrollIntoView({
      behavior:'smooth',
      block:'start'
    }); 
  }
  
  let groups = [
    '🏓 pong robot',
    '🏂 over board',
    '🛠 3D print',
    '🚗 parking lot bar',
    '🌞 solar panel'
  ];
  
  
  
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



setInterval(() => {
  curent = Math.round(Math.random()*(icon.length - 1));
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.rect(0,0, 64,64);
  ctx.fillText(icon[curent], 0, 64)
  
  const favicon = document.querySelector('link[rel=icon]')
  favicon.href = canvas.toDataURL()
  
}, 666)
  
  
  
  
  
  function generate() {
    let currentDate = new Date();
    let nextDate = new Date(2019, 2, 10, 19, 41); 
    let genratedDate = [];
    let week = 0;
    for (let date = 0; date < groups.length; date++) {
      week++;
      nextDate = new Date(nextDate.getTime() + 7*1000*60*60*24);
      
      if (nextDate.getTime() < currentDate.getTime()) {
        date--;
      }
      else{
        genratedDate.push({date:nextDate, group:week%groups.length});
      }
      
    }
    
    return genratedDate
  }
  
  
  function updateNextGroup() {
    nextGroupB.innerText = groups[generateDate[0].group];
  }
  
  function updateTable() {
    let htmlCode = '';
    for (let group = 0; group < generateDate.length; group++) {
      
      htmlCode += '<tr><td>' + (group + 1) + '</td><td>' + completZero(generateDate[group].date.getMonth() + 1) + '/' + completZero(generateDate[group].date.getDate()) + '</td><td>' + groups[generateDate[group].group] + '</td></tr>'
    }
    table.innerHTML = htmlCode;
  }
  function getRemaingTime() {
    let remaing = generateDate[0].date.getTime() - (new Date()).getTime();
    return {
      time: remaing,
      days: Math.floor(remaing / (1000 * 60 * 60*24)),
      hours: Math.floor(remaing / (1000 * 60 * 60))%24,
      minutes: Math.floor(remaing / (1000 * 60))%60,
      seconds: Math.floor(remaing / (1000))%60
    }
  }
  
  function updateTimer() {
    let remaing = getRemaingTime();
    
    d.innerText = completZero(remaing.days);
    h.innerText = completZero(remaing.hours);
    m.innerText = completZero(remaing.minutes);
    s.innerText = completZero(remaing.seconds);
    
  }
  
  function completZero(num) {
    return num.toString(10).length === 1 ? '0' + num.toString(10) : num.toString(10)
  }
  
  var generateDate = generate()
  updateNextGroup()
  updateTable()
  updateTimer()
  
  setTimeout(() => {
    breakfastTime.style.display = '';
    rootB.style.display = 'none';
    generateDate = generate()
    updateNextGroup()
    updateTable()
    console.log('update');
    audio.loop = true
    audio.play();
    rootB.style.diplay = true;
    setTimeout(() => {
      audio.pause()
      breakfastTime.style.display = 'none';
      rootB.style.display = '';
    },1000*60*10
    )
    
  }, getRemaingTime().time + 200);
  
  setTimeout( () => {
    setInterval(() => {
      updateTimer()
    }, 1000)
  },(new Date).getMilliseconds());
}

