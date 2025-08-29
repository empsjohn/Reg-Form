document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const messageDiv = document.getElementById("formMessage");

    const fields = [
        { name: "firstName", label: "First Name", required: true },
        { name: "middleName", label: "Middle Name", required: false },
        { name: "lastName", label: "Last Name", required: true },
        { name: "batch", label: "Batch", required: true },
        { name: "tech", label: "Technology", required: true },
        { name: "ID", label: "ID Number", required: true },
        { name: "contactNum", label: "Contact Number", required: true }
    ];

    
    fields.forEach(field => {
        const input = form.querySelector(`[name="${field.name}"]`);
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.style.color = "red";
        errorDiv.style.fontSize = "13px";
        errorDiv.style.marginTop = "4px";
        input.insertAdjacentElement("afterend", errorDiv);
    });

    form.addEventListener("submit", function (e) {
        let isValid = true;
        messageDiv.textContent = "";

        fields.forEach(field => {
            const input = form.querySelector(`[name="${field.name}"]`);
            const errorDiv = input.nextElementSibling;
            const value = input.value.trim();

            
            input.style.borderColor = "";
            errorDiv.textContent = "";

            
            if (field.required && value === "") {
                errorDiv.textContent = `${field.label} is required.`;
                input.style.borderColor = "red";
                isValid = false;
                return;
            }

            
            if (["firstName", "middleName", "lastName"].includes(field.name) && value !== "") {
                const nameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
                if (!nameRegex.test(value)) {
                    errorDiv.textContent = `${field.label} must be capitalized words only.`;
                    input.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }

            
            if (field.name === "batch" && value !== "") {
                if (!/^\d{1,2}$/.test(value)) {
                    errorDiv.textContent = "Batch must be 1 or 2 digits.";
                    input.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }

            
            if (field.name === "tech") {
                if (value === "") {
                    errorDiv.textContent = "Please select a technology.";
                    input.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }

            if (field.name === "ID" && value !== "") {
                if (!/^\d{4}-\d{2}-\d{3}$/.test(value)) {
                    errorDiv.textContent = "ID format must be 1234-56-789.";
                    input.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }

            
            if (field.name === "contactNum" && value !== "") {
                if (!/^09\d{9}$/.test(value)) {
                    errorDiv.textContent = "Contact number must start with 09 and be 11 digits.";
                    input.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }
        });

        
        if (!isValid) {
            e.preventDefault();
            messageDiv.textContent = "Please correct the errors above.";
            messageDiv.className = "message error";
        }
    });
});
