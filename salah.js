        // إضافة تفاعلية للأزرار
        document.querySelector('.back-btn').addEventListener('click', function() {
            window.location.href = 'index.html';
        });

        // تغيير لون الخطوات النشطة
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => {
            step.addEventListener('click', () => {
                steps.forEach(s => s.classList.remove('active'));
                step.classList.add('active');
            });
        });