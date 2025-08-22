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

        if (["firstName", "lastName"].includes(field.id)) {
        
        if (!/^[A-Za-z\s]+$/.test(value)) {
            errorSpan.textContent = "Name must contain letters only.";
            isValid = false;
            return;
        }
        if (value === "") {
            errorSpan.textContent = "Name cannot be empty or just spaces.";
            isValid = false;
            return;
        }
        const words = value.split(" ").filter(w => w.length > 0);
        for (let word of words) {
            if (word[0] !== word[0].toUpperCase()) {
                errorSpan.textContent = "Each word must start with a capital letter.";
                isValid = false;
                return;
                }
            }
        }

        if (field.id === "middleName") {
            
            if (value !== "") {
            
                if (!/^[A-Za-z\s]+$/.test(value)) {
                    errorSpan.textContent = "Middle name must contain letters only.";
                    isValid = false;
                    return;
                }
                const words = value.split(" ").filter(w => w.length > 0);
                for (let word of words) {
                    if (word[0] !== word[0].toUpperCase()) {
                        errorSpan.textContent = "Each word of middle name must start with a capital letter.";
                        isValid = false;
                        return;
                    }
                }
            }
        
        }

   
        if (field.id === "contactNum") {
            if (!/^\d+$/.test(value)) {
                errorSpan.textContent = "Contact number must contain digits only.";
                isValid = false;
                return;
            }
            if (value.length !== 11) {
                errorSpan.textContent = "Contact number must be exactly 11 digits long.";
                isValid = false;
                return;
            }
            if (!/^09/.test(value)) {
                errorSpan.textContent = "Contact number must start with '09'.";
                isValid = false;
                return;
            }
        }

        
        if (field.id === "ID") {
            if (!/^\d{4}-\d{2}-\d{3}$/.test(value)) {
                errorSpan.textContent = "Invalid ID format. Correct format: 1234-56-789";
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
