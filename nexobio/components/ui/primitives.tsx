import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';
export function Card({className,...props}:ComponentProps<'div'>) {
  return <div className={cn('card',className)} {...props} />;
}
export function Badge({className,...props}:ComponentProps<'span'>) {
  return <span className={cn('badge',className)} {...props} />;
}
export function Button({className,type='button',...props}:ComponentProps<'button'>) {
  return <button type={type} className={cn('button',className)} {...props} />;
}
