import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { ComboBox, IComboBoxOption, IComboBoxStyles } from '@fluentui/react';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

const options: IComboBoxOption[] = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
  ];

const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };

export const FormFields: React.FunctionComponent = () => {
  return (
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        <TextField label="Titulo"/>
        <TextField label="% Rentabilidad" type='number'/>
        <ComboBox
          defaultSelectedKey="C"
          label="Registro tarifario"
          options={options}
          styles={comboBoxStyles}
          calloutProps={{ doNotLayer: true }}
        />
      </Stack>
    </Stack>
  );
};
