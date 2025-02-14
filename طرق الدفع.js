function selectPayment(type) {
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // إدارة عرض النماذج
    document.getElementById('creditForm').style.display = 'none';
    document.getElementById('yemenForm').style.display = 'none';
    
    if(type === 'credit') {
        document.getElementById('creditForm').style.display = 'block';
    } 
    else if(type === 'yemen') {
        document.getElementById('yemenForm').style.display = 'block';
        document.querySelector('.yemen-payment-details').style.display = 'block';
    }
}

function processPayment() {
    const selectedMethod = document.querySelector('.payment-card.selected h3').textContent;
    
    if(selectedMethod.includes('يمنية')) {
        const accountNumber = document.querySelector('#yemenForm input[type="text"]').value;
        
        if(accountNumber.length !== 14 || !/^\d+$/.test(accountNumber)) {
            alert('رقم الحساب يجب أن يكون 14 رقماً');
            return;
        }
        
        // معالجة الدفع اليمني
        alert('تم إرسال تفاصيل التحويل البنكي بنجاح');
        window.location.href = 'confirmation.html';
    }
    else {
        // معالجة الطرق الأخرى
    }
}