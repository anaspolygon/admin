import Image from "next/image";

interface Role {
    id: number;
    name: string;
    color: string;
}

interface RoleCardProps {
    role:Role,
    setModal1Open:(value:boolean)=>void
}

const RoleCard = ({role,setModal1Open}:RoleCardProps) =>{
    return (
        <div className="p-6 border border-[#E3E3E3] rounded-lg">
        <div className="flex items-center gap-3">
        <span style={{backgroundColor:role.color}} className="text-white  h-10 w-10  rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.935 8.49268 21.9916 8.96506 21.9989 10.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.44493 20.4927 10.5 20.5H11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"></path><path d="M15.59 18.9736C14.9612 19.3001 13.3126 19.9668 14.3167 20.801C14.8072 21.2085 15.3536 21.4999 16.0404 21.4999H19.9596C20.6464 21.4999 21.1928 21.2085 21.6833 20.801C22.6874 19.9668 21.0388 19.3001 20.41 18.9736C18.9355 18.208 17.0645 18.208 15.59 18.9736Z" stroke="currentColor" strokeWidth="1.3"></path><path d="M20 14.4378C20 15.508 19.1046 16.3756 18 16.3756C16.8954 16.3756 16 15.508 16 14.4378C16 13.3676 16.8954 12.5 18 12.5C19.1046 12.5 20 13.3676 20 14.4378Z" stroke="currentColor" strokeWidth="1.3"></path></svg>
        </span>
            <h2 className="text-xl font-lexend-deca font-medium">{role.name}</h2>
        </div>
        <div className="mt-4 flex items-center gap-2">
            <div className="flex">
                <Image className="rounded-full relative" src="/roles-permissions/avatar-01.jpg" width={28} height={28} alt="" />
                <Image className="rounded-full relative -ml-1.5 border-2 border-white" src="/roles-permissions/avatar-02.jpg" width={28} height={28} alt="" />
                <Image className="rounded-full relative -ml-1.5 border-2 border-white" src="/roles-permissions/avatar-03.jpg" width={28} height={28} alt="" />
                <Image className="rounded-full relative -ml-1.5 border-2 border-white" src="/roles-permissions/avatar-04.jpg" width={28} height={28} alt="" />
            </div>
            <p className="font-inter text-sm text-[#484848]">Total 6 users</p>
        </div>
        <button onClick={()=> setModal1Open(true)} className="h-10 border w-full mt-6 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="h-5 w-5"><path fill="currentColor" stroke="currentColor" d="M10.08 17.39c.07 0 .13.05.13.12 0 .07-.06.13-.13.13H2.96a.92.92 0 0 1-.92-.92V15.5c0-.84.5-1.7 1.58-2.44 1.42-.97 3.76-1.64 6.46-1.64.07 0 .13.05.13.12 0 .07-.06.13-.13.13-2.53 0-4.84.6-6.31 1.6-.8.54-1.48 1.28-1.48 2.23v1.2a.67.67 0 0 0 .67.68h7.12Z"></path><path fill="currentColor" fillRule="evenodd" d="M10.08 1.04a4.58 4.58 0 1 0 0 9.17 4.58 4.58 0 0 0 0-9.17Zm0 1.25a3.33 3.33 0 1 1 0 6.67 3.33 3.33 0 0 1 0-6.67ZM15.08 11.62a2.97 2.97 0 1 0 0 5.93 2.97 2.97 0 0 0 0-5.94Zm0 1.25a1.72 1.72 0 1 1 0 3.43 1.72 1.72 0 0 1 0-3.44Z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M15.7 12.24v-1.4a.63.63 0 0 0-1.24 0v1.4a.63.63 0 0 0 1.25 0ZM17.18 13.37l1-1a.62.62 0 1 0-.89-.88l-1 1a.63.63 0 0 0 .9.88ZM17.43 15.2h1.4a.63.63 0 0 0 0-1.24h-1.4a.63.63 0 0 0 0 1.25ZM16.3 16.68l1 1a.62.62 0 1 0 .88-.89l-1-1a.63.63 0 0 0-.88.9ZM14.46 16.93v1.4a.63.63 0 0 0 1.25 0v-1.4a.63.63 0 0 0-1.25 0ZM12.98 15.8l-.99 1a.62.62 0 1 0 .88.88l1-1a.63.63 0 0 0-.89-.88ZM12.74 13.96h-1.4a.63.63 0 0 0 0 1.25h1.4a.62.62 0 1 0 0-1.25ZM13.87 12.48l-1-.99a.62.62 0 1 0-.88.88l1 1a.63.63 0 0 0 .88-.89Z" clipRule="evenodd"></path></svg>
            <span className="font-inter text-sm font-medium">Edit Role</span>
        </button>
        </div>
    )
}

export default RoleCard;