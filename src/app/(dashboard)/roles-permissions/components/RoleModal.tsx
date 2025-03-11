const RoleModal = () => {
    return <div>
        <p className="font-lexend-deca text-base font-semibold my-6">Role Access</p>
        <div className="flex items-center justify-between pb-4 border-b">
            <h1 className="font-lexend-deca text-base font-semibold text-[#333]">Administrator</h1>
            <div className="flex items-center gap-3">
                <button className="py-2 px-3.5 border font-inter font-sm font-medium text-[#484848] rounded-md w-[90px] h-[40px]">Read</button>
                <button className="py-2 px-3.5 border font-inter font-sm font-medium text-[#484848] rounded-md w-[90px] h-[40px]">Write</button>
                <button className="py-2 px-3.5 border font-inter font-sm font-medium text-[#484848] rounded-md w-[90px] h-[40px]">Delete</button>
            </div>
        </div>
    </div>
}

export default RoleModal;