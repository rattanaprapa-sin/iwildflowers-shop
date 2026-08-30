import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // เพิ่ม reducer อื่นๆ ที่นี่
  },
  // ปิด serializableCheck ชั่วคราวถ้ามีข้อมูลที่ซับซ้อนเกินไป (ถ้าจำเป็น)
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
