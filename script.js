function sendLink() {
        const phone = document.getElementById("phone").value;
        if (phone.trim()) {
          alert("Посилання відправлено на номер: " + phone);
        } else {
          alert("Будь ласка, введіть номер телефону.");
        }
      }