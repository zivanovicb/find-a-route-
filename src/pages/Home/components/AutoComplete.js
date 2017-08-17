import React from "react";
import AutoComplete from "material-ui/AutoComplete";

function AutoCompleteWithFilters({ items, onChange, label, onUpdateInput }) {
  return (
    <AutoComplete
      floatingLabelText={label}
      filter={AutoComplete.fuzzyFilter}
      dataSource={items}
      maxSearchResults={5}
      onUpdateInput={onUpdateInput}
    />
  );
}

export default AutoCompleteWithFilters;
