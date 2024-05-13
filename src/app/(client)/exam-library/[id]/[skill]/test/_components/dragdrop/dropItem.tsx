import IQuestion from '@/src/utils/shares/interfaces/IQuestion'
import { allowDrop, drop } from '@clientExamLibrary/[id]/[skill]/utils/dragAndDrop'
import { useEffect } from 'react';


export default function ComponentDropItem({ groupId, data }: { groupId: string; data: IQuestion }) {
    return (
        <section className="flex items-center gap-2">
            <section className="relative inline-block select-none min-w-[100px] min-h-[28px]">
                {/* <span className="block text-transparent"></span> */}
                <div
                    onDrop={(e) => drop(e)}
                    onDragOver={(e) => allowDrop(e)}
                    data-group-id={groupId}
                    data-drop-max-child={2}
                    className="absolute top-0 left-0 bottom-0 right-0 px-1 border border-dashed border-black rounded overflow-hidden"
                >
                    <input className="hidden" type="text" name={data.id} />
                </div>
            </section>
            <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
        </section>
    )
}
export const ComponentStringDropItem = ({ groupId, data }: { groupId: string; data: IQuestion }) => {
    useEffect(() => {
        const input = document.querySelector(`input[name="${data.id}"]`) as HTMLInputElement | null;
        if (!input) return;
        const parentInput = input.parentElement as HTMLInputElement | null;
        if (!parentInput) return;
        parentInput.addEventListener('drop', (e) => {
            drop(e as any);
        });
        parentInput.addEventListener('dragover', (e) => {
            allowDrop(e as any);
        });
    }, [data.id]);

    return `
        <section class="inline-flex items-center">
            <section class="relative inline-block select-none min-w-[100px] min-h-[24px]">
                <div
                    data-group-id="${groupId}"
                    data-drop-max-child={2}
                    class="absolute top-0 left-0 bottom-0 right-0 px-1 border border-dashed border-black rounded overflow-hidden"
                >
                    <input class="hidden" type="text" name="${data.id}" />
                </div>
            </section>
        </section>
    `;
};
