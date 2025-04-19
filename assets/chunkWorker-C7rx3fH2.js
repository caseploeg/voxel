(function(){"use strict";var x={exports:{}},Q;function V(){return Q||(Q=1,function(I){(function(P){function f(t){function r(a,n,e){this.x=a,this.y=n,this.z=e}r.prototype.dot2=function(a,n){return this.x*a+this.y*n},r.prototype.dot3=function(a,n,e){return this.x*a+this.y*n+this.z*e},this.grad3=[new r(1,1,0),new r(-1,1,0),new r(1,-1,0),new r(-1,-1,0),new r(1,0,1),new r(-1,0,1),new r(1,0,-1),new r(-1,0,-1),new r(0,1,1),new r(0,-1,1),new r(0,1,-1),new r(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(t||0)}f.prototype.seed=function(t){t>0&&t<1&&(t*=65536),t=Math.floor(t),t<256&&(t|=t<<8);for(var r=this.p,a=0;a<256;a++){var n;a&1?n=r[a]^t&255:n=r[a]^t>>8&255;var e=this.perm,o=this.gradP;e[a]=e[a+256]=n,o[a]=o[a+256]=this.grad3[n%12]}};var C=.5*(Math.sqrt(3)-1),q=(3-Math.sqrt(3))/6,G=1/3,m=1/6;f.prototype.simplex2=function(t,r){var a,n,e,o=(t+r)*C,s=Math.floor(t+o),v=Math.floor(r+o),i=(s+v)*q,p=t-s+i,h=r-v+i,l,c;p>h?(l=1,c=0):(l=0,c=1);var d=p-l+q,u=h-c+q,y=p-1+2*q,g=h-1+2*q;s&=255,v&=255;var b=this.perm,M=this.gradP,A=M[s+b[v]],j=M[s+l+b[v+c]],D=M[s+1+b[v+1]],T=.5-p*p-h*h;T<0?a=0:(T*=T,a=T*T*A.dot2(p,h));var X=.5-d*d-u*u;X<0?n=0:(X*=X,n=X*X*j.dot2(d,u));var F=.5-y*y-g*g;return F<0?e=0:(F*=F,e=F*F*D.dot2(y,g)),70*(a+n+e)},f.prototype.simplex3=function(t,r,a){var n,e,o,s,v=(t+r+a)*G,i=Math.floor(t+v),p=Math.floor(r+v),h=Math.floor(a+v),l=(i+p+h)*m,c=t-i+l,d=r-p+l,u=a-h+l,y,g,b,M,A,j;c>=d?d>=u?(y=1,g=0,b=0,M=1,A=1,j=0):c>=u?(y=1,g=0,b=0,M=1,A=0,j=1):(y=0,g=0,b=1,M=1,A=0,j=1):d<u?(y=0,g=0,b=1,M=0,A=1,j=1):c<u?(y=0,g=1,b=0,M=0,A=1,j=1):(y=0,g=1,b=0,M=1,A=1,j=0);var D=c-y+m,T=d-g+m,X=u-b+m,F=c-M+2*m,U=d-A+2*m,B=u-j+2*m,J=c-1+3*m,K=d-1+3*m,O=u-1+3*m;i&=255,p&=255,h&=255;var _=this.perm,Y=this.gradP,z=Y[i+_[p+_[h]]],r1=Y[i+y+_[p+g+_[h+b]]],e1=Y[i+M+_[p+A+_[h+j]]],t1=Y[i+1+_[p+1+_[h+1]]],H=.5-c*c-d*d-u*u;H<0?n=0:(H*=H,n=H*H*z.dot3(c,d,u));var L=.5-D*D-T*T-X*X;L<0?e=0:(L*=L,e=L*L*r1.dot3(D,T,X));var k=.5-F*F-U*U-B*B;k<0?o=0:(k*=k,o=k*k*e1.dot3(F,U,B));var E=.5-J*J-K*K-O*O;return E<0?s=0:(E*=E,s=E*E*t1.dot3(J,K,O)),32*(n+e+o+s)};function N(t){return t*t*t*(t*(t*6-15)+10)}function w(t,r,a){return(1-a)*t+a*r}f.prototype.perlin2=function(t,r){var a=Math.floor(t),n=Math.floor(r);t=t-a,r=r-n,a=a&255,n=n&255;var e=this.perm,o=this.gradP,s=o[a+e[n]].dot2(t,r),v=o[a+e[n+1]].dot2(t,r-1),i=o[a+1+e[n]].dot2(t-1,r),p=o[a+1+e[n+1]].dot2(t-1,r-1),h=N(t);return w(w(s,i,h),w(v,p,h),N(r))},f.prototype.perlin3=function(t,r,a){var n=Math.floor(t),e=Math.floor(r),o=Math.floor(a);t=t-n,r=r-e,a=a-o,n=n&255,e=e&255,o=o&255;var s=this.perm,v=this.gradP,i=v[n+s[e+s[o]]].dot3(t,r,a),p=v[n+s[e+s[o+1]]].dot3(t,r,a-1),h=v[n+s[e+1+s[o]]].dot3(t,r-1,a),l=v[n+s[e+1+s[o+1]]].dot3(t,r-1,a-1),c=v[n+1+s[e+s[o]]].dot3(t-1,r,a),d=v[n+1+s[e+s[o+1]]].dot3(t-1,r,a-1),u=v[n+1+s[e+1+s[o]]].dot3(t-1,r-1,a),y=v[n+1+s[e+1+s[o+1]]].dot3(t-1,r-1,a-1),g=N(t),b=N(r),M=N(a);return w(w(w(i,c,g),w(p,d,g),M),w(w(h,u,g),w(l,y,g),M),b)},P.Noise=f})(I.exports)}(x)),x.exports}var W=V();let Z=new W.Noise,R=null;self.onmessage=function(I){const{type:P,data:f}=I.data;switch(P){case"init":R=$(f.seed,f.params),self.postMessage({type:"initialized"});break;case"generateChunk":try{const C=performance.now(),{chunkX:q,chunkZ:G,chunkSize:m,debug_more_poppies:N}=f,w=S(q,G,m,{debug_more_poppies:N}),r=performance.now()-C;self.postMessage({type:"chunkGenerated",data:{chunkX:q,chunkZ:G,chunkData:w,requestId:f.requestId,generationTime:r}})}catch(C){self.postMessage({type:"error",data:{message:C.message,requestId:f.requestId}})}break;default:console.error("Unknown message type:",P)}};function $(I,P){return{seed:I,params:P||{seaLevel:20,minHeight:0,maxHeight:64,heightFreq:.3,heightAmp:10,caveFreq:.8,caveThreshold:.6}}}function S(I,P,f,C={}){if(!R||!Z)throw new Error("Terrain generator not initialized");const{debug_more_poppies:q=!1}=C,{seaLevel:G,maxHeight:m,heightAmp:N}=R.params,w=I*f,t=P*f,r=new Array(f),a=new Array(f),n=new Array(f);for(let e=0;e<f;e++){a[e]=new Array(f),n[e]=new Array(f);for(let o=0;o<f;o++){const s=w+e,v=t+o,i=.05,p=.1*Z.perlin2(s*.05,v*.05),h=.1*Z.perlin2(s*.05+500,v*.05+500),l=(1*Z.perlin2(i*(s+p),i*(v+h))+.5*Z.perlin2(2*i*(s+p)+5.3,2*i*(v+h)+9.1)+.25*Z.perlin2(4*i*(s+p)+13.7,4*i*(v+h)+17.3))/(1+.5+.25),c=Math.pow(l,2.3);let d=Math.floor(G+N*c);d=Math.max(1,Math.min(m-1,d)),a[e][o]=d,n[e][o]=(Z.perlin2(i*s+300,i*v+900)+1)*.5}}for(let e=0;e<f;e++){r[e]=new Array(f);for(let o=0;o<f;o++){r[e][o]=new Array(m).fill(0);const s=w+e,v=t+o,i=a[e][o],p=n[e][o],h=2+Math.floor(p*2);for(let l=0;l<=i;l++)l===i?r[e][o][l]=1:l>=i-h?r[e][o][l]=2:r[e][o][l]=3;if(i<G)for(let l=i+1;l<=G;l++)r[e][o][l]=4;if(i>=G-1&&r[e][o][i]===1){let l=q?.8:.15;const c=1-Math.abs((p-.6)*2.5);l*=Math.max(.1,c),Z.perlin2(s*.2,v*.2)>.3&&Math.random()<l&&(r[e][o][i+1]=5,I===0&&P===0&&e<8&&o<8&&console.log("Generated poppy at chunk position",e,i+1,o))}}}return r}})();
