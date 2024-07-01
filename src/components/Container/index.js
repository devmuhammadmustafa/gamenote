export default function Container({ children }){
    return(
        <div className="container max-w-[1240px] px-[20px] mx-auto">
            {children}
        </div>
    )
}