(()=>{
const R=Math.random,pick=a=>a[R()*a.length|0],B=document.body,D=()=>window.__d||0,IMG='entity.webp';
let K=1,AC,last=0,busy=0,fxEl,fxT;
window.EX_A=["The wet sound inside the walls is not plumbing. Do not put your ear to the wall.","If you wake with someone else's taste in your mouth, do not swallow.","Counting your teeth at night is permitted. Counting them twice is not.","The new tenant in 4B has your face. Be polite. Do not let it borrow anything.","If the wallpaper is damp and warm, it is not damp.","Do not pull on any hair you find in the drain. It is attached.","Hang up if the caller breathes in rhythm with you.","The child on the landing is not lost. Do not offer to walk it home.","If the dog will not enter the room, neither will you.","There are fingernails in the carpet. Leave them. They are still growing.","Never answer a knock that comes from the inside of the door.","A smile with too many teeth is still a smile. Return it.","If your phone is warm and you have not touched it, put it down gently.","The lights hum in a pattern. Do not learn the pattern.","If you hear someone sobbing in the vent, do not ask what is wrong. They will tell you.","Do not photograph the stairwell. The photograph is not of the stairwell.","Your name is written inside the closet door. In your handwriting.","Do not drink from the tap after midnight. It has a pulse.","If the TV shows your room, do not turn around to compare.","Anything that crawls out from under the bed is allowed to leave. Do not follow it back in."];
window.EX_B=["Something under the floorboards has learned to peel. Keep your feet off the floor.","The thing wearing the night shift's skin does not fit it well. Do not point this out.","If the wall bleeds, do not press a cloth to it. It bleeds faster for your attention.","Fingers will push up through the carpet at 03:12. Do not step on them. They are counting you.","The meat in the freezer is not meat. The freezer is not cold.","If a stranger's jaw unhinges to speak, answer in full sentences.","Do not look at what is wet on the ceiling. Do not look at what is dripping from it.","Your hands will start to feel loose. This is normal. Do not look down.","The red in the water is a tenant. It has paid its rent in advance.","Teeth in the sink are yours. Put them back before you are missed.","It takes the hair first. Then the nails. Then it asks what you would like to keep.","Do not scream. It takes the sound and wears it.","If your reflection is missing its eyes, close yours. Do not open them for any voice, including your own.","Copper in the air means it is almost here. Sweet rot means it is already behind you.","There is a body behind the wall you are leaning on. It is leaning back.","The skin on the wallpaper is warm. The seams are wet. Do not ask who it belonged to.","When the hanging thing drops, do not look up. It wants you to look up.","You were wrong to count the steps. They count you back, and they are hungry.","Pressing your palm to the cracked glass is not a prayer. It hears it as one.","Blood in the pipes at night is a warning. Blood in the pipes at noon is an invitation.","The man in the hallway has no face under his hair. If it parts, you have stayed too long.","Do not pick at the scab on the page. The page does not heal.","If you find a tooth in your pocket, do not ask whose. Do not ask which pocket.","Something is stitching the dark closed from the other side. Do not slip your hand through.","The last person on this page begged. It liked that. Do not beg.","Ribs are not a rule. Ribs are a door. It is almost open.","You are not the first to scroll this far. Nothing remains of the others but the sound they made.","It has been following the cursor. It has been following the thumb.","Look up."];

const css=document.createElement('style');css.textContent=`
.shk{animation:sk .09s linear 6}@keyframes sk{0%,100%{transform:translate(0,0)}25%{transform:translate(-9px,5px)}50%{transform:translate(8px,-6px)}75%{transform:translate(-5px,-8px)}}
.dk{position:fixed;inset:0;background:#000;z-index:9200;pointer-events:none;opacity:0;transition:opacity .6s}
.hg{position:fixed;top:0;z-index:9300;pointer-events:none;width:max-content;transform:translateY(-135vh);transform-origin:65% -100vh}
.hg.go{animation:dr .36s cubic-bezier(.55,0,1,.7) forwards,sw 2.8s ease-in-out .36s infinite}
@keyframes dr{0%{transform:translateY(-135vh)}80%{transform:translateY(2.5vh)}100%{transform:translateY(0)}}
@keyframes sw{0%,100%{transform:rotate(-2.4deg)}50%{transform:rotate(2.4deg)}}
.hg img{height:86vh;width:auto;display:block;filter:drop-shadow(0 0 16px #000)}
.hg i{position:absolute;left:65%;top:-100vh;width:5px;margin-left:-2px;height:calc(100vh + 31%);background:repeating-linear-gradient(60deg,#2b2218 0 3px,#54462f 3px 6px)}
.ff{position:fixed;inset:0;z-index:9450;background:#000 no-repeat;background-size:auto 250%;background-position:30% 2%;pointer-events:none;filter:contrast(1.5)}
.fx,.ck{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9003}.fx{transition:opacity 8s}.ck{z-index:9004}
.ey{position:fixed;z-index:8998;width:50px;height:12px;pointer-events:none;animation:bk 3.2s infinite}
.ey::before,.ey::after{content:"";position:absolute;top:0;width:16px;height:9px;border-radius:50%;background:#e6e6de;box-shadow:0 0 10px #fff}.ey::before{left:0}.ey::after{right:0}
@keyframes bk{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.05)}}
.bl{color:#a30f0f!important;text-shadow:0 3px 7px #500,0 9px 14px #300}
#dbg{position:fixed;left:0;bottom:2.4rem;z-index:9600;display:flex;flex-wrap:wrap;gap:4px}#dbg button{font:10px monospace;background:#111;color:#999;border:1px solid #333;padding:4px}`;
document.head.appendChild(css);
const mk=(c,t)=>{const e=document.createElement(t||'div');e.className=c;B.appendChild(e);return e},vib=p=>K==1&&navigator.vibrate&&navigator.vibrate(p);
const shake=()=>{B.classList.remove('shk');void B.offsetWidth;B.classList.add('shk')};

/* ---------- synthesized sound (no files needed) ---------- */
function ac(){if(!AC)try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}if(AC&&AC.state=='suspended')AC.resume();return AC}
function tone(f0,f1,d,ty,v){const a=ac();if(!a)return;const t=a.currentTime,o=a.createOscillator(),g=a.createGain();o.type=ty;o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+d);g.gain.setValueAtTime(v*K,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(a.destination);o.start();o.stop(t+d)}
function nz(d,fq,v,q){const a=ac();if(!a)return;const n=a.sampleRate*d|0,b=a.createBuffer(1,n,a.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=(R()*2-1)*(1-i/n);const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=b;f.type='bandpass';f.frequency.value=fq;f.Q.value=q||1;g.gain.value=v*K;s.connect(f).connect(g).connect(a.destination);s.start()}
const scream=()=>{tone(1100,380,.55,'sawtooth',.3);tone(1650,520,.5,'square',.12);nz(.5,3000,.7)};
const boom=()=>{tone(80,24,.9,'sine',.95);nz(.3,120,.8)};
const glass=()=>{for(let i=0;i<9;i++)setTimeout(()=>nz(.07,5000+R()*4000,.5,4),i*45+R()*30)};
function hb(){if(D()>30&&AC){tone(60,38,.14,'sine',.45);setTimeout(()=>tone(52,34,.16,'sine',.35),170)}setTimeout(hb,Math.max(480,1300-D()*2.2))}

/* ---------- blood ---------- */
function fxc(){if(!fxEl){fxEl=mk('fx','canvas');fxEl.width=innerWidth;fxEl.height=innerHeight}clearTimeout(fxT);fxEl.style.transition='none';fxEl.style.opacity=1;fxT=setTimeout(()=>{fxEl.style.transition='opacity 8s';fxEl.style.opacity=0;fxT=setTimeout(()=>{fxEl.remove();fxEl=0},9000)},12000);return fxEl}
function drips(list){const c=fxc(),x=c.getContext('2d');x.lineCap='round';
(function f(){let live=0;for(const d of list){if(d.y>=d.m)continue;live=1;const ny=d.y+d.v;x.strokeStyle='#5a0606';x.lineWidth=d.w;x.beginPath();x.moveTo(d.x,d.y);x.lineTo(d.x,ny);x.stroke();d.y=ny;d.v*=.997;if(d.y>=d.m){x.fillStyle='#7d0e0e';x.beginPath();x.arc(d.x,d.y,d.w*.75,0,7);x.fill()}}if(live)requestAnimationFrame(f)})()}
const top=n=>[...Array(n|0)].map(()=>({x:R()*innerWidth,y:-8,v:.7+R()*2.2,w:3+R()*8,m:innerHeight*(.3+R()*.7)}));
function splat(){const c=fxc(),x=c.getContext('2d'),cx=innerWidth*(.2+R()*.6),cy=innerHeight*(.2+R()*.5),l=[];boom();shake();vib([80,30,120]);
for(let i=0;i<70;i++){const a=R()*6.28,d=R()*R()*200,px=cx+Math.cos(a)*d,py=cy+Math.sin(a)*d,r=2+R()*R()*24;x.fillStyle=i%3?'#5e0707':'#7a0c0c';x.beginPath();x.arc(px,py,r,0,7);x.fill();if(r>9&&R()<.5)l.push({x:px,y:py,v:.4+R()*1.4,w:r*.5,m:py+80+R()*320})}drips(l)}
function bleed(){const v=[...document.querySelectorAll('.rule.in')].filter(r=>{const b=r.getBoundingClientRect();return b.top>0&&b.bottom<innerHeight});if(!v.length)return;const r=pick(v),b=r.getBoundingClientRect();r.classList.add('bl');nz(.4,300,.3,3);drips([...Array(5)].map(()=>({x:b.left+R()*b.width,y:b.top+10,v:.5+R(),w:2+R()*4,m:b.top+80+R()*260})))}

/* ---------- phone crack ---------- */
function crack(){const c=mk('ck','canvas'),w=c.width=innerWidth,h=c.height=innerHeight,x=c.getContext('2d'),ox=w*(.2+R()*.6),oy=h*(.2+R()*.6),n=9+R()*6|0,rays=[];
const line=(p,s)=>{x.beginPath();p.forEach((q,i)=>i?x.lineTo(q[0]+s,q[1]+s):x.moveTo(q[0]+s,q[1]+s));x.stroke()};
const draw=p=>{x.strokeStyle='rgba(0,0,0,.7)';x.lineWidth=2.4;line(p,1);x.strokeStyle='rgba(235,235,235,.75)';x.lineWidth=1;line(p,0)};
const walk=(px,py,a,L,keep)=>{const p=[[px,py,0]];for(let d=0;d<L;){const s=12+R()*28;a+=(R()-.5)*.4;px+=Math.cos(a)*s;py+=Math.sin(a)*s;d+=s;p.push([px,py,d]);if(keep&&R()<.12)draw(walk(px,py,a+(R()<.5?1:-1)*(.6+R()*.6),30+R()*110,0))}return p};
for(let i=0;i<n;i++){const p=walk(ox,oy,i/n*6.28+R()*.4,120+R()*Math.max(w,h)*.45,1);rays.push(p);draw(p)}
for(const r of [55,120,210])for(let i=0;i<n;i++){const A=rays[i].find(q=>q[2]>=r),Bq=rays[(i+1)%n].find(q=>q[2]>=r);if(A&&Bq)draw([A,[(A[0]+Bq[0])/2+(R()-.5)*14,(A[1]+Bq[1])/2+(R()-.5)*14],Bq])}
glass();shake();vib([40,30,40,30,90]);if(D()>80)drips([{x:ox,y:oy,v:.4,w:3,m:oy+120+R()*200}])}

/* ---------- jumpscares ---------- */
function face(){if(K<1)return;const g=mk('ff');g.style.backgroundImage=`url(${IMG})`;scream();shake();vib([60,40,140]);let i=0;const t=setInterval(()=>{g.style.visibility=i++%2?'hidden':'visible';if(i>5){clearInterval(t);g.remove()}},75)}
function drop(){if(busy)return;busy=1;const dk=mk('dk'),g=mk('hg');g.style.left=(6+R()*46)+'vw';g.innerHTML='<i></i><img src="'+IMG+'" alt="">';g.firstChild.nextSibling.onerror=()=>g.remove();
dk.style.opacity=.9;tone(240,150,1,'sawtooth',.05);nz(1,90,.3,1);
setTimeout(()=>{g.classList.add('go');setTimeout(()=>{boom();shake();vib([120,40,200])},330)},1300);
setTimeout(()=>{let i=0;const t=setInterval(()=>{g.style.visibility=i++%2?'hidden':'visible';if(i>6){clearInterval(t);g.remove();dk.style.opacity=1;setTimeout(()=>{dk.style.opacity=0;setTimeout(()=>{dk.remove();busy=0},700)},900)}},70)},5200)}
function eyes(){const e=mk('ey');e.style.left=(R()<.5?3+R()*14:78+R()*16)+'vw';e.style.top=(10+R()*80)+'vh';const kill=()=>e.remove();e.onpointerdown=kill;setTimeout(kill,4000+R()*3500)}
function fscroll(){if(K<1)return;nz(.4,200,.4,2);scrollBy({top:280+R()*320,behavior:'smooth'})}

/* ---------- scheduler: min depth, weight, action ---------- */
const EV={eyes:[10,6,eyes],bleed:[16,5,bleed],drips:[22,4,()=>drips(top(4+D()/20))],drop:[26,4,drop],crack:[30,3,crack],face:[34,3,face],scroll:[45,2,fscroll],splat:[55,3,splat]};
setInterval(()=>{const now=Date.now(),d=D();if(d<10||now<last||busy)return;const o=Object.values(EV).filter(e=>d>=e[0]);let t=o.reduce((s,e)=>s+e[1],0)*R(),p;for(p of o){t-=p[1];if(t<=0)break}p[2]();last=now+22000+R()*38000},4000);

/* ---------- gate warning + hooks ---------- */
const gt=document.getElementById('gate'),w=document.createElement('p');
w.innerHTML='WARNING: SUDDEN LOUD SOUNDS · FLASHING IMAGES · GRAPHIC HORROR<br><button id="lo" style="background:none;border:0;color:inherit;font:inherit;text-decoration:underline;margin-top:.8rem">[ REDUCED INTENSITY: OFF ]</button>';
gt.appendChild(w);document.getElementById('lo').onclick=e=>{K=K==1?.35:1;e.target.textContent='[ REDUCED INTENSITY: '+(K==1?'OFF':'ON')+' ]'};
document.getElementById('enter').addEventListener('click',()=>{ac();hb();new Image().src=IMG});
if(location.hash=='#debug'){const d=mk('','div');d.id='dbg';for(const k in EV){const b=document.createElement('button');b.textContent=k;b.onclick=()=>EV[k][2]();d.appendChild(b)}}
})();
