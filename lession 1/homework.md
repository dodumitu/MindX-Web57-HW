EX1
```

    const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
return {...obj}
};
const obj2 = cloneDeep(obj1);
obj2.x = 10;

console.log(obj1);
console.log(obj2);

```

EX3

in ra undefined. Do hoisting, var text đuọc khai báo trước có giá trị undefined

EX5

kết quả hiện ra lần lượt 1-2-1

hàm counter() chạy thì biến count khởi tạo bằng 0, this.up và this.down trả lại giá trị đuọc tính toán, giá trị này đuọc lưu lại trong counter mà không bị reset

EX6

in ra lần lượt
```

hello
hi
world

```

do thứ tự các đoạn code sẽ được chạy từ trên xuống dưới, nhưng setTimeout là 1 hàm timer nên sẽ đuọc xếp vào hàng chờ theo cơ chế bất đồng bộ và đuọc thực thi sau

