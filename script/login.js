document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value;
    
    if (usernameInput === 'Sombath0012' && passwordInput === 'sombath12345') {
        Swal.fire({
            icon: 'success',
            title: 'ចូលដោយជោគជ័យ!',
            text: 'កំពុងបញ្ជូនទៅកាន់ទំព័រដើម...',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = 'student_dashboard.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'បរាជ័យ',
            text: 'ឈ្មោះអ្នកប្រើប្រាស់ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។\n សូមសាកល្បង Username: Sombath0012 Password: sombath12345',
            confirmButtonColor: 'var(--button-color)'
        });
    }
});
