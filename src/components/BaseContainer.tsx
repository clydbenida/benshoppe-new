export default function BaseContainer({children, className}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`sm:px-32 md:px-48 lg:px-64 px-2 ${className}`}>
      {children}
    </div>
  )
}
