# Inpus Management API

## Deskripsi
API ini digunakan untuk mengelola data tryout,golden ticket dan lain lain termasuk pembuatan, pengambilan, pengeditan, dan penghapusan data tryout. API ini juga dilindungi oleh otentikasi JWT (JSON Web Token).

## Fitur
- **Autentikasi JWT**: Melindungi endpoint dengan token JWT.
- **CRUD Tryout**: Membuat, membaca, memperbarui, dan menghapus data tryout.
- **CRUD Golden Ticket**: Membuat, membaca, memperbarui, dan menghapus data golden ticket.

## Instalasi

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/username/repository.git
   cd repository
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   # atau jika menggunakan yarn
   yarn install
   ```

3. **Buat file `.env`** dan tambahkan variabel berikut:
   ```
   JWT_SECRET=your_secret_key
   MONGODB_URI=mongodb://localhost:27017/tryout-db
   ```

4. **Jalankan server**:
   ```bash
   npm start
   # atau jika menggunakan yarn
   yarn start
   ```

   Server akan berjalan di `http://localhost:8000`.

## Endpoint API

### 1. **Register User**

   - **URL**: `/register`
   - **Method**: `POST`
   - **Deskripsi**: Mendaftarkan pengguna baru.
   - **Request Body**:
     ```json
     {
       "name": "Nama Pengguna",
       "email": "email@example.com",
       "password": "password"
     }
     ```

### 2. **Login User**

   - **URL**: `/login`
   - **Method**: `POST`
   - **Deskripsi**: Melakukan login dan mendapatkan token JWT.
   - **Request Body**:
     ```json
     {
       "email": "email@example.com",
       "password": "password"
     }
     ```

### 3. **Create Tryout**

   - **URL**: `/tryout/post`
   - **Method**: `POST`
   - **Deskripsi**: Membuat data tryout baru.
   - **Headers**: 
     - `Authorization: Bearer <token>`
   - **Request Body**:
     ```json
     {
       "nama": "IsClass Batch 2",
       "tanggal": "2024-09-01",
       "penyelenggara": "ITS",
       "biaya_masuk": 0
     }
     ```

### 4. **Get All Tryouts**

   - **URL**: `/tryout`
   - **Method**: `GET`
   - **Deskripsi**: Mengambil semua data tryout.

### 5. **Get Tryout by Name**

   - **URL**: `/tryout/<name>`
   - **Method**: `GET`
   - **Deskripsi**: Mengambil data tryout berdasarkan nama.

### 6. **Update Tryout**

   - **URL**: `/tryout/<tryout_id>`
   - **Method**: `PUT`
   - **Deskripsi**: Memperbarui data tryout berdasarkan `tryout_id`.
   - **Headers**: 
     - `Authorization: Bearer <token>`
   - **Request Body**:
     ```json
     {
       "nama": "IsClass Batch 2 - Updated",
       "tanggal": "2024-09-02",
       "penyelenggara": "ITS - Updated",
       "biaya_masuk": 50000
     }
     ```

### 7. **Delete Tryout**

   - **URL**: `/tryout/<tryout_id>`
   - **Method**: `DELETE`
   - **Deskripsi**: Menghapus data tryout berdasarkan `tryout_id`.
   - **Headers**: 
     - `Authorization: Bearer <token>`

### 8. **Create Golden Ticket**

   - **URL**: `/goldenticket/post`
   - **Method**: `POST`
   - **Deskripsi**: Membuat data Golden Ticket baru.
   - **Headers**: 
     - `Authorization: Bearer <token>`
   - **Request Body**:
     ```json
     {
       "nama": "Mage X",
       "tanggal": "2024-09-01",
       "penyelenggara": "ITS",
       "biaya_masuk": 100000,
       "deskripsi": "sebuah perlombaan yang menawarkan golden ticket untuk para pemenangnya"
     }
     ```

### 9. **Get All Golden Ticket**

   - **URL**: `/goldenticket`
   - **Method**: `GET`
   - **Deskripsi**: Mengambil semua data Golden Ticket.

### 10. **Get Golden Ticket by Name**

   - **URL**: `/goldenticket/<name>`
   - **Method**: `GET`
   - **Deskripsi**: Mengambil data Golden Ticket berdasarkan nama.

### 11. **Update Golden Ticket**

   - **URL**: `/goldenticket/<golden_id>`
   - **Method**: `PUT`
   - **Deskripsi**: Memperbarui data tryout berdasarkan `golden_id`.
   - **Headers**: 
     - `Authorization: Bearer <token>`
   - **Request Body**:
     ```json
     {
       "nama": "Mage X",
       "tanggal": "2024-09-01",
       "penyelenggara": "ITS --update",
       "biaya_masuk": 100000,
       "deskripsi": "sebuah perlombaan yang menawarkan golden ticket untuk para pemenangnya"
     }
     ```

### 7. **Delete Golden Ticket**

   - **URL**: `/goldenticket/<golden_id>`
   - **Method**: `DELETE`
   - **Deskripsi**: Menghapus data Golden Ticket berdasarkan `golden_id`.
   - **Headers**: 
     - `Authorization: Bearer <token>`

<br>
<p align="center">
  <b>Let's Connect and Build Something Amazing Together!</b>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-v14.17.5-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-v4.17.1-blue?style=for-the-badge&logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-v4.4.6-brightgreen?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/TypeScript-v4.3.5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
</div>

<p align="center">
  Made with ❤️ by <a href="https://github.com/bintangbtg">Bintang Btg</a>
</p>
