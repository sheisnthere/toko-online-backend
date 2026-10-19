const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number,
  emoji: String
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const products = [
  { name: "Tumbler Stainless", price: 85000, description: "Tumbler anti bocor, tahan panas & dingin 12 jam", stock: 20, emoji: "🥤" },
  { name: "Lampu Meja LED", price: 120000, description: "Lampu belajar hemat energi, 3 mode cahaya", stock: 15, emoji: "💡" },
  { name: "Tas Ransel Anti Air", price: 250000, description: "Ransel kasual anti air, muat laptop 14 inch", stock: 8, emoji: "🎒" },
  { name: "Sepatu Sneakers", price: 320000, description: "Sneakers nyaman untuk harian, sol anti slip", stock: 12, emoji: "👟" },
  { name: "Jam Tangan Digital", price: 175000, description: "Jam digital sporty, tahan air, ada alarm", stock: 10, emoji: "⌚" }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ 5 produk berhasil ditambahkan!');
    process.exit();
  })
  .catch(err => {
    console.log('❌ Error:', err);
    process.exit();
  });