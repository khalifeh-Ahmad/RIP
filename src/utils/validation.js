export const validateStepOne = (formData) => {
    const errors = {};
    if (!formData.serviceType) {
      errors.serviceType = "Please select a service type.";
    }
    if (!formData.budget || formData.budget <= 0) {
      errors.budget = "Please enter a valid budget.";
    }
    return errors;
  };
  
  export const validateStepTwo = (formData) => {
    const errors = {};
    if (!formData.arrangement) {
      errors.arrangement = "Please select burial or cremation.";
    }
    if (!formData.insured) {
      errors.insured = "Please select if you are insured.";
    }
    return errors;
  };
  
  // Add more validations for other steps as needed.
  