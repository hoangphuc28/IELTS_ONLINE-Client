import ComponentDropdownItemCheckBox from './dropdownCheckBox'

export default function ComponentDropdownManager() {
    return (
        <>
            <section>
                <div className="flex items-center px-2 py-1">
                    <ComponentDropdownItemCheckBox />
                </div>

                <div className="hidden absolute top-full left-0 flex flex-col gap-2"></div>
            </section>
        </>
    )
}
