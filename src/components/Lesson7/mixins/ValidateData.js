export default {
    data() {
        return {
            errors: [],
        };
    },
    methods: {
        validateField(fieldName, value, rules) {
            this.errors[fieldName] = [];

            if (rules.required && !value) {
                this.errors[fieldName].push('This field is required');
            }

            if (rules.minLength && value.length < rules.minLength) {
                this.errors[fieldName].push(`This field must be at least ${rules.minLength} characters long`);
            }

            if (rules.email && !/\S+@\S+\.\S+/.test(value)) {
                this.errors[fieldName].push('This field must be a valid email address');
            }

            return this.errors[fieldName].length === 0;
        },
        validateForm(fields) {
            let isValid = true;
            this.errors = {};

            for (let field in fields) {
                const { value, rules } = fields[field];
                if (!this.validateField(field, value, rules)) {
                    isValid = false;
                }
            }

            return isValid;
        },
    },
}