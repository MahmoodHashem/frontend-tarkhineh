import {cn} from '../../helpers/common';

function ArrowDownIcon({className, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="currentColor"
      className={cn('fill-neutral-600', className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.5 11.7c-.467 0-.933-.18-1.287-.533L2.867 6.82a.503.503 0 0 1 0-.707.503.503 0 0 1 .706 0L7.92 10.46c.32.32.84.32 1.16 0l4.347-4.347a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707l-4.346 4.347c-.354.353-.82.533-1.287.533Z"
      />
    </svg>
  );
}
export default ArrowDownIcon;
