// Main Functions
// Teleport from pages Function
function TeleportToAboutPage() {
    window.location.href = '###';
    return;
}

// Download Files Function

function downloadFile(fileUrl, fileName) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download Game For PC  Function
document.getElementById("btn-apk").onclick = () => {
    downloadFile("Files/game-for-android/app-release.apk", "Setup-Ben-El-Sotor.apk");
}

// Download Game For Mobile Function
document.getElementById("btn-exe").onclick = () => {
    downloadFile("Files/game-for-windows/ben-el-sototr Setup 1.0.0.exe", "Setup-Ben-El-Sotor.exe");
}

// 🌟 This Code Writed By Mohanad 🌟