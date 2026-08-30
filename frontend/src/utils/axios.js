import axios from 'axios';

const api = axios.create({
  // ดึงค่า URL มาจาก .env ของ Frontend
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
  timeout: 10000,
});

// Interceptor สำหรับแนบ Token ไปกับทุก Request อัตโนมัติ
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor สำหรับดักจับ Response กรณี Token หมดอายุ (401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Token expired or invalid, logging out...');
      localStorage.removeItem('token');
      // หากใช้งานจริง อาจจะยิงคำสั่งพาเตะกลับหน้า Login ตรงนี้
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
