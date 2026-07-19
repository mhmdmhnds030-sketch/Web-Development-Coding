// 1. فحص الذاكرة المحلية فور تحميل الصفحة لتطبيق الوضع المحفوظ
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("theme-mode");

    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    // 2. ربط زر التبديل المكتوب في الـ HTML
    const toggleButton = document.getElementById("darkModeToggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // حفظ الخيار المختار في الذاكرة لتطبيقه على باقي الملفات
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme-mode", "dark");
            } else {
                localStorage.setItem("theme-mode", "light");
            }
        });
    }
});
