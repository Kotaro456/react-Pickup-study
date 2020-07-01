const path = require('path');

// expressのインポート
const express = require('express');
const app = express();

// distまでのpath
const distPath = path.join(__dirname, '..', 'dist');

// port指定
const port = process.env.PORT || 3000;

// Expressにデフォで入っている dist内のファイルを提供
app.use(express.static(distPath));

// 提供するファイル
app.get('*', (req, res) => {
   res.sendFile(path.join(distPath, 'index.html'));
});

// ローカル環境で使うportの指定 3000
app.listen(port, () => {
   console.log('Server is up!');
});