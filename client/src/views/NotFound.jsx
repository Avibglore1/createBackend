import React from 'react';

function NotFound() {
    return (
        <section class="bg-white ">
    <div class="py-8 px-4 mx-auto h-[100vh] max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
           <div className='flex justify-center'>
           <img className='' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg' />
           </div>
            <h1 class="mb-4 text-2xl tracking-tight  lg:text-2xl text-gray-700 ">404 Not Found</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl lg:text-5xl ">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <a href="/" className="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</a>
        </div>   
    </div>
</section>
    );
}

export default NotFound;
