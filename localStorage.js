// localStorage là 1 tính năng của web API. Giúp lưu trữ dữ liệu vĩnh viên
// trên trình duyệt web, trừ khi bị xóa đi
// 1. Kiểu dữ liệu JSON: Là kiểu dữ liệu được sử dụng phổ biến để kết
// nối giữa FE và BE với nhau. Gồm key và value (tương tự object), tuy nhiên
// phải được bọc trong dấu nháy "kép"

// 2. Các thao tác làm việc với localStorage
// 2.1. Thao tác đọc dữ liệu
const userLocal = localStorage.getItem("user");
const productLocal = localStorage.getItem("product");
// Nếu dữ liệu trên local là object, array thì khi lấy về cần phải chuyển
// đổi thành kiểu dữ liệu của JS (từ kiểu JSON -> JS)
const studentLocals = JSON.parse(localStorage.getItem("students")) || [];

console.log("userLocal: ", userLocal);
console.log("productLocal: ", productLocal);
console.log("studentLocals: ", studentLocals);

// 2.2. Thao tác ghi dữ liệu
localStorage.setItem("className", "BRSE tháng 9");

const products = [
  {
    id: 1,
    name: "Cam",
    price: 20000,
  },
];

// Trước khi muốn lưu dữ liệu lên local có giá trị là kiểu object, array
// bát buộc phải convert từ kiểu JS -> JSON
localStorage.setItem("products", JSON.stringify(products));

// 2.3. Thao tác xóa 1 hoặc nhiều dữ liệu
localStorage.removeItem("product");

// 2.4. Thao tác xóa tất cả dữ liệu
// localStorage.clear();
