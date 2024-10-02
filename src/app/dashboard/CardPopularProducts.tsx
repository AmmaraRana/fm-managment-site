import React from 'react';

const CardPopularProducts = () => {
    // Sample data for demonstration (you can replace this with actual data later)
    const popularProducts = [
        { id: 1, name: "Product A", stockQuantity: 50 },
        { id: 2, name: "Product B", stockQuantity: 30 },
        { id: 3, name: "Product C", stockQuantity: 20 },
        { id: 4, name: "Product D", stockQuantity: 15 },
    ];

    return (
        <div className='row-span-3 xl:row-span-6 bg-white shadow-lg rounded-lg overflow-hidden'>
            <h3 className='text-lg font-semibold px-6 pt-5 pb-2 border-b'>Product Section (if required)</h3>
            <div className='p-6'>
                {popularProducts.length ? (
                    <ul className='list-none space-y-3'>
                        {popularProducts.map((product) => (
                            <li key={product.id} className='flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm'>
                                <span className='font-medium'>{product.name}</span>
                                <span className='text-gray-600'>Stock: {product.stockQuantity}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className='text-center text-gray-600'>No popular products found</div>
                )}
            </div>
        </div>
    );
};

export default CardPopularProducts;



// correct error import React from 'react'
// import {useGetDashboardMetricsQuery} from "@/state/api";


// const CardPopularProducts = () => {
//     const {data: dashboardMetrices,isLoading }=useGetDashboardMetricsQuery();
    
//   return (
//    <div className='row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16'>
//     {isLoading?(
//         <div className='m-5'> Loading ...</div>
//     ): (
//         <>
//        <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>Popular Products</h3>
//        <hr/>
//        <div className='overflow-auto h-full'>
//         {}
//         </div>
//         </>
//     )}
//    </div>
//   );
// };
// export default CardPopularProducts;