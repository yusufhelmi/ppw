document.addEventListener('DOMContentLoaded', function() {
    // Animasi
    const heroSection = document.querySelector('.hero');
    const whyUsSection = document.querySelector('.why-us');
    const dokumenSection = document.querySelector('.dokumen-populer');

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        heroSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        setTimeout(() => { 
            heroSection.classList.add('fade-in');
        }, 100);
    }

    if (whyUsSection) {
        observer.observe(whyUsSection);
    }
    if (dokumenSection) {
        observer.observe(dokumenSection);
    }
    
    // Kolom Pencarian

    const searchForm = document.querySelector('.navbar form[role="search"]');
    const searchInput = searchForm ? searchForm.querySelector('input[type="search"]') : null;

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const searchTerm = searchInput.value.toLowerCase().trim();

            switch (searchTerm) {
                case 'ktp':
                    window.location.href = 'ktp.html';
                    break;
                case 'sim':
                    window.location.href = 'sim.html';
                    break;
                case 'stnk':
                    window.location.href = 'stnk.html';
                    break;
                case 'atm':
                    window.location.href = 'atm.html';
                    break;
                default:
                    alert('Maaf, panduan belum tersedia.');
                    break;
            }
        });
    }
});

// Form

document.addEventListener('DOMContentLoaded', function() {
    // Animasi
    const heroSection = document.querySelector('.hero');
    const whyUsSection = document.querySelector('.why-us');
    const dokumenSection = document.querySelector('.dokumen-populer');

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        heroSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        setTimeout(() => { 
            heroSection.classList.add('fade-in');
        }, 100);
    }

    if (whyUsSection) {
        observer.observe(whyUsSection);
    }
    if (dokumenSection) {
        observer.observe(dokumenSection);
    }
    
    // Kolom Pencarian

    const searchForm = document.querySelector('.navbar form[role="search"]');
    const searchInput = searchForm ? searchForm.querySelector('input[type="search"]') : null;

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const searchTerm = searchInput.value.toLowerCase().trim();

            switch (searchTerm) {
                case 'ktp':
                    window.location.href = 'ktp.html';
                    break;
                case 'sim':
                    window.location.href = 'sim.html';
                    break;
                case 'stnk':
                    window.location.href = 'stnk.html';
                    break;
                case 'atm':
                    window.location.href = 'atm.html';
                    break;
                default:
                    alert('Maaf, panduan belum tersedia.');
                    break;
            }
        });
    }
});

// FORM DOKUMENNN KEHILANGAN 
function tampilkanInputKeterangan() {
    const select = document.getElementById("barang");
    const inputGroup = document.getElementById("keterangan-barang-group");
    const inputField = document.getElementById("keterangan-barang");
    const label = document.getElementById("label-keterangan");

    if (select.value === "Lainnya") {
        inputGroup.style.display = "block";
        inputField.placeholder = "Masukkan nama dan detail barang lainnya";
        label.innerText = "Barang Lainnya:";
        inputField.required = true;
    } else {
        inputGroup.style.display = "none";
        inputField.value = "";
        inputField.required = false;
    }
}

// Login
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
    
    const namaInput = document.getElementById('Nama');
    const waInput = document.getElementById('wa');
    const emailInput = document.getElementById('exampleInputEmail1');
    const passwordInput = document.getElementById('exampleInputPassword1');
    const checkboxInput = document.getElementById('exampleCheck1');

    const errorNama = document.getElementById('error-nama');
    const errorWa = document.getElementById('error-wa');
    const errorEmail = document.getElementById('error-email');
    const errorPassword = document.getElementById('error-password');
    const errorCheckbox = document.getElementById('error-checkbox');

    //menampilkan pesan kesalahan
    const setError = (element, message, errorSpan) => {
        errorSpan.textContent = message;
        element.classList.add('is-invalid');
    };

    const clearError = (element, errorSpan) => {
        errorSpan.textContent = '';
        element.classList.remove('is-invalid');
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    //validasi utama
    const validateForm = () => {
        let isValid = true;

        clearError(namaInput, errorNama);
        clearError(waInput, errorWa);
        clearError(emailInput, errorEmail);
        clearError(passwordInput, errorPassword);
        clearError(checkboxInput, errorCheckbox);

        if (namaInput.value.trim() === '') {
            setError(namaInput, 'Nama lengkap harus diisi.', errorNama);
            isValid = false;
        }

        const waValue = waInput.value.trim();
        if (waValue === '') {
            setError(waInput, 'Nomor WhatsApp harus diisi.', errorWa);
            isValid = false;
        } else if (!/^\d+$/.test(waValue) || waValue.length < 10) {
            setError(waInput, 'Nomor WhatsApp tidak valid (hanya angka, min 10 digit).', errorWa);
            isValid = false;
        }

        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            setError(emailInput, 'Alamat email harus diisi.', errorEmail);
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(emailInput, 'Alamat email tidak valid.', errorEmail);
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            setError(passwordInput, 'Kata sandi harus diisi.', errorPassword);
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            setError(passwordInput, 'Kata sandi minimal 6 karakter.', errorPassword);
            isValid = false;
        }

        if (!checkboxInput.checked) {
            setError(checkboxInput, 'Anda harus menyetujui kebijakan.', errorCheckbox);
            isValid = false;
        }
        return isValid;
    };

    //pengiriman formulir
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // validasi
        if (validateForm()) {
            console.log('Validasi berhasil. Mengarahkan ke index.html...');
            window.location.href = '../setelah-login/index.html';
        } else {
            console.log('Pengiriman formulir diblokir karena ada kesalahan validasi.');
        }
    });
});