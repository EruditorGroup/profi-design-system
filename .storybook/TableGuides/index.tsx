import React, {ComponentType, HTMLAttributes} from 'react';
import classnames from 'classnames';

import styles from './TableGuides.module.scss';

export type TableCell<PropType extends Record<string, unknown> = {}> = {
  key: string | number;
  label?: string;
  props?: Partial<PropType>;
  span?: number;
  spanLabel?: string;
  skipAsSpanned?: boolean;
};

export type TableGuidesProps<
  PropType extends Record<string, unknown> = {}
> = HTMLAttributes<HTMLTableElement> & {
  cols: TableCell<PropType>[];
  rows: TableCell<PropType>[];
  Component: ComponentType<
    PropType & {colKey?: string | number; rowKey?: string | number}
  >;
  forceCollWidth?: string;
  forceRowHeight?: string;
  tableBackground?: string;
  withCellKeyProps?: boolean;
};

const normalizeCells = (cells: TableCell[]): TableCell[] => {
  let result = [];
  let skipAsSpanCount = 0;
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (skipAsSpanCount <= 1) {
      result.push(cells[i]);
      skipAsSpanCount = cell.span || 0;
    } else {
      skipAsSpanCount--;
    }
  }
  return result;
};

const TableGuides = <PropTypes extends Record<string, unknown> = {}>({
  cols,
  rows,
  forceCollWidth,
  forceRowHeight,
  withCellKeyProps,
  Component,
  tableBackground,
}: TableGuidesProps<PropTypes>): React.ReactElement => {
  tableBackground =
    tableBackground ??
    window
      .getComputedStyle(document.body, null)
      .getPropertyValue('background-color');

  tableBackground =
    !tableBackground || tableBackground === 'rgba(0, 0, 0, 0)'
      ? '#FFF'
      : tableBackground;

  const hasRowSpan = rows.some((row) => row.span > 1);
  const normalizedCols = normalizeCells(cols);

  return (
    <table className={styles['table']} style={{background: tableBackground}}>
      <thead>
        <tr>
          <th
            colSpan={hasRowSpan ? 2 : 1}
            className={classnames(styles['table-th'], styles['table-th_guide'])}
          />
          {normalizedCols
            .filter((c) => !c.skipAsSpanned)
            .map(({key, label, span = 1, spanLabel}) => (
              <th
                key={key}
                colSpan={span}
                className={styles['table-th']}
                style={{
                  width: forceCollWidth,
                }}
              >
                {spanLabel ?? label ?? key}
                <div className={styles['table-col-guide']}></div>
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => {
          const rowLabel = row.label ?? row.key;
          return (
            <tr key={`${row.key}-${ri}`}>
              {row.span > 1 && (
                <td
                  rowSpan={row.span}
                  className={classnames(
                    styles['table-td'],
                    styles['table-variant-guide'],
                    styles['table-variant-guide_span'],
                  )}
                  style={{
                    height: forceRowHeight,
                    background: tableBackground,
                  }}
                >
                  {row.spanLabel && <div>{row.spanLabel}</div>}
                </td>
              )}
              <td
                className={classnames(
                  styles['table-td'],
                  styles['table-variant-guide'],
                )}
                style={{
                  height: forceRowHeight,
                  background: tableBackground,
                }}
              >
                {rowLabel && <div>{rowLabel}</div>}
              </td>
              {cols.map((col, ci) => (
                <td
                  key={`${row.key}-${ri}-${col.key}-${ci}`}
                  className={styles['table-td']}
                >
                  <Component
                    {...({
                      ...row.props,
                      ...col.props,
                    } as PropTypes)}
                    {...(withCellKeyProps
                      ? {
                          colKey: col.key,
                          rowKey: row.key,
                        }
                      : {})}
                  />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableGuides;
