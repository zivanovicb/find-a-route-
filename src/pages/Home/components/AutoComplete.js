import React from "react";
import AutoComplete from "material-ui/AutoComplete";

function AutoCompleteWithFilters({ items, onChange, label, onUpdateInput }) {
  let arr = [];
  for (let i = 0; i < items.length; i++) arr.push(items[i].description);

  return (
    <AutoComplete
      floatingLabelText={label}
      filter={AutoComplete.fuzzyFilter}
      dataSource={arr}
      maxSearchResults={5}
      onUpdateInput={onUpdateInput}
    />
  );
}

export default AutoCompleteWithFilters;
