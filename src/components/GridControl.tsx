import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

export interface IDetailsListBasicItem {
  key: number;
  name: string;
  value: number;
}

export interface IDetailsListBasicState {
  items: IDetailsListBasicItem[];
}

export class DetailsListBasic extends React.Component<{}, IDetailsListBasicState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    // Populate with items for demos.
    this._allItems = [];
    for (let i = 0; i < 5; i++) {
      this._allItems.push({
        key: i,
        name: 'Region Origen',
        value: i,
      });
    }

    this._columns = [
      { key: 'column1', name: 'Region Origen', fieldName: 'ancomer_regionorigen', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Region Destino', fieldName: 'ancomer_regiondestino', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Tipo Distribucion', fieldName: 'ancomer_tipodistribucion', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column4', name: '% Rentabilidad', fieldName: 'ancomer_rentabilidad', minWidth: 100, maxWidth: 200, isResizable: true }
    ];
    for (let i = 1; i <= 10; i++) {
        this._columns.push(
            {key: 'column'+this._columns.length+1, name: 'Intervalo '+i+' kgs', fieldName: 'ancomer_intervalo'+i+'kgs', minWidth: 100, maxWidth: 200, isResizable: true })
        this._columns.push(
            {key: 'column'+this._columns.length+1, name: 'Intervalo '+i+' precio', fieldName: 'ancomer_intervalo'+i+'precio', minWidth: 100, maxWidth: 200, isResizable: true })
    }

    this.state = {
      items: this._allItems
    };
  }

  public render(): JSX.Element {
    const { items } = this.state;

    return (
      <div>
        <Announced message={`Number of items after filter applied: ${items.length}.`} />
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
      </div>
    );
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._allItems,
    });
  };

  private _onItemInvoked = (item: IDetailsListBasicItem): void => {
    alert(`Item invoked: ${item.name}`);
  };
}