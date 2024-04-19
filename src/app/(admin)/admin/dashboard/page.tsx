'use client'
import Charts from "./charts";
import QuicActions from "./quickActions";
import "@admin/styles/components/_cover.scss"
import "@admin/styles/pages/dashboard.scss"


export default function Page() {

    return (
        <div className='dashboard'>
            <QuicActions/>
            <Charts/>
            <Charts/>

            <Charts/>

        </div>
    );
}