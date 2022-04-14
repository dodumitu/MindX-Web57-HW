2. Danh sách sản phẩm có giá bán từ 50000 đến 100000

```
const products = await ProductModel.find({ $and: [
    { price: { $min: 50000 }},
    { price: { $max: 100000 }}
]})
```

3. Danh sách sản phẩm có title hoặc description chứa từ khoá "áo" (không phân biệt hoa thường)

```
const products = await ProductModel.find({$or:[
    { title:{$regex: /áo/i}}  ,
    {description: {$regex: /áo/i} }] })
```

4. Danh sách sản phẩm không thể bán (hết số lượng tồn kho)

```
const products = await ProductModel.find({stockQuantity:{$eq:0}})
```

5. Danh sách sản phẩm được đánh giá cao (có rating lớn hơn hoặc bằng 4)

```
const products = await ProductModel.find({rating:{$gte:4}})
```

6. Danh sách sản phẩm trending (có lượt view từ 2000) sắp xếp theo chiều giảm dần số view

```
const products = await ProductModel
.find({viewCount:{$gte:2000}})
.sort({viewCount:-1})
```

7. Danh sách sản phẩm có tags là "nam"

```
const products = await ProductModel.find({tags:"nam"})
```

8. Danh sách sản phẩm theo giá bán tăng dần

```
const products = await ProductModel.find().sort({price:1})
```

9. Danh sách sản phẩm thuộc danh mục "Quần áo" bán chạy (số lượng bán ra lớn hơn 100) sắp xếp theo bảng chữ cái alphabet tăng dần của title

```
const products = await ProductModel.find({$and: [
    {sellQuantity:{$gte:100}},
    {category:"Quần áo"}]})
    .sort({ title:1 })
```
