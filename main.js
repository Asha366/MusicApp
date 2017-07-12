
	function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
	
	
	/*Humne ek function bnaya, 
	usme code likha,ab jab  bi humein same code ki jarurat kahin pdegi
	to hum sidhe function ko call krenge*/
	function toggleSong() {
		var song = document.querySelector('audio');
		//== will compare the both sides
		if(song.paused == true) {
		//console also used to debug the code
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
		else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
		}
		
		function updateCurrentTime() {
			var song = document.querySelector('audio');
			//console.log(song.currentTime);
			//console.log(song.duration);
			var currentTime = Math.floor(song.currentTime);
			/*we call the function called 'fancyTimeFormat'
			We pass it the currentTime
			Whatever value it returns,
			we catch it in the same variable*/
			currentTime = fancyTimeFormat(currentTime);
			var duration = Math.floor(song.duration);
			duration = fancyTimeFormat(duration)
			$('.time-elapsed').text(currentTime);
			$('.song-duration').text(duration);

			}
			
			function addSongNameClickEvent(songName,position) {
				var id = '#song' + position;
			$(id).click(function() {
			var audio = document.querySelector('audio');
			var currentSong = audio.src;
			if(currentSong.search(songName) != -1)
			{
			toggleSong();
			}
			else {
			audio.src = songName;
			toggleSong();
			}
			
			});
			}
			



/*This means, 1. Wait for the website to load
2. Once it has loaded, run everything that is in the function
time will be  updated after every 1 second*/
			window.onload = function() {
			updateCurrentTime();
			setInterval(function(){
			updateCurrentTime();
			},1000);
			
			
			//var songName1 = 'Tamma Song';
			//var songName2 = 'Humma Song';
			//var songName3 = 'Nashe Si Chadh Gayi';
			//var songName4 = 'The Breakup Song';
			/*humne ek array bnaya
			ab humein baar baar
			variable ko define nhi krna pdega
			ek variable me sari information dal di*/
			
			 var songs = [{
        'name': 'Tamma Tamma Again',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3'
    }]
	
	
	
			//for(var i =0; i < songList.length;i++) {
        //var name = '#song' + (i+1);
		//In this case, we only have to search for #song1 once and then we save the place where we found it
        //var song = $(name);
        //song.find('.song-name').text(songList[i]);
        //song.find('.song-artist').text(artistList[i]);
		 //song.find('.song-album').text(albumList[i]); // Added
        //song.find('.song-length').text(durationList[i]); // Added
   // }
			
			
			//addSongNameClickEvent(fileNames[0],1);
			//addSongNameClickEvent(fileNames[1],2);
			//addSongNameClickEvent(fileNames[2],3);
			//addSongNameClickEvent(fileNames[3],4);

				//for (var i = 0;i < fileNames.length; i++) {
				//addSongNameClickEvent(fileNames[i],i+1)
					//} 

/* as soon as our website is loaded, 
updateCurrentTime runs and 
then after every 1 second, 
setInterval makes it run again*/
			

    for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj.fileName,i+1);
    }
			
			
			

	/* jquery ne kisi tag ki welcome-screen
	ke andar kisi button class ko dhundha aur uspe on click 
	function lgaya mtlb click krne pe kuch hoga*/
		$('.welcome-screen button').on('click', function() {
	/*jquery ne kisi id name-input ki value ek message 
	naam ke variable me store kar di*/
        var name = $('#name-input').val();
	/*agr name ki length 2 se jada hai
	tab ek message show hoga welcome "name"*/
        if (name.length > 2) {
            var message = "Welcome, " + name; 
			$('.main .user-name').text(message);
	/*jquery ne kisi main class me user-name class 
	ke text me message ki value daal di*/
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
	/*agr name ki length 2 se kam hai to
	input pe ek red color ka border aa jayega mtlb error*/
            $('#name-input').addClass('error');
        }
    });
	
	
    $('.play-icon').on('click', function() {
        toggleSong(); 
    });
	
	/*jQuery ne puri body pe keypress event lgaya
	jis se ab space dbane pe bhi gana play or 
	pause ho skta hai*/
         $('body').on('keypress', function(event) {
	//keycode of space bar in javascript is 32
                if (event.keyCode == 32) {
                  toggleSong();   
				  
            }
			});
			}
			