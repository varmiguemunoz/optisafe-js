import React, { FC } from 'react'

/* eslint-disable no-unused-vars */
enum PrimaryButtonColor {
  blue = 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white ',
  gray = 'bg-darkGray hover:bg-lightGray active:bg-darkGray text-white hover:text-darkGray ',
  green = 'bg-green-700 hover:bg-green-500 active:bg-green-700 text-white ',
  pink = 'bg-pink-400 hover:bg-pink-300 active:bg-pink-500 text-white ',
  purple = 'bg-purple-400 hover:bg-purple-300 active:bg-purple-500 text-white ',
  red = 'bg-error hover:bg-red-500 active:bg-red-700 text-white ',
  yellow = 'bg-baseYellow hover:bg-yellow-400 active:bg-baseYellow text-white '
}

enum ButtonSize {
  lg = 'h-10 px-6 text-base',
  md = 'h-[35px] px-5 text-sm'
}

enum SecondaryButtonColor {
  purple = 'bg-white hover:bg-purple-50 text-purple-500 border-purple-500 border hover:border-purple-50 active:text-purple-700 active:bg-white',
  blue = 'bg-white hover:bg-blue-50 text-blue-600 border-blue-600 border hover:border-blue-50 active:text-blue-800 active:bg-white',
  gray = 'bg-white hover:bg-lightGray border-darkGray border hover:border-darkGray text-darkGray active:bg-white'
}
/* eslint-enable no-unused-vars */

type PrimaryButtonProps = {
  id: string
  children?: React.ReactNode
  color?: 'purple' | 'blue' | 'pink' | 'green' | 'red' | 'gray' | 'yellow'
  fullWidth?: boolean
  icon?: React.JSX.Element
  iconPosition?: 'left' | 'right'
  onClick?: () => void
  size?: 'lg' | 'md'
  type: 'primary'
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
}

type SecondaryButtonProps = {
  id: string
  children?: React.ReactNode
  color?: 'purple' | 'blue' | 'gray'
  fullWidth?: boolean
  icon?: React.JSX.Element
  iconPosition?: 'left' | 'right'
  onClick?: () => void
  size?: 'lg' | 'md'
  type: 'secondary'
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps

const Button: FC<ButtonProps> = ({
  id,
  children,
  color = 'purple',
  disabled,
  fullWidth,
  icon,
  iconPosition,
  onClick = () => {},
  size = 'lg',
  type = 'primary',
  htmlType = 'button'
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
      className={`inline-flex items-center justify-center gap-2 px-[10px] py-[8px] font-medium tracking-wide transition duration-300 rounded-[15px] focus-visible:outline-none whitespace-nowrapdisabled:cursor-not-allowed disabled:border-none disabled:shadow-none disabled:bg-white disabled:text-mediumGray 
      ${
        type === 'primary'
          ? PrimaryButtonColor[color]
          : color === 'blue' || color === 'gray' || color === 'purple'
          ? SecondaryButtonColor[color]
          : ''
      }
      ${fullWidth ? 'w-full' : 'w-auto'}
      ${ButtonSize[size]}
      `}
    >
      {icon && iconPosition === 'left' && (
        <span className="relative only:-mx-6">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="relative only:-mx-6">{icon}</span>
      )}
    </button>
  )
}

export default Button
