    const logOut=document.getElementById("logOut");
		const profCon=document.getElementById("profCon");
		const prof=document.getElementById("prof");
		const ping = document.getElementById("ping");
		const cbAPC=document.getElementById('cAPC');
		if(document.getElementById('admin-link')){
				cbAPC.style.display = 'block';
			} else {
				cbAPC.style.display = 'none';
			}	
		if('<!-- |name| -->' == 'Guest'){
			logOut.style.display = 'none';
			profCon.style.display = 'none';
			prof.style.display = 'none';
			ping.style.display = 'none';
		} else {
			document.getElementById("logOut").href=document.getElementById("log-out").getAttribute("href");
			document.getElementById("profCon").href=document.getElementById("my-controls").getAttribute("href");		
			document.getElementById("prof").href=document.getElementById("logged-in-as").getAttribute("href");
			
		}
