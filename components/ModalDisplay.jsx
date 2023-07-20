// import img1 from '@/public/images/Capstone/CapstonePoster.png'
// import Image from "next/image";
//
//
// export default function Modal({isVisible, onClose}) {
//
//     if (!isVisible) return null;
//     return (
//         <section>
//             <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//                 <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
//
//                 <div className="fixed inset-0 z-10 overflow-y-auto">
//                     <div className="w-screen flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                         <div
//                             className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-l max-w-2xl">
//                             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                                 <div className="sm:flex sm:items-start">
//                                     <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                                         <h3 className="text-base font-semibold leading-6 text-gray-900"
//                                             id="modal-title">Machine Learning for Protein Prediction</h3>
//                                         <Image src={img1} alt={img1} width={800} height={800}></Image>
//                                         <Image src={img1} alt={img1} width={800} height={800}></Image>
//                                         <Image src={img1} alt={img1} width={800} height={800}></Image>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                                 <button type="button"
//                                         className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
//                                 onClick={()=>onClose()}
//                                 >Close
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//         </section>
//     )
// }
