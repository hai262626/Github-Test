const facts = [
  'John thích xây thứ gì đó đẹp trước, thông minh sau, rồi tối ưu dần bằng dữ liệu.',
  'Anh thường bắt đầu bằng layout và nhịp chữ trước khi viết những dòng logic đầu tiên.',
  'John tin rằng một giao diện tốt phải làm người dùng thấy dễ hiểu ngay từ 3 giây đầu.',
  'Cách làm việc của John là chia nhỏ vấn đề, làm nhanh, kiểm chứng sớm và sửa gọn.',
  'Trang web nào cũng có thể thêm hiệu ứng, nhưng John thích hiệu ứng có lý do rõ ràng.'
];

const skillDetails = {
  UI: {
    title: 'UI Design',
    description: 'John biết cách dùng màu, khoảng trống, nhịp chữ và bố cục để tạo cảm giác có chủ đích thay vì chỉ “đặt cho đủ”.',
    meter: '92%'
  },
  FE: {
    title: 'Front-end',
    description: 'Từ layout responsive đến tương tác nhỏ, John ưu tiên trải nghiệm mượt và cấu trúc dễ bảo trì.',
    meter: '88%'
  },
  PM: {
    title: 'Product Thinking',
    description: 'John thường đặt câu hỏi về mục tiêu, người dùng và độ ưu tiên trước khi thêm bất kỳ chi tiết nào.',
    meter: '84%'
  },
  DATA: {
    title: 'Data Review',
    description: 'Anh dùng dữ liệu như một công cụ để xác nhận điều gì đang hiệu quả, thay vì cố “đoán cảm giác”.',
    meter: '79%'
  }
};

const factText = document.getElementById('factText');
const shuffleFactButton = document.getElementById('shuffleFact');
const themeToggleButton = document.getElementById('themeToggle');
const skillButtons = document.querySelectorAll('.skill-item');
const skillDetail = document.getElementById('skillDetail');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const revealItems = document.querySelectorAll('.reveal');
const yearsExp = document.getElementById('yearsExp');

let factIndex = 0;

function renderFact(index) {
  factText.textContent = facts[index];
}

shuffleFactButton.addEventListener('click', () => {
  factIndex = Math.floor(Math.random() * facts.length);
  renderFact(factIndex);
  shuffleFactButton.textContent = 'Fact mới: ' + (factIndex + 1);
});

skillButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const skillKey = button.dataset.skill;
    const detail = skillDetails[skillKey];

    skillButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    skillDetail.innerHTML = `
      <h3>${detail.title}</h3>
      <p>${detail.description}</p>
      <div class="meter"><span style="width: ${detail.meter}"></span></div>
    `;
  });
});

const savedTheme = localStorage.getItem('jd-theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggleButton.textContent = 'Tắt nhịp';
}

themeToggleButton.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('jd-theme', isLight ? 'light' : 'dark');
  themeToggleButton.textContent = isLight ? 'Tắt nhịp' : 'Bật nhịp';
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');

  formNote.textContent = `Cảm ơn ${name}! Tin nhắn demo đã được ghi nhận, John sẽ phản hồi bằng tinh thần “gọn nhưng chất”.`;
  contactForm.reset();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => observer.observe(item));

let displayedYears = 0;
const targetYears = 8;
const yearsTimer = window.setInterval(() => {
  displayedYears += 1;
  yearsExp.textContent = displayedYears + '+';
  if (displayedYears >= targetYears) {
    window.clearInterval(yearsTimer);
  }
}, 120);

renderFact(factIndex);
