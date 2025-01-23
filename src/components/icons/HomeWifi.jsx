import {cn} from '../../helpers/common';

function HomeWifi({className, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      viewBox="0 0 48 48"
      className={cn('fill-neutral-600', className)}
      {...props}
    >
      <path
        fill="#fff"
        d="M35.2 45.12H12.8c-3.64 0-6.96-2.8-7.56-6.4L2.58 22.8c-.42-2.48.78-5.66 2.76-7.24L19.2 4.46c2.68-2.16 6.9-2.14 9.6.02l13.86 11.08c1.96 1.58 3.16 4.76 2.76 7.24l-2.66 15.92c-.6 3.54-3.98 6.4-7.56 6.4ZM23.98 5.88c-1.06 0-2.12.32-2.9.94L7.22 17.92c-1.14.92-1.92 2.96-1.68 4.4L8.2 38.24c.36 2.1 2.46 3.88 4.6 3.88h22.4c2.14 0 4.24-1.78 4.6-3.9l2.66-15.92c.24-1.44-.56-3.5-1.68-4.4L26.92 6.82c-.8-.62-1.86-.94-2.94-.94Z"
      />
      <path
        fill="#fff"
        d="M28.24 30.26c-.38 0-.74-.14-1.04-.42-1.94-1.86-4.46-1.86-6.42 0-.6.58-1.54.56-2.12-.04-.58-.6-.56-1.54.04-2.12 3.1-2.98 7.44-2.98 10.56 0 .6.58.62 1.52.04 2.12-.26.3-.66.46-1.06.46Z"
      />
      <path
        fill="#fff"
        d="M32.48 26.02c-.38 0-.76-.14-1.04-.42-.94-.92-2-1.66-3.12-2.2-2.8-1.34-5.86-1.34-8.64 0-1.12.54-2.16 1.28-3.12 2.2-.58.58-1.54.58-2.12-.02-.58-.6-.56-1.54.02-2.12 1.18-1.16 2.5-2.08 3.92-2.76 3.62-1.74 7.62-1.74 11.22 0 1.42.68 2.74 1.6 3.92 2.76a1.491 1.491 0 0 1-1.04 2.56ZM24 35c-.52 0-1.02-.2-1.42-.58-.78-.78-.78-2.04 0-2.82.78-.78 2.06-.78 2.84 0 .78.78.78 2.04 0 2.82-.4.38-.9.58-1.42.58Z"
      />
    </svg>
  );
}
export default HomeWifi;
