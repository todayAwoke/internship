
interface FooterListProps{
    children: React.ReactNode;

}
const FooterList:React.FC<FooterListProps>= ({children}) => {
  return (
      <div className='
    w-full
    sm:w-1/2
    md:w-1/3
    lg:w-1/6
    mb-3
    flex
    flex-col
    gap-2

    '>
          {children}
    </div>
  )
}

export default FooterList
