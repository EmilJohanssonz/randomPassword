    function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
            const lowercaseChart = "abcdefghijklmnopqrstuvwxyzåäö";
            const uppercaseChart = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
            const numberChart = "0123456789";
            const symbolChart = "!@£$€{[]}+*=&-_()";

            let allowedCharts = "";
            let password = "";

            allowedCharts += includeLowercase ? lowercaseChart : "";
            allowedCharts += includeUppercase ? uppercaseChart : "";
            allowedCharts += includeNumbers ? numberChart : "";
            allowedCharts += includeSymbols ? symbolChart : "";

            if (length <= 0) {
                return "Password length must be at least one.";
            }
            if (allowedCharts.length === 0) {
                return "At least one character set must be selected.";
            }

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * allowedCharts.length);
                password += allowedCharts[randomIndex];
            }

            return password;
        }

        function generateAndDisplayPassword() {
            const length = parseInt(document.getElementById('length').value);
            const includeLowercase = document.getElementById('lowercase').checked;
            const includeUppercase = document.getElementById('uppercase').checked;
            const includeNumbers = document.getElementById('numbers').checked;
            const includeSymbols = document.getElementById('symbols').checked;

            const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
            document.getElementById('password').textContent = password;
        }