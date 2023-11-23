const Dropmenu = ({menuList}) => {
  return (
        <ul className='space-y-2'>
            {
                menuList.map(item=>{
                    return(
                        <li className="flex gap-x-3 items-center text-center" key={item.id}>
                            {/* check if menu items has property "img". if yes display icon; if not display nothing */}
                            {('img' in item) && <span><img src={item.img} className='w-3 h-3' alt="icon" /></span>}
                            {item.name}
                            </li>
                    )
                })
            }
        </ul>
  )
}





export default Dropmenu;