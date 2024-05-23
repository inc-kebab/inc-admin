import { SortDirection } from '@/shared/types/apollo'
import { clsx } from '@tazalov/kebab-ui'
import { Table } from '@tazalov/kebab-ui/components'

import s from './SortableHead.module.scss'

import { Column, Sort } from '../../model/types'

type Props = {
  columns: Column[]
  onChangeSort?: (sort: Sort | null) => void
  sort: Sort | null
}

export const SortableHead = ({ columns, onChangeSort, sort }: Props) => {
  return (
    <Table.Row>
      {columns.map(el => {
        const isActiveAsc = el.key === sort?.key && sort.direction === SortDirection.Asc
        const isActiveDesc = el.key === sort?.key && sort.direction === SortDirection.Desc

        const handleChangeAscDirection = () => {
          onChangeSort?.(isActiveAsc ? null : { direction: SortDirection.Asc, key: el.key })
        }

        const handleChangeDescDirection = () => {
          onChangeSort?.(isActiveDesc ? null : { direction: SortDirection.Desc, key: el.key })
        }

        return (
          <Table.TitleCell
            className={clsx({ [s.sortableCell]: el.sortable })}
            key={`sortable-${el.title}`}
          >
            <div className={s.content}>
              <span>{el.title}</span>

              {el.sortable && (
                <span className={s.buttons}>
                  <button
                    className={clsx(s.arrow, { [s.active]: isActiveAsc })}
                    onClick={handleChangeAscDirection}
                  >
                    ▲
                  </button>
                  <button
                    className={clsx(s.arrow, { [s.active]: isActiveDesc })}
                    onClick={handleChangeDescDirection}
                  >
                    ▼
                  </button>
                </span>
              )}
            </div>
          </Table.TitleCell>
        )
      })}
    </Table.Row>
  )
}
