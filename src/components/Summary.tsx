'use client'
import { useState } from "react";

export default function Summary({summaryText, onSummaryChange}:{summaryText:any, onSummaryChange:any}){
   

    const handleChangeSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onSummaryChange(e.target.value);
    };
    

return (
    <div className="w-full border-0 border-t-2 border-t-zinc-900 border-solid">
    <h3 className="text-center text-2xl font-bold">Summary   </h3>
    <div className={`w-full p-3 text-red-600 flex justify-between'}`}>
 
            <textarea className="focus:outline-none bg-slate-300 rounded-lg resize-none h-24 w-full placeholder:text-red-600" 
             placeholder="What's the one thing that makes you the best candidate for this job?" 
             value={summaryText}
             onChange={handleChangeSummary}
             />
          
            </div>
    </div>
)

}