// Thứ tự làm: Render dữ liệu -> Xóa -> Đánh dấu hoàn thành -> Sửa
const jobs = [
  {
    id: 1,
    name: "Quét nhà",
    isCompleted: true,
  },
  {
    id: 2,
    name: "Giặt quần áo",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Nấu cơm",
    isCompleted: true,
  },
  {
    id: 4,
    name: "Lau nhà",
    isCompleted: false,
  },
  {
    id: 5,
    name: "Chơi game",
    isCompleted: false,
  },
];

// Lấy ra các phần tử trong DOM
const jobListElement = document.querySelector("#job-list");

// 1. Dùng map() để render dữ liệu
const newJobList = jobs.map(function (job) {
  return `
     <div>
        <input type="checkbox" />
        <s>${job.name}</s>
        <button>Sửa</button>
        <button>Xóa</button>
      </div>
      <hr />
    `;
});

// Gắn dữ liệu từ mảng vào trong giao diện
// Lưu ý: Ngoài trình duyệt thì chỉ chấp nhân chuỗi html chứ không chấp nhận
// mảng chuỗi. vì vậy trước khi gán vào DOM thì cần phải chuyển đổi từ mảng thành chuỗi

jobListElement.innerHTML = newJobList.join("");
