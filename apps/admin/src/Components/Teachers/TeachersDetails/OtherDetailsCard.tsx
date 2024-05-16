const OtherDetailsCard = () => {
    return (
        <div className='max-w-[1056px] mx-auto font-normal bg-white text-[14px] leading-[21px] space-y-[8px]'>
            <div className='text-[20px] leading-[30px] text-black'>Other Details</div>
            <div style={{ boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.15)" }} className='rounded-[8px] pb-[29px] pl-[24px] pt-[8px] pr[9px]'>
                <div className='mt-[9px] mr-[8px] flex justify-end cursor-pointer'>
                    <img width={24} height={24} src="/assets/icons/edit-icon.svg" alt='edit-icon.svg' />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[24px]'>
                    <ul className='min-w-[256px] max-w-[256px]  min-h-[46px]' >
                        <li className='text-lightGray'>Qualification</li>
                        <li className='text-darkGray'>232323232323</li>
                    </ul>
                    <ul className='min-w-[256px] max-w-[256px]  min-h-[46px]' >
                        <li className='text-lightGray'>Experience</li>
                        <li className='text-darkGray'>3 Years</li>
                    </ul>
                    <ul className='min-w-[256px] max-w-[256px]  min-h-[46px]' >
                        <li className='text-lightGray'>Contact Number</li>
                        <li className='text-darkGray'>232323232323</li>
                    </ul>
                    <ul className='min-w-[256px] max-w-[256px]  min-h-[46px]' >
                        <li className='text-lightGray'>Emergency Contact</li>
                        <li className='text-darkGray'>232323232323</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OtherDetailsCard