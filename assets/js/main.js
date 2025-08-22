document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const messageDiv = document.getElementById("formMessage");
    const submitBtn = document.getElementById("submitBtn");

    const fields = [
        { id: "firstName", name: "First Name", required: true },
        { id: "middleName", name: "Middle Name", required: false },
        { id: "lastName", name: "Last Name", required: true },
        { id: "batch", name: "Batch", required: true },
        { id: "tech", name: "Technology", required: true },
        { id: "ID", name: "ID Number", required: true },
        { id: "contactNum", name: "Contact Number", required: true },
    ];

    // Create error spans below inputs
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = document.createElement("div");
        errorSpan.className = "error-message";
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "13px";
        errorSpan.style.marginTop = "4px";
        input.insertAdjacentElement("afterend", errorSpan);
    });

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        let isValid = true;
        messageDiv.textContent = "";

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorSpan = input.nextElementSibling;
            const value = input.value.trim();
            errorSpan.textContent = "";

            if (field.required && value === "") {
                errorSpan.textContent = `${field.name} is required.`;
                isValid = false;
                return;
            }

            if (field.id === "contactNum") {
                if (!/^\d{10,}$/.test(value)) {
                    errorSpan.textContent = "Invalid Contact Number";
                    isValid = false;    
                }
            }

            if (field.id === "ID") {
                if (!/^\d{4}-\d{2}-\d{3}$/.test(value)) {
                    errorSpan.textContent = "Invalid ID"
                    isValid = false;
                } 
            }

            if (field.id === "batch") {
                if (!/^\d{1,2}$/.test(value)) {
                    errorSpan.textContent = "Invalid Batch (eg. 33)";
                    isValid = false;
                }
            }
        });

        if (isValid) {
            messageDiv.textContent = "Registration successful!";
            messageDiv.className = "message success";

            const formData = {};
            fields.forEach(field => {
                formData[field.name] = document.getElementById(field.id).value.trim();
            });
            console.log(formData);

            // Clear form
            fields.forEach(field => {
                document.getElementById(field.id).value = "";
                document.getElementById(field.id).nextElementSibling.textContent = "";
            });
        } else {
            messageDiv.textContent = "Please correct the errors above.";
            messageDiv.className = "message error";
        }
    });
});
