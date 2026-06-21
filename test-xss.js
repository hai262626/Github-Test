// Lấy dữ liệu trực tiếp từ thanh địa chỉ (URL) do người dùng nhập vào
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// LỖI CHÍ MẠNG: Nhét thẳng cái biến đó vào innerHTML mà không kiểm duyệt
// Hacker có thể nhập username là một đoạn mã độc <script> để hack trang web
document.getElementById('welcome-message').innerHTML = "Hello " + username;
