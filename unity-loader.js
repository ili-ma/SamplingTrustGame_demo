var psiTurk = {
	// NOTE: Replace this with a real psiTurk instance
	startTask: function () { },
	recordTrialData: function () { },
	saveData: function () { },
	completeHIT: function () { },
};

var fadeTriggered = false;

function fadeLoader() {
	var fadeTarget = document.querySelector("#loader");
	fadeTarget.style.opacity = 1;
    var fadeEffect = setInterval(function () {
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
			clearInterval(fadeEffect);
			loader.style.display = "none";
        }
    }, 33);
}

function UnityProgress(gameInstance, progress) {
	if (!gameInstance.Module) {
		return;
	}
	const loader = document.querySelector("#loader");
	if (!gameInstance.progress) {
		const progress = document.querySelector("#loader .progress");
		progress.style.display = "block";
		gameInstance.progress = progress.querySelector(".full");
		loader.querySelector(".spinner").style.display = "none";
	}
	gameInstance.progress.style.transform = `scaleX(${progress})`;
	if (progress === 1 && !fadeTriggered) {
		fadeTriggered = true;
		fadeLoader();
	}
}
