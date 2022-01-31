import classnames from "classnames"
import type { HTMLAttributes, MouseEvent } from 'react'

interface ButtonProps {
    sortingType?: (e: MouseEvent) => void
}

type Props = ButtonProps & HTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
    const {
        className,
        children,
        sortingType,
        ...elementProps
    } = props

    return (
        <button
            className={classnames('text-sm sm:text-md px-3 py-2 font-semibold rounded border border-gray-700 hover:text-white hover:bg-gray-700 transition-colors', className)}
            onClick={sortingType}
            {...elementProps}
        >
            sort by {children}
        </button>
    )
}