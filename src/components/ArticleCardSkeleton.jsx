import * as React from 'react';

export default function ArticleCardSkeleton() {
    return (
        <div className="bg-gray-lightest dark:bg-gray-darkest p-4 md:p-6">
            <div className="animate-pulse flex">
                <div className="flex-1">
                    <h4 className="w-3/4 h-6 bg-gray-lighter dark:bg-gray rounded"></h4>
                    <p className="w-64 h-4 bg-gray-lighter dark:bg-gray rounded mt-3"></p>

                    <div className="mt-6">
                        <div className="w-full h-4 bg-gray-lighter dark:bg-gray rounded"></div>
                        <div className="w-full h-4 bg-gray-lighter dark:bg-gray rounded mt-2.5"></div>
                        <div className="w-full h-4 bg-gray-lighter dark:bg-gray rounded mt-2.5"></div>
                    </div>

                    <div className="mt-8">
                        <div className="w-40 h-6 bg-gray-lighter dark:bg-gray rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
