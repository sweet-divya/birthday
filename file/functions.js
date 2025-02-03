

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

// function timeElapse(date) {
//     var current = new Date(); // Get the current date and time
//     var parsedDate = Date.parse(date); // Parse the input date string
//     var seconds = (current - parsedDate) / 1000; // Calculate the difference in seconds

//     // Calculate days
//     var days = Math.floor(seconds / (3600 * 24));
//     seconds %= (3600 * 24);

//     // Calculate hours
//     var hours = Math.floor(seconds / 3600);
//     hours = hours < 10 ? "0" + hours : hours;

//     // Calculate minutes
//     seconds %= 3600;
//     var minutes = Math.floor(seconds / 60);
//     minutes = minutes < 10 ? "0" + minutes : minutes;

//     // Calculate seconds
//     seconds %= 60;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     // Format the result for display
//     var result = `
//         <span class="digit">${days}</span> <span class="clock-span">Days</span>  
//         <span class="digit">${hours}</span> <span class="clock-span">Hours</span>  
//         <span class="digit">${minutes}</span> <span class="clock-span">Minutes</span>  
//         <span class="digit">${Math.floor(seconds)}</span> <span class="clock-span">Seconds</span>
//     `;

//     // Display the result in the element with ID 'clock'
//     document.getElementById("clock").innerHTML = result;

//     // Display the message
//     var text = "THE WORLD JUST GOT LUCKIER SINCE ";
//     document.getElementById("message-box").innerHTML = text;
// }

function timeSince(date) {
    const now = new Date();

    // Manually adjust 'now' and 'date' to IST (UTC +5:30)
    const IST_OFFSET = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
    const nowInIST = new Date(now.getTime() + IST_OFFSET);
    const dateInIST = new Date(date.getTime() + IST_OFFSET);

    // Ensure the provided date is a valid Date object
    if (!(date instanceof Date)) {
        throw new Error("Invalid date input");
    }
    
    let years = nowInIST.getFullYear() - dateInIST.getFullYear();
    let months = nowInIST.getMonth() - dateInIST.getMonth();
    let days = nowInIST.getDate() - dateInIST.getDate();
    let hours = nowInIST.getHours() - dateInIST.getHours();
    let minutes = nowInIST.getMinutes() - dateInIST.getMinutes();
    let seconds = nowInIST.getSeconds() - dateInIST.getSeconds();

    // Adjust for negative time values (like months, days, hours, etc.)
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // If days are negative, adjust by getting the previous month and calculating days in that month
        const prevMonth = new Date(nowInIST.getFullYear(), nowInIST.getMonth() - 1, 1);
        days += new Date(nowInIST.getFullYear(), nowInIST.getMonth(), 0).getDate(); // Number of days in the previous month
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Return the result
    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}
function playVideoFromPoint() {
    let video = document.getElementById("happycatvideo");
  
    // Set the start time (e.g., 5 seconds)

  
    // Start the video
    video.play();
    video.muted = true;
    
    // Enable looping once the video reaches the end
    video.loop = true;
  }
  
  // Call the function wherever you need to start the video

  
function timeElapse(date) {
    var current = new Date(); // Get the current date and time
    var parsedDate = new Date(date); // Parse the input date string into a Date 
    const pastDate = new Date('2007-02-12T18:57:00')
    let timer = timeSince(pastDate)
    // Build the final result
    var result = `
     <span class="digit" >THE WORLD JUST GOT LUCKIER FOR 🎊 :</span>

        <span class="digit">${timer.years} Years</span> 
        <span class="digit">${timer.months} Months</span> 
        <span class="digit">${timer.days} Days</span>  
        <span class="digit">${timer.hours} Hours</span> 
        <span class="digit">${timer.minutes} Minutes</span> 
        <span class="digit">${timer.seconds} Seconds</span> 
    `;

    // Update the UI
    document.getElementById("clock").innerHTML = result;
    document.getElementById("ourchat").style.display = 'flex';
    document.getElementById("happycat").style.display = 'flex';
    document.getElementById("certi").style.display = 'flex';
    playVideoFromPoint();
    // document.getElementById("clock").appendChild = result;

}


