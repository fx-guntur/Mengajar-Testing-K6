@echo off
echo ===============================
echo Memulai Load Test API Optimal
echo ===============================
k6 run load_test.js
echo.
echo ===============================
echo Memulai Load Test API Non-Optimal
echo ===============================
k6 run load_test_nonoptimal.js
echo.
echo Semua load test selesai.
pause
