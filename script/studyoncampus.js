$(".contact-form").on("submit", function (e) {
    e.preventDefault();

    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    const subject = $("#subjectInput").val();
    const message = $("#messageInput").val();

    const gmailPattern = /^[a-z0-9.@]+@gmail\.com$/;

    // Validation
    if (!name || !email || !message) {
        Swal.fire({
            icon: "error",
            title: "សូមបំពេញព័ត៌មាន",
            text: "សូមបំពេញឈ្មោះ អ៊ីម៉ែល និងសាររបស់អ្នក!",
        });
        return;
    }

    if (!gmailPattern.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter a valid Gmail address end with @gmail.com!",
        });
        return;
    }
    const telegramMessage = `
<b>New Inquiry from Jakra E-Learning</b>

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
📝 <b>Subject:</b> ${subject || "មិនមាន (None)"}

💬 <b>Message:</b>
<i>${message}</i>
    `;

    fetch(`https://api.telegram.org/bot${config.botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: config.chatId,
            text: telegramMessage,
            parse_mode: "HTML",
        }),
    })
        .then(async (response) => {
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "ជោគជ័យ!",
                    text: "សាររបស់អ្នកត្រូវបានផ្ញើទៅកាន់ក្រុមការងារយើងហើយ។",
                    confirmButtonText: "បិទ",
                });
                $(".contact-form")[0].reset();
            } else {
                const errorData = await response.json();
                console.error("Telegram API Error:", errorData);
                throw new Error(errorData.description || "Failed to send message");
            }
        })
        .catch((error) => {
            console.error("Error Detail:", error);
            Swal.fire({
                icon: "error",
                title: "មានបញ្ហា!",
                text: `មិនអាចផ្ញើសារបានទេ: ${error.message}`,
            });
        });
});
