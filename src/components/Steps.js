import React, { useState } from "react";
import { verifyPolicyNumber } from "../services/api";
import {
  CircularProgress,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";

const Steps = ({
  step,
  handleChange,
  formData,
  handleCheckboxChange,
  errors,
}) => {
  const locationOptions = [
    "Central Chapel",
    "Greenwood Cemetery",
    "Memorial Gardens",
  ];
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handlePolicyVerification = async () => {
    if (!formData.policyNumber) {
      setVerificationStatus("Please enter a policy number.");
      return;
    }

    setLoading(true);
    try {
      const response = await verifyPolicyNumber(formData.policyNumber);
      setVerificationStatus(response.message);
    } catch (error) {
      setVerificationStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  const continueStep = (e) => {
    e.preventDefault();
    if (
      formData.insured === "yes" &&
      verificationStatus !== "Policy number verified successfully."
    ) {
      alert("Please verify your policy number before proceeding.");
      return;
    }
  };

  const commonTextFieldProps = {
    fullWidth: true,
    margin: "normal",
    variant: "outlined",
    sx: {
      backgroundColor: "#333",
      color: "#eeac0b",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#eeac0b",
        },
        "&:hover fieldset": {
          borderColor: "#eeac0b",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#eeac0b",
        },
        height: "56px", // Ensure consistent height
        width: "100%", // Ensure consistent width
      },
      "& .MuiSelect-select": {
        overflow: "visible",
        textOverflow: "unset",
        whiteSpace: "normal",
      },
    },
    InputLabelProps: {
      style: { color: "#eeac0b" },
    },
    InputProps: {
      sx: {
        padding: "12px 14px", // Ensure consistent padding
      },
    },
  };

  switch (step) {
    case 1:
      return (
        <div>
          <h2 style={{ color: "#eeac0b" }}>Step 1: Service Type</h2>
          <form>
            <TextField
              select
              label="Are you booking for a pet or human?"
              value={formData.serviceType}
              onChange={handleChange("serviceType")}
              error={!!errors.serviceType}
              helperText={errors.serviceType}
              {...commonTextFieldProps}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="pet">Pet</MenuItem>
              <MenuItem value="human">Human</MenuItem>
            </TextField>
            <TextField
              label="Enter your budget"
              type="text"
              value={formData.budget}
              onChange={handleChange("budget")}
              error={!!errors.budget}
              helperText={errors.budget}
              {...commonTextFieldProps}
            />
          </form>
        </div>
      );
    case 2:
      return (
        <div>
          <h2 style={{ color: "#eeac0b" }}>Step 2: Burial or Cremation</h2>
          <TextField
            select
            label="Burial or Cremation"
            value={formData.arrangement}
            onChange={handleChange("arrangement")}
            error={!!errors.arrangement}
            helperText={errors.arrangement}
            {...commonTextFieldProps}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="burial">Burial</MenuItem>
            <MenuItem value="cremation">Cremation</MenuItem>
          </TextField>
        </div>
      );
    case 3:
      return (
        <div>
          <h3 style={{ color: "#eeac0b" }}>Step 3: Insurance Details</h3>
          <form onSubmit={continueStep}>
            <TextField
              select
              label="Are you insured?"
              value={formData.insured}
              onChange={handleChange("insured")}
              error={!!errors.insured}
              helperText={errors.insured}
              {...commonTextFieldProps}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
            {formData.insured === "yes" && (
              <div>
                <TextField
                  label="Enter your policy number"
                  value={formData.policyNumber}
                  onChange={handleChange("policyNumber")}
                  error={!!errors.policyNumber}
                  helperText={errors.policyNumber}
                  {...commonTextFieldProps}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePolicyVerification}
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} /> : null}
                  sx={{ backgroundColor: "#eeac0b", color: "#000" }}
                >
                  {loading ? "Verifying..." : "Verify Policy"}
                </Button>
                {verificationStatus && (
                  <p style={{ color: "#eeac0b" }}>{verificationStatus}</p>
                )}
              </div>
            )}
          </form>
        </div>
      );
    case 4:
      return (
        <div>
          <h3 style={{ color: "#eeac0b" }}>Step 4: Location Selection</h3>
          <TextField
            select
            label="Select the location of the service"
            value={formData.location}
            onChange={handleChange("location")}
            error={!!errors.location}
            helperText={errors.location}
            {...commonTextFieldProps}
          >
            <MenuItem value="">Select</MenuItem>
            {locationOptions.map((location, index) => (
              <MenuItem key={index} value={location}>
                {location}
              </MenuItem>
            ))}
          </TextField>
        </div>
      );
    case 5:
      return (
        <div>
          <h3 style={{ color: "#eeac0b" }}>Step 5: Car Service Option</h3>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.carService}
                onChange={handleCheckboxChange("carService")}
                color="primary"
              />
            }
            label="Would you like a car service?"
            sx={{ color: "#eeac0b" }}
          />
          {formData.carService && (
            <>
              <TextField
                label="Enter your budget"
                type="text"
                value={formData.carServiceBudget || ""}
                onChange={handleChange("carServiceBudget")}
                error={!!errors.carServiceBudget}
                helperText={errors.carServiceBudget}
                {...commonTextFieldProps}
              />
              <TextField
                select
                label="Select car type"
                value={formData.carType || ""}
                onChange={handleChange("carType")}
                error={!!errors.carType}
                helperText={errors.carType}
                {...commonTextFieldProps}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="limousine">Limousine</MenuItem>
                <MenuItem value="van">Van</MenuItem>
                <MenuItem value="sedan">Sedan</MenuItem>
              </TextField>
            </>
          )}
        </div>
      );
    case 6:
      return (
        <div>
          <h3 style={{ color: "#eeac0b" }}>Step 6: Flower Service Option</h3>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.flowerService}
                onChange={handleCheckboxChange("flowerService")}
                color="primary"
              />
            }
            label="Would you like a flower service?"
            sx={{ color: "#eeac0b" }}
          />
          {formData.flowerService && (
            <>
              <TextField
                label="Enter your budget"
                type="text"
                value={formData.flowerServiceBudget || ""}
                onChange={handleChange("flowerServiceBudget")}
                error={!!errors.flowerServiceBudget}
                helperText={errors.flowerServiceBudget}
                {...commonTextFieldProps}
              />
              <TextField
                select
                label="Select flower type"
                value={formData.flowerType || ""}
                onChange={handleChange("flowerType")}
                error={!!errors.flowerType}
                helperText={errors.flowerType}
                {...commonTextFieldProps}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="roses">Roses</MenuItem>
                <MenuItem value="lilies">Lilies</MenuItem>
                <MenuItem value="orchids">Orchids</MenuItem>
              </TextField>
              <TextField
                select
                label="Choose flower color"
                value={formData.flowerColor || ""}
                onChange={handleChange("flowerColor")}
                error={!!errors.flowerColor}
                helperText={errors.flowerColor}
                {...commonTextFieldProps}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="white">White</MenuItem>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="yellow">Yellow</MenuItem>
              </TextField>
            </>
          )}
        </div>
      );
    case 7:
      return (
        <div>
          <h3 style={{ color: "#eeac0b" }}>
            Step 7: Video Streaming Service Option
          </h3>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.videoStreaming}
                onChange={handleCheckboxChange("videoStreaming")}
                color="primary"
              />
            }
            label="Would you like to add a video streaming service?"
            sx={{ color: "#eeac0b" }}
          />
          {formData.videoStreaming && (
            <TextField
              label="Enter your budget"
              type="text"
              value={formData.videoStreamingBudget || ""}
              onChange={handleChange("videoStreamingBudget")}
              error={!!errors.videoStreamingBudget}
              helperText={errors.videoStreamingBudget}
              {...commonTextFieldProps}
            />
          )}
        </div>
      );
    case 8:
      return (
        <div>
          <h3 style={{ color: "#eeac0b" }}>Step 8: Summary and Confirmation</h3>
          <p style={{ color: "#eeac0b" }}>
            Review your selections and confirm your booking:
          </p>
          <ul style={{ color: "#eeac0b" }}>
            <li>Service Type: {formData.serviceType}</li>
            <li>Budget: ${formData.budget}</li>
            <li>Arrangement: {formData.arrangement}</li>
            <li>Location: {formData.location}</li>
            <li>Car Service: {formData.carService ? "Yes" : "No"}</li>
            {formData.carService && (
              <>
                <li>Car Service Budget: ${formData.carServiceBudget}</li>
                <li>Car Type: {formData.carType}</li>
              </>
            )}
            <li>Flower Service: {formData.flowerService ? "Yes" : "No"}</li>
            {formData.flowerService && (
              <>
                <li>Flower Budget: ${formData.flowerServiceBudget}</li>
                <li>Flower Type: {formData.flowerType}</li>
                <li>Flower Color: {formData.flowerColor}</li>
              </>
            )}
            <li>Video Streaming: {formData.videoStreaming ? "Yes" : "No"}</li>
            {formData.videoStreaming && (
              <li>Video Streaming Budget: ${formData.videoStreamingBudget}</li>
            )}
          </ul>
        </div>
      );
    case 9:
      return (
        <div>
          <h3 style={{ color: "#eeac0b" }}>Step 9: Payment</h3>
          <p style={{ color: "#eeac0b" }}>Please enter your payment details:</p>
          <form>
            <TextField
              label="Card Number"
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber")(e)}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
              {...commonTextFieldProps}
            />
            <TextField
              label="Expiry Date"
              type="date"
              value={formData.expiry}
              onChange={(e) => handleChange("expiry")(e)}
              error={!!errors.expiry}
              helperText={errors.expiry}
              {...commonTextFieldProps}
            />
            <TextField
              label="CVV"
              type="password"
              value={formData.cvv}
              onChange={(e) => handleChange("cvv")(e)}
              error={!!errors.cvv}
              helperText={errors.cvv}
              {...commonTextFieldProps}
            />
          </form>
        </div>
      );
    default:
      return <div style={{ color: "#eeac0b" }}>Unknown Step</div>;
  }
};

export default Steps;
