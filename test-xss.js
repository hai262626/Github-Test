// Lấy dữ liệu trực tiếp từ thanh địa chỉ (URL) do người dùng nhập vào
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Hiển thị dữ liệu người dùng dưới dạng text để tránh DOM XSS
const welcomeMessageEl = document.getElementById('welcome-message');
welcomeMessageEl.textContent = "Hello " + (username ?? "");
