// Thứ tự làm: Render dữ liệu -> Xóa -> Đánh dấu hoàn thành -> Sửa
const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

// Seed dữ liệu mẫu lên localStorage
// localStorage.setItem("jobs", JSON.stringify(jobs));

// Lấy ra các phần tử trong DOM
const jobListElement = document.querySelector("#job-list");
const formElement = document.querySelector("#form");
const jobNameElement = document.querySelector("#job-name");
const errorElement = document.querySelector("#error");

// hàm render danh sách công việc
function renderJobList() {
  if (jobs.length === 0) {
    jobListElement.innerHTML = "<h3>Chưa có công việc nào. Vui lòng thêm!</h3>";
    return;
  }

  // 1. Dùng map() để render dữ liệu
  const newJobList = jobs.map(function (job) {
    // Render dữ liệu có điều kiện
    return `
     <div>
        <input type="checkbox" />
        ${
          job.isCompleted === true
            ? `<s>${job.name}</s>`
            : `<span>${job.name}</span>`
        }
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
}

renderJobList();

// Hàm thêm công việc
function createJob(event) {
  // Ngăn chặn sự kiện mặc định của form (load lại trang)
  event.preventDefault();

  //   Kiểm tra dữ liệu đầu vào
  if (jobNameElement.value === "") {
    // Show ra lỗi và không xử lý logic thêm/sửa
    errorElement.style.display = "block";
  } else {
    // Ẩn lỗi đi
    errorElement.style.display = "none";

    // Gom nhóm tất cả dữ liệu từ form thành 1 đối tượng
    const newJob = {
      id: Math.ceil(Math.random() * 1000000),
      name: jobNameElement.value,
      isCompleted: false,
    };

    // Thêm dữ liệu vào trong mảng
    jobs.unshift(newJob);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    // Gọi lại hàm render để load dữ liệu
    renderJobList();

    // Reset giá trị trong input
    jobNameElement.value = "";
  }
}

// 2. Chức năng thêm
formElement.addEventListener("submit", createJob);

// 3.
