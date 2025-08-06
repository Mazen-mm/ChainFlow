import PreferenceSelector from '../molecules/PreferenceSelector';

export default function SystemPreferencesCard({ formData, onChange }) {
  return (
    <div className="card rounded-2 d-flex gap-2">
      <h5>System Preferences</h5>
      <PreferenceSelector
        label="Date Format"
        text="Select your preferred date format"
        value={formData.dateFormat}
        onChange={value => onChange('dateFormat', value)}
        options={["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"]}
      />
      <PreferenceSelector
        label="Time Format"
        text="Select your preferred time format"
        value={formData.timeFormat}
        onChange={value => onChange('timeFormat', value)}
        options={["12-hour (AM/PM)", "24-hour"]}
      />
      <PreferenceSelector
        label="Time Zone"
        text="Set your local time zone"
        value={formData.timeZone}
        onChange={value => onChange('timeZone', value)}
        options={["UTC (GMT+0)", "EST (GMT-5)", "PST (GMT-8)", "GMT+1"]}
      />
      <PreferenceSelector
        label="Currency"
        text="Default currency for transactions"
        value={formData.currency}
        onChange={value => onChange('currency', value)}
        options={["USD ($)", "EUR (€)", "GBP (£)", "JPY (¥)"]}
      />
      <PreferenceSelector
        label="Language"
        text="Interface language"
        value={formData.language}
        onChange={value => onChange('language', value)}
        options={["English", "Spanish", "French", "German"]}
      />
      <PreferenceSelector
        label="Units of Measurement"
        text="Select your preferred measurement system"
        value={formData.unitsOfMeasurement}
        onChange={value => onChange('unitsOfMeasurement', value)}
        options={["Metric (kg, cm)", "Imperial (lb, in)"]}
      />
    </div>
  );
}
