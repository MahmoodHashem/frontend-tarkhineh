import {cn} from '../../helpers/common';

function ArrowLeft({className, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className={cn('fill-neutral-600', className)}
      {...props}
    >
      <path
        fill="#fff"
        d="M20 27.56a.989.989 0 0 1-.707-.293L10.6 18.573a3.654 3.654 0 0 1 0-5.146l8.693-8.694a1.006 1.006 0 0 1 1.414 0 1.006 1.006 0 0 1 0 1.414l-8.694 8.693c-.64.64-.64 1.68 0 2.32l8.694 8.693a1.006 1.006 0 0 1 0 1.414c-.2.186-.454.293-.707.293Z"
      />
    </svg>
  );
}
export default ArrowLeft;
