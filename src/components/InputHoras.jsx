import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import { Box } from "@mui/material";

export default function InputHoras({ label, value, setValue }) {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DemoContainer components={["TimePicker"]} sx={{ maxWidth: "100%" }}>
          <TimePicker
            sx={{ width: "10%" }}
            label={label}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            ampm={false}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
  );
}
