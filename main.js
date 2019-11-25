let contact_info = [
	{
		name:'Tim Hover',
		image:'p1.jpg',
		info:'Works At Microsoft.',
		files:['imp.jpg','profile','job_noti.']
	},
	{
		name:'Marian Zuch',
		image:'p2.jpg',
		info:'Venture Capitalist. Masters in Business',
		files:['Landing_Page.zip','Requiremets.txt','img.png']
	},
	{
		name:'Maria',
		image:'p7.jpg',
		info:'Fashion Designer and Social Activist',
		files:['article.jpg','contact','CRUS.html']
	},
	{
		name:'John Oliver',
		image:'p4.jpg',
		info:'Host of Famous News Programme',
		files:['course.zip','imp.zip','meet.png']
	},
	{
		name:'Fergi',
		image:'p5.jpg',
		info:'Massive Machester United Fan(GGFU)',
		files:['Article(Man U.)','Chat_ROOM','Bet Link']
	},
	{
		name:'Josh Trevor',
		image:'p6.jpg',
		info:'CEO and Founder At U.S.S',
		files:['course.zip','contact','meet.png']
	},
	{
		name:'Noah',
		image:'p3.jpg',
		info:'Blogger and Former Adobeian',
		files:['course.zip','contact','meet.png']	
	},
	{
		name:'Windy',
		image:'p8.jpg',
		info:'Model and Photographer',
		files:['profile','contact','home.svg']
	}
]


function info(x){
	let list = document.getElementById('files');
	let files = list.getElementsByTagName('span');
	let i=0;
	let name=x.innerText
	contact_info.forEach((con)=>{
		if(con.name==name){
			document.getElementById('chat-name').innerHTML=con.name;
			document.getElementById('chat_img').src='images/'+ con.image;
			document.getElementById('info-content').innerHTML=con.info;
			document.getElementById('info-name').innerHTML=con.name;
			document.getElementById('info-img').src='images/' + con.image
			con.files.forEach((file)=>{
				files[i].innerHTML=file;
				i++
			})	
		}
	})
}

function func(x){
	 if(event.keyCode == 13 && x.value!='') {
	 	let y = document.getElementById('new');
	 	y.style.display = 'block';
	 	// y.style.padding = 'inherit';
	 	let p = document.createElement('p');
	 	p.innerHTML=x.value
	 	let sp = document.createElement('sup');
	 	let tx = document.createTextNode('A Moments Ago');
	 	p.innerHTML = x.value;
	 	sp.appendChild(tx);	
	 	// sp.style.fontSize=10
	 	y.appendChild(p);
	 	y.appendChild(sp)
	 	y.classList.add('rev-chat');
    }
}

function toggleInfo(){
	let info = document.getElementById('info')
	if(info.style.display=='none'){
		info.style.display = 'block';
	}
	else info.style.display='none';
}

function toggle(){
	let disp = document.getElementById('files')
	let hide = document.getElementById('hide')
	let span = hide.getElementsByTagName('span')[0]
	if(disp.style.display =='block'){
		disp.style.display = 'none';
		span.innerHTML='&#9660;'
	} 
	else {
		disp.style.display='block';
		span.innerHTML='&#9650;'
	}
}

function filter() {
    var input, filter_value, first,second, a, i, txtValue,org;
    input = document.getElementById("filter");
    org = document.getElementsByClassName('contact')
    filter_value = input.value.toLowerCase();
    first = document.getElementById("contacts");
    second = first.getElementsByTagName("p");
    for (i = 0; i < second.length; i++) {
        txtValue = second[i].textContent || second[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter_value) > -1) {
            org[i].style.display = "flex";
        } else {
        	org[i].style.display = 'none';
        }
    }
}