import { useState } from 'react';

// ============================================================
// TODO 2
// This hook accepts an initialValue.
// Declare one state variable: value.
// Return { value, onChangeText }.
// ============================================================

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChangeText = text => setValue(text);

    return { value, onChangeText };
}

export default useInput;
