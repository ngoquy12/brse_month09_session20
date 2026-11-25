// Lấy dữ liệu từ local về và chuyển đổi ngược lại thành kiểu JS
const numbers = JSON.parse(localStorage.getItem("numbers")) || [];

console.log("numbers: ", numbers);

const numberListElement = document.querySelector("#number-list");
const buttonRandom = document.querySelector("#button-random");

console.log(numberListElement);

// Chèn nội dung vào phần tử
numberListElement.textContent = JSON.stringify(numbers);

// Bắt sự kiện khi click
buttonRandom.addEventListener("click", function () {
  //   Tạo ra 1 số ngẫu nhiên
  console.log(Math.ceil(Math.random() * 10));

  //   Push số ngẫu nhiên vào trong mảng
  numbers.push(Math.ceil(Math.random() * 10));

  // Lưu mảng chứa các số lên trên localStorage
  localStorage.setItem("numbers", JSON.stringify(numbers));

  // Chèn nội dung vào phần tử
  numberListElement.textContent = JSON.stringify(numbers);
});
