// Get form data
            const formData = new FormData(contactForm);

            // Add additional form data
            formData.append('website', window.location.href);
            formData.append('redirect', 'false');

            try {
                // Submit to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (response.status === 200 && result.success) {
                    // Success
                    formSuccess.style.display = 'flex';