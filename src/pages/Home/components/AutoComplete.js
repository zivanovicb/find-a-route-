import React from "react";
import AutoComplete from "material-ui/AutoComplete";
import theme from "../../../theme";

function AutoCompleteWithFilters({
  items,
  onChange,
  label,
  onUpdateInput,
  error,
  errorText
}) {
  let arr = [];
  for (let i = 0; i < items.length; i++) arr.push(items[i].description);

  return (
    <AutoComplete
      floatingLabelText={label}
      filter={AutoComplete.fuzzyFilter}
      dataSource={arr}
      maxSearchResults={5}
      onUpdateInput={onUpdateInput}
      fullWidth
      errorText={error ? errorText : ""}
      style={{
        color: error ? theme.darkRed : theme.blue
      }}
    />
  );
}

export default AutoCompleteWithFilters;
